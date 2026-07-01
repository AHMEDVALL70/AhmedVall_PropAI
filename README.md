# 🏠 AhmedVall PropAI — Qatar Real Estate Multi-Agent System

> **Kaggle 5-Day AI Agents Intensive — Capstone Project**  
> **Track:** Agents for Business  
> **Author:** Ahmed Vall Jemal Dine Sidina  
> **Submission Deadline:** July 6, 2026

[![Kaggle](https://img.shields.io/badge/Kaggle-Notebook-blue?logo=kaggle)](https://www.kaggle.com/code/ahmedvalljemaldine/notebook722c2503d2)
[![Python](https://img.shields.io/badge/Python-3.11-green?logo=python)](https://python.org)
[![Google ADK](https://img.shields.io/badge/Google_ADK-2.3.0-orange)](https://google.github.io/adk-docs/)
[![License](https://img.shields.io/badge/License-CC--BY_4.0-lightgrey)](https://creativecommons.org/licenses/by/4.0/)

---

## 🎯 Problem Statement

Qatar's real estate market is one of the fastest-growing in the GCC region. Areas like **Lusail Marina, Pearl Qatar, and West Bay** see quarterly price shifts of **3–5%**, yet investors and brokers lack a unified tool that simultaneously:

1. **Estimates fair market value** based on property specifications
2. **Analyzes market trends** for the target zone
3. **Generates a professional investment report** combining both insights

The result? Decisions based on guesswork — not data.

---

## 💡 Solution: Multi-Agent AI System

**AhmedVall PropAI** is a multi-agent system built with **Google ADK 2.3.0 + Gemini** that orchestrates specialized agents to deliver complete, data-driven property valuation reports in seconds.

### Agent Architecture

```
User Request
     │
     ▼
┌─────────────────────┐
│   Orchestrator      │  ← SequentialAgent (ADK)
│   (ADK Pipeline)    │    Coordinates full workflow
└──────────┬──────────┘
           │
    ┌──────┴──────┐
    ▼             ▼
┌───────────┐  ┌──────────────────┐
│ Valuation │  │ Market Research  │
│  Agent    │  │     Agent        │
│           │  │                  │
│ Tools:    │  │ Tools:           │
│ • price_  │  │ • trend_analyzer │
│   estimator│ │ • compare_zones  │
│ • zone_   │  │ • list_top_zones │
│   lookup  │  │                  │
└─────┬─────┘  └────────┬─────────┘
      └────────┬─────────┘
               ▼
       ┌───────────────┐
       │ Report Agent  │  ← Synthesizes final report
       └───────────────┘
               │
               ▼
     📊 Professional Valuation Report
```

---

## ✅ Key Concepts Demonstrated (4 of 6 required)

| Concept | Implementation | Where |
|---------|----------------|-------|
| **Multi-Agent System (ADK)** | `SequentialAgent` + 3 specialized sub-agents | Code |
| **MCP Server** | `QatarMCPServer` — 18 zones data service, decoupled from agent logic | Code |
| **Security Features** | Kaggle Secrets, input validation, string sanitization, session isolation | Code |
| **Agent Skills / Tools** | 5 typed `FunctionTool` instances with docstrings | Code |

---

## 🗂️ Project Structure

```
AhmedVall_PropAI/
├── AhmedVall_PropAI_v3.ipynb    # Main Kaggle Notebook (submit this)
├── README.md                     # This file
└── assets/
    └── architecture.png          # System architecture diagram
```

---

## 🚀 Setup & Running

### Prerequisites
- Kaggle account with GPU/CPU notebook access
- Google Gemini API key (free tier from [aistudio.google.com](https://aistudio.google.com))

### Step 1 — Add API Key to Kaggle Secrets
1. Open the notebook on Kaggle
2. Click **Add-ons** → **Secrets**
3. Add secret: `GEMINI_API_KEY` = your key
4. Enable **"Notebook access"** ✓

### Step 2 — Run the Notebook
```
Run All → All 10 cells execute automatically
```

### Step 3 — Expected Output
Each demo produces:
- Agent pipeline trace (Valuation → Market Research → Report)
- Tool call log (zone_lookup, price_estimator, trend_analyzer)
- Structured property valuation report
- Investment verdict (STRONG BUY / BUY / HOLD / NEUTRAL)

### Running Without API (Demo Mode)
The notebook includes `simulate_propai()` — a full pipeline simulation using real MCP Server data that works without Gemini API quota. Ideal for testing and demonstration.

---

## 📊 MCP Server — Qatar Real Estate Data

The `QatarMCPServer` implements the Model Context Protocol pattern, serving data as a standalone service. Agents never access data directly — they call MCP tools.

**Coverage:** 18 zones across 8 Qatar municipalities

| Municipality | Zones | Price Range (QAR/m²) |
|-------------|-------|---------------------|
| Doha | West Bay, Pearl, Musheireb, Al Sadd, Bin Mahmoud | 10,000 – 18,000 |
| Al Daayen (Lusail) | Marina, Fox Hills, Al Yasmine, Al Kharaiej | 12,800 – 14,500 |
| Al Rayyan | Al Waab, Khalifa City, Abu Hamour | 10,000 – 11,800 |
| Al Wakra | Coastal, Al Wukair | 8,800 – 9,500 |
| Umm Salal | Umm Salal Mohammed | 9,000 |
| Al Khor | Al Khor | 8,000 |
| Al Shamal | Al Ruwais | 7,800 |

**Available MCP Tools:**
- `tool_price_estimator` — Fair market value with price range
- `tool_zone_lookup` — Complete zone data retrieval
- `tool_trend_analyzer` — Quarterly growth + investment signal
- `tool_compare_zones` — Side-by-side zone comparison
- `tool_list_top_zones` — Ranked zones by price/trend

---

## 🔒 Security Architecture

| Feature | Implementation |
|---------|----------------|
| API Key Management | `UserSecretsClient()` — never hardcoded |
| Input Validation | `validate_input()` sanitizes before every MCP call |
| String Length Limits | All strings capped at 100/50 chars |
| Numeric Range Checks | size: 10–10,000 m², bedrooms: 1–5 |
| Safe Type Defaults | Invalid type → `'apartment'` (no exceptions raised) |
| Data/Logic Separation | MCP Server fully decoupled from agent logic |
| Session Isolation | `InMemorySessionService` — independent user sessions |
| Zero Credentials in Code | No API keys or secrets in any source cell |

---

## 🏗️ Tech Stack

| Component | Technology |
|-----------|------------|
| Agent Framework | Google ADK 2.3.0 |
| LLM | Gemini 2.0 Flash |
| Orchestration | ADK `SequentialAgent` |
| Data Layer | Custom MCP Server (18 Qatar zones) |
| Agent Tools | 5 `FunctionTool` instances |
| Security | Kaggle Secrets + Input Validation |
| Session Management | `InMemorySessionService` |
| Output Formatting | Rich console + Markdown reports |

---

## 📋 Demo Scenarios

### Demo 1 — Villa Valuation: Lusail Al Yasmine
> "Evaluate a 4-bedroom villa, 450 m², asking 5,200,000 QAR"

**Output:** Fair value: 7,651,000 QAR | Signal: 🟢 STRONG BUY (32% below fair value)

### Demo 2 — Apartment + Zone Comparison: West Bay
> "Evaluate a 3-bedroom apartment, 180 m², asking 3,200,000 QAR. Compare West Bay vs Pearl vs Musheireb."

**Output:** Fair value comparison + ranked zone analysis

### Demo 3 — Investment Strategy: 2M QAR Budget
> "I have 2,000,000 QAR. Which zone gives maximum yield + appreciation?"

**Output:** Zone ranking, best match recommendation, full investment report

---

## 👤 Author

**Ahmed Vall Jemal Dine Sidina**  
Kaggle: [@ahmedvalljemaldine](https://www.kaggle.com/ahmedvalljemaldine)  
GitHub: [AhmedVall_PropAI](https://github.com/AHMEDVALL70/AhmedVall_PropAI)

---

## 📄 License

This project is licensed under **CC-BY 4.0** as required by the Kaggle competition rules.

---

*AhmedVall PropAI — Kaggle 5-Day AI Agents Intensive Capstone | Track: Agents for Business | 2026*

---

## النسخة العربية | Arabic Version

---

# 🏠 منصة أحمد فال PropAI — نظام التقييم العقاري متعدد الوكلاء لدولة قطر

> **مشروع التخرج — دورة Google Kaggle المكثفة للـ AI Agents (5 أيام)**  
> **المسار:** Agents for Business — الوكلاء للأعمال  
> **المطور:** أحمد فال جمال الدين سيدينا

---

## 🎯 المشكلة

سوق العقارات في قطر من أسرع الأسواق نمواً في منطقة الخليج. مناطق مثل **لوسيل المارينا واللؤلؤة والخليج الغربي** تشهد ارتفاعات ربع سنوية تصل إلى **3–5%**، لكن المستثمرين والوسطاء يفتقرون لأداة موحدة تستطيع في آنٍ واحد:

1. **تقدير القيمة العادلة** بناءً على مواصفات العقار
2. **تحليل اتجاهات السوق** للمنطقة المستهدفة
3. **توليد تقرير استثماري احترافي** يجمع كلا التحليلين

النتيجة؟ قرارات مبنية على تخمين لا بيانات.

---

## 💡 الحل: نظام وكلاء ذكاء اصطناعي متعدد

**AhmedVall PropAI** هو نظام متعدد الوكلاء مبني على **Google ADK 2.3.0 + Gemini** ينسّق بين وكلاء متخصصين لإنتاج تقارير تقييم عقاري متكاملة في ثوانٍ.

### معمارية النظام

```
طلب المستخدم
      │
      ▼
┌─────────────────────┐
│   وكيل المنسّق      │  ← SequentialAgent (ADK)
│  (يدير سير العمل)   │
└──────────┬──────────┘
           │
    ┌──────┴──────┐
    ▼             ▼
┌──────────┐  ┌─────────────────┐
│ وكيل     │  │ وكيل أبحاث     │
│ التقييم  │  │ السوق           │
│          │  │                 │
│ أدواته:  │  │ أدواته:         │
│ • تقدير  │  │ • تحليل الاتجاه │
│   السعر  │  │ • مقارنة المناطق│
│ • بحث    │  │ • أفضل المناطق  │
│   المنطقة│  │                 │
└─────┬────┘  └───────┬─────────┘
      └───────┬────────┘
              ▼
      ┌───────────────┐
      │ وكيل التقارير │  ← يركّب التقرير النهائي
      └───────────────┘
              │
              ▼
    📊 تقرير تقييم احترافي
```

---

## ✅ المفاهيم التقنية المُطبَّقة (4 من 6 مطلوبة)

| المفهوم | التطبيق | الموقع |
|---------|---------|--------|
| **نظام متعدد الوكلاء (ADK)** | `SequentialAgent` + 3 وكلاء متخصصين | الكود |
| **MCP Server** | `QatarMCPServer` — خدمة بيانات 18 منطقة | الكود |
| **ميزات الأمان** | Kaggle Secrets + التحقق من المدخلات + عزل الجلسات | الكود |
| **أدوات الوكلاء (Agent Skills)** | 5 `FunctionTool` موثقة بالكامل | الكود |

---

## 🗄️ خادم MCP — بيانات العقارات القطرية

يغطي `QatarMCPServer` **18 منطقة** عبر **8 بلديات** في قطر:

| البلدية | المناطق | نطاق السعر (ر.ق/م²) |
|---------|---------|---------------------|
| الدوحة | الخليج الغربي، اللؤلؤة، المشيرب، السد، بن محمود | 10,000 – 18,000 |
| الظعاين (لوسيل) | المارينا، الفوكس هيلز، الياسمين، الخرائج | 12,800 – 14,500 |
| الريان | الوعب، مدينة خليفة، أبو هامور | 10,000 – 11,800 |
| الوكرة | الساحلية، الوكير | 8,800 – 9,500 |
| أم صلال | أم صلال محمد | 9,000 |
| الخور | الخور | 8,000 |
| الشمال | الرويس | 7,800 |

---

## 🔒 منظومة الأمان

| الميزة | التطبيق |
|--------|---------|
| حماية مفتاح API | `UserSecretsClient()` — لا يُدمج في الكود أبداً |
| التحقق من المدخلات | `validate_input()` تعقيم كل المدخلات قبل الوصول للبيانات |
| حد طول النصوص | جميع النصوص محددة بـ 100/50 حرفاً |
| التحقق من النطاقات | المساحة: 10–10,000 م² | الغرف: 1–5 |
| القيم الآمنة الافتراضية | نوع غير معروف → `'apartment'` دون استثناء |
| فصل البيانات عن المنطق | خادم MCP معزول تماماً عن منطق الوكلاء |
| عزل الجلسات | `InMemorySessionService` — جلسة مستقلة لكل مستخدم |
| صفر بيانات اعتماد في الكود | لا مفاتيح API أو كلمات مرور في أي خلية |

---

## 📋 نتائج العروض التوضيحية

### العرض 1 — تقييم فيلا في لوسيل الياسمين
**الطلب:** فيلا 4 غرف، 450 م²، السعر المطلوب 5,200,000 ر.ق

| المؤشر | النتيجة |
|--------|---------|
| القيمة العادلة | 7,651,000 ر.ق |
| نطاق السعر | 7,115,000 – 8,186,000 ر.ق |
| النمو الربعي | ▲ +4.0% |
| العائد الإيجاري | 6.0% |
| الحكم الاستثماري | 🟢 شراء قوي (السعر أقل 32% من القيمة العادلة) |

### العرض 2 — شقة في الخليج الغربي + مقارنة المناطق
**الطلب:** شقة 3 غرف، 180 م²، السعر المطلوب 3,200,000 ر.ق

| الحكم | 🟡 سعر عادل — يُنصح بالتفاوض 4-5% |

### العرض 3 — استراتيجية استثمار بميزانية 2,000,000 ر.ق
**الطلب:** أعلى عائد إيجاري مع أفضل نمو في السعر

| الحكم | ✅ السد — أفضل نسبة عائد/سعر ضمن الميزانية (6.9% عائد إيجاري) |

---

## 🚀 خطوات التشغيل

### الخطوة 1 — أضف مفتاح API
1. افتح الـ notebook على Kaggle
2. اضغط **Add-ons** ← **Secrets**
3. أضف: `GEMINI_API_KEY` = مفتاحك من [aistudio.google.com](https://aistudio.google.com)
4. فعّل **"Notebook access"** ✓

### الخطوة 2 — شغّل الـ Notebook
```
Run All ← كل الـ 10 cells تعمل تلقائياً
```

### الخطوة 3 — النتائج المتوقعة
- مسار تنفيذ الوكلاء (التقييم → بحث السوق → التقرير)
- سجل استدعاء الأدوات
- تقرير تقييم عقاري منظم
- حكم استثماري (شراء قوي / شراء / احتفاظ / محايد)

---

## 👤 المطور

**أحمد فال جمال الدين سيدينا**  
Kaggle: [@ahmedvalljemaldine](https://www.kaggle.com/ahmedvalljemaldine)  
GitHub: [AHMEDVALL70/AhmedVall_PropAI](https://github.com/AHMEDVALL70/AhmedVall_PropAI)

---

*منصة أحمد فال PropAI — مشروع تخرج دورة Google Kaggle المكثفة للـ AI Agents 2026 | المسار: الوكلاء للأعمال*
