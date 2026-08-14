// ===== نظام الترجمة الكامل (عربي / إنجليزي / فرنسي) =====

const translations = {
    ar: {
        "page-title": "Innovision | الابتكار والتحول الرقمي",
        "nav.home": "الرئيسية",
        "nav.services": "الخدمات",
        "nav.casestudies": "دراسات الحالة",
        "nav.projects": "المشاريع",
        "nav.testimonials": "آراء العملاء",
        "nav.blog": "المدونة",
        "nav.cv": "السيرة الذاتية",
        "nav.contact": "تواصل",
        "nav.payment": "الدفع",

        "hero.badge": "الابتكار والتحول الرقمي",
        "hero.title": 'ارتقِ بأعمالك <br>باستخدام <span class="highlight">الذكاء الاصطناعي</span>',
        "hero.subtitle": "نقدم استشارات تخصصية وحلولاً برمجية متطورة في مجالات الذكاء الاصطناعي، التعلم الآلي، والأنظمة البيومترية",
        "hero.stat1": "سنة خبرة",
        "hero.stat2": "مشروعاً",
        "hero.stat3": "لغات",
        "hero.btn_explore": "استكشف خدماتنا",
        "hero.btn_contact": "تواصل معنا",

        "ai.toggle": "اسألني",
        "ai.header": "المساعد الذكي",
        "ai.experience": "الخبرة",
        "ai.missions": "المهمات",
        "ai.projects": "المشاريع",
        "ai.certifications": "الشهادات والتدريب",
        "ai.contact": "اتصل بنا",
        "ai.welcome": "👋 مرحباً! اختر أحد الخيارات أعلاه للحصول على معلومات فورية.",

        "services.tag": "ما نقدمه",
        "services.title": 'خدماتنا <span class="highlight">التخصصية</span>',
        "services.subtitle": "حلول ذكاء اصطناعي مخصصة لاحتياجات عملك الفريدة",
        "services.btn": "اطلب الخدمة",
        "services.consulting.title": "استشارات الذكاء الاصطناعي",
        "services.consulting.desc": "تقييم جاهزية المؤسسة ووضع استراتيجية ذكاء اصطناعي مخصصة تحقق عائداً ملموساً",
        "services.ml.title": "تطوير نماذج التعلم الآلي",
        "services.ml.desc": "نماذج تنبؤية مخصصة، تحليل بيانات متقدم، وأنظمة كشف احتيال ذكية",
        "services.biometric.title": "الأنظمة البيومترية",
        "services.biometric.desc": "حلول بصمة، وجه، وصوت مع تكامل آمن مع أنظمة الأمن والهوية القائمة",
        "services.digital.title": "التحول الرقمي",
        "services.digital.desc": "تطوير البنية التحتية الرقمية، أتمتة العمليات، وبناء قدرات الفرق التقنية",

        "link.view_project": "عرض المشروع",
        "link.read_more": "اقرأ المزيد",

        "cs.tag": "نجاحاتنا",
        "cs.title": 'دراسات <span class="highlight">الحالة</span>',
        "cs.subtitle": "نماذج من مشاريعنا التي أحدثت فرقاً حقيقياً",
        "cs.propai.title": "PropAI - التقييم العقاري الذكي",
        "cs.propai.desc": "منصة متكاملة لتقييم العقارات في قطر باستخدام الذكاء الاصطناعي، تحلل أكثر من 1000 عقار وتتنبأ بالقيم العادلة بدقة عالية.",
        "cs.ats.title": "محسّن السيرة الذاتية ATS",
        "cs.ats.desc": "تحسين توافق السيرة الذاتية مع متطلبات أنظمة ATS باستخدام تقنيات TF-IDF ومعالجة اللغة الطبيعية.",
        "cs.fraud.title": "كشف الاحتيال في الصفقات",
        "cs.fraud.desc": "نموذج متخصص للكشف عن الأنماط المشبوهة في الصفقات العمومية باستخدام خوارزميات التعلم الآلي المتقدمة.",
        "cs.sentiment.title": "تحليل المشاعر (NLP)",
        "cs.sentiment.desc": "أداة متقدمة لتحليل المشاعر في النصوص العربية والإنجليزية، تستخدم الشبكات العصبية LSTM لتصنيف المشاعر بدقة عالية.",

        "proj.tag": "أعمالنا",
        "proj.title": 'مشاريع <span class="highlight">مميزة</span>',
        "proj.subtitle": "نماذج من الحلول التي طورناها لعملائنا",
        "proj.propai.desc": "منصة تقييم عقاري ذكية تعتمد على تحليل السجلات وتوقع القيمة العادلة",
        "proj.cv.desc": "سيرة ذاتية تفاعلية تعرض الخبرات والمشاريع بتقنيات ويب حديثة",
        "proj.ats.title": "محسّن السيرة الذاتية ATS",
        "proj.ats.desc": "تحسين توافق السيرة الذاتية مع متطلبات أنظمة ATS باستخدام TF-IDF",
        "proj.fraud.title": "كشف الاحتيال في الصفقات",
        "proj.fraud.desc": "نموذج متخصص للكشف عن الأنماط المشبوهة في الصفقات العمومية",

        "test.tag": "شهادات",
        "test.title": 'آراء <span class="highlight">عملائنا</span>',
        "test.subtitle": "ما يقوله من عملنا معهم",
        "test.1.quote": '"ساعدتنا Innovision في تطوير استراتيجية ذكاء اصطناعي غيرت طريقة عملنا. النتائج كانت مذهلة في أقل من 3 أشهر."',
        "test.1.name": "مدير تقني، شركة رائدة",
        "test.1.role": "القطاع المالي",
        "test.2.quote": '"نظام المصادقة البيومترية الذي طورته Innovision رفع مستوى الأمان لدينا بنسبة 95% مع سهولة استخدام مذهلة."',
        "test.2.name": "مسؤول أمن المعلومات",
        "test.2.role": "قطاع حكومي",
        "test.3.quote": '"احترافية عالية وفهم عميق لاحتياجات العمل. منصة PropAI كانت نقلة نوعية في تقييم العقارات."',
        "test.3.name": "مدير عقاري",
        "test.3.role": "قطاع التطوير العقاري",

        "blog.tag": "مدونة",
        "blog.title": 'آخر <span class="highlight">المقالات</span>',
        "blog.subtitle": "رؤى وخبرات في الذكاء الاصطناعي والتحول الرقمي",
        "blog.1.title": "5 علامات تدل أن عملك بحاجة للذكاء الاصطناعي",
        "blog.1.desc": "كيف تعرف أن الوقت قد حان لاعتماد الذكاء الاصطناعي في مؤسستك؟ نقدم لك 5 مؤشرات واضحة...",
        "blog.2.title": "الفرق بين التعلم الآلي والتعلم العميق ببساطة",
        "blog.2.desc": "شرح مبسط لأهم المفاهيم في عالم الذكاء الاصطناعي مع أمثلة عملية من مشاريعنا...",
        "blog.3.title": "كيف تبدأ مشروع ذكاء اصطناعي في 3 أشهر",
        "blog.3.desc": "خطة عمل عملية لتنفيذ أول مشروع ذكاء اصطناعي في مؤسستك بخطوات واضحة ونتائج ملموسة...",

        "cv.tag": "خبرتي",
        "cv.title": 'السيرة <span class="highlight">الذاتية</span>',
        "cv.who": "من أنا",
        "cv.summary": "مهندس دولة في الإلكترونيات والتطوير الرقمي مع أكثر من 25 عاماً من الخبرة القيادية في إدارة الأنظمة البيومترية، العمليات التقنية، ومبادرات التحول الرقمي في القطاع العام. يجمع بين الخبرة الإدارية والحوكمة المتقدمة مع الكفاءة التقنية في التعلم الآلي وعلوم البيانات.",
        "cv.h1": "هندسة دولة + 5 سنوات",
        "cv.h2": "شهادات Kaggle و Stanford",
        "cv.h3": "خبرة حكومية ودولية",
        "cv.btn_contact": "تواصل معي",
        "cv.tl1.year": "2025 - الآن",
        "cv.tl1.desc": "مطور Python و AI مستقل - قطر",
        "cv.tl2.desc": "مدير مركز الحالة المدنية - جدة",
        "cv.tl3.desc": "مدير المصادقة على الوثائق - ANRPTS",
        "cv.tl4.desc": "مهندس دولة - إلكترونيات وتطوير رقمي",

        "contact.tag": "تواصل",
        "contact.title": 'هيا <span class="highlight">نتحدث</span>',
        "contact.subtitle": "لديك مشروع؟ فكرة؟ نحن هنا لمساعدتك",
        "contact.info_title": "معلومات الاتصال",
        "contact.location": "الدوحة، قطر",

        "form.title": "طلب خدمة",
        "form.subtitle": "املأ النموذج وسنرد عليك خلال 24 ساعة",
        "form.name_label": "الاسم الكامل",
        "form.name_ph": "الاسم الكامل",
        "form.email_label": "البريد الإلكتروني",
        "form.email_ph": "البريد الإلكتروني",
        "form.phone_label": "رقم الهاتف",
        "form.phone_ph": "رقم الهاتف",
        "form.service_label": "الخدمة المطلوبة",
        "form.service_choose": "اختر الخدمة",
        "form.service_other": "أخرى",
        "form.details_label": "تفاصيل الطلب",
        "form.details_ph": "اكتب تفاصيل طلبك...",
        "form.submit": "إرسال الطلب",
        "form.msg_required": "الرجاء ملء جميع الحقول",
        "form.msg_invalid_email": "الرجاء إدخال بريد إلكتروني صحيح",
        "form.msg_sending": "جاري الإرسال...",
        "form.msg_success": "✅ تم إرسال طلبك بنجاح! سأتصل بك قريباً.",
        "form.msg_error": "❌ حدث خطأ في الإرسال. حاول مرة أخرى.",

        "footer.rights": "© 2026 Innovision. جميع الحقوق محفوظة",

        "payment.tag": "الدفع",
        "payment.title": 'طرق <span class="highlight">الدفع</span>',
        "payment.subtitle": "حوّل المبلغ مباشرة إلى الحساب البنكي التالي",
        "payment.bank_label": "اسم البنك",
        "payment.holder_label": "اسم صاحب الحساب",
        "payment.account_label": "رقم الحساب",
        "payment.iban_label": "رقم الآيبان (IBAN)",
        "payment.copy_btn": "نسخ",
        "payment.copied": "✅ تم النسخ",
        "payment.note": "بعد إتمام التحويل، يرجى إرسال إيصال التحويل عبر واتساب أو البريد الإلكتروني لتأكيد الطلب.",

        "article.back": "العودة للمدونة",
        "article.cta_btn_1": "احجز استشارة مجانية",
        "article.cta_btn_2": "تواصل معنا للاستشارة",
        "article.cta_btn_3": "احجز جلسة تقييم مجانية",

        "a1.meta": "10 أغسطس 2026  •  5 دقائق قراءة",
        "a1.p_intro": "كثير من أصحاب الأعمال يسمعون عن الذكاء الاصطناعي بشكل يومي، لكن السؤال الحقيقي اللي يواجهونه هو: \"هل مؤسستي فعلاً بحاجة لهذا الآن، أم أنه مجرد ترند؟\" الحقيقة أن الذكاء الاصطناعي ليس رفاهية تقنية، بل أداة عملية تحل مشاكل حقيقية إذا استُخدمت في الوقت والمكان الصحيحين. فيما يلي 5 علامات واضحة تدل أن مؤسستك وصلت لتلك المرحلة.",
        "a1.h1": "1. تكرار المهام الروتينية يستهلك وقت فريقك",
        "a1.p1": "إذا كان موظفوك يقضون ساعات طويلة يومياً في إدخال بيانات، فرز طلبات، أو الرد على أسئلة متكررة من العملاء، فهذا مؤشر مباشر على وجود فرصة كبيرة للأتمتة. أدوات الذكاء الاصطناعي، من روبوتات المحادثة إلى أنظمة معالجة المستندات، تقدر تنجز هذي المهام بدقة أعلى وفي جزء بسيط من الوقت، وتحرر فريقك للتركيز على العمل الذي يحتاج فعلاً إلى تفكير بشري.",
        "a1.h2": "2. قراراتك تعتمد على الحدس أكثر من البيانات",
        "a1.p2": "لو لاحظت أن قرارات مهمة بمؤسستك (زي التسعير، التوسع، أو اختيار العملاء المستهدفين) تُبنى غالباً على الخبرة الشخصية أو التخمين بدل تحليل فعلي للبيانات المتوفرة لديك، فهذا يعني إنك تفوّت فرصاً حقيقية. نماذج التعلم الآلي قادرة على تحليل آلاف السجلات التاريخية واكتشاف أنماط لا يلاحظها الإنسان بسهولة، وتحويلها لتوصيات عملية تدعم قراراتك بثقة أكبر.",
        "a1.h3": "3. صعوبة اكتشاف الاحتيال أو الأنماط المشبوهة",
        "a1.p3": "إذا كانت مؤسستك تتعامل مع حجم كبير من المعاملات المالية أو الطلبات، فمراقبة كل حالة يدوياً يصبح شبه مستحيل. أنظمة كشف الاحتيال المبنية على الذكاء الاصطناعي تراقب آلاف المعاملات في الوقت الفعلي، وتنبّهك فوراً عند وجود نمط غير طبيعي، مما يقلل الخسائر المالية ويحمي سمعة مؤسستك.",
        "a1.h4": "4. تجربة العملاء غير متسقة أو بطيئة",
        "a1.p4": "عندما يشتكي عملاؤك من بطء الاستجابة أو عدم تناسق الخدمة بين موظف وآخر، فهذا مؤشر على أن مؤسستك بحاجة لأنظمة ذكية تضمن جودة موحدة على مدار الساعة. سواء عبر مساعد ذكي يجيب على الاستفسارات الشائعة فوراً، أو نظام يوجّه كل عميل للحل الأنسب بسرعة، فإن التقنية هنا تحسّن التجربة بشكل ملموس.",
        "a1.h5": "5. منافسوك بدأوا يتحركون قبلك",
        "a1.p5": "إذا لاحظت أن منافسيك المباشرين بدأوا يعلنون عن حلول ذكاء اصطناعي أو تحسينات في سرعة خدماتهم، فهذا وقت مناسب لتقييم موقعك. التأخر في تبني هذي الأدوات لا يعني فقط فقدان الكفاءة، بل قد يعني فقدان حصة سوقية لصالح من تحرك أسرع.",
        "a1.h_end": "كيف تبدأ؟",
        "a1.p_end": "الخطوة الأولى ليست شراء أحدث الأدوات، بل تقييم واقعي لعملياتك الحالية وتحديد أين تكمن أكبر فرصة للتأثير. في Innovision، نبدأ دائماً بجلسة تقييم جاهزية تساعدك تعرف بالضبط من أين تبدأ رحلتك مع الذكاء الاصطناعي، بخطوات عملية وقابلة للقياس بدل حلول عامة لا تناسب طبيعة عملك.",
        "a1.cta_text": "عندك واحدة أو أكثر من هذي العلامات بمؤسستك؟",

        "a2.meta": "25 يوليو 2026  •  6 دقائق قراءة",
        "a2.p_intro": "من أكثر الأسئلة اللي تجيني من العملاء: \"شو الفرق بين التعلم الآلي (Machine Learning) والتعلم العميق (Deep Learning)؟ وليش الكل يستخدمهم كأنهم نفس الشي؟\" الحقيقة أن فيه فرق مهم بينهم، وفهمه يساعدك تاخذ قرار أذكى لما تفكر بمشروع ذكاء اصطناعي لمؤسستك.",
        "a2.h1": "الذكاء الاصطناعي: المظلة الكبرى",
        "a2.p1": "قبل أن نفرّق بينهما، يجب أن نفهم أن \"الذكاء الاصطناعي\" (AI) هو المصطلح الأشمل، ويُقصد به أي نظام يحاكي القدرات البشرية مثل التفكير، والتعلم، واتخاذ القرار. تحت هذه المظلة الكبرى يندرج \"التعلم الآلي\"، وتحت التعلم الآلي يندرج بدوره \"التعلم العميق\". أي إن كل تعلم عميق هو تعلم آلي، ولكن ليس كل تعلم آلي يُعد تعلمًا عميقًا.",
        "a2.h2": "التعلم الآلي: النظام يتعلم من الأمثلة",
        "a2.p2a": "التعلم الآلي هو أسلوب يُتيح للحاسوب التعلم من البيانات بدلاً من كتابة تعليمات برمجية صريحة لكل حالة. فبدلًا من صياغة قواعد ثابتة، نزوّد النظام بكمية كبيرة من الأمثلة (مثل آلاف المعاملات المالية السابقة)، ليقوم هو باستكشاف الأنماط واستخدامها للتنبؤ بحالات جديدة. مثال عملي: نموذج يتنبأ بسعر عقار بناءً على المساحة، والموقع، وعدد الغرف، بالاعتماد على بيانات آلاف العقارات السابقة.",
        "a2.p2b": "يتميز التعلم الآلي بفاعليته العالية مع البيانات المنظمة (مثل جداول الأرقام والفئات)، كما يتطلب عادةً بيانات أقل نسبياً مقارنةً بالتعلم العميق، ويُعد أسرع في عمليات التدريب والتشغيل.",
        "a2.h3": "التعلم العميق: شبكات تحاكي الدماغ البشري",
        "a2.p3a": "التعلم العميق هو فرع متقدم من التعلم الآلي، يعتمد على \"الشبكات العصبية الاصطناعية\" المكونة من طبقات متعددة (ومن هنا جاءت تسمية \"عميق\"). هذه الشبكات مستوحاة من طريقة عمل الخلايا العصبية في الدماغ البشري، وتستطيع تعلم أنماط شديدة التعقيد من كميات ضخمة من البيانات غير المنظمة، مثل الصور، والصوت، والنصوص الطويلة.",
        "a2.p3b": "مثال عملي: التعرف على الوجوه في الصور، أو تحليل المشاعر في نص طويل باللغة العربية، أو المساعدات الصوتية الذكية. تُعد هذه المهام معقدة للغاية بحيث يصعب على التعلم الآلي التقليدي التعامل معها بكفاءة، في حين يتفوق فيها التعلم العميق بوضوح.",
        "a2.h4": "متى تستخدم كل منهما؟",
        "a2.p4a": "يعتمد القرار على طبيعة المشكلة وحجم البيانات المتاحة لديك:",
        "a2.p4b": "استخدم التعلم الآلي التقليدي: عندما تتوفر لديك بيانات منظمة (جداول)، بحجم متوسط، وتحتاج إلى نتائج سريعة وقابلة للتفسير بسهولة — مثل التنبؤ بالمبيعات أو تصنيف العملاء.",
        "a2.p4c": "استخدم التعلم العميق: عندما تتعامل مع صور، أو تسجيلات صوتية، أو نصوص طويلة، وتتوفر لديك كمية ضخمة جدًا من البيانات، مع القدرة على استثمار وقت وموارد حاسوبية أكبر للتدريب — مثل أنظمة التعرف على الصور أو معالجة اللغة الطبيعية المتقدمة.",
        "a2.h5": "الخلاصة",
        "a2.p5": "ليس كل مشروع ذكاء اصطناعي يتطلب استخدام التعلم العميق؛ ففي كثير من الأحيان، يمنحك نموذج التعلم الآلي البسيط نتائج ممتازة بتكلفة وزمن أقل بكثير. الأهم هو اختيار الأداة المناسبة لحجم مشكلتك ونوعها، وليس اختيار الأداة الأكثر تعقيداً أو أحدثها تسمية.",
        "a2.cta_text": "مو متأكد أي نوع يناسب مشروعك؟",

        "a3.meta": "5 يوليو 2026  •  7 دقائق قراءة",
        "a3.p_intro": "أكبر خطأ يقع فيه أصحاب الأعمال عند التفكير بمشروع ذكاء اصطناعي هو محاولة بناء حل شامل ومثالي من أول يوم. النتيجة غالباً مشروع يتأخر، تكلفته تتضاعف، وقد لا يرى النور أصلاً. الطريقة الأذكى هي البدء بخطة عملية مقسّمة على 3 أشهر، تنتج نتائج ملموسة بسرعة وتبني الثقة قبل التوسع. إليك خطة عمل واقعية بثلاث مراحل.",
        "a3.h1": "الشهر الأول: التقييم وتحديد الفرصة",
        "a3.p1a": "الأسبوع الأول إلى الثاني: اجتمع مع فريقك وحدد مشكلة واحدة محددة وقابلة للقياس — لا تحاول حل كل شي دفعة وحدة. اسأل نفسك: أين نفقد أكبر وقت أو مال حالياً؟ هل هو في خدمة العملاء، تحليل البيانات، أم كشف الأخطاء؟",
        "a3.p1b": "الأسبوع الثالث إلى الرابع: قيّم البيانات المتوفرة لديك. هل عندك سجلات كافية وموثوقة تغطي هذي المشكلة؟ الذكاء الاصطناعي يعتمد بشكل أساسي على جودة البيانات، فمشروع بدون بيانات كافية محكوم عليه بالفشل من البداية. في هذي المرحلة، حدد أيضاً مؤشر نجاح واضح (\"Success Metric\") — مثلاً تقليل زمن الاستجابة بنسبة 30%، أو رفع دقة كشف الاحتيال إلى 90%.",
        "a3.h2": "الشهر الثاني: بناء نموذج أولي (MVP)",
        "a3.p2a": "الأسبوع الخامس إلى السادس: ابدأ ببناء نموذج أولي بسيط (Minimum Viable Product) يحل جزءاً من المشكلة، لا كل تفاصيلها. الهدف هنا ليس الكمال، بل التحقق السريع من أن الفكرة تعمل فعلياً على بياناتك الحقيقية.",
        "a3.p2b": "الأسبوع السابع إلى الثامن: اختبر النموذج الأولي على بيانات حقيقية (لكن بمعزل عن العمليات الفعلية بعد)، وقِس النتائج مقابل مؤشر النجاح اللي حددته بالشهر الأول. هذي المرحلة غالباً تكشف تحديات لم تكن متوقعة، وهذا طبيعي تماماً — الهدف هو التعلم بسرعة وتعديل المسار قبل استثمار موارد أكبر.",
        "a3.h3": "الشهر الثالث: التجربة الحية والتوسع التدريجي",
        "a3.p3a": "الأسبوع التاسع إلى العاشر: أطلق النموذج على نطاق محدود ضمن بيئة العمل الفعلية — قسم واحد، أو شريحة صغيرة من العملاء. هذا يخليك تراقب الأداء الحقيقي وتجمع ملاحظات مباشرة من المستخدمين الفعليين قبل التوسع الكامل.",
        "a3.p3b": "الأسبوع الحادي عشر إلى الثاني عشر: بناءً على نتائج التجربة الحية، عدّل النموذج وحسّن دقته، ثم ضع خطة توسع تدريجية لبقية المؤسسة. في هذي المرحلة، وثّق الدروس المستفادة وحدد كيف سيتم صيانة النموذج ومراقبته على المدى الطويل — لأن نموذج الذكاء الاصطناعي يحتاج متابعة مستمرة، وليس إطلاقاً لمرة واحدة.",
        "a3.h4": "لماذا هذا الأسلوب أفضل من \"المشروع الكبير\"؟",
        "a3.p4": "هذي الطريقة المرحلية تقلل المخاطر المالية، تعطيك نتائج ملموسة تقدر تعرضها للإدارة أو المستثمرين خلال أسابيع لا سنوات، وتبني ثقة داخلية بالتقنية قبل التوسع الكبير. كمان، لو تبين أن الفكرة الأولى ما نجحت كما توقعت، خسارتك محدودة بشهر أو شهرين، لا مشروع كامل بميزانية ضخمة.",
        "a3.h5": "الخلاصة",
        "a3.p5": "مشروع الذكاء الاصطناعي الناجح لا يبدأ بأحدث التقنيات، بل بمشكلة واضحة، بيانات موثوقة، وخطة مرحلية واقعية. في 3 أشهر فقط، تقدر تنتقل من فكرة إلى نموذج فعلي يعمل ويضيف قيمة حقيقية لمؤسستك.",
        "a3.cta_text": "جاهز تبدأ أول مشروع ذكاء اصطناعي لمؤسستك؟"
    },

    en: {
        "page-title": "Innovision | Innovation & Digital Transformation",
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.casestudies": "Case Studies",
        "nav.projects": "Projects",
        "nav.testimonials": "Testimonials",
        "nav.blog": "Blog",
        "nav.cv": "Resume",
        "nav.contact": "Contact",
        "nav.payment": "Payment",

        "hero.badge": "Innovation & Digital Transformation",
        "hero.title": 'Elevate Your Business <br>with <span class="highlight">Artificial Intelligence</span>',
        "hero.subtitle": "We provide specialized consulting and advanced software solutions in artificial intelligence, machine learning, and biometric systems",
        "hero.stat1": "Years Experience",
        "hero.stat2": "Projects",
        "hero.stat3": "Languages",
        "hero.btn_explore": "Explore Services",
        "hero.btn_contact": "Contact Us",

        "ai.toggle": "Ask Me",
        "ai.header": "AI Assistant",
        "ai.experience": "Experience",
        "ai.missions": "Missions",
        "ai.projects": "Projects",
        "ai.certifications": "Certifications & Training",
        "ai.contact": "Contact",
        "ai.welcome": "👋 Hello! Choose an option above to get instant information.",

        "services.tag": "What We Offer",
        "services.title": 'Our <span class="highlight">Specialized</span> Services',
        "services.subtitle": "AI solutions tailored to your business's unique needs",
        "services.btn": "Request Service",
        "services.consulting.title": "AI Consulting",
        "services.consulting.desc": "Assessing organizational readiness and building a tailored AI strategy that delivers tangible ROI",
        "services.ml.title": "Machine Learning Development",
        "services.ml.desc": "Custom predictive models, advanced data analysis, and intelligent fraud detection systems",
        "services.biometric.title": "Biometric Systems",
        "services.biometric.desc": "Fingerprint, facial, and voice solutions with secure integration into existing security and identity systems",
        "services.digital.title": "Digital Transformation",
        "services.digital.desc": "Digital infrastructure development, process automation, and building technical team capabilities",

        "link.view_project": "View Project",
        "link.read_more": "Read More",

        "cs.tag": "Our Success Stories",
        "cs.title": 'Case <span class="highlight">Studies</span>',
        "cs.subtitle": "Examples of projects that made a real difference",
        "cs.propai.title": "PropAI - Smart Real Estate Valuation",
        "cs.propai.desc": "An integrated AI-powered platform for real estate valuation in Qatar, analyzing over 1,000 properties and predicting fair values with high accuracy.",
        "cs.ats.title": "ATS Resume Optimizer",
        "cs.ats.desc": "Improving resume compatibility with ATS requirements using TF-IDF techniques and natural language processing.",
        "cs.fraud.title": "Procurement Fraud Detection",
        "cs.fraud.desc": "A specialized model for detecting suspicious patterns in public procurement deals using advanced machine learning algorithms.",
        "cs.sentiment.title": "Sentiment Analysis (NLP)",
        "cs.sentiment.desc": "An advanced tool for sentiment analysis in Arabic and English texts, using LSTM neural networks for high-accuracy sentiment classification.",

        "proj.tag": "Our Work",
        "proj.title": 'Featured <span class="highlight">Projects</span>',
        "proj.subtitle": "Examples of solutions we built for our clients",
        "proj.propai.desc": "A smart real estate valuation platform based on record analysis and fair value prediction",
        "proj.cv.desc": "An interactive resume showcasing experience and projects using modern web technologies",
        "proj.ats.title": "ATS Resume Optimizer",
        "proj.ats.desc": "Improving resume compatibility with ATS requirements using TF-IDF",
        "proj.fraud.title": "Procurement Fraud Detection",
        "proj.fraud.desc": "A specialized model for detecting suspicious patterns in public procurement deals",

        "test.tag": "Testimonials",
        "test.title": 'What Our <span class="highlight">Clients</span> Say',
        "test.subtitle": "What people say about working with us",
        "test.1.quote": '"Innovision helped us develop an AI strategy that changed the way we work. The results were amazing in less than 3 months."',
        "test.1.name": "Technical Director, Leading Company",
        "test.1.role": "Financial Sector",
        "test.2.quote": '"The biometric authentication system Innovision developed raised our security level by 95% with amazing ease of use."',
        "test.2.name": "Information Security Officer",
        "test.2.role": "Government Sector",
        "test.3.quote": '"High professionalism and deep understanding of business needs. The PropAI platform was a game-changer in real estate valuation."',
        "test.3.name": "Real Estate Manager",
        "test.3.role": "Real Estate Development Sector",

        "blog.tag": "Blog",
        "blog.title": 'Latest <span class="highlight">Articles</span>',
        "blog.subtitle": "Insights and experience in AI and digital transformation",
        "blog.1.title": "5 Signs Your Business Needs AI",
        "blog.1.desc": "How do you know it's time to adopt AI in your organization? Here are 5 clear indicators...",
        "blog.2.title": "The Difference Between Machine Learning and Deep Learning, Simply Explained",
        "blog.2.desc": "A simplified explanation of key AI concepts with practical examples from our projects...",
        "blog.3.title": "How to Start an AI Project in 3 Months",
        "blog.3.desc": "A practical action plan for implementing your first AI project with clear steps and tangible results...",

        "cv.tag": "My Experience",
        "cv.title": 'My <span class="highlight">Resume</span>',
        "cv.who": "About Me",
        "cv.summary": "A State Engineer in Electronics and Digital Development with over 25 years of leadership experience managing biometric systems, technical operations, and digital transformation initiatives in the public sector. Combines administrative and advanced governance expertise with technical proficiency in machine learning and data science.",
        "cv.h1": "State Engineering + 5 years",
        "cv.h2": "Kaggle & Stanford Certifications",
        "cv.h3": "Government & International Experience",
        "cv.btn_contact": "Contact Me",
        "cv.tl1.year": "2025 - Present",
        "cv.tl1.desc": "Independent Python & AI Developer - Qatar",
        "cv.tl2.desc": "Director of Civil Status Center - Jeddah",
        "cv.tl3.desc": "Director of Document Authentication - ANRPTS",
        "cv.tl4.desc": "State Engineer - Electronics & Digital Development",

        "contact.tag": "Contact",
        "contact.title": 'Let\'s <span class="highlight">Talk</span>',
        "contact.subtitle": "Have a project? An idea? We're here to help",
        "contact.info_title": "Contact Information",
        "contact.location": "Doha, Qatar",

        "form.title": "Request a Service",
        "form.subtitle": "Fill out the form and we'll respond within 24 hours",
        "form.name_label": "Full Name",
        "form.name_ph": "Full Name",
        "form.email_label": "Email",
        "form.email_ph": "Email",
        "form.phone_label": "Phone Number",
        "form.phone_ph": "Phone Number",
        "form.service_label": "Requested Service",
        "form.service_choose": "Choose a Service",
        "form.service_other": "Other",
        "form.details_label": "Request Details",
        "form.details_ph": "Write your request details...",
        "form.submit": "Send Request",
        "form.msg_required": "Please fill in all fields",
        "form.msg_invalid_email": "Please enter a valid email address",
        "form.msg_sending": "Sending...",
        "form.msg_success": "✅ Your request was sent successfully! We'll contact you soon.",
        "form.msg_error": "❌ An error occurred while sending. Please try again.",

        "footer.rights": "© 2026 Innovision. All rights reserved",

        "payment.tag": "Payment",
        "payment.title": 'Payment <span class="highlight">Methods</span>',
        "payment.subtitle": "Transfer the amount directly to the following bank account",
        "payment.bank_label": "Bank Name",
        "payment.holder_label": "Account Holder Name",
        "payment.account_label": "Account Number",
        "payment.iban_label": "IBAN",
        "payment.copy_btn": "Copy",
        "payment.copied": "✅ Copied",
        "payment.note": "After completing the transfer, please send the transfer receipt via WhatsApp or email to confirm your request.",

        "article.back": "Back to Blog",
        "article.cta_btn_1": "Book a Free Consultation",
        "article.cta_btn_2": "Contact Us for Advice",
        "article.cta_btn_3": "Book a Free Assessment Session",

        "a1.meta": "August 10, 2026  •  5 min read",
        "a1.p_intro": "Many business owners hear about artificial intelligence every day, but the real question they face is: \"Does my organization actually need this now, or is it just a trend?\" The truth is AI isn't a technical luxury — it's a practical tool that solves real problems when used at the right time and place. Here are 5 clear signs that your organization has reached that stage.",
        "a1.h1": "1. Repetitive Tasks Are Eating Your Team's Time",
        "a1.p1": "If your employees spend long hours daily on data entry, sorting requests, or answering repetitive customer questions, that's a direct sign of a major automation opportunity. AI tools, from chatbots to document processing systems, can complete these tasks with higher accuracy in a fraction of the time, freeing your team to focus on work that truly requires human thinking.",
        "a1.h2": "2. Your Decisions Rely on Gut Feeling More Than Data",
        "a1.p2": "If you've noticed that important decisions in your organization (like pricing, expansion, or choosing target customers) are often based on personal experience or guesswork rather than actual analysis of available data, you're missing real opportunities. Machine learning models can analyze thousands of historical records and detect patterns humans easily overlook, turning them into practical recommendations that support your decisions with greater confidence.",
        "a1.h3": "3. Difficulty Detecting Fraud or Suspicious Patterns",
        "a1.p3": "If your organization handles a large volume of financial transactions or requests, monitoring every case manually becomes nearly impossible. AI-based fraud detection systems monitor thousands of transactions in real time and alert you immediately when an abnormal pattern appears, reducing financial losses and protecting your organization's reputation.",
        "a1.h4": "4. Inconsistent or Slow Customer Experience",
        "a1.p4": "When customers complain about slow response times or inconsistent service between different employees, that's a sign your organization needs smart systems that ensure uniform quality around the clock. Whether through a smart assistant that instantly answers common questions, or a system that routes each customer to the right solution quickly, technology here noticeably improves the experience.",
        "a1.h5": "5. Your Competitors Have Already Started Moving",
        "a1.p5": "If you notice your direct competitors announcing AI solutions or improvements in service speed, it's time to assess your position. Delaying adoption of these tools doesn't just mean lost efficiency — it can mean losing market share to those who moved faster.",
        "a1.h_end": "How Do You Start?",
        "a1.p_end": "The first step isn't buying the latest tools — it's a realistic assessment of your current operations and identifying where the biggest opportunity for impact lies. At Innovision, we always start with a readiness assessment session that helps you know exactly where to begin your AI journey, with practical, measurable steps instead of generic solutions that don't fit your business.",
        "a1.cta_text": "Does your organization show one or more of these signs?",

        "a2.meta": "July 25, 2026  •  6 min read",
        "a2.p_intro": "One of the most frequent questions I receive from clients is: \"What is the difference between Machine Learning (ML) and Deep Learning (DL)? And why does everyone use them interchangeably as if they were the same thing?\" The truth is that there is an important distinction between them, and understanding it will help you make a smarter decision when considering an AI project for your organization.",
        "a2.h1": "Artificial Intelligence: The Big Umbrella",
        "a2.p1": "Before separating the two, we must understand that \"Artificial Intelligence\" (AI) is the broader umbrella term. It refers to any system that mimics human capabilities such as reasoning, learning, and decision-making. Under this large umbrella falls \"Machine Learning,\" and within Machine Learning lies \"Deep Learning.\" In other words, all deep learning is machine learning, but not all machine learning is deep learning.",
        "a2.h2": "Machine Learning: Learning from Examples",
        "a2.p2a": "Machine Learning is a method that enables computers to learn from data instead of explicitly writing instructions for every scenario. Rather than programming fixed rules, we feed the system a large amount of examples (such as thousands of past financial transactions), and it learns the underlying patterns to make predictions about new cases. Practical Example: A model predicting real estate prices based on area, location, and the number of rooms, relying on data from thousands of previous property records.",
        "a2.p2b": "Machine Learning is highly effective with structured data (like tables of numbers and categories). It typically requires relatively less data than deep learning and is faster to train and deploy.",
        "a2.h3": "Deep Learning: Neural Networks Mimicking the Human Brain",
        "a2.p3a": "Deep Learning is an advanced subset of machine learning that relies on \"Artificial Neural Networks\" composed of multiple layers (hence the term \"deep\"). These networks are inspired by the structure and function of biological neurons in the human brain. They can learn highly complex patterns from vast amounts of unstructured data, such as images, audio, and long texts.",
        "a2.p3b": "Practical Example: Facial recognition in photos, sentiment analysis in long Arabic articles, or smart voice assistants. These tasks are complex enough that traditional machine learning struggles to handle them efficiently, whereas deep learning clearly excels.",
        "a2.h4": "When Should You Use Which?",
        "a2.p4a": "The decision depends on the nature of your problem and the volume of data available:",
        "a2.p4b": "Use Traditional Machine Learning: When you have structured data (tables), a moderate dataset size, and need fast, easily interpretable results — such as sales forecasting or customer segmentation.",
        "a2.p4c": "Use Deep Learning: When dealing with images, audio, or long texts, possessing a massive amount of data, and having the capacity to invest more time and computational power for training — such as computer vision systems or advanced Natural Language Processing (NLP).",
        "a2.h5": "Summary",
        "a2.p5": "Not every AI project requires deep learning; often, a simple machine learning model delivers excellent results at a fraction of the cost and time. The key is choosing the right tool for the size and nature of your actual problem, not the most complex or trendy one.",
        "a2.cta_text": "Not sure which type fits your project?",

        "a3.meta": "July 5, 2026  •  7 min read",
        "a3.p_intro": "The biggest mistake business owners make when thinking about an AI project is trying to build a comprehensive, perfect solution from day one. The result is usually a delayed project, doubled costs, and one that may never see the light of day. The smarter approach is to start with a practical plan divided across 3 months, producing tangible results quickly and building confidence before scaling. Here's a realistic three-phase action plan.",
        "a3.h1": "Month One: Assessment and Identifying the Opportunity",
        "a3.p1a": "Week 1-2: Meet with your team and identify one specific, measurable problem — don't try to solve everything at once. Ask yourself: where are we losing the most time or money right now? Is it in customer service, data analysis, or error detection?",
        "a3.p1b": "Week 3-4: Assess your available data. Do you have sufficient, reliable records covering this problem? AI depends fundamentally on data quality, so a project without adequate data is doomed to fail from the start. At this stage, also define a clear success metric — for example, reducing response time by 30%, or raising fraud detection accuracy to 90%.",
        "a3.h2": "Month Two: Building an Initial Model (MVP)",
        "a3.p2a": "Week 5-6: Start building a simple Minimum Viable Product that solves part of the problem, not every detail. The goal here isn't perfection — it's quickly validating that the idea actually works on your real data.",
        "a3.p2b": "Week 7-8: Test the initial model on real data (but still isolated from actual operations), and measure results against the success metric you defined in month one. This stage often reveals unexpected challenges, and that's completely normal — the goal is to learn quickly and adjust course before investing more resources.",
        "a3.h3": "Month Three: Live Trial and Gradual Scaling",
        "a3.p3a": "Week 9-10: Launch the model on a limited scale within the actual work environment — one department, or a small segment of customers. This lets you monitor real performance and gather direct feedback from actual users before full-scale rollout.",
        "a3.p3b": "Week 11-12: Based on the live trial results, refine the model and improve its accuracy, then set a gradual expansion plan for the rest of the organization. At this stage, document lessons learned and define how the model will be maintained and monitored long-term — because an AI model needs ongoing follow-up, not a one-time launch.",
        "a3.h4": "Why Is This Approach Better Than the \"Big Project\"?",
        "a3.p4": "This phased approach reduces financial risk, gives you tangible results you can present to management or investors within weeks rather than years, and builds internal confidence in the technology before major scaling. Also, if the first idea doesn't work as expected, your loss is limited to a month or two, not an entire project with a massive budget.",
        "a3.h5": "Conclusion",
        "a3.p5": "A successful AI project doesn't start with the latest technology — it starts with a clear problem, reliable data, and a realistic phased plan. In just 3 months, you can go from idea to an actual working model that adds real value to your organization.",
        "a3.cta_text": "Ready to start your organization's first AI project?"
    },

    fr: {
        "page-title": "Innovision | Innovation et Transformation Digitale",
        "nav.home": "Accueil",
        "nav.services": "Services",
        "nav.casestudies": "Études de cas",
        "nav.projects": "Projets",
        "nav.testimonials": "Témoignages",
        "nav.blog": "Blog",
        "nav.cv": "CV",
        "nav.contact": "Contact",
        "nav.payment": "Paiement",

        "hero.badge": "Innovation et Transformation Digitale",
        "hero.title": 'Élevez votre entreprise <br>grâce à <span class="highlight">l\'Intelligence Artificielle</span>',
        "hero.subtitle": "Nous proposons des conseils spécialisés et des solutions logicielles avancées en intelligence artificielle, apprentissage automatique et systèmes biométriques",
        "hero.stat1": "Ans d'expérience",
        "hero.stat2": "Projets",
        "hero.stat3": "Langues",
        "hero.btn_explore": "Découvrir nos services",
        "hero.btn_contact": "Contactez-nous",

        "ai.toggle": "Demandez-moi",
        "ai.header": "Assistant IA",
        "ai.experience": "Expérience",
        "ai.missions": "Missions",
        "ai.projects": "Projets",
        "ai.certifications": "Certifications et Formations",
        "ai.contact": "Contact",
        "ai.welcome": "👋 Bonjour ! Choisissez une option ci-dessus pour obtenir des informations instantanées.",

        "services.tag": "Ce que nous offrons",
        "services.title": 'Nos Services <span class="highlight">Spécialisés</span>',
        "services.subtitle": "Des solutions d'IA adaptées aux besoins uniques de votre entreprise",
        "services.btn": "Demander le service",
        "services.consulting.title": "Conseil en IA",
        "services.consulting.desc": "Évaluation de la maturité organisationnelle et élaboration d'une stratégie IA sur mesure générant un retour tangible",
        "services.ml.title": "Développement de Modèles ML",
        "services.ml.desc": "Modèles prédictifs personnalisés, analyse de données avancée et systèmes intelligents de détection de fraude",
        "services.biometric.title": "Systèmes Biométriques",
        "services.biometric.desc": "Solutions d'empreintes digitales, faciales et vocales avec intégration sécurisée aux systèmes de sécurité et d'identité existants",
        "services.digital.title": "Transformation Digitale",
        "services.digital.desc": "Développement d'infrastructures numériques, automatisation des processus et renforcement des capacités des équipes techniques",

        "link.view_project": "Voir le projet",
        "link.read_more": "Lire la suite",

        "cs.tag": "Nos réussites",
        "cs.title": 'Études de <span class="highlight">Cas</span>',
        "cs.subtitle": "Exemples de projets qui ont fait une réelle différence",
        "cs.propai.title": "PropAI - Évaluation Immobilière Intelligente",
        "cs.propai.desc": "Une plateforme intégrée d'évaluation immobilière au Qatar utilisant l'IA, analysant plus de 1000 biens et prédisant des valeurs justes avec une grande précision.",
        "cs.ats.title": "Optimiseur de CV ATS",
        "cs.ats.desc": "Amélioration de la compatibilité des CV avec les exigences des systèmes ATS grâce aux techniques TF-IDF et au traitement du langage naturel.",
        "cs.fraud.title": "Détection de Fraude dans les Marchés Publics",
        "cs.fraud.desc": "Un modèle spécialisé pour détecter les schémas suspects dans les marchés publics à l'aide d'algorithmes avancés d'apprentissage automatique.",
        "cs.sentiment.title": "Analyse de Sentiment (NLP)",
        "cs.sentiment.desc": "Un outil avancé d'analyse de sentiment pour les textes arabes et anglais, utilisant des réseaux de neurones LSTM pour une classification de haute précision.",

        "proj.tag": "Nos réalisations",
        "proj.title": 'Projets <span class="highlight">Phares</span>',
        "proj.subtitle": "Exemples de solutions développées pour nos clients",
        "proj.propai.desc": "Une plateforme intelligente d'évaluation immobilière basée sur l'analyse des données et la prédiction de la juste valeur",
        "proj.cv.desc": "Un CV interactif présentant l'expérience et les projets avec des technologies web modernes",
        "proj.ats.title": "Optimiseur de CV ATS",
        "proj.ats.desc": "Amélioration de la compatibilité des CV avec les exigences des systèmes ATS grâce au TF-IDF",
        "proj.fraud.title": "Détection de Fraude dans les Marchés Publics",
        "proj.fraud.desc": "Un modèle spécialisé pour détecter les schémas suspects dans les marchés publics",

        "test.tag": "Témoignages",
        "test.title": 'Avis de nos <span class="highlight">Clients</span>',
        "test.subtitle": "Ce que disent ceux qui ont travaillé avec nous",
        "test.1.quote": "\"Innovision nous a aidés à développer une stratégie IA qui a transformé notre façon de travailler. Les résultats ont été impressionnants en moins de 3 mois.\"",
        "test.1.name": "Directeur Technique, Entreprise Leader",
        "test.1.role": "Secteur Financier",
        "test.2.quote": "\"Le système d'authentification biométrique développé par Innovision a augmenté notre niveau de sécurité de 95% avec une facilité d'utilisation remarquable.\"",
        "test.2.name": "Responsable de la Sécurité de l'Information",
        "test.2.role": "Secteur Public",
        "test.3.quote": "\"Grand professionnalisme et compréhension approfondie des besoins métier. La plateforme PropAI a révolutionné l'évaluation immobilière.\"",
        "test.3.name": "Directeur Immobilier",
        "test.3.role": "Secteur du Développement Immobilier",

        "blog.tag": "Blog",
        "blog.title": 'Derniers <span class="highlight">Articles</span>',
        "blog.subtitle": "Perspectives et expérience en IA et transformation digitale",
        "blog.1.title": "5 Signes que votre Entreprise a Besoin de l'IA",
        "blog.1.desc": "Comment savoir si le moment est venu d'adopter l'IA dans votre organisation ? Voici 5 indicateurs clairs...",
        "blog.2.title": "La différence entre l'Apprentissage Automatique et l'Apprentissage Profond, tout simplement",
        "blog.2.desc": "Une explication simplifiée des concepts clés de l'IA avec des exemples pratiques issus de nos projets...",
        "blog.3.title": "Comment Démarrer un Projet IA en 3 Mois",
        "blog.3.desc": "Un plan d'action pratique pour mettre en œuvre votre premier projet IA avec des étapes claires et des résultats tangibles...",

        "cv.tag": "Mon Expérience",
        "cv.title": 'Mon <span class="highlight">CV</span>',
        "cv.who": "À propos de moi",
        "cv.summary": "Ingénieur d'État en électronique et développement numérique avec plus de 25 ans d'expérience en leadership dans la gestion de systèmes biométriques, d'opérations techniques et d'initiatives de transformation digitale dans le secteur public. Combine expertise administrative et gouvernance avancée avec compétence technique en apprentissage automatique et science des données.",
        "cv.h1": "Ingénierie d'État + 5 ans",
        "cv.h2": "Certifications Kaggle et Stanford",
        "cv.h3": "Expérience Gouvernementale et Internationale",
        "cv.btn_contact": "Me Contacter",
        "cv.tl1.year": "2025 - Présent",
        "cv.tl1.desc": "Développeur Python et IA Indépendant - Qatar",
        "cv.tl2.desc": "Directeur du Centre d'État Civil - Djeddah",
        "cv.tl3.desc": "Directeur de l'Authentification des Documents - ANRPTS",
        "cv.tl4.desc": "Ingénieur d'État - Électronique et Développement Numérique",

        "contact.tag": "Contact",
        "contact.title": 'Discutons <span class="highlight">Ensemble</span>',
        "contact.subtitle": "Vous avez un projet ? Une idée ? Nous sommes là pour vous aider",
        "contact.info_title": "Informations de Contact",
        "contact.location": "Doha, Qatar",

        "form.title": "Demander un Service",
        "form.subtitle": "Remplissez le formulaire et nous répondrons sous 24 heures",
        "form.name_label": "Nom Complet",
        "form.name_ph": "Nom Complet",
        "form.email_label": "Email",
        "form.email_ph": "Email",
        "form.phone_label": "Numéro de Téléphone",
        "form.phone_ph": "Numéro de Téléphone",
        "form.service_label": "Service Demandé",
        "form.service_choose": "Choisir un Service",
        "form.service_other": "Autre",
        "form.details_label": "Détails de la Demande",
        "form.details_ph": "Écrivez les détails de votre demande...",
        "form.submit": "Envoyer la Demande",
        "form.msg_required": "Veuillez remplir tous les champs",
        "form.msg_invalid_email": "Veuillez entrer une adresse e-mail valide",
        "form.msg_sending": "Envoi en cours...",
        "form.msg_success": "✅ Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.",
        "form.msg_error": "❌ Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",

        "footer.rights": "© 2026 Innovision. Tous droits réservés",

        "payment.tag": "Paiement",
        "payment.title": 'Moyens de <span class="highlight">Paiement</span>',
        "payment.subtitle": "Virez le montant directement sur le compte bancaire suivant",
        "payment.bank_label": "Nom de la Banque",
        "payment.holder_label": "Nom du Titulaire du Compte",
        "payment.account_label": "Numéro de Compte",
        "payment.iban_label": "IBAN",
        "payment.copy_btn": "Copier",
        "payment.copied": "✅ Copié",
        "payment.note": "Après avoir effectué le virement, veuillez envoyer le reçu par WhatsApp ou par e-mail pour confirmer votre demande.",

        "article.back": "Retour au Blog",
        "article.cta_btn_1": "Réserver une Consultation Gratuite",
        "article.cta_btn_2": "Contactez-nous pour Conseil",
        "article.cta_btn_3": "Réserver une Session d'Évaluation Gratuite",

        "a1.meta": "10 août 2026  •  5 min de lecture",
        "a1.p_intro": "Beaucoup de chefs d'entreprise entendent parler d'intelligence artificielle chaque jour, mais la vraie question qu'ils se posent est : \"Mon organisation en a-t-elle vraiment besoin maintenant, ou est-ce juste une tendance ?\" La vérité est que l'IA n'est pas un luxe technologique, mais un outil pratique qui résout de vrais problèmes lorsqu'il est utilisé au bon moment et au bon endroit. Voici 5 signes clairs indiquant que votre organisation a atteint ce stade.",
        "a1.h1": "1. Les tâches répétitives consomment le temps de votre équipe",
        "a1.p1": "Si vos employés passent de longues heures chaque jour à saisir des données, trier des demandes ou répondre à des questions répétitives des clients, c'est un signe direct d'une opportunité majeure d'automatisation. Les outils d'IA, des chatbots aux systèmes de traitement de documents, peuvent accomplir ces tâches avec une précision plus élevée en une fraction du temps, libérant votre équipe pour se concentrer sur un travail qui nécessite vraiment une réflexion humaine.",
        "a1.h2": "2. Vos décisions reposent plus sur l'intuition que sur les données",
        "a1.p2": "Si vous avez remarqué que des décisions importantes dans votre organisation (comme la tarification, l'expansion, ou le choix des clients cibles) sont souvent basées sur l'expérience personnelle ou l'intuition plutôt que sur une analyse réelle des données disponibles, vous manquez de véritables opportunités. Les modèles d'apprentissage automatique peuvent analyser des milliers d'enregistrements historiques et détecter des schémas que les humains remarquent difficilement, les transformant en recommandations pratiques qui soutiennent vos décisions avec plus de confiance.",
        "a1.h3": "3. Difficulté à détecter la fraude ou les schémas suspects",
        "a1.p3": "Si votre organisation traite un grand volume de transactions financières ou de demandes, surveiller chaque cas manuellement devient presque impossible. Les systèmes de détection de fraude basés sur l'IA surveillent des milliers de transactions en temps réel et vous alertent immédiatement en cas de schéma anormal, réduisant les pertes financières et protégeant la réputation de votre organisation.",
        "a1.h4": "4. Expérience client incohérente ou lente",
        "a1.p4": "Lorsque vos clients se plaignent de la lenteur des réponses ou de l'incohérence du service entre différents employés, c'est le signe que votre organisation a besoin de systèmes intelligents garantissant une qualité uniforme 24h/24. Que ce soit via un assistant intelligent répondant instantanément aux questions courantes, ou un système orientant rapidement chaque client vers la solution adaptée, la technologie améliore ici nettement l'expérience.",
        "a1.h5": "5. Vos concurrents ont déjà commencé à bouger",
        "a1.p5": "Si vous remarquez que vos concurrents directs annoncent des solutions d'IA ou des améliorations de la rapidité de leurs services, il est temps d'évaluer votre position. Retarder l'adoption de ces outils ne signifie pas seulement une perte d'efficacité, cela peut signifier perdre des parts de marché au profit de ceux qui ont bougé plus vite.",
        "a1.h_end": "Comment commencer ?",
        "a1.p_end": "La première étape n'est pas d'acheter les derniers outils, mais d'évaluer de manière réaliste vos opérations actuelles et d'identifier où se trouve la plus grande opportunité d'impact. Chez Innovision, nous commençons toujours par une session d'évaluation de maturité qui vous aide à savoir exactement par où commencer votre parcours avec l'IA, avec des étapes pratiques et mesurables plutôt que des solutions génériques qui ne conviennent pas à votre activité.",
        "a1.cta_text": "Votre organisation présente-t-elle un ou plusieurs de ces signes ?",

        "a2.meta": "25 juillet 2026  •  6 min de lecture",
        "a2.p_intro": "L'une des questions les plus fréquentes que me posent mes clients est la suivante : \"Quelle est la différence entre l'Apprentissage Automatique (Machine Learning) et l'Apprentissage Profond (Deep Learning) ? Et pourquoi tout le monde les utilise-t-il comme s'il s'agissait de la même chose ?\" En réalité, il existe une différence fondamentale entre les deux, et la comprendre vous aidera à prendre une décision plus éclairée lors de la planification d'un projet d'intelligence artificielle pour votre entreprise.",
        "a2.h1": "L'Intelligence Artificielle : La grande ligne directrice",
        "a2.p1": "Avant de les distinguer, il faut comprendre que \"l'Intelligence Artificielle\" (IA) est le terme le plus englobant. Il désigne tout système qui simule les capacités humaines telles que la réflexion, l'apprentissage et la prise de décision. Sous cette grande catégorie se trouve \"l'Apprentissage Automatique\", et sous ce dernier s'inscrit \"l'Apprentissage Profond\". En d'autres termes, tout apprentissage profond est un apprentissage automatique, mais tout apprentissage automatique n'est pas un apprentissage profond.",
        "a2.h2": "L'Apprentissage Automatique : Apprendre par l'exemple",
        "a2.p2a": "L'apprentissage automatique est une méthode qui permet à l'ordinateur d'apprendre à partir de données au lieu d'écrire des instructions programmées explicites pour chaque cas. Au lieu de définir des règles fixes, nous fournissons au système une grande quantité d'exemples (comme des milliers de transactions financières passées), et il identifie les modèles pour prédire de nouveaux cas. Exemple concret : Un modèle qui prédit le prix d'un bien immobilier en fonction de la superficie, de l'emplacement et du nombre de pièces, en s'appuyant sur les données de milliers de transactions précédentes.",
        "a2.p2b": "L'apprentissage automatique est particulièrement efficace avec les données structurées (comme les tableaux de chiffres et de catégories). Il nécessite généralement moins de données que l'apprentissage profond et se révèle plus rapide à entraîner et à déployer.",
        "a2.h3": "L'Apprentissage Profond : Des réseaux inspirés du cerveau humain",
        "a2.p3a": "L'apprentissage profond est une branche avancée de l'apprentissage automatique qui repose sur des \"réseaux de neurones artificiels\" composés de plusieurs couches (d'où le terme \"profond\"). Ces réseaux s'inspirent du fonctionnement des neurones du cerveau humain et sont capables de déceler des motifs très complexes à partir de quantités massives de données non structurées, telles que des images, des sons ou de longs textes.",
        "a2.p3b": "Exemple concret : La reconnaissance faciale sur des photos, l'analyse de sentiments dans un long texte rédigé en arabe, ou encore les assistants vocaux intelligents. Ces tâches sont d'une complexité telle que l'apprentissage automatique traditionnel peine à les traiter efficacement, alors que l'apprentissage profond y excelle naturellement.",
        "a2.h4": "Quand utiliser l'un ou l'autre ?",
        "a2.p4a": "Le choix dépend de la nature de votre problème et du volume de données dont vous disposez :",
        "a2.p4b": "Utilisez l'Apprentissage Automatique traditionnel : Lorsque vous disposez de données structurées (tableaux), d'un volume moyen, et que vous recherchez des résultats rapides et facilement interprétables — comme la prévision des ventes ou la segmentation des clients.",
        "a2.p4c": "Utilisez l'Apprentissage Profond : Lorsque vous traitez des images, des enregistrements audio ou de longs textes, que vous disposez d'une quantité massive de données et que vous pouvez investir davantage de temps et de ressources de calcul — comme les systèmes de vision par ordinateur ou le traitement avancé du langage naturel (NLP).",
        "a2.h5": "En résumé",
        "a2.p5": "Tous les projets d'IA ne nécessitent pas l'utilisation de l'apprentissage profond ; bien souvent, un modèle simple d'apprentissage automatique offre d'excellents résultats pour un coût et un délai nettement inférieurs. L'essentiel est d'adapter l'outil à la taille et à la nature exacte de votre besoin, plutôt que d'opter systématiquement pour la technologie la plus complexe ou la plus récente.",
        "a2.cta_text": "Vous ne savez pas quel type convient à votre projet ?",

        "a3.meta": "5 juillet 2026  •  7 min de lecture",
        "a3.p_intro": "La plus grande erreur que commettent les chefs d'entreprise en pensant à un projet d'IA est d'essayer de construire une solution complète et parfaite dès le premier jour. Le résultat est généralement un projet retardé, dont le coût double, et qui ne voit parfois jamais le jour. L'approche la plus intelligente consiste à commencer par un plan pratique réparti sur 3 mois, produisant rapidement des résultats tangibles et instaurant la confiance avant l'expansion. Voici un plan d'action réaliste en trois phases.",
        "a3.h1": "Mois 1 : Évaluation et identification de l'opportunité",
        "a3.p1a": "Semaines 1-2 : Réunissez-vous avec votre équipe et identifiez un problème unique, spécifique et mesurable — n'essayez pas de tout résoudre en même temps. Demandez-vous : où perdons-nous le plus de temps ou d'argent actuellement ? Est-ce dans le service client, l'analyse de données, ou la détection d'erreurs ?",
        "a3.p1b": "Semaines 3-4 : Évaluez les données dont vous disposez. Avez-vous des enregistrements suffisants et fiables couvrant ce problème ? L'IA dépend fondamentalement de la qualité des données, donc un projet sans données adéquates est voué à l'échec dès le départ. À ce stade, définissez également un indicateur de succès clair — par exemple, réduire le temps de réponse de 30 %, ou porter la précision de détection de fraude à 90 %.",
        "a3.h2": "Mois 2 : Construction d'un modèle initial (MVP)",
        "a3.p2a": "Semaines 5-6 : Commencez à construire un produit minimum viable simple qui résout une partie du problème, pas tous les détails. L'objectif ici n'est pas la perfection, mais de valider rapidement que l'idée fonctionne réellement sur vos données réelles.",
        "a3.p2b": "Semaines 7-8 : Testez le modèle initial sur des données réelles (mais encore isolées des opérations réelles), et mesurez les résultats par rapport à l'indicateur de succès défini au premier mois. Cette étape révèle souvent des défis inattendus, ce qui est tout à fait normal — l'objectif est d'apprendre rapidement et d'ajuster le cap avant d'investir davantage de ressources.",
        "a3.h3": "Mois 3 : Essai en conditions réelles et expansion progressive",
        "a3.p3a": "Semaines 9-10 : Lancez le modèle à échelle limitée dans l'environnement de travail réel — un seul département, ou un petit segment de clients. Cela vous permet de surveiller la performance réelle et de recueillir des retours directs des utilisateurs réels avant un déploiement complet.",
        "a3.p3b": "Semaines 11-12 : Sur la base des résultats de l'essai en conditions réelles, affinez le modèle et améliorez sa précision, puis établissez un plan d'expansion progressive pour le reste de l'organisation. À ce stade, documentez les leçons apprises et définissez comment le modèle sera maintenu et surveillé à long terme — car un modèle d'IA nécessite un suivi continu, pas un lancement unique.",
        "a3.h4": "Pourquoi cette approche est-elle meilleure que le \"grand projet\" ?",
        "a3.p4": "Cette approche progressive réduit les risques financiers, vous donne des résultats tangibles que vous pouvez présenter à la direction ou aux investisseurs en quelques semaines plutôt qu'en années, et instaure une confiance interne dans la technologie avant une expansion majeure. De plus, si la première idée ne fonctionne pas comme prévu, votre perte se limite à un ou deux mois, pas à un projet entier avec un budget massif.",
        "a3.h5": "Conclusion",
        "a3.p5": "Un projet d'IA réussi ne commence pas par la technologie la plus récente, mais par un problème clair, des données fiables et un plan progressif réaliste. En seulement 3 mois, vous pouvez passer d'une idée à un modèle réellement fonctionnel qui apporte une valeur réelle à votre organisation.",
        "a3.cta_text": "Prêt à démarrer le premier projet d'IA de votre organisation ?"
    }
};

// ===== دالة مساعدة: جلب قاموس اللغة الحالية (تُستخدم من script.js) =====
function getCurrentTranslations() {
    let lang = 'ar';
    try {
        lang = document.documentElement.lang || localStorage.getItem('innovision_lang') || 'ar';
    } catch (e) { /* تجاهل */ }
    return translations[lang] || translations.ar;
}

// ===== تطبيق الترجمة على الصفحة =====
function applyTranslations(lang) {
    const dict = translations[lang] || translations.ar;

    // نصوص عادية (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // نصوص تحتوي HTML (مثل العناوين مع <span class="highlight">)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // الـ placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // عنوان الصفحة
    if (dict['page-title']) {
        document.title = dict['page-title'];
    }

    // اتجاه الصفحة واللغة
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // تفعيل الزر الصحيح بصرياً
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // حفظ التفضيل
    try {
        localStorage.setItem('innovision_lang', lang);
    } catch (e) { /* تجاهل إن لم يكن التخزين متاحاً */ }
}

// ===== ربط أزرار اللغة =====
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        applyTranslations(this.dataset.lang);
    });
});

// ===== تطبيق اللغة المحفوظة (أو العربية افتراضياً) عند تحميل الصفحة =====
(function initLanguage() {
    let savedLang = 'ar';
    try {
        savedLang = localStorage.getItem('innovision_lang') || 'ar';
    } catch (e) { /* تجاهل */ }
    if (savedLang !== 'ar') {
        applyTranslations(savedLang);
    }
})();
