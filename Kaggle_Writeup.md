# 🏠 AhmedVall PropAI — Qatar Real Estate Multi-Agent Valuation System

**Track:** Agents for Business  
**Author:** Ahmed Vall Jemal Dine Sidina

---

## The Problem: Real Estate Decisions Made on Guesswork

Qatar's real estate market is one of the most dynamic in the GCC region. In 2026, areas like Lusail Marina and West Bay are seeing quarterly price growth of 4–5%, while neighborhoods like Al Wakra offer rental yields above 5.5% with lower entry prices. For investors, this creates both opportunity and confusion.

The core problem is fragmentation. An investor wanting to evaluate a villa in Lusail Al Yasmine today must manually check price-per-sqm databases, cross-reference zone trend reports, calculate fair value against asking price, and then synthesize a recommendation — a process that takes hours and is prone to inconsistency. Professional brokers face the same challenge at scale.

What's missing is a single intelligent system that can receive a natural-language property query, pull relevant market data, run valuation calculations, analyze trends, and deliver a structured, professional report in seconds.

This is precisely what **AhmedVall PropAI** was built to solve.

---

## Why Agents? The Case for Multi-Agent Architecture

A simple chatbot or single-model API call cannot solve this problem well. Here's why agents are the right approach:

**Sequential reasoning with specialized expertise.** Valuation requires different reasoning than market trend analysis, which requires different reasoning than report synthesis. A single model prompt trying to do all three produces shallow outputs. Specialized agents — each with dedicated tools and instructions — produce deeper, more accurate results.

**Tool use for grounded outputs.** Without tools, an LLM "estimates" prices from training data that may be months or years out of date. With tools connected to a real data layer (the MCP Server), every number in the output is computed — not generated. This is the difference between hallucination and fact.

**Orchestration for complex workflows.** The `SequentialAgent` in Google ADK ensures the valuation step always completes before market research, which always completes before report generation. This ordering is not optional — the report agent needs both upstream outputs to function correctly. An orchestrator enforces this dependency automatically.

---

## System Architecture

AhmedVall PropAI is built on four layers:

### Layer 1: MCP Server (Data)
The `QatarMCPServer` implements the Model Context Protocol pattern as a standalone data service. It covers 18 zones across 8 Qatar municipalities, with real pricing data, quarterly growth rates, rental yields, and demand metrics. Agents never access this data directly — they call MCP tools. This separation makes the system modular, testable, and extensible.

### Layer 2: Agent Tools (Skills)
Five `FunctionTool` instances serve as agent skills:
- `tool_price_estimator` — calculates fair value using zone base price, property type multipliers, and bedroom factors
- `tool_zone_lookup` — retrieves complete zone metadata
- `tool_trend_analyzer` — computes investment signal (STRONG BUY / BUY / HOLD / NEUTRAL) from quarterly growth
- `tool_compare_zones` — ranks multiple zones side by side
- `tool_list_top_zones` — returns top zones by price or growth

Each tool has typed parameters and complete docstrings, enabling the LLM to select and call them reliably.

### Layer 3: Specialized Agents (Reasoning)
Three agents handle distinct responsibilities:

**Valuation Agent** receives the property query, calls `zone_lookup` to retrieve zone context, then calls `price_estimator` to compute fair value, price range (±7%), and deal assessment. It never fabricates numbers — all outputs are tool-computed.

**Market Research Agent** receives the zone and calls `trend_analyzer` to extract quarterly growth, annual projection, rental yield, and investment signal. For comparison queries, it calls `compare_zones` to rank alternatives.

**Report Agent** receives structured outputs from both upstream agents and synthesizes a professional report with five sections: Property Summary, Valuation Results, Market Analysis, Investment Verdict, and Recommendations. It formats everything in clean Markdown with tables.

### Layer 4: Orchestrator (Coordination)
The `SequentialAgent` orchestrates the three agents in strict order: Valuation → Market Research → Report. It manages session state via `InMemorySessionService`, ensuring each user query runs in an isolated context.

```
User Query
    │
    ▼
SequentialAgent (Orchestrator)
    │
    ├─► Valuation Agent
    │       ├─► MCP: zone_lookup
    │       └─► MCP: price_estimator
    │
    ├─► Market Research Agent
    │       ├─► MCP: trend_analyzer
    │       └─► MCP: compare_zones
    │
    └─► Report Agent
            └─► Structured Markdown Report
```

---

## Security Design

Security was designed into the system from the start, not added as an afterthought.

**API key protection.** The Gemini API key is loaded exclusively via Kaggle's `UserSecretsClient`. It is never hardcoded, never logged, and never printed. The notebook contains zero credentials.

**Input validation layer.** Every tool call passes through `validate_input()` before reaching the MCP Server. This function sanitizes string lengths (100/50 char limits), enforces numeric ranges (size: 10–10,000 m², bedrooms: 1–5), and applies safe type defaults (unknown property types fall back to `'apartment'` without raising exceptions). This prevents injection, overflow, and unexpected failures.

**Data/logic separation.** The MCP Server is fully decoupled from agent logic. Agents cannot access the zone database directly — they can only call defined tool interfaces. This is a security boundary as much as an architectural one.

**Session isolation.** `InMemorySessionService` ensures each query runs in an isolated session. User A's query context cannot bleed into User B's response.

---

## Live Demo Results

### Demo 1: Villa in Lusail Al Yasmine
**Query:** 4-bedroom villa, 450 m², asking 5,200,000 QAR

The Valuation Agent computed a fair value of **7,651,000 QAR** (range: 7,115,000–8,186,000). The asking price is 32% below fair value. The Market Research Agent found quarterly growth of +4.0%, annual projection of +16.0%, and a rental yield of 6.0%.

**Verdict:** 🟢 STRONG BUY — exceptional value in a high-growth zone.

### Demo 2: Apartment in West Bay with Zone Comparison
**Query:** 3-bedroom apartment, 180 m², asking 3,200,000 QAR. Compare West Bay vs Pearl vs Musheireb.

The system found West Bay fair value at approximately 3,056,000 QAR — asking price is 4.7% above fair value, placing it in the FAIR PRICE range. The zone comparison showed Pearl Porto Arabia leads on price (16,500 QAR/m²) while Musheireb leads on rental yield (7.2%).

**Verdict:** 🟡 HOLD — negotiate price 4–5% down before committing.

### Demo 3: Investment Strategy for 2M QAR Budget
**Query:** Maximum rental yield and price appreciation within 2,000,000 QAR budget.

The Market Research Agent compared Lusail Marina, Musheireb, Al Sadd, and Al Wakra Coastal. Al Sadd emerged as the optimal match: 10,500 QAR/m², 140 m² apartment estimated at 1,984,000 QAR, quarterly growth +2.1%, rental yield 6.9%.

**Verdict:** ✅ BUY — strongest yield-to-price ratio within budget.

---

## Market Overview: Qatar 2026

The PropAI MCP Server's data reveals a two-tier market structure in Qatar:

**Tier 1 — Luxury/Premium (12,800–18,000 QAR/m²):** West Bay, Pearl Qatar, Musheireb, and Lusail Marina lead on price. Lusail Marina tops growth at +4.2% quarterly. Musheireb leads rental yield at 7.2%.

**Tier 2 — Mid/Affordable (7,800–11,800 QAR/m²):** Al Rayyan municipalities offer stable, family-oriented inventory. Al Wakra Coastal shows the strongest mid-tier growth at +2.3% quarterly with lower entry prices — ideal for first-time investors.

The system's `trend_analyzer` tool classifies zones into four investment signals:
- **STRONG BUY** (≥4.0% quarterly): Lusail Marina, Lusail Al Yasmine, West Bay
- **BUY** (≥2.5%): Pearl Porto Arabia, Musheireb, Al Wakra Coastal
- **HOLD** (≥1.5%): Al Sadd, Al Waab, Abu Hamour
- **NEUTRAL** (<1.5%): Al Khor, Al Ruwais, Umm Salal

---

## What I Learned Building This

**MCP is more than a protocol — it's an architectural principle.** Separating data from reasoning forces cleaner code, enables independent testing of each layer, and makes the system far more maintainable. When I moved zone data into the MCP Server, the agents immediately became simpler and more focused.

**Tool docstrings matter enormously.** Early versions had tools with minimal documentation. The LLM would call the wrong tool or pass incorrect parameter types. Adding precise docstrings with parameter descriptions and expected formats reduced errors dramatically. The ADK's function calling relies heavily on this metadata.

**Quota management is a real-world agent concern.** Running three agents sequentially on a free-tier API meant hitting rate limits quickly. This led me to implement `simulate_propai()` as a fallback — which turned out to be excellent for demonstrating the pipeline structure clearly, independent of API availability.

**Sequential agents are underrated.** I initially considered a parallel architecture where both Valuation and Market Research run simultaneously. But the sequential approach proved more reliable: each agent has full context from previous steps, reducing hallucination and enabling the Report Agent to reference specific numbers computed upstream.

---

## Architecture Summary

| Component | Technology | Purpose |
|-----------|------------|---------|
| Agent Framework | Google ADK 2.3.0 | Multi-agent orchestration |
| LLM | Gemini 2.0 Flash | Reasoning and language generation |
| Orchestration | ADK SequentialAgent | Pipeline coordination |
| Data Layer | Custom MCP Server | Qatar real estate data service |
| Agent Tools | 5 ADK FunctionTools | Typed, documented agent skills |
| Security | Kaggle Secrets + validate_input() | Input sanitization and key protection |
| Session | InMemorySessionService | Isolated user sessions |
| Output | Rich + Markdown | Structured professional reports |

---

## Public Resources

- **Kaggle Notebook:** [notebook722c2503d2](https://www.kaggle.com/code/ahmedvalljemaldine/notebook722c2503d2)
- **GitHub Repository:** [AHMEDVALL70/AhmedVall_PropAI](https://github.com/AHMEDVALL70/AhmedVall_PropAI)

---

*AhmedVall PropAI — Kaggle 5-Day AI Agents Intensive Capstone 2026 | Track: Agents for Business*

---

## النسخة العربية | Arabic Version

---

# 🏠 منصة أحمد فال PropAI — نظام التقييم العقاري الذكي لسوق قطر

## المشكلة: قرارات عقارية مبنية على تخمين

سوق العقارات في قطر من أكثر الأسواق ديناميكية في منطقة الخليج العربي. في عام 2026، تشهد مناطق مثل لوسيل المارينا والخليج الغربي نمواً ربع سنوياً يصل إلى 4–5%، بينما تقدم أحياء كالوكرة عوائد إيجارية تتجاوز 5.5% بأسعار دخول أقل. هذا يخلق فرصاً كبيرة — لكن أيضاً تشتتاً كبيراً.

المشكلة الجوهرية هي التشتت. المستثمر الذي يريد تقييم فيلا في لوسيل الياسمين اليوم يحتاج أن يراجع يدوياً قواعد بيانات الأسعار، ويتقاطع مع تقارير اتجاهات المناطق، ويحسب القيمة العادلة مقارنة بالسعر المطلوب، ثم يركّب توصية — عملية تستغرق ساعات وعرضة للتناقض.

ما ينقص هو نظام ذكي موحد يستطيع استقبال استفسار عقاري بلغة طبيعية، وسحب بيانات السوق ذات الصلة، وإجراء حسابات التقييم، وتحليل الاتجاهات، وتقديم تقرير احترافي منظم في ثوانٍ.

هذا بالضبط ما بُنيت **منصة أحمد فال PropAI** لحله.

---

## لماذا الوكلاء؟ الحجة لصالح المعمارية متعددة الوكلاء

chatbot بسيط أو استدعاء نموذج واحد لا يمكنه حل هذه المشكلة بشكل جيد. إليك السبب:

**التفكير المتسلسل بخبرات متخصصة.** التقييم يتطلب تفكيراً مختلفاً عن تحليل اتجاهات السوق، الذي يتطلب بدوره تفكيراً مختلفاً عن تركيب التقرير. نموذج واحد يحاول الثلاثة معاً ينتج مخرجات سطحية. وكلاء متخصصون — كل منهم بأدوات وتعليمات مخصصة — ينتجون نتائج أعمق وأدق.

**استخدام الأدوات لمخرجات موثّقة.** بدون أدوات، يُقدّر النموذج الأسعار من بيانات التدريب التي قد تكون قديمة بأشهر أو سنوات. مع أدوات متصلة بطبقة بيانات حقيقية (خادم MCP)، كل رقم في المخرجات مُحسَب — لا مُولَّد. هذا هو الفرق بين الهلوسة والحقيقة.

**التنسيق للمهام المعقدة.** الـ `SequentialAgent` في Google ADK يضمن اكتمال خطوة التقييم دائماً قبل أبحاث السوق، التي تكتمل دائماً قبل توليد التقرير. هذا الترتيب ليس اختيارياً — وكيل التقارير يحتاج كلا المخرجات العلوية ليعمل بشكل صحيح.

---

## معمارية النظام

منصة AhmedVall PropAI مبنية على أربع طبقات:

### الطبقة 1: خادم MCP (البيانات)
ينفّذ `QatarMCPServer` نمط Model Context Protocol كخدمة بيانات مستقلة. يغطي 18 منطقة عبر 8 بلديات قطرية، مع بيانات أسعار حقيقية، ومعدلات نمو ربعية، وعوائد إيجارية، ومقاييس الطلب. لا يمكن للوكلاء الوصول لهذه البيانات مباشرة — يستدعون فقط أدوات MCP المحددة.

### الطبقة 2: أدوات الوكلاء (المهارات)
خمس `FunctionTool` تعمل كمهارات الوكلاء:
- **`tool_price_estimator`** — يحسب القيمة العادلة باستخدام السعر الأساسي للمنطقة، ومضاعفات نوع العقار، وعوامل الغرف
- **`tool_zone_lookup`** — يسترجع بيانات المنطقة الكاملة
- **`tool_trend_analyzer`** — يحسب إشارة الاستثمار (شراء قوي / شراء / احتفاظ / محايد)
- **`tool_compare_zones`** — يرتب مناطق متعددة جنباً إلى جنب
- **`tool_list_top_zones`** — يرجع أفضل المناطق حسب السعر أو النمو

### الطبقة 3: الوكلاء المتخصصون (التفكير)
ثلاثة وكلاء يتولون مسؤوليات متمايزة:

**وكيل التقييم** يستقبل طلب العقار، يستدعي `zone_lookup` للسياق، ثم `price_estimator` لحساب القيمة العادلة ونطاق السعر (±7%) وتقييم الصفقة. لا يخترع أرقاماً — كل المخرجات محسوبة بالأدوات.

**وكيل أبحاث السوق** يستقبل المنطقة ويستدعي `trend_analyzer` لاستخراج النمو الربعي والتوقع السنوي والعائد الإيجاري وإشارة الاستثمار. للاستفسارات المقارنة، يستدعي `compare_zones` لترتيب البدائل.

**وكيل التقارير** يستقبل المخرجات المنظمة من كلا الوكيلين العلويين ويركّب تقريراً احترافياً بخمسة أقسام: ملخص العقار، نتائج التقييم، تحليل السوق، حكم الاستثمار، والتوصيات.

### الطبقة 4: المنسّق (التنسيق)
الـ `SequentialAgent` ينسّق الوكلاء الثلاثة بترتيب صارم: التقييم → أبحاث السوق → التقرير. يدير حالة الجلسة عبر `InMemorySessionService`، مما يضمن تشغيل كل استفسار في سياق معزول.

---

## منظومة الأمان

الأمان مُصمَّم في النظام من البداية، لا مُضاف كفكرة لاحقة:

**حماية مفتاح API.** يُحمَّل مفتاح Gemini API حصراً عبر `UserSecretsClient` من Kaggle. لا يُرمَّز في الكود أبداً، ولا يُسجَّل، ولا يُطبَع. الـ notebook لا يحتوي على أي بيانات اعتماد.

**طبقة التحقق من المدخلات.** كل استدعاء للأدوات يمر عبر `validate_input()` قبل الوصول لخادم MCP. هذه الدالة تعقّم أطوال النصوص (حدود 100/50 حرفاً)، وتفرض نطاقات رقمية (المساحة: 10–10,000 م²، الغرف: 1–5)، وتطبق قيماً آمنة افتراضية.

**فصل البيانات عن المنطق.** خادم MCP معزول تماماً عن منطق الوكلاء. الوكلاء لا يمكنهم الوصول لقاعدة بيانات المناطق مباشرة — يمكنهم فقط استدعاء واجهات الأدوات المحددة.

**عزل الجلسات.** `InMemorySessionService` يضمن تشغيل كل استفسار في جلسة معزولة.

---

## نتائج العروض التوضيحية الحية

### العرض 1: فيلا في لوسيل الياسمين
**الطلب:** فيلا 4 غرف، 450 م²، السعر المطلوب 5,200,000 ر.ق

حسب وكيل التقييم قيمة عادلة تبلغ **7,651,000 ر.ق** (النطاق: 7,115,000–8,186,000). السعر المطلوب أقل بـ 32% من القيمة العادلة. وجد وكيل أبحاث السوق نمواً ربعياً +4.0%، وتوقعاً سنوياً +16.0%، وعائداً إيجارياً 6.0%.

**الحكم:** 🟢 شراء قوي — قيمة استثنائية في منطقة عالية النمو.

### العرض 2: شقة في الخليج الغربي مع مقارنة المناطق
**الطلب:** شقة 3 غرف، 180 م²، السعر المطلوب 3,200,000 ر.ق. قارن الخليج الغربي مقابل اللؤلؤة مقابل المشيرب.

**الحكم:** 🟡 احتفاظ — تفاوض لتخفيض السعر 4–5% قبل الالتزام.

### العرض 3: استراتيجية استثمار بميزانية 2,000,000 ر.ق
**الطلب:** أعلى عائد إيجاري مع أفضل نمو في السعر.

أقرّ نظام AhmedVall PropAI بأن السد يمثّل أفضل مطابقة: 10,500 ر.ق/م²، شقة 140 م² بتقدير 1,984,000 ر.ق، نمو ربعي +2.1%، عائد إيجاري 6.9%.

**الحكم:** ✅ شراء — أقوى نسبة عائد/سعر ضمن الميزانية.

---

## نظرة عامة على سوق قطر 2026

تكشف بيانات خادم MCP في PropAI عن هيكل سوق ثنائي المستوى في قطر:

**المستوى الأول — فاخر/متميز (12,800–18,000 ر.ق/م²):** الخليج الغربي، اللؤلؤة، المشيرب، ولوسيل المارينا تتصدر الأسعار. تقود لوسيل المارينا النمو بـ +4.2% ربعياً. يتصدر المشيرب العائد الإيجاري بـ 7.2%.

**المستوى الثاني — متوسط/ميسور (7,800–11,800 ر.ق/م²):** بلديات الريان تقدم مخزوناً سكنياً عائلياً مستقراً. تُظهر الوكرة الساحلية أقوى نمو في المستوى المتوسط بـ +2.3% ربعياً بأسعار دخول أقل.

يصنّف `trend_analyzer` المناطق في أربع إشارات استثمار:
- **شراء قوي** (≥4.0% ربعياً): لوسيل المارينا، لوسيل الياسمين، الخليج الغربي
- **شراء** (≥2.5%): اللؤلؤة بورتو أرابيا، المشيرب، الوكرة الساحلية
- **احتفاظ** (≥1.5%): السد، الوعب، أبو هامور
- **محايد** (<1.5%): الخور، الرويس، أم صلال

---

## ما تعلمته من بناء هذا النظام

**MCP ليس مجرد بروتوكول — إنه مبدأ معماري.** فصل البيانات عن التفكير يُجبر على كتابة كود أنظف، ويُتيح اختبار كل طبقة باستقلالية.

**توثيقات الأدوات تهم كثيراً.** النسخ المبكرة كانت فيها أدوات بتوثيق محدود. النموذج كان يستدعي الأداة الخاطئة أو يمرر أنواع معطيات غير صحيحة. إضافة docstrings دقيقة مع أوصاف المعطيات قلّل الأخطاء بشكل ملحوظ.

**إدارة الـ Quota هم حقيقي في عالم الوكلاء.** تشغيل ثلاثة وكلاء بشكل متسلسل على API مجاني يعني الوصول لحدود التقييم سريعاً. هذا دفعني لتطوير `simulate_propai()` كبديل احتياطي — الذي أثبت أنه ممتاز لتوضيح بنية الـ pipeline بوضوح.

**Sequential Agents مقدَّر قيمتهم بأقل مما يستحقون.** المعمارية المتسلسلة أثبتت موثوقية أعلى: كل وكيل عنده سياق كامل من الخطوات السابقة، مما يقلل الهلوسة ويُمكّن وكيل التقارير من الإشارة لأرقام محددة محسوبة في المراحل السابقة.

---

## ملخص المعمارية

| المكوّن | التقنية | الغرض |
|---------|---------|-------|
| إطار الوكلاء | Google ADK 2.3.0 | تنسيق الوكلاء المتعددة |
| النموذج اللغوي | Gemini 2.0 Flash | التفكير وتوليد اللغة |
| التنسيق | ADK SequentialAgent | إدارة سير العمل |
| طبقة البيانات | خادم MCP مخصص | خدمة بيانات عقارات قطر |
| أدوات الوكلاء | 5 ADK FunctionTools | مهارات موثقة ومكتوبة |
| الأمان | Kaggle Secrets + validate_input() | تعقيم المدخلات وحماية المفاتيح |
| إدارة الجلسات | InMemorySessionService | جلسات مستخدمين معزولة |
| المخرجات | Rich + Markdown | تقارير احترافية منظمة |

---

## الموارد العامة

- **Kaggle Notebook:** [notebook722c2503d2](https://www.kaggle.com/code/ahmedvalljemaldine/notebook722c2503d2)
- **GitHub Repository:** [AHMEDVALL70/AhmedVall_PropAI](https://github.com/AHMEDVALL70/AhmedVall_PropAI)

---

*منصة أحمد فال PropAI — مشروع تخرج دورة Google Kaggle المكثفة للـ AI Agents 2026 | المسار: الوكلاء للأعمال*
