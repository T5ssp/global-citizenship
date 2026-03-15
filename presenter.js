(function() {
    var slides = [
        {
            badge: 'الافتتاح',
            kicker: 'مدخل العرض',
            title: 'كيف قُدِّم هذا التكليف؟',
            lead: 'العرض يقرأ القضية الفلسطينية بوصفها قضية عالمية، ثم يربطها بشخصية يحيى السنوار، ثم ينتهي إلى حلول ودروس مستفادة في إطار المواطنة العالمية.',
            bullets: [
                'العمل منظم وفق بنية المقرر: القضية، الشخصية، الربط والحلول.',
                'الهدف ليس سرد الأحداث فقط، بل تحليل الأثر العالمي والبعد الإنساني والقانوني.',
                'يعتمد العرض على أمثلة واقعية ومراجع موثوقة متعددة الأنواع.',
                'المخرجات النهائية تشمل تقريرًا، عرضًا، وملاحق داعمة للفهم السريع.'
            ],
            quote: 'القضية هنا ليست خبرًا عابرًا، بل اختبار مستمر لمعنى العدالة في العالم.',
            footer: 'ابدأ بهذه الشريحة لضبط إطار النقاش قبل الدخول في التفاصيل.',
            objective: 'توضيح هيكل المشروع وإقناع المستمع من البداية بأن العرض منظم ومطابق للتكليف.',
            transition: 'بعد تحديد إطار العمل، أنتقل مباشرة إلى تعريف القضية وسبب اختيارها.',
            answer: 'إذا سُئلت عن الفكرة العامة: هذا عمل يربط بين قضية عالمية وشخصية مؤثرة وحلول عملية في إطار المواطنة العالمية.',
            sourceHref: 'index.html#intro'
        },
        {
            badge: 'القضية',
            kicker: 'تعريف واختيار',
            title: 'لماذا القضية الفلسطينية؟',
            lead: 'اختيرت القضية الفلسطينية لأنها تجمع بين التاريخ والحقوق والهوية والعدالة الدولية، وتمتد آثارها إلى المجتمع الدولي كله.',
            bullets: [
                'هي من أطول القضايا السياسية والحقوقية استمرارًا في العصر الحديث.',
                'تمس حق تقرير المصير، حق العودة، والحماية القانونية للمدنيين.',
                'تكشف التفاوت بين المبادئ المعلنة وتطبيق العدالة الدولية على الأرض.',
                'لذلك فهي مناسبة جدًا لقياس معنى المواطنة العالمية عمليًا.'
            ],
            quote: 'اختيار القضية لم يكن عاطفيًا فقط، بل لأنها تمثل اختبارًا مباشرًا للمواطنة العالمية.',
            footer: 'اربط بين سبب الاختيار ومعايير المقرر بوضوح هنا.',
            objective: 'إثبات أن اختيار القضية مبرر أكاديميًا وليس اختيارًا اعتباطيًا.',
            transition: 'بعد التعريف بالقضية، أشرح كيف نشأت وما الأسباب التي أبقتها ممتدة.',
            answer: 'إذا سُئلت لماذا هذه القضية تحديدًا: لأنها عالمية، مستمرة، وتجمع بين القانون والإنسان والسياسة.',
            sourceHref: 'index.html#intro'
        },
        {
            badge: 'الجذور',
            kicker: 'الأسباب',
            title: 'ما الذي أدى إلى نشوء القضية واستمرارها؟',
            lead: 'الأسباب ليست لحظة واحدة، بل بنية تاريخية متراكمة تبدأ من الانتداب ووعد بلفور وتصل إلى النكبة والاستيطان والحصار.',
            bullets: [
                'الانتداب البريطاني ووعد بلفور شكلا نقطة تحول في المسار السياسي لفلسطين.',
                'النكبة عام 1948 ولّدت أزمة لاجئين ممتدة عبر الأجيال.',
                'الاحتلال والاستيطان بعد 1967 عمّقا الأزمة ووسّعا آثارها.',
                'الحصار والانسداد السياسي جعلا القضية مستمرة لا مجرد حدث تاريخي منتهٍ.'
            ],
            quote: 'استمرار القضية ليس صدفة زمنية، بل نتيجة تراكم أسباب تاريخية وسياسية غير محلولة.',
            footer: 'هذه الشريحة ترفع درجة التحليل لأنها تنتقل من الوصف إلى التفسير.',
            objective: 'بيان الأسباب الأساسية التي أدت إلى نشوء القضية واستمرارها.',
            transition: 'من الجذور التاريخية أنتقل إلى التداعيات الإنسانية والقانونية المباشرة.',
            answer: 'إذا سُئلت عن السبب الأبرز: السبب ليس واحدًا، بل منظومة تاريخية وسياسية وقانونية متشابكة.',
            sourceHref: 'index.html#causes'
        },
        {
            badge: 'التداعيات',
            kicker: 'الأثر الإنساني',
            title: 'كيف تؤثر القضية على الإنسان والمواطنة العالمية؟',
            lead: 'القضية الفلسطينية تُظهر كيف ترتبط السياسة بحقوق الإنسان، وكيف ينتقل أثر الصراع إلى التعليم والصحة والعيش والكرامة.',
            bullets: [
                'اللجوء والنزوح والحصار تؤثر مباشرة على الحياة اليومية وحقوق الإنسان الأساسية.',
                'الأزمة لا تتعلق بالأرض فقط، بل بالعدالة الاجتماعية وحرية التنقل والكرامة.',
                'من منظور المواطنة العالمية، تطرح القضية سؤالًا أخلاقيًا حول مسؤولية الفرد والمجتمع الدولي.',
                'كل ذلك يجعلها قضية إنسانية لا يمكن اختزالها في عنوان سياسي ضيق.'
            ],
            quote: 'التداعيات الإنسانية هي ما يحول القضية من ملف سياسي إلى قضية ضمير عالمي.',
            footer: 'ركز هنا على الربط بين حقوق الإنسان والمواطنة العالمية.',
            objective: 'شرح التداعيات وربطها بالقيم العالمية التي يركز عليها المقرر.',
            transition: 'بعد شرح التداعيات، أوضح كيف امتد أثر القضية عالميًا إلى الدول والمؤسسات.',
            answer: 'إذا سُئلت عن صلتها بالمواطنة العالمية: لأنها تختبر التعاطف والمسؤولية والالتزام بالعدالة خارج الحدود الوطنية.',
            sourceHref: 'index.html#impact'
        },
        {
            badge: 'العالم',
            kicker: 'الامتداد الدولي',
            title: 'ما التأثير العالمي للقضية؟',
            lead: 'آثار القضية لا تقف عند حدود فلسطين، بل تمتد إلى القانون الدولي، الخطاب الحقوقي، الرأي العام العالمي، والمؤسسات الأممية.',
            bullets: [
                'القضية حاضرة في قرارات الأمم المتحدة والهيئات القانونية والحقوقية الدولية.',
                'أصبحت معيارًا لقياس صدقية القانون الدولي وتطبيقه المتوازن.',
                'تؤثر في الرأي العام العالمي وفي أنماط التضامن والمواقف المدنية العابرة للحدود.',
                'امتدادها العالمي يفسر لماذا بقيت حاضرة في الساحة الدولية لعقود.'
            ],
            quote: 'عالمية القضية لا تأتي من شهرتها فقط، بل من اتساع أثرها في السياسة والقانون والوعي العام.',
            footer: 'هذه الشريحة تحقق بند التأثير العالمي بوضوح مباشر.',
            objective: 'توضيح كيف تمتد آثار القضية إلى ما هو أبعد من السياق المحلي.',
            transition: 'بعد رسم صورة القضية عالميًا، أنتقل إلى الشخصية التي ربطت بها هذا التحليل.',
            answer: 'إذا سُئلت عن معنى الأثر العالمي: فهو تأثير على الدول والمؤسسات والقيم والمواقف، لا على الجغرافيا فقط.',
            sourceHref: 'index.html#global'
        },
        {
            badge: 'الشخصية',
            kicker: 'نبذة ودافع',
            title: 'من هو يحيى السنوار في هذا البحث؟',
            lead: 'يُعرض يحيى السنوار هنا بوصفه شخصية مرتبطة بسياق القضية، لا بوصفه حالة منفصلة عن بيئة اللجوء والحصار والصراع.',
            bullets: [
                'أهمية الشخصية في هذا البحث نابعة من ارتباطها المباشر بمسار القضية الفلسطينية.',
                'تحليل الشخصية يساعد على فهم العلاقة بين الفاعل السياسي والبنية التاريخية للصراع.',
                'الاهتمام بالشخصية لا يعني اختزال القضية فيها، بل استخدامها كنافذة لفهم جزء من تعقيدها.',
                'وبذلك يصبح اختيارها مبررًا ضمن إطار “قضية وشخصية عالمية”.'
            ],
            quote: 'الشخصية هنا أداة تحليل، وليست بديلًا عن القضية نفسها.',
            footer: 'بيّن هنا أن الاختيار علمي وتحليلي لا انفعالي.',
            objective: 'تقديم نبذة واضحة عن الشخصية وسبب ارتباطها بالقضية المختارة.',
            transition: 'بعد تعريف الشخصية، أقدم أمثلة ومواقف حقيقية توضّح حضورها في مسار القضية.',
            answer: 'إذا سُئلت لماذا اخترت هذه الشخصية: لأنها تكشف كيف تتشكل الأدوار السياسية داخل بيئة الصراع الممتدة.',
            sourceHref: 'index.html#persona'
        },
        {
            badge: 'أمثلة',
            kicker: 'أحداث ومواقف',
            title: 'ما الأمثلة الواقعية التي تُظهر دور الشخصية؟',
            lead: 'تم الاعتماد على محطات ميدانية وسياسية حقيقية لتوضيح حضور الشخصية في القضية، مثل مسيرات العودة وتطورات 2021 و2023.',
            bullets: [
                'مسيرات العودة 2018 تقدم مثالًا على التفاعل بين الفعل الشعبي والخطاب السياسي.',
                'أحداث 2021 تُظهر ربط الجبهات وتغير موقع غزة في المشهد الإقليمي.',
                'تطورات 2023 تكشف انتقال التأثير إلى مستوى دولي أوسع وأكثر تعقيدًا.',
                'هذه الأمثلة تجعل التحليل قائمًا على وقائع لا على أوصاف عامة فقط.'
            ],
            quote: 'الأمثلة الحقيقية هي ما يحول الشخصية من اسم إلى أثر يمكن تحليله.',
            footer: 'حافظ هنا على الاختصار: الحدث، لماذا ذُكر، وما دلالته.',
            objective: 'إثبات دور الشخصية عبر أمثلة ومواقف حقيقية كما يطلب rubric التكليف.',
            transition: 'بعد الأمثلة، أنتقل لتحليل الإنجازات أو الأثر السياسي الذي تكشفه هذه المحطات.',
            answer: 'إذا سُئلت عن أقوى مثال: استخدم المثال الذي تتذكره جيدًا واربِطه بالقضية لا بالشخصية وحدها.',
            sourceHref: 'index.html#events'
        },
        {
            badge: 'التحليل',
            kicker: 'الربط',
            title: 'كيف يُربط بين القضية والشخصية؟',
            lead: 'الربط يتم عبر إظهار كيف تُنتج البيئة التاريخية والسياسية شخصيات تؤثر في مسار القضية، وكيف تعيد هذه الشخصيات بدورها تشكيل المشهد.',
            bullets: [
                'القضية تشرح السياق العام، بينما الشخصية تكشف كيف يتحرك الفاعل داخل هذا السياق.',
                'الفهم المتكامل يحتاج إلى التاريخ والحدث والشخصية في آن واحد.',
                'الربط يرفع قيمة العمل من عرض منفصل إلى تحليل مركب ومتماسك.',
                'هذا الجزء مهم جدًا لأنه يحقق جوهر التكليف لا مجرد أجزائه المنفصلة.'
            ],
            quote: 'أقوى ما في العمل هو أنه لا يكتفي بجمع قسمين، بل يصنع بينهما صلة تفسيرية واضحة.',
            footer: 'هذه هي الشريحة التي تُظهر تميز العمل أمام الدكتور.',
            objective: 'بيان أن العلاقة بين القضية والشخصية تحليلية ومقصودة وليست شكلية.',
            transition: 'بعد اكتمال الربط، أنتقل مباشرة إلى الحلول وما تعلمته من هذا التحليل.',
            answer: 'إذا سُئلت ما الذي يميز العمل: قل إن قوة العمل في الربط التحليلي بين القضية والشخصية عبر أمثلة ومراجع.',
            sourceHref: 'index.html#analysis'
        },
        {
            badge: 'الحلول',
            kicker: 'التطبيق العملي',
            title: 'ما الحلول القابلة للتنفيذ؟',
            lead: 'الحلول المقترحة لا تقف عند مستوى الشعارات، بل تتوزع على الفرد والمجتمع والدولة والمؤسسات الدولية.',
            bullets: [
                'على مستوى الفرد: الوعي، التحقق من المعلومات، ودعم المبادرات الإنسانية والمسؤولة.',
                'على مستوى المجتمع: برامج التوعية والحوار والمبادرات المدنية والجامعية.',
                'على مستوى الدول: احترام القانون الدولي، حماية المدنيين، وربط السياسة بالحقوق.',
                'على مستوى المؤسسات الدولية: المساءلة، الإنفاذ، وعدم الاكتفاء بالإدانة الرمزية.'
            ],
            quote: 'الحل المقنع هو الذي يوزع المسؤولية على مستويات متعددة بدل انتظار طرف واحد فقط.',
            footer: 'اختم هذه الشريحة بجملة عن دور المواطن العالمي.',
            objective: 'عرض حلول واقعية قابلة للتنفيذ كما يطلب الجزء الثالث من التكليف.',
            transition: 'أختم أخيرًا بما تعلمته من هذا الربط وبكيف يمكن تلخيص العمل كله في دقيقة واحدة.',
            answer: 'إذا سُئلت هل الحلول واقعية: نعم، لأنها موزعة على مستويات مختلفة وليست مرتبطة بفاعل واحد.',
            sourceHref: 'index.html#solutions'
        },
        {
            badge: 'الخاتمة',
            kicker: 'خلاصة ومراجع',
            title: 'ماذا تعلمت من هذا العمل؟',
            lead: 'أبرز ما يظهر من هذا المشروع أن المواطنة العالمية ليست فكرة نظرية، بل موقف معرفي وأخلاقي يتطلب فهمًا وتحليلًا وربطًا مسؤولًا بين الإنسان والقضية والعالم.',
            bullets: [
                'تعلمت أن القضية الفلسطينية نموذج مركب يجمع بين التاريخ والحقوق والإنسان والسياسة.',
                'تعلمت أن الشخصية المؤثرة لا تُفهم بمعزل عن السياق الذي أنتجها.',
                'تعلمت أن الربط بين القضية والشخصية هو جوهر التحليل لا مجرد خطوة شكلية.',
                'واعتمد العمل على مراجع قانونية وحقوقية وأكاديمية واقتصادية موثوقة لدعم هذه القراءة.'
            ],
            quote: 'المعرفة هنا لا تنفصل عن المسؤولية، وهذه هي خلاصة المواطنة العالمية في هذا التكليف.',
            footer: 'يمكنك إنهاء العرض هنا ثم الانتقال إلى الأسئلة بثقة.',
            objective: 'إغلاق العرض بخلاصة قوية تترك انطباعًا منظمًا ومتوازنًا.',
            transition: 'بعد هذه الشريحة، انتقل إلى الأسئلة وارجع عند الحاجة إلى صفحة الملاحق أو الموقع الأصلي.',
            answer: 'إذا طُلب منك تلخيص المشروع في جملة: هذا عمل يربط بين قضية عالمية وشخصية مؤثرة وحلول عملية ضمن إطار المواطنة العالمية.',
            sourceHref: 'appendices.html#annotated-references'
        }
    ];

    var currentIndex = 0;
    var secondsElapsed = 0;
    var timerId = null;
    var notesVisible = true;
    var blackoutVisible = false;

    var slideList = document.getElementById('slideList');
    var currentSlideLabel = document.getElementById('currentSlideLabel');
    var presenterTimer = document.getElementById('presenterTimer');
    var slideKicker = document.getElementById('slideKicker');
    var slideBadge = document.getElementById('slideBadge');
    var slideTitle = document.getElementById('slideTitle');
    var slideLead = document.getElementById('slideLead');
    var slideBullets = document.getElementById('slideBullets');
    var slideQuote = document.getElementById('slideQuote');
    var slideFooter = document.getElementById('slideFooter');
    var sourceAnchorLink = document.getElementById('sourceAnchorLink');
    var speakerObjective = document.getElementById('speakerObjective');
    var speakerTransition = document.getElementById('speakerTransition');
    var speakerAnswer = document.getElementById('speakerAnswer');
    var speakerNotesPanel = document.getElementById('speakerNotesPanel');
    var presenterProgressBar = document.getElementById('presenterProgressBar');
    var startPauseTimerBtn = document.getElementById('startPauseTimerBtn');
    var resetTimerBtn = document.getElementById('resetTimerBtn');
    var notesToggleBtn = document.getElementById('notesToggleBtn');
    var blackoutToggleBtn = document.getElementById('blackoutToggleBtn');
    var fullscreenBtn = document.getElementById('fullscreenBtn');
    var prevSlideBtn = document.getElementById('prevSlideBtn');
    var nextSlideBtn = document.getElementById('nextSlideBtn');
    var blackoutLayer = document.getElementById('blackoutLayer');

    function formatTime(totalSeconds) {
        var minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        var seconds = String(totalSeconds % 60).padStart(2, '0');
        return minutes + ':' + seconds;
    }

    function updateTimerLabel() {
        presenterTimer.textContent = formatTime(secondsElapsed);
    }

    function startTimer() {
        if (timerId) {
            return;
        }

        timerId = window.setInterval(function() {
            secondsElapsed += 1;
            updateTimerLabel();
        }, 1000);

        startPauseTimerBtn.textContent = 'إيقاف المؤقت';
    }

    function pauseTimer() {
        if (!timerId) {
            return;
        }

        window.clearInterval(timerId);
        timerId = null;
        startPauseTimerBtn.textContent = 'استئناف المؤقت';
    }

    function resetTimer() {
        secondsElapsed = 0;
        updateTimerLabel();
        pauseTimer();
        startPauseTimerBtn.textContent = 'بدء المؤقت';
    }

    function toggleNotes() {
        notesVisible = !notesVisible;
        speakerNotesPanel.hidden = !notesVisible;
        notesToggleBtn.textContent = notesVisible ? 'إخفاء الملاحظات' : 'إظهار الملاحظات';
    }

    function toggleBlackout() {
        blackoutVisible = !blackoutVisible;
        blackoutLayer.hidden = !blackoutVisible;
        blackoutToggleBtn.textContent = blackoutVisible ? 'إلغاء الشاشة السوداء' : 'شاشة سوداء';
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            return;
        }

        document.exitFullscreen();
    }

    function renderSlideList() {
        slideList.innerHTML = slides.map(function(slide, index) {
            return '<button type="button" data-index="' + index + '"' + (index === currentIndex ? ' class="is-active"' : '') + '>' +
                (index + 1) + '. ' + slide.title +
            '</button>';
        }).join('');

        Array.prototype.slice.call(slideList.querySelectorAll('button')).forEach(function(button) {
            button.addEventListener('click', function() {
                currentIndex = Number(button.getAttribute('data-index'));
                renderCurrentSlide();
            });
        });
    }

    function renderCurrentSlide() {
        var slide = slides[currentIndex];
        slideKicker.textContent = slide.kicker;
        slideBadge.textContent = slide.badge;
        slideTitle.textContent = slide.title;
        slideLead.textContent = slide.lead;
        slideQuote.textContent = slide.quote;
        slideFooter.textContent = slide.footer;
        sourceAnchorLink.href = slide.sourceHref;
        currentSlideLabel.textContent = (currentIndex + 1) + ' / ' + slides.length;
        speakerObjective.textContent = slide.objective;
        speakerTransition.textContent = slide.transition;
        speakerAnswer.textContent = slide.answer;
        presenterProgressBar.style.width = ((currentIndex + 1) / slides.length) * 100 + '%';
        document.title = slide.title + ' | Presenter Mode';

        slideBullets.innerHTML = slide.bullets.map(function(bullet) {
            return '<li>' + bullet + '</li>';
        }).join('');

        renderSlideList();
    }

    function goToNextSlide() {
        currentIndex = Math.min(currentIndex + 1, slides.length - 1);
        renderCurrentSlide();
    }

    function goToPreviousSlide() {
        currentIndex = Math.max(currentIndex - 1, 0);
        renderCurrentSlide();
    }

    function bindEvents() {
        startPauseTimerBtn.addEventListener('click', function() {
            if (timerId) {
                pauseTimer();
                return;
            }

            startTimer();
        });

        resetTimerBtn.addEventListener('click', resetTimer);
        notesToggleBtn.addEventListener('click', toggleNotes);
        blackoutToggleBtn.addEventListener('click', toggleBlackout);
        fullscreenBtn.addEventListener('click', toggleFullscreen);
        prevSlideBtn.addEventListener('click', goToPreviousSlide);
        nextSlideBtn.addEventListener('click', goToNextSlide);
        blackoutLayer.addEventListener('click', toggleBlackout);

        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
                event.preventDefault();
                goToNextSlide();
            }

            if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
                event.preventDefault();
                goToPreviousSlide();
            }

            if (event.key === 'Home') {
                currentIndex = 0;
                renderCurrentSlide();
            }

            if (event.key === 'End') {
                currentIndex = slides.length - 1;
                renderCurrentSlide();
            }

            if (event.key.toLowerCase() === 'n') {
                toggleNotes();
            }

            if (event.key.toLowerCase() === 'b') {
                toggleBlackout();
            }

            if (event.key.toLowerCase() === 'f') {
                toggleFullscreen();
            }

            if (event.key.toLowerCase() === 't') {
                resetTimer();
            }
        });
    }

    bindEvents();
    updateTimerLabel();
    renderCurrentSlide();
})();
