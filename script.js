    (function() {
        function resetEventNode(id) {
            var original = document.getElementById(id);
            if (!original || !original.parentNode) {
                return original;
            }

            var replacement = original.cloneNode(true);
            original.parentNode.replaceChild(replacement, original);
            return replacement;
        }

        window.onscroll = null;

        var body = document.body;
        var sidebar = document.querySelector('.sidebar');
        var sidebarStack = document.getElementById('tocPanel');
        var themeColorMeta = document.querySelector('meta[name="theme-color"]');
        var backToTopButton = resetEventNode('backToTop');
        var themeToggleButton = resetEventNode('themeToggle');
        var shareButton = resetEventNode('shareBtn');
        var tocToggleButton = document.getElementById('tocToggle');
        var tocToggleText = document.getElementById('tocToggleText');
        var liveToast = document.getElementById('liveToast');
        var themeIcon = document.getElementById('themeIcon');
        var progressBar = document.getElementById('progressBar');
        var articleSearchInput = document.getElementById('articleSearch');
        var searchResultsMeta = document.getElementById('searchResultsMeta');
        var currentSectionLabel = document.getElementById('currentSectionLabel');
        var readingProgressBar = document.getElementById('readingProgressBar');
        var readingProgressText = document.getElementById('readingProgressText');
        var keywordChipButtons = Array.prototype.slice.call(document.querySelectorAll('.keyword-chip'));
        var mainContent = document.getElementById('main-content');
        var sections = Array.prototype.slice.call(document.querySelectorAll('.content-section'));
        var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
        var referenceItems = Array.prototype.slice.call(document.querySelectorAll('.ref-item'));
        var figureContainers = Array.prototype.slice.call(document.querySelectorAll('.figure-container'));
        var quickJumpList = document.getElementById('quickJumpList');
        var bookmarkChipList = document.getElementById('bookmarkChipList');
        var sessionTimerLabel = document.getElementById('sessionTimer');
        var visitedSectionsCountLabel = document.getElementById('visitedSectionsCount');
        var savedSectionsCountLabel = document.getElementById('savedSectionsCount');
        var savedNotesCountLabel = document.getElementById('savedNotesCount');
        var lastVisitLabel = document.getElementById('lastVisitLabel');
        var visitCountLabel = document.getElementById('visitCountLabel');
        var quoteSpotlight = document.getElementById('quoteSpotlight');
        var continueReadingBtn = document.getElementById('continueReadingBtn');
        var bookmarkCurrentBtn = document.getElementById('bookmarkCurrentBtn');
        var copySummaryBtn = document.getElementById('copySummaryBtn');
        var copyPageLinkBtn = document.getElementById('copyPageLinkBtn');
        var clearBookmarksBtn = document.getElementById('clearBookmarksBtn');
        var researchNotes = document.getElementById('researchNotes');
        var saveNotesBtn = document.getElementById('saveNotesBtn');
        var copyNotesBtn = document.getElementById('copyNotesBtn');
        var downloadNotesBtn = document.getElementById('downloadNotesBtn');
        var clearNotesBtn = document.getElementById('clearNotesBtn');
        var notesStatus = document.getElementById('notesStatus');
        var referenceSearchInput = document.getElementById('referenceSearch');
        var referenceSort = document.getElementById('referenceSort');
        var copyReferencesBtn = document.getElementById('copyReferencesBtn');
        var referenceResultsMeta = document.getElementById('referenceResultsMeta');
        var referenceEmptyState = document.getElementById('referenceEmptyState');
        var referenceFilterButtons = Array.prototype.slice.call(document.querySelectorAll('.ref-filter-chip'));
        var fontDecreaseBtn = document.getElementById('fontDecreaseBtn');
        var fontResetBtn = document.getElementById('fontResetBtn');
        var fontIncreaseBtn = document.getElementById('fontIncreaseBtn');
        var lineHeightCompactBtn = document.getElementById('lineHeightCompactBtn');
        var lineHeightNormalBtn = document.getElementById('lineHeightNormalBtn');
        var lineHeightAiryBtn = document.getElementById('lineHeightAiryBtn');
        var fontClassicBtn = document.getElementById('fontClassicBtn');
        var fontEditorialBtn = document.getElementById('fontEditorialBtn');
        var fontModernBtn = document.getElementById('fontModernBtn');
        var widthStandardBtn = document.getElementById('widthStandardBtn');
        var widthNarrowBtn = document.getElementById('widthNarrowBtn');
        var widthWideBtn = document.getElementById('widthWideBtn');
        var presetResearchBtn = document.getElementById('presetResearchBtn');
        var presetFocusBtn = document.getElementById('presetFocusBtn');
        var presetPresentationBtn = document.getElementById('presetPresentationBtn');
        var highContrastToggle = document.getElementById('highContrastToggle');
        var sepiaToggle = document.getElementById('sepiaToggle');
        var imagesToggle = document.getElementById('imagesToggle');
        var referencesToggle = document.getElementById('referencesToggle');
        var focusModeToggle = document.getElementById('focusModeToggle');
        var tocFilterButtons = Array.prototype.slice.call(document.querySelectorAll('.toc-filter-chip'));
        var tocFilterStatus = document.getElementById('tocFilterStatus');
        var timelineButtons = Array.prototype.slice.call(document.querySelectorAll('.timeline-stop'));
        var lensChipButtons = Array.prototype.slice.call(document.querySelectorAll('.lens-chip'));
        var glossarySearchInput = document.getElementById('glossarySearch');
        var glossaryMeta = document.getElementById('glossaryMeta');
        var glossaryItems = Array.prototype.slice.call(document.querySelectorAll('.glossary-item'));
        var glossaryLinkButtons = Array.prototype.slice.call(document.querySelectorAll('.glossary-link'));
        var randomSectionBtn = document.getElementById('randomSectionBtn');
        var copyOutlineBtn = document.getElementById('copyOutlineBtn');
        var focusUnreadBtn = document.getElementById('focusUnreadBtn');
        var openPaletteBtn = document.getElementById('openPaletteBtn');
        var commandPaletteBtn = document.getElementById('commandPaletteBtn');
        var commandPalette = document.getElementById('commandPalette');
        var commandPaletteClose = document.getElementById('commandPaletteClose');
        var paletteSearch = document.getElementById('paletteSearch');
        var paletteMeta = document.getElementById('paletteMeta');
        var paletteResults = document.getElementById('paletteResults');
        var paletteShortcutButtons = Array.prototype.slice.call(document.querySelectorAll('.palette-shortcut'));
        var commandPaletteBackdrop = commandPalette ? commandPalette.querySelector('[data-close-palette]') : null;
        var routeButtons = Array.prototype.slice.call(document.querySelectorAll('.route-btn'));
        var routeMeta = document.getElementById('routeMeta');
        var routeTrail = document.getElementById('routeTrail');
        var currentFocusTitle = document.getElementById('currentFocusTitle');
        var currentFocusSnippet = document.getElementById('currentFocusSnippet');
        var currentFocusMeta = document.getElementById('currentFocusMeta');
        var currentFocusTrack = document.getElementById('currentFocusTrack');
        var prevSectionBtn = document.getElementById('prevSectionBtn');
        var nextSectionBtn = document.getElementById('nextSectionBtn');
        var briefingDeck = document.getElementById('briefingDeck');
        var evidenceLawCount = document.getElementById('evidenceLawCount');
        var evidenceRightsCount = document.getElementById('evidenceRightsCount');
        var evidenceHistoryCount = document.getElementById('evidenceHistoryCount');
        var evidencePoliticalCount = document.getElementById('evidencePoliticalCount');
        var evidenceEconomyCount = document.getElementById('evidenceEconomyCount');
        var evidenceNewestCount = document.getElementById('evidenceNewestCount');
        var evidenceSourceList = document.getElementById('evidenceSourceList');
        var copySpeakingPointsBtn = document.getElementById('copySpeakingPointsBtn');
        var copyTimelineOutlineBtn = document.getElementById('copyTimelineOutlineBtn');
        var copyEvidenceMapBtn = document.getElementById('copyEvidenceMapBtn');
        var copyCurrentSectionSnippetBtn = document.getElementById('copyCurrentSectionSnippetBtn');
        var activatePresentationModeBtn = document.getElementById('activatePresentationModeBtn');
        var copyExecutiveSummaryBtn = document.getElementById('copyExecutiveSummaryBtn');
        var rubricIssueState = document.getElementById('rubricIssueState');
        var rubricPersonaState = document.getElementById('rubricPersonaState');
        var rubricSolutionsState = document.getElementById('rubricSolutionsState');
        var rubricReferencesState = document.getElementById('rubricReferencesState');
        var submissionReadinessMeta = document.getElementById('submissionReadinessMeta');
        var submissionCountdownDays = document.getElementById('submissionCountdownDays');
        var submissionCountdownHours = document.getElementById('submissionCountdownHours');
        var submissionCountdownStatus = document.getElementById('submissionCountdownStatus');
        var copySubmissionChecklistBtn = document.getElementById('copySubmissionChecklistBtn');
        var copyOralOpeningBtn = document.getElementById('copyOralOpeningBtn');
        var copyDefenseAnswersBtn = document.getElementById('copyDefenseAnswersBtn');
        var presentationPrepBadge = document.getElementById('presentationPrepBadge');
        var rubricCompletionBar = document.getElementById('rubricCompletionBar');
        var rubricCompletionPercent = document.getElementById('rubricCompletionPercent');
        var rubricCompletionText = document.getElementById('rubricCompletionText');
        var criterionIssueChoice = document.getElementById('criterionIssueChoice');
        var criterionCauses = document.getElementById('criterionCauses');
        var criterionImpact = document.getElementById('criterionImpact');
        var criterionGlobal = document.getElementById('criterionGlobal');
        var criterionPersonaChoice = document.getElementById('criterionPersonaChoice');
        var criterionExamples = document.getElementById('criterionExamples');
        var criterionAchievements = document.getElementById('criterionAchievements');
        var criterionSolutions = document.getElementById('criterionSolutions');
        var criterionReflection = document.getElementById('criterionReflection');
        var criterionMedia = document.getElementById('criterionMedia');
        var criterionReferences = document.getElementById('criterionReferences');
        var criterionFormatting = document.getElementById('criterionFormatting');
        var copyMinutePlanBtn = document.getElementById('copyMinutePlanBtn');
        var copyClosingReflectionBtn = document.getElementById('copyClosingReflectionBtn');
        var printReportShell = document.getElementById('printReportShell');
        var openPdfPreviewBtn = document.getElementById('openPdfPreviewBtn');
        var pdfPreviewControls = document.getElementById('pdfPreviewControls');
        var printPdfNowBtn = document.getElementById('printPdfNowBtn');
        var copyPdfFileNameBtn = document.getElementById('copyPdfFileNameBtn');
        var closePdfPreviewBtn = document.getElementById('closePdfPreviewBtn');
        var pdfFileNameValue = document.getElementById('pdfFileNameValue');
        var defaultSearchMessage = searchResultsMeta ? searchResultsMeta.textContent : '';
        var defaultGlossaryMessage = glossaryMeta ? glossaryMeta.textContent : '';
        var descriptionMeta = document.querySelector('meta[name="description"]');
        var shareText = descriptionMeta ? descriptionMeta.getAttribute('content') : '\u062f\u0631\u0627\u0633\u0629 \u062a\u062d\u0644\u064a\u0644\u064a\u0629 \u0641\u064a \u0625\u0637\u0627\u0631 \u0627\u0644\u0645\u0648\u0627\u0637\u0646\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629.';
        var expandedTocLabel = '\u0625\u062e\u0641\u0627\u0621 \u0627\u0644\u0641\u0647\u0631\u0633';
        var collapsedTocLabel = '\u0641\u062a\u062d \u0627\u0644\u0641\u0647\u0631\u0633';
        var wasDesktopViewport = window.innerWidth > 992;
        var tocInitialized = false;
        var articleSearchTimer = null;
        var scrollTicking = false;
        var sessionTimerId = null;
        var revealObserver = null;
        var activeTocFilter = 'all';
        var activeReferenceFilter = 'all';
        var activeRouteKey = 'all';
        var toastTimer = null;
        var sessionStartedAt = Date.now();
        var currentSectionId = sections[0] ? sections[0].id : '';
        var visitedSectionIds = {};
        var activeSpeechSectionId = '';
        var previousPaletteFocus = null;
        var printSnapshot = null;
        var isPdfPreviewMode = false;
        var originalReferenceOrder = referenceItems.slice();
        var bookmarksKey = 'palestineResearchBookmarks';
        var notesKey = 'palestineResearchNotes';
        var readingPrefsKey = 'palestineResearchPreferences';
        var lastSectionKey = 'palestineResearchLastSection';
        var visitMetaKey = 'palestineResearchVisitMeta';
        var sectionClusterById = {
            intro: 'history',
            causes: 'history',
            impact: 'humanitarian',
            global: 'international',
            persona: 'political',
            events: 'political',
            analysis: 'political',
            solutions: 'solutions',
            reflection: 'solutions',
            references: 'international'
        };
        var readingRoutes = {
            all: { label: 'المسار الكامل', description: 'يعرض جميع المحاور وفق التسلسل الأكاديمي الكامل.', sections: ['intro', 'causes', 'impact', 'global', 'persona', 'events', 'analysis', 'solutions', 'reflection', 'references'] },
            history: { label: 'المسار التاريخي', description: 'يمر من المدخل والجذور ثم يعود إلى الخلاصة بصفتها نتيجة للمسار التاريخي.', sections: ['intro', 'causes', 'impact', 'reflection'] },
            rights: { label: 'المسار الحقوقي', description: 'يركز على التداعيات الإنسانية والقانونية والمراجع ذات الصلة المباشرة.', sections: ['impact', 'global', 'references'] },
            political: { label: 'المسار السياسي', description: 'يتابع الشخصية والأحداث الميدانية وتحليل الأثر السياسي المتولد عنها.', sections: ['persona', 'events', 'analysis', 'reflection'] },
            synthesis: { label: 'مسار العرض والخلاصة', description: 'أفضل مسار للمراجعة السريعة أو التحضير لعرض شفهي أو مناقشة مختصرة.', sections: ['intro', 'analysis', 'solutions', 'reflection', 'references'] }
        };
        var savedSectionIds = [];
        var defaultPreferences = {
            fontScale: 1,
            lineHeight: 'normal',
            fontMode: 'classic',
            widthMode: 'standard',
            highContrast: false,
            sepia: false,
            hideImages: false,
            hideReferences: false,
            focusMode: false
        };
        var readingPreferences = Object.assign({}, defaultPreferences);
        var revealNodes = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
        var storageEnabled = (function() {
            try {
                var testKey = '__palestineResearchStorageTest__';
                window.localStorage.setItem(testKey, '1');
                window.localStorage.removeItem(testKey);
                return true;
            } catch (error) {
                return false;
            }
        })();

        function readStoredValue(key, fallbackValue) {
            if (!storageEnabled) {
                return fallbackValue;
            }

            try {
                var value = window.localStorage.getItem(key);
                return value === null ? fallbackValue : value;
            } catch (error) {
                return fallbackValue;
            }
        }

        function writeStoredValue(key, value) {
            if (!storageEnabled) {
                return false;
            }

            try {
                window.localStorage.setItem(key, value);
                return true;
            } catch (error) {
                return false;
            }
        }

        function readStoredJson(key, fallbackValue) {
            var rawValue = readStoredValue(key, null);
            if (!rawValue) {
                return fallbackValue;
            }

            try {
                return JSON.parse(rawValue);
            } catch (error) {
                return fallbackValue;
            }
        }

        function setRubricState(element, mode, label) {
            if (!element) {
                return;
            }

            element.classList.remove('is-ready', 'is-progress');
            if (mode) {
                element.classList.add(mode);
            }
            element.textContent = label;
        }

        function setCriteriaBadge(element, isReady, readyLabel, progressLabel) {
            if (!element) {
                return;
            }

            element.classList.toggle('is-ready', !!isReady);
            element.classList.toggle('is-progress', !isReady);
            element.textContent = isReady ? (readyLabel || 'مغطى') : (progressLabel || 'قيد الدعم');
        }

        function buildExecutiveSummaryText() {
            return [
                'الملخص التنفيذي:',
                '- القضية: يتناول البحث القضية الفلسطينية بوصفها قضية حقوق وعدالة وذاكرة وتأثير عالمي.',
                '- الشخصية: يحيى السنوار يُقرأ هنا ضمن سياق الصراع والحصار والانسداد السياسي.',
                '- الربط: يربط العمل بين الجذور التاريخية والتداعيات الدولية والشخصية المؤثرة وصولًا إلى الحلول.',
                '- القيمة الأكاديمية: الموقع منظم للتقرير والقراءة والعرض والمراجعة السريعة.'
            ].join('\n');
        }

        function buildFiveMinutePlanText() {
            return [
                'خطة عرض شفهي لمدة 5 دقائق:',
                '1. الدقيقة الأولى: تعريف القضية الفلسطينية وسبب اختيارها بوصفها قضية عالمية.',
                '2. الدقيقة الثانية: شرح الجذور التاريخية والأسباب الأساسية لنشوء القضية واستمرارها.',
                '3. الدقيقة الثالثة: بيان التداعيات الإنسانية والقانونية وتأثيرها على المواطنة العالمية.',
                '4. الدقيقة الرابعة: تقديم الشخصية المختارة وربطها بالأمثلة والأحداث والتحليل.',
                '5. الدقيقة الخامسة: عرض الحلول، وما تعلمته من العمل، ثم خاتمة موجزة وواضحة.'
            ].join('\n');
        }

        function buildClosingReflectionText() {
            return [
                'خاتمة شفوية مقترحة:',
                'يؤكد هذا العمل أن القضية الفلسطينية ليست ملفًا سياسيًا معزولًا، بل قضية تختبر فعليًا قيم العدالة والقانون الدولي والمواطنة العالمية.',
                'كما يوضح أن فهم الشخصية المؤثرة داخل القضية لا يكتمل إلا بقراءتها ضمن سياقها التاريخي والإنساني والسياسي.',
                'ومن هنا فإن أبرز ما تعلمته هو أن المواطن العالمي لا يكتفي بالتعاطف، بل يربط بين المعرفة والمسؤولية والموقف الأخلاقي الواعي.'
            ].join('\n');
        }

        function buildSubmissionChecklistText() {
            return [
                'خطة التسليم النهائية:',
                '1. مراجعة الغلاف والعنوان وبيانات الباحث.',
                '2. التأكد من وجود القضية وأسباب اختيارها وتحليلها العالمي.',
                '3. التأكد من وجود الشخصية وربطها بالقضية بوضوح.',
                '4. مراجعة الحلول والخلاصة والتأمل النهائي.',
                '5. التأكد من كفاية الصور والمراجع وتنوعها.',
                '6. طباعة نسخة PDF نهائية من الموقع.',
                '7. تحضير عرض شفهي مختصر من المسار التنفيذي أو العرضي.'
            ].join('\n');
        }

        function buildOralOpeningText() {
            return [
                'مقدمة شفوية مقترحة:',
                'في هذا العمل تناولت القضية الفلسطينية بوصفها واحدة من أبرز القضايا العالمية التي تختبر مبادئ العدالة وحقوق الإنسان والمواطنة العالمية.',
                'ثم ربطت هذه القضية بشخصية يحيى السنوار لفهم كيف تتشكل الأدوار السياسية داخل بيئة الصراع الممتدة.',
                'وفي النهاية حاولت تقديم قراءة تجمع بين التحليل التاريخي والبعد الإنساني والتأثير الدولي والحلول الممكنة.'
            ].join('\n');
        }

        function buildDefenseAnswersText() {
            return [
                'أجوبة مختصرة للمناقشة:',
                '1. اخترت القضية لأنها عالمية ومستمرة وتمس القانون الدولي وحقوق الإنسان.',
                '2. اخترت الشخصية لأنها تساعد على فهم العلاقة بين الظروف التاريخية والفاعلين السياسيين.',
                '3. أبرز ما يميز العمل هو الربط بين القضية والشخصية مع مراجع متنوعة ووسائط داعمة.',
                '4. الحلول التي اقترحتها تجمع بين مستوى الأفراد والمجتمعات والدول.'
            ].join('\n');
        }

        function updateSubmissionCountdown() {
            if (!submissionCountdownDays || !submissionCountdownHours || !submissionCountdownStatus) {
                return;
            }

            var dueDate = new Date('2026-03-28T23:59:00+04:00');
            var now = new Date();
            var remaining = dueDate.getTime() - now.getTime();

            if (remaining <= 0) {
                submissionCountdownDays.textContent = '0';
                submissionCountdownHours.textContent = '0';
                submissionCountdownStatus.textContent = 'حل موعد التسليم أو تجاوزه. راجع النسخة النهائية مباشرة قبل الرفع.';
                return;
            }

            var days = Math.floor(remaining / 86400000);
            var hours = Math.floor((remaining % 86400000) / 3600000);
            submissionCountdownDays.textContent = String(days);
            submissionCountdownHours.textContent = String(hours);
            submissionCountdownStatus.textContent = 'الموعد النهائي المحدد هو 28 مارس 2026. استخدم الوقت المتبقي لمراجعة التقرير والطباعة والعرض الشفهي.';
        }

        function updateSubmissionReadiness() {
            var hasIssueStructure = ['intro', 'causes', 'impact', 'global'].every(function(id) { return !!getSectionById(id); });
            var hasPersonaStructure = ['persona', 'events', 'analysis'].every(function(id) { return !!getSectionById(id); });
            var hasSolutionsStructure = ['solutions', 'reflection'].every(function(id) { return !!getSectionById(id); });
            var referencesReady = referenceItems.length >= 3;
            var mediaReady = figureContainers.length >= 3;

            setRubricState(rubricIssueState, hasIssueStructure ? 'is-ready' : 'is-progress', hasIssueStructure ? 'جاهز' : 'قيد الدعم');
            setRubricState(rubricPersonaState, hasPersonaStructure ? 'is-ready' : 'is-progress', hasPersonaStructure ? 'جاهز' : 'قيد الدعم');
            setRubricState(rubricSolutionsState, hasSolutionsStructure ? 'is-ready' : 'is-progress', hasSolutionsStructure ? 'جاهز' : 'قيد الدعم');
            setRubricState(rubricReferencesState, referencesReady && mediaReady ? 'is-ready' : 'is-progress', referencesReady && mediaReady ? 'جاهز' : 'قيد الدعم');

            if (submissionReadinessMeta) {
                submissionReadinessMeta.textContent = 'الرصد الحالي: ' + sections.length + ' محاور، و' + referenceItems.length + ' مرجعًا، و' + figureContainers.length + ' صورًا داعمة. هذا يمنح العمل قاعدة قوية جدًا للتقرير والعرض معًا.';
            }

            if (presentationPrepBadge) {
                presentationPrepBadge.classList.toggle('is-strong', sections.length >= 8 && referenceItems.length >= 8);
                presentationPrepBadge.textContent = sections.length >= 8 && referenceItems.length >= 8 ? 'جاهز' : 'قيد الدعم';
            }

            updateRubricMonitor();
        }

        function updateRubricMonitor() {
            var introSection = getSectionById('intro');
            var causesSection = getSectionById('causes');
            var impactSection = getSectionById('impact');
            var globalSection = getSectionById('global');
            var personaSection = getSectionById('persona');
            var eventsSection = getSectionById('events');
            var analysisSection = getSectionById('analysis');
            var solutionsSection = getSectionById('solutions');
            var reflectionSection = getSectionById('reflection');
            var causePoints = causesSection ? causesSection.querySelectorAll('li').length : 0;
            var eventExamples = eventsSection ? eventsSection.querySelectorAll('h3').length : 0;

            var checks = [
                { element: criterionIssueChoice, ready: !!introSection && introSection.innerText.trim().length > 300 },
                { element: criterionCauses, ready: !!causesSection && causePoints >= 3 },
                { element: criterionImpact, ready: !!impactSection && impactSection.innerText.trim().length > 260 },
                { element: criterionGlobal, ready: !!globalSection && globalSection.innerText.trim().length > 240 },
                { element: criterionPersonaChoice, ready: !!personaSection && personaSection.innerText.trim().length > 220 },
                { element: criterionExamples, ready: !!eventsSection && eventExamples >= 3 },
                { element: criterionAchievements, ready: !!analysisSection && analysisSection.innerText.trim().length > 220 },
                { element: criterionSolutions, ready: !!solutionsSection && solutionsSection.innerText.trim().length > 220 },
                { element: criterionReflection, ready: !!reflectionSection && reflectionSection.innerText.trim().length > 180 },
                { element: criterionMedia, ready: figureContainers.length >= 4 },
                { element: criterionReferences, ready: referenceItems.length >= 3 },
                { element: criterionFormatting, ready: sections.length >= 8 && navLinks.length >= 8 }
            ];

            checks.forEach(function(check) {
                setCriteriaBadge(check.element, check.ready);
            });

            var readyCount = checks.filter(function(check) {
                return check.ready;
            }).length;
            var percent = Math.round((readyCount / checks.length) * 100);

            if (rubricCompletionBar) {
                rubricCompletionBar.style.width = percent + '%';
            }

            if (rubricCompletionPercent) {
                rubricCompletionPercent.textContent = percent + '%';
            }

            if (rubricCompletionText) {
                rubricCompletionText.textContent = readyCount + ' من ' + checks.length + ' من عناصر التقييم مغطاة في النسخة الحالية من الموقع.';
            }
        }

        function activatePresentationMode() {
            applyReadingPreset('presentation');
            applyReadingRoute('synthesis', true);
            if (window.innerWidth <= 992) {
                setTocExpanded(false);
            }
            showToast('تمت تهيئة الصفحة لوضع العرض والمراجعة السريعة.');
        }

        function setText(id, value) {
            var element = document.getElementById(id);
            if (element) {
                element.textContent = value;
            }
        }

        function escapeHtml(value) {
            return String(value || '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        function showToast(message) {
            if (!liveToast) {
                return;
            }

            liveToast.textContent = message;
            liveToast.classList.add('show');
            window.clearTimeout(toastTimer);
            toastTimer = window.setTimeout(function() {
                liveToast.classList.remove('show');
            }, 2400);
        }

        function copyText(text, successMessage) {
            if (!text) {
                return;
            }

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(function() {
                    showToast(successMessage);
                }).catch(function() {
                    showToast('تعذر النسخ التلقائي من المتصفح.');
                });
                return;
            }

            var fallback = document.createElement('textarea');
            fallback.value = text;
            document.body.appendChild(fallback);
            fallback.select();
            document.execCommand('copy');
            document.body.removeChild(fallback);
            showToast(successMessage);
        }

        function countWords(text) {
            var words = (text || '').match(/\S+/g);
            return words ? words.length : 0;
        }

        function formatElapsed(milliseconds) {
            var totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
            var minutes = Math.floor(totalSeconds / 60);
            var seconds = totalSeconds % 60;
            return String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
        }

        function getSectionById(sectionId) {
            return sections.find(function(section) {
                return section.id === sectionId;
            }) || null;
        }

        function getSectionTitle(section) {
            if (!section) {
                return '';
            }

            return section.getAttribute('data-nav-title') || section.id;
        }

        function getLeadParagraphText(section) {
            if (!section) {
                return '';
            }

            var paragraph = section.querySelector('p');
            if (!paragraph) {
                return section.innerText.trim();
            }

            return paragraph.textContent.trim();
        }

        function getFilterLabel(filter) {
            if (filter === 'history') {
                return 'التاريخي';
            }
            if (filter === 'humanitarian') {
                return 'الحقوقي والإنساني';
            }
            if (filter === 'international') {
                return 'الدولي';
            }
            if (filter === 'political') {
                return 'السياسي';
            }
            if (filter === 'solutions') {
                return 'الحلول';
            }
            return 'الكامل';
        }

        function getReferenceFilterLabel(filter) {
            if (filter === 'law') {
                return 'القانوني';
            }
            if (filter === 'rights') {
                return 'الحقوقي';
            }
            if (filter === 'history') {
                return 'التاريخي';
            }
            if (filter === 'humanitarian') {
                return 'الإنساني';
            }
            if (filter === 'economy') {
                return 'الاقتصادي';
            }
            if (filter === 'political') {
                return 'السياقي';
            }
            return 'الكامل';
        }

        function scrollToSection(sectionId, message) {
            var target = getSectionById(sectionId);
            if (!target) {
                return;
            }

            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (message) {
                showToast(message);
            }
        }

        function applyTocFilter(filter) {
            activeTocFilter = filter || 'all';
            var visibleCount = 0;

            tocFilterButtons.forEach(function(button) {
                button.classList.toggle('is-active', button.getAttribute('data-filter') === activeTocFilter);
            });

            navLinks.forEach(function(link) {
                var cluster = link.getAttribute('data-cluster') || sectionClusterById[(link.getAttribute('href') || '').replace('#', '')] || 'all';
                var shouldShow = activeTocFilter === 'all' || cluster === activeTocFilter;
                var listItem = link.closest('li');

                if (listItem) {
                    listItem.hidden = !shouldShow;
                }

                if (shouldShow) {
                    visibleCount += 1;
                }
            });

            if (tocFilterStatus) {
                tocFilterStatus.textContent = activeTocFilter === 'all'
                    ? 'يعرض الفهرس الآن جميع المحاور.'
                    : 'يعرض الفهرس الآن ' + visibleCount + ' محاور ضمن المسار ' + getFilterLabel(activeTocFilter) + '.';
            }
        }

        function applyReferenceFilter(filter) {
            activeReferenceFilter = filter || 'all';
            referenceFilterButtons.forEach(function(button) {
                button.classList.toggle('is-active', button.getAttribute('data-ref-filter') === activeReferenceFilter);
            });
            filterAndSortReferences();
        }

        function getSectionTrackLabel(sectionId) {
            var cluster = sectionClusterById[sectionId] || 'general';
            if (cluster === 'history') {
                return 'المسار التاريخي';
            }
            if (cluster === 'humanitarian') {
                return 'المسار الحقوقي والإنساني';
            }
            if (cluster === 'international') {
                return 'المسار الدولي';
            }
            if (cluster === 'political') {
                return 'المسار السياسي';
            }
            if (cluster === 'solutions') {
                return 'مسار الحلول والخلاصة';
            }
            return 'المسار العام';
        }

        function renderRouteTrail(routeKey) {
            if (!routeTrail) {
                return;
            }

            routeTrail.innerHTML = '';
            (readingRoutes[routeKey] || readingRoutes.all).sections.forEach(function(sectionId) {
                var section = getSectionById(sectionId);
                if (!section) {
                    return;
                }

                var button = document.createElement('button');
                button.type = 'button';
                button.className = 'route-trail-btn';
                button.setAttribute('data-target', sectionId);
                button.textContent = getSectionTitle(section);
                routeTrail.appendChild(button);
            });
        }

        function applyReadingRoute(routeKey, shouldScroll) {
            activeRouteKey = readingRoutes[routeKey] ? routeKey : 'all';
            var route = readingRoutes[activeRouteKey];

            routeButtons.forEach(function(button) {
                button.classList.toggle('is-active', button.getAttribute('data-route') === activeRouteKey);
            });

            sections.forEach(function(section) {
                var inRoute = route.sections.indexOf(section.id) !== -1;
                section.classList.toggle('route-focus', activeRouteKey !== 'all' && inRoute);
                section.classList.toggle('route-muted', activeRouteKey !== 'all' && !inRoute);
            });

            navLinks.forEach(function(link) {
                var targetId = (link.getAttribute('href') || '').replace('#', '');
                var inRoute = route.sections.indexOf(targetId) !== -1;
                link.classList.toggle('route-focus', activeRouteKey !== 'all' && inRoute);
                link.classList.toggle('route-muted', activeRouteKey !== 'all' && !inRoute);
            });

            if (routeMeta) {
                routeMeta.textContent = route.description;
            }

            renderRouteTrail(activeRouteKey);
            updateFocusPanel();

            if (shouldScroll && route.sections[0]) {
                scrollToSection(route.sections[0], 'تم تفعيل ' + route.label + '.');
            }
        }

        function setActiveTimelineStop(sectionId) {
            timelineButtons.forEach(function(button) {
                button.classList.toggle('is-active', button.getAttribute('data-target') === sectionId);
            });
        }

        function applyKeywordLens(keyword) {
            if (!articleSearchInput) {
                return;
            }

            articleSearchInput.value = keyword || '';
            runArticleSearch(true);
            articleSearchInput.focus();
            showToast('تم تركيز البحث على "' + (keyword || '') + '".');
        }

        function filterGlossary() {
            if (!glossaryMeta) {
                return;
            }

            var query = normalizeText(glossarySearchInput ? glossarySearchInput.value : '');
            var visibleCount = 0;

            glossaryItems.forEach(function(item) {
                var isMatch = !query || normalizeText(item.innerText).indexOf(query) !== -1;
                item.hidden = !isMatch;
                if (isMatch) {
                    visibleCount += 1;
                    if (query) {
                        item.open = true;
                    }
                }
            });

            if (!query) {
                glossaryMeta.textContent = defaultGlossaryMessage;
            } else if (visibleCount) {
                glossaryMeta.textContent = 'تظهر الآن ' + visibleCount + ' من أصل ' + glossaryItems.length + ' مفاهيم.';
            } else {
                glossaryMeta.textContent = 'لا توجد مفاهيم مطابقة لعبارة البحث الحالية.';
            }
        }

        function openGlossaryTerm(term) {
            var glossaryItem = document.querySelector('.glossary-item[data-term="' + term + '"]');
            if (!glossaryItem) {
                applyKeywordLens(term);
                return;
            }

            glossaryItem.open = true;
            glossaryItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            showToast('تم فتح المفهوم داخل معجم الصفحة.');
        }

        function copyArticleOutline() {
            var outline = navLinks.map(function(link, index) {
                var title = link.querySelector('.nav-link-text');
                var subtitle = link.querySelector('small');
                return (index + 1) + '. ' + (title ? title.textContent.trim() : link.textContent.trim()) + (subtitle ? ' - ' + subtitle.textContent.trim() : '');
            }).join('\n');

            copyText('مخطط البحث:\n\n' + outline, 'تم نسخ مخطط البحث.');
        }

        function updateFocusPanel() {
            var currentIndex = sections.findIndex(function(section) {
                return section.id === currentSectionId;
            });
            var currentSection = sections[currentIndex] || sections[0];

            if (!currentSection) {
                return;
            }

            if (currentFocusTitle) {
                currentFocusTitle.textContent = getSectionTitle(currentSection);
            }
            if (currentFocusSnippet) {
                var snippet = getLeadParagraphText(currentSection);
                currentFocusSnippet.textContent = snippet.length > 240 ? snippet.slice(0, 240) + '...' : snippet;
            }
            if (currentFocusMeta) {
                currentFocusMeta.textContent = 'المحور ' + (currentIndex + 1) + ' من ' + sections.length;
            }
            if (currentFocusTrack) {
                currentFocusTrack.textContent = getSectionTrackLabel(currentSection.id);
            }
            if (prevSectionBtn) {
                prevSectionBtn.disabled = currentIndex <= 0;
                prevSectionBtn.setAttribute('data-target', currentIndex > 0 ? sections[currentIndex - 1].id : '');
            }
            if (nextSectionBtn) {
                nextSectionBtn.disabled = currentIndex >= sections.length - 1;
                nextSectionBtn.setAttribute('data-target', currentIndex < sections.length - 1 ? sections[currentIndex + 1].id : '');
            }
        }

        function renderBriefingDeck() {
            if (!briefingDeck) {
                return;
            }

            briefingDeck.innerHTML = '';

            sections.forEach(function(section, index) {
                var card = document.createElement('article');
                var title = document.createElement('strong');
                var summary = document.createElement('span');
                var meta = document.createElement('small');
                var button = document.createElement('button');
                var minutes = Math.max(1, Math.ceil(countWords(section.innerText) / 170));

                card.className = 'briefing-card';
                title.textContent = getSectionTitle(section);
                summary.textContent = (getLeadParagraphText(section).slice(0, 135) || '').trim() + (getLeadParagraphText(section).length > 135 ? '...' : '');
                meta.textContent = 'المحور ' + (index + 1) + ' • ' + minutes + ' د • ' + getSectionTrackLabel(section.id);
                button.type = 'button';
                button.textContent = 'فتح المحور';
                button.setAttribute('data-target', section.id);
                card.appendChild(title);
                card.appendChild(summary);
                card.appendChild(meta);
                card.appendChild(button);
                briefingDeck.appendChild(card);
            });
        }

        function updateEvidenceDashboard() {
            var counts = { law: 0, rights: 0, history: 0, humanitarian: 0, economy: 0, political: 0 };
            var newestCount = 0;

            referenceItems.forEach(function(item) {
                var category = item.getAttribute('data-category') || 'political';
                var year = parseInt(item.getAttribute('data-year') || '0', 10);
                if (counts.hasOwnProperty(category)) {
                    counts[category] += 1;
                }
                if (year >= 2024) {
                    newestCount += 1;
                }
            });

            if (evidenceLawCount) {
                evidenceLawCount.textContent = counts.law;
            }
            if (evidenceRightsCount) {
                evidenceRightsCount.textContent = counts.rights + counts.humanitarian;
            }
            if (evidenceHistoryCount) {
                evidenceHistoryCount.textContent = counts.history;
            }
            if (evidencePoliticalCount) {
                evidencePoliticalCount.textContent = counts.political;
            }
            if (evidenceEconomyCount) {
                evidenceEconomyCount.textContent = counts.economy;
            }
            if (evidenceNewestCount) {
                evidenceNewestCount.textContent = newestCount;
            }

            if (!evidenceSourceList) {
                return;
            }

            evidenceSourceList.innerHTML = '';
            referenceItems.slice().sort(function(a, b) {
                return parseInt(b.getAttribute('data-year') || '0', 10) - parseInt(a.getAttribute('data-year') || '0', 10);
            }).slice(0, 4).forEach(function(item) {
                var row = document.createElement('div');
                var title = document.createElement('strong');
                var meta = document.createElement('span');
                var titleNode = item.querySelector('.ref-link');

                row.className = 'evidence-source-row';
                title.textContent = titleNode ? titleNode.textContent.trim() : item.textContent.trim();
                meta.textContent = (item.getAttribute('data-year') || '') + ' • ' + getReferenceFilterLabel(item.getAttribute('data-category') || 'political');
                row.appendChild(title);
                row.appendChild(meta);
                evidenceSourceList.appendChild(row);
            });
        }

        function createSpeakingPointsText() {
            return sections.slice(0, 6).map(function(section, index) {
                var snippet = getLeadParagraphText(section);
                return (index + 1) + '. ' + getSectionTitle(section) + ': ' + (snippet.length > 130 ? snippet.slice(0, 130) + '...' : snippet);
            }).join('\n\n');
        }

        function createTimelineOutlineText() {
            return timelineButtons.map(function(button) {
                var year = button.querySelector('strong');
                var label = button.querySelector('.timeline-stop-copy span');
                var target = getSectionById(button.getAttribute('data-target'));
                return '- ' + (year ? year.textContent.trim() : '') + ': ' + (label ? label.textContent.trim() : '') + ' -> ' + (target ? getSectionTitle(target) : '');
            }).join('\n');
        }

        function createEvidenceMapText() {
            return [
                'قانونية وأممية: ' + (evidenceLawCount ? evidenceLawCount.textContent : '0'),
                'حقوقية وإنسانية: ' + (evidenceRightsCount ? evidenceRightsCount.textContent : '0'),
                'تاريخية وأكاديمية: ' + (evidenceHistoryCount ? evidenceHistoryCount.textContent : '0'),
                'سياقية وسياسية: ' + (evidencePoliticalCount ? evidencePoliticalCount.textContent : '0'),
                'اقتصادية وتنموية: ' + (evidenceEconomyCount ? evidenceEconomyCount.textContent : '0'),
                'مصادر حديثة منذ 2024: ' + (evidenceNewestCount ? evidenceNewestCount.textContent : '0')
            ].join('\n');
        }

        function jumpToRandomSection() {
            if (!sections.length) {
                return;
            }

            var randomSection = sections[Math.floor(Math.random() * sections.length)];
            scrollToSection(randomSection.id, 'تم اختيار محور عشوائي للمراجعة.');
        }

        function focusFirstUnreadSection() {
            var unreadSection = sections.find(function(section) {
                return !visitedSectionIds[section.id];
            });

            if (!unreadSection) {
                showToast('تمت زيارة جميع المحاور في هذه الجلسة.');
                return;
            }

            scrollToSection(unreadSection.id, 'تم الانتقال إلى أول محور غير مقروء.');
        }

        function applyReadingPreset(presetName) {
            if (presetName === 'research') {
                readingPreferences.fontScale = 1.05;
                readingPreferences.lineHeight = 'airy';
                readingPreferences.fontMode = 'editorial';
                readingPreferences.widthMode = 'standard';
                readingPreferences.highContrast = false;
                readingPreferences.sepia = true;
                readingPreferences.hideImages = false;
                readingPreferences.hideReferences = false;
                readingPreferences.focusMode = false;
                showToast('تم تفعيل النمط البحثي للقراءة المتأنية.');
            } else if (presetName === 'focus') {
                readingPreferences.fontScale = 1.08;
                readingPreferences.lineHeight = 'normal';
                readingPreferences.fontMode = 'modern';
                readingPreferences.widthMode = 'narrow';
                readingPreferences.highContrast = false;
                readingPreferences.sepia = false;
                readingPreferences.hideImages = true;
                readingPreferences.hideReferences = false;
                readingPreferences.focusMode = true;
                showToast('تم تفعيل وضع التركيز للمراجعة السريعة.');
            } else if (presetName === 'presentation') {
                readingPreferences.fontScale = 1.1;
                readingPreferences.lineHeight = 'airy';
                readingPreferences.fontMode = 'classic';
                readingPreferences.widthMode = 'wide';
                readingPreferences.highContrast = true;
                readingPreferences.sepia = false;
                readingPreferences.hideImages = false;
                readingPreferences.hideReferences = false;
                readingPreferences.focusMode = false;
                showToast('تم تفعيل وضع العرض بوضوح بصري أعلى.');
            }

            persistReadingPreferences();
            applyReadingPreferences();
            filterAndSortReferences();
        }

        function getPaletteEntries() {
            var entries = [];

            savedSectionIds.forEach(function(sectionId) {
                var section = getSectionById(sectionId);
                if (!section) {
                    return;
                }

                entries.push({
                    type: 'محفوظ',
                    title: getSectionTitle(section),
                    description: 'محور محفوظ للعودة السريعة.',
                    action: 'section',
                    value: sectionId
                });
            });

            sections.forEach(function(section) {
                entries.push({
                    type: 'محور',
                    title: getSectionTitle(section),
                    description: (getLeadParagraphText(section).slice(0, 100) || '').trim(),
                    action: 'section',
                    value: section.id
                });
            });

            glossaryItems.forEach(function(item) {
                var termNode = item.querySelector('summary span');
                var descriptionNode = item.querySelector('p');
                var term = item.getAttribute('data-term') || (termNode ? termNode.textContent.trim() : '');
                entries.push({
                    type: 'مفهوم',
                    title: term,
                    description: descriptionNode ? descriptionNode.textContent.trim().slice(0, 100) : '',
                    action: 'glossary',
                    value: term
                });
            });

            return entries.concat([
                { type: 'مسار', title: 'تفعيل المسار التاريخي', description: 'تركيز المقال على المدخل والجذور والتداعيات الممتدة.', action: 'route', value: 'history' },
                { type: 'مسار', title: 'تفعيل المسار الحقوقي', description: 'فتح القراءة من زاوية القانون والحقوق والتأثير الإنساني.', action: 'route', value: 'rights' },
                { type: 'مسار', title: 'تفعيل المسار السياسي', description: 'التركيز على السنوار والأحداث الميدانية وتحليل الأثر.', action: 'route', value: 'political' },
                { type: 'أمر', title: 'فتح الملاحظات', description: 'الانتقال المباشر إلى مساحة الدراسة والملاحظات.', action: 'notes', value: 'notes' },
                { type: 'أمر', title: 'العودة إلى آخر محور', description: 'استئناف القراءة من آخر موضع محفوظ.', action: 'continue', value: 'continue' },
                { type: 'أمر', title: 'نسخ ملخص البحث', description: 'نسخ خلاصة سريعة من العنوان والمحاور الرئيسية.', action: 'summary', value: 'summary' },
                { type: 'أمر', title: 'تبديل الوضع الليلي', description: 'التنقل بين الوضعين الفاتح والداكن.', action: 'theme', value: 'theme' },
                { type: 'أمر', title: 'أول محور غير مقروء', description: 'القفز إلى أول قسم لم يتم المرور عليه في هذه الجلسة.', action: 'unread', value: 'unread' },
                { type: 'أمر', title: 'محور عشوائي', description: 'اختيار جزء عشوائي للمراجعة السريعة.', action: 'random', value: 'random' }
            ]);
        }

        function renderPaletteResults(query) {
            if (!paletteResults) {
                return;
            }

            var normalizedQuery = normalizeText(query || '');
            var entries = getPaletteEntries().filter(function(entry) {
                if (!normalizedQuery) {
                    return true;
                }

                return normalizeText([entry.type, entry.title, entry.description].join(' ')).indexOf(normalizedQuery) !== -1;
            }).slice(0, 12);

            paletteResults.innerHTML = '';

            if (paletteMeta) {
                paletteMeta.textContent = entries.length
                    ? 'تظهر الآن ' + entries.length + ' نتيجة سريعة.'
                    : 'لا توجد نتائج مطابقة. جرّب اسم محور أو مفهوم آخر.';
            }

            if (!entries.length) {
                var emptyState = document.createElement('div');
                emptyState.className = 'palette-empty';
                emptyState.textContent = 'لا توجد نتائج مطابقة. جرّب البحث عن النكبة أو القانون الدولي أو اسم أحد المحاور.';
                paletteResults.appendChild(emptyState);
                return;
            }

            entries.forEach(function(entry) {
                var button = document.createElement('button');
                var typeNode = document.createElement('small');
                var titleNode = document.createElement('strong');
                var descriptionNode = document.createElement('span');

                button.type = 'button';
                button.className = 'palette-result';
                button.setAttribute('data-action', entry.action);
                button.setAttribute('data-value', entry.value);
                typeNode.textContent = entry.type;
                titleNode.textContent = entry.title;
                descriptionNode.textContent = entry.description;
                button.appendChild(typeNode);
                button.appendChild(titleNode);
                button.appendChild(descriptionNode);
                paletteResults.appendChild(button);
            });
        }

        function openCommandPalette(prefill) {
            if (!commandPalette) {
                return;
            }

            if (!commandPalette.hidden) {
                if (paletteSearch) {
                    paletteSearch.focus();
                    paletteSearch.select();
                }
                return;
            }

            previousPaletteFocus = document.activeElement;
            commandPalette.hidden = false;
            body.classList.add('palette-open');
            if (paletteSearch) {
                paletteSearch.value = prefill || '';
                renderPaletteResults(paletteSearch.value);
                window.setTimeout(function() {
                    paletteSearch.focus();
                    paletteSearch.select();
                }, 30);
            } else {
                renderPaletteResults(prefill || '');
            }
        }

        function closeCommandPalette() {
            if (!commandPalette) {
                return;
            }

            commandPalette.hidden = true;
            body.classList.remove('palette-open');
            if (previousPaletteFocus && typeof previousPaletteFocus.focus === 'function') {
                previousPaletteFocus.focus();
            }
        }

        function runPaletteAction(action, value) {
            closeCommandPalette();

            if (action === 'section') {
                scrollToSection(value, 'تم الانتقال إلى العنصر المختار.');
            } else if (action === 'glossary') {
                openGlossaryTerm(value);
            } else if (action === 'route') {
                applyReadingRoute(value, true);
            } else if (action === 'notes') {
                if (researchNotes) {
                    researchNotes.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    researchNotes.focus();
                    showToast('تم الانتقال إلى مساحة الملاحظات.');
                }
            } else if (action === 'continue' && continueReadingBtn) {
                continueReadingBtn.click();
            } else if (action === 'summary' && copySummaryBtn) {
                copySummaryBtn.click();
            } else if (action === 'theme') {
                applyTheme(body.classList.contains('dark-mode') ? 'light' : 'dark');
                showToast('تم تبديل سمة القراءة.');
            } else if (action === 'unread') {
                focusFirstUnreadSection();
            } else if (action === 'random') {
                jumpToRandomSection();
            }
        }

        function setButtonGroupState(buttons, activeButton) {
            buttons.forEach(function(button) {
                if (!button) {
                    return;
                }

                button.classList.toggle('is-active', button === activeButton);
            });
        }

        function setToggleState(button, isActive) {
            if (!button) {
                return;
            }

            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        }

        function persistReadingPreferences() {
            writeStoredValue(readingPrefsKey, JSON.stringify(readingPreferences));
        }

        function applyReadingPreferences() {
            document.documentElement.style.setProperty('--font-scale', readingPreferences.fontScale);

            body.classList.toggle('reading-compact', readingPreferences.lineHeight === 'compact');
            body.classList.toggle('reading-airy', readingPreferences.lineHeight === 'airy');
            body.classList.toggle('font-modern', readingPreferences.fontMode === 'modern');
            body.classList.toggle('font-editorial', readingPreferences.fontMode === 'editorial');
            body.classList.toggle('width-narrow', readingPreferences.widthMode === 'narrow');
            body.classList.toggle('width-wide', readingPreferences.widthMode === 'wide');
            body.classList.toggle('high-contrast', readingPreferences.highContrast);
            body.classList.toggle('sepia-mode', readingPreferences.sepia);
            body.classList.toggle('images-hidden', readingPreferences.hideImages);
            body.classList.toggle('references-hidden', readingPreferences.hideReferences);
            body.classList.toggle('focus-mode', readingPreferences.focusMode);

            setButtonGroupState([lineHeightCompactBtn, lineHeightNormalBtn, lineHeightAiryBtn], readingPreferences.lineHeight === 'compact' ? lineHeightCompactBtn : readingPreferences.lineHeight === 'airy' ? lineHeightAiryBtn : lineHeightNormalBtn);
            setButtonGroupState([fontClassicBtn, fontEditorialBtn, fontModernBtn], readingPreferences.fontMode === 'modern' ? fontModernBtn : readingPreferences.fontMode === 'editorial' ? fontEditorialBtn : fontClassicBtn);
            setButtonGroupState([widthStandardBtn, widthNarrowBtn, widthWideBtn], readingPreferences.widthMode === 'narrow' ? widthNarrowBtn : readingPreferences.widthMode === 'wide' ? widthWideBtn : widthStandardBtn);
            setToggleState(highContrastToggle, readingPreferences.highContrast);
            setToggleState(sepiaToggle, readingPreferences.sepia);
            setToggleState(imagesToggle, readingPreferences.hideImages);
            setToggleState(referencesToggle, readingPreferences.hideReferences);
            setToggleState(focusModeToggle, readingPreferences.focusMode);

            if (referenceEmptyState) {
                referenceEmptyState.hidden = !readingPreferences.hideReferences;
                if (readingPreferences.hideReferences) {
                    referenceEmptyState.textContent = 'قائمة المراجع مخفية حاليًا من مختبر القراءة.';
                }
            }
        }

        function loadReadingPreferences() {
            var saved = readStoredValue(readingPrefsKey, '');
            if (!saved) {
                applyReadingPreferences();
                return;
            }

            try {
                readingPreferences = Object.assign({}, defaultPreferences, JSON.parse(saved));
            } catch (error) {
                readingPreferences = Object.assign({}, defaultPreferences);
            }

            applyReadingPreferences();
        }

        function loadSavedSectionIds() {
            savedSectionIds = readStoredJson(bookmarksKey, []);
        }

        function persistSavedSectionIds() {
            writeStoredValue(bookmarksKey, JSON.stringify(savedSectionIds));
        }

        function renderBookmarkChips() {
            if (!bookmarkChipList) {
                return;
            }

            bookmarkChipList.innerHTML = '';

            if (!savedSectionIds.length) {
                bookmarkChipList.innerHTML = '<span class="notes-status">لا توجد محاور محفوظة حتى الآن.</span>';
            } else {
                savedSectionIds.forEach(function(sectionId) {
                    var section = getSectionById(sectionId);
                    if (!section) {
                        return;
                    }

                    var button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'bookmark-chip';
                    button.textContent = getSectionTitle(section);
                    button.setAttribute('data-target', sectionId);
                    bookmarkChipList.appendChild(button);
                });
            }

            if (savedSectionsCountLabel) {
                savedSectionsCountLabel.textContent = savedSectionIds.length;
            }
        }

        function toggleSavedSection(sectionId) {
            if (!sectionId) {
                return;
            }

            var exists = savedSectionIds.indexOf(sectionId) !== -1;
            if (exists) {
                savedSectionIds = savedSectionIds.filter(function(id) { return id !== sectionId; });
                showToast('تمت إزالة المحور من العناصر المحفوظة.');
            } else {
                savedSectionIds.push(sectionId);
                showToast('تم حفظ المحور للعودة إليه لاحقًا.');
            }

            persistSavedSectionIds();
            renderBookmarkChips();
            updateSectionBookmarkButtons();
            renderPaletteResults(paletteSearch ? paletteSearch.value : '');
        }

        function updateNotesWordCount() {
            if (savedNotesCountLabel && researchNotes) {
                savedNotesCountLabel.textContent = countWords(researchNotes.value);
            }
        }

        function persistNotes(showMessage) {
            if (!researchNotes) {
                return;
            }

            writeStoredValue(notesKey, researchNotes.value);
            updateNotesWordCount();

            if (notesStatus) {
                notesStatus.textContent = researchNotes.value.trim() ? 'تم حفظ الملاحظات على هذا الجهاز.' : 'لا توجد ملاحظات محفوظة بعد.';
            }

            if (showMessage) {
                showToast(researchNotes.value.trim() ? 'تم حفظ الملاحظات.' : 'تم مسح الملاحظات الفارغة.');
            }
        }

        function loadNotes() {
            if (!researchNotes) {
                return;
            }

            researchNotes.value = readStoredValue(notesKey, '');
            updateNotesWordCount();
            if (notesStatus && researchNotes.value.trim()) {
                notesStatus.textContent = 'تمت استعادة الملاحظات المحفوظة من زيارتك السابقة.';
            }
        }

        function renderQuickJumpChips() {
            if (!quickJumpList) {
                return;
            }

            quickJumpList.innerHTML = '';

            sections.forEach(function(section) {
                var button = document.createElement('button');
                button.type = 'button';
                button.className = 'jump-chip';
                button.textContent = getSectionTitle(section);
                button.setAttribute('data-target', section.id);
                quickJumpList.appendChild(button);
            });
        }

        function updateVisitMeta() {
            var meta = { count: 1, lastVisit: Date.now() };

            var savedMeta = readStoredJson(visitMetaKey, {});
            if (savedMeta && typeof savedMeta.count === 'number') {
                meta.count = savedMeta.count + 1;
            }
            if (savedMeta && savedMeta.lastVisit && lastVisitLabel) {
                lastVisitLabel.textContent = new Date(savedMeta.lastVisit).toLocaleDateString('ar');
            }

            writeStoredValue(visitMetaKey, JSON.stringify(meta));

            if (visitCountLabel) {
                visitCountLabel.textContent = meta.count;
            }
        }

        function updateSessionTimer() {
            if (sessionTimerLabel) {
                sessionTimerLabel.textContent = formatElapsed(Date.now() - sessionStartedAt);
            }
        }

        function updateSectionBookmarkButtons() {
            var bookmarkButtons = document.querySelectorAll('.section-tool-btn[data-action="bookmark"]');
            bookmarkButtons.forEach(function(button) {
                var sectionId = button.getAttribute('data-section');
                var isSaved = savedSectionIds.indexOf(sectionId) !== -1;
                button.classList.toggle('is-active', isSaved);
                button.textContent = isSaved ? 'محفوظ' : 'حفظ';
            });

            if (bookmarkCurrentBtn) {
                var isCurrentSaved = savedSectionIds.indexOf(currentSectionId) !== -1;
                bookmarkCurrentBtn.textContent = isCurrentSaved ? 'إلغاء حفظ المحور' : 'احفظ هذا المحور';
            }
        }

        function updateVisitedVisuals() {
            sections.forEach(function(section) {
                section.classList.toggle('is-visited', Boolean(visitedSectionIds[section.id]));
            });

            navLinks.forEach(function(link) {
                var targetId = (link.getAttribute('href') || '').replace('#', '');
                link.classList.toggle('is-visited', Boolean(visitedSectionIds[targetId]));
            });

            if (visitedSectionsCountLabel) {
                visitedSectionsCountLabel.textContent = Object.keys(visitedSectionIds).length;
            }
        }

        function updateQuoteFromSection(section) {
            if (!quoteSpotlight) {
                return;
            }

            var text = getLeadParagraphText(section);
            if (!text) {
                return;
            }

            quoteSpotlight.textContent = text.length > 220 ? text.slice(0, 220) + '...' : text;
        }

        function enhanceSections() {
            sections.forEach(function(section, index) {
                if (section.querySelector('.section-tools')) {
                    return;
                }

                var words = countWords(section.innerText);
                var minutes = Math.max(1, Math.ceil(words / 170));
                var toolbar = document.createElement('div');
                var heading = section.querySelector('h1');

                toolbar.className = 'section-tools';
                toolbar.innerHTML =
                    '<div class="section-tools-meta">' +
                        '<span>المحور ' + (index + 1) + '</span>' +
                        '<strong>' + minutes + ' د قراءة</strong>' +
                    '</div>' +
                    '<div class="section-tools-actions">' +
                        '<button class="section-tool-btn" type="button" data-action="link" data-section="' + section.id + '">نسخ الرابط</button>' +
                        '<button class="section-tool-btn" type="button" data-action="bookmark" data-section="' + section.id + '">حفظ</button>' +
                        '<button class="section-tool-btn" type="button" data-action="collapse" data-section="' + section.id + '">طي</button>' +
                        '<button class="section-tool-btn" type="button" data-action="speak" data-section="' + section.id + '">استماع</button>' +
                    '</div>';

                if (heading && heading.nextSibling) {
                    section.insertBefore(toolbar, heading.nextSibling);
                } else {
                    section.appendChild(toolbar);
                }
            });
        }

        function syncSectionToolbarState() {
            sections.forEach(function(section) {
                var collapseButton = section.querySelector('.section-tool-btn[data-action="collapse"]');
                if (collapseButton) {
                    collapseButton.textContent = section.classList.contains('is-collapsed') ? 'فتح' : 'طي';
                }
            });
        }

        function enhanceReferenceItems() {
            referenceItems.forEach(function(item) {
                if (item.querySelector('.ref-copy-btn')) {
                    return;
                }

                var copyButton = document.createElement('button');
                copyButton.type = 'button';
                copyButton.className = 'ref-copy-btn';
                copyButton.textContent = 'نسخ';
                item.appendChild(copyButton);
            });
        }

        function filterAndSortReferences() {
            if (!referenceResultsMeta) {
                return;
            }

            var query = normalizeText(referenceSearchInput ? referenceSearchInput.value : '');
            var sortMode = referenceSort ? referenceSort.value : 'default';
            var visibleItems = [];

            referenceItems.forEach(function(item) {
                var category = item.getAttribute('data-category') || 'all';
                var matchesCategory = activeReferenceFilter === 'all' || category === activeReferenceFilter;
                var isMatch = (!query || normalizeText(item.innerText).indexOf(query) !== -1) && matchesCategory;
                item.style.display = isMatch ? '' : 'none';
                item.classList.toggle('ref-dim', !isMatch && Boolean(query || activeReferenceFilter !== 'all'));

                if (isMatch) {
                    visibleItems.push(item);
                }
            });

            if (sortMode === 'az') {
                visibleItems.sort(function(a, b) {
                    return a.innerText.localeCompare(b.innerText, 'ar');
                });
            } else if (sortMode === 'year') {
                visibleItems.sort(function(a, b) {
                    var yearA = parseInt(a.getAttribute('data-year') || (a.innerText.match(/\((\d{4})\)/) || [0, 0])[1], 10);
                    var yearB = parseInt(b.getAttribute('data-year') || (b.innerText.match(/\((\d{4})\)/) || [0, 0])[1], 10);
                    return yearB - yearA;
                });
            } else {
                visibleItems = originalReferenceOrder.filter(function(item) {
                    return item.style.display !== 'none';
                });
            }

            var referencesList = document.querySelector('.references-list');
            visibleItems.forEach(function(item) {
                referencesList.appendChild(item);
            });

            if (referenceEmptyState) {
                referenceEmptyState.hidden = !readingPreferences.hideReferences && visibleItems.length > 0;
                if (!visibleItems.length && !readingPreferences.hideReferences) {
                    referenceEmptyState.textContent = 'لا توجد مراجع مطابقة للفلترة الحالية.';
                } else if (readingPreferences.hideReferences) {
                    referenceEmptyState.textContent = 'قائمة المراجع مخفية حاليًا من مختبر القراءة.';
                }
            }

            if (readingPreferences.hideReferences) {
                referenceResultsMeta.textContent = 'قائمة المراجع مخفية حاليًا من مختبر القراءة.';
            } else {
                referenceResultsMeta.textContent = activeReferenceFilter === 'all'
                    ? 'يظهر الآن ' + visibleItems.length + ' من أصل ' + referenceItems.length + ' مرجع.'
                    : 'يظهر الآن ' + visibleItems.length + ' مرجعًا ضمن المسار ' + getReferenceFilterLabel(activeReferenceFilter) + ' من أصل ' + referenceItems.length + ' مرجع.';
            }
        }

        function getSectionParagraphs(sectionId, limit) {
            var section = typeof sectionId === 'string' ? getSectionById(sectionId) : sectionId;
            if (!section) {
                return [];
            }

            return Array.prototype.slice.call(section.querySelectorAll('p')).map(function(node) {
                return node.textContent.replace(/\s+/g, ' ').trim();
            }).filter(Boolean).slice(0, limit || 2);
        }

        function getSectionListTexts(sectionId, limit) {
            var section = typeof sectionId === 'string' ? getSectionById(sectionId) : sectionId;
            if (!section) {
                return [];
            }

            return Array.prototype.slice.call(section.querySelectorAll('li')).map(function(node) {
                return node.textContent.replace(/\s+/g, ' ').trim();
            }).filter(Boolean).slice(0, limit || 4);
        }

        function createPrintParagraphs(paragraphs) {
            return (paragraphs || []).map(function(text) {
                return '<p>' + escapeHtml(text) + '</p>';
            }).join('');
        }

        function createPrintList(items) {
            if (!items || !items.length) {
                return '';
            }

            return '<ul class="print-report-list">' + items.map(function(text) {
                return '<li>' + escapeHtml(text) + '</li>';
            }).join('') + '</ul>';
        }

        function createPrintFigureCard(placeholderId) {
            var placeholder = document.getElementById(placeholderId);
            var container = placeholder ? placeholder.closest('.figure-container') : null;
            var image = container ? container.querySelector('img') : null;
            var caption = container ? container.querySelector('.figure-caption') : null;

            if (!image || !image.getAttribute('src')) {
                return '';
            }

            return '<figure class="print-figure-card"><img src="' + escapeHtml(image.getAttribute('src')) + '" alt="' + escapeHtml(image.getAttribute('alt') || '') + '"><figcaption>' + escapeHtml(caption ? caption.textContent.trim() : '') + '</figcaption></figure>';
        }

        function createPrintReferenceList() {
            return '<ol class="print-reference-list">' + referenceItems.map(function(item) {
                return '<li>' + escapeHtml(item.getAttribute('data-copy-text') || item.innerText.replace(/\s+/g, ' ').trim()) + '</li>';
            }).join('') + '</ol>';
        }

        function createPrintPageFrame(pageNumber, totalPages, partLabel, title, description, bodyHtml, meta) {
            return '<section class="print-report-page">' +
                '<header class="print-running-head">' +
                    '<div class="print-running-brand">' +
                        '<strong>' + escapeHtml(meta.university) + '</strong>' +
                        '<span>المواطنة العالمية | تكليف 1</span>' +
                    '</div>' +
                    '<div class="print-running-page">' +
                        '<span>' + escapeHtml(meta.documentLabel) + '</span>' +
                        '<strong>الصفحة ' + pageNumber + ' من ' + totalPages + '</strong>' +
                    '</div>' +
                '</header>' +
                '<div class="print-page-head">' +
                    '<span class="print-part-label">' + escapeHtml(partLabel) + '</span>' +
                    '<h2>' + escapeHtml(title) + '</h2>' +
                    '<p>' + escapeHtml(description) + '</p>' +
                '</div>' +
                '<div class="print-page-body">' + bodyHtml + '</div>' +
                '<footer class="print-running-foot">' +
                    '<span>الباحث: ' + escapeHtml(meta.researcher) + '</span>' +
                    '<span>الرقم الجامعي: ' + escapeHtml(meta.studentId) + '</span>' +
                    '<span>تاريخ الإخراج: ' + escapeHtml(meta.printedAt) + '</span>' +
                '</footer>' +
            '</section>';
        }

        function getPdfFileName() {
            var safeDate = new Date().toISOString().slice(0, 10);
            return 'palestine-report-badr-albusaidi-' + safeDate + '.pdf';
        }

        function syncPdfFileNameLabel() {
            if (!pdfFileNameValue) {
                return;
            }

            pdfFileNameValue.textContent = getPdfFileName();
        }

        function updatePdfPreviewQueryState(enabled) {
            try {
                var nextUrl = new URL(window.location.href);
                if (enabled) {
                    nextUrl.searchParams.set('pdf', '1');
                } else {
                    nextUrl.searchParams.delete('pdf');
                }

                window.history.replaceState({}, '', nextUrl.toString());
            } catch (error) {
                // Ignore malformed local file URLs.
            }
        }

        function renderPrintReportShell() {
            if (!printReportShell) {
                return;
            }

            var titleNode = document.querySelector('.hero-title');
            var subtitleNode = document.querySelector('.hero-subtitle');
            var universityNode = document.querySelector('.hero-uni');
            var badgeParagraphs = Array.prototype.slice.call(document.querySelectorAll('.student-badge p'));
            var researcherStrong = badgeParagraphs[0] ? badgeParagraphs[0].querySelector('strong') : null;
            var studentIdStrong = badgeParagraphs[1] ? badgeParagraphs[1].querySelector('strong') : null;
            var courseLine = badgeParagraphs[2] ? badgeParagraphs[2].textContent.replace(/\s+/g, ' ').trim() : '';
            var overviewTitles = Array.prototype.slice.call(document.querySelectorAll('.overview-card h2')).slice(0, 4).map(function(node) {
                return node.textContent.replace(/\s+/g, ' ').trim();
            });
            var outlineItems = navLinks.map(function(link) {
                var title = link.querySelector('.nav-link-text');
                var subtitle = link.querySelector('small');
                return '<li><strong>' + escapeHtml(title ? title.textContent.trim() : link.textContent.trim()) + '</strong><span>' + escapeHtml(subtitle ? subtitle.textContent.trim() : '') + '</span></li>';
            }).join('');
            var summaryCards = overviewTitles.map(function(text) {
                return '<article><p>' + escapeHtml(text) + '</p></article>';
            }).join('');
            var printedAt = new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });

            var introParagraphs = getSectionParagraphs('intro', 2);
            var causesParagraphs = getSectionParagraphs('causes', 2);
            var causesPoints = getSectionListTexts('causes', 4);
            var impactParagraphs = getSectionParagraphs('impact', 2);
            var globalParagraphs = getSectionParagraphs('global', 2);
            var globalPoints = getSectionListTexts('global', 3);
            var personaParagraphs = getSectionParagraphs('persona', 2);
            var eventsParagraphs = getSectionParagraphs('events', 3);
            var analysisPoints = getSectionListTexts('analysis', 3);
            var solutionsPoints = getSectionListTexts('solutions', 5);
            var reflectionParagraphs = getSectionParagraphs('reflection', 2);
            var figuresPartOne = [createPrintFigureCard('ph-2'), createPrintFigureCard('ph-4')].filter(Boolean).join('');
            var figuresPartTwo = [createPrintFigureCard('ph-5'), createPrintFigureCard('ph-6')].filter(Boolean).join('');
            var researcherName = researcherStrong ? researcherStrong.textContent.trim() : 'بدر عبدالله هلال البوسعيدي';
            var studentId = studentIdStrong ? studentIdStrong.textContent.trim() : '150085';
            var universityName = universityNode ? universityNode.textContent.trim() : 'جامعة السلطان قابوس';
            var printMeta = {
                university: universityName,
                researcher: researcherName,
                studentId: studentId,
                printedAt: printedAt,
                documentLabel: 'قضية وشخصية عالمية'
            };
            var reportPageTotal = 4;

            courseLine = courseLine.replace(/^المقرر:\s*/, '');

            var pageOneBody =
                '<div class="print-report-grid">' +
                    '<article class="print-report-card"><span>سبب الاختيار</span><strong>تم اختيار القضية الفلسطينية لأنها تجمع بين حقوق الإنسان والعدالة الدولية والذاكرة التاريخية والتأثير المباشر على معنى المواطنة العالمية.</strong></article>' +
                    '<article class="print-report-card"><span>تعريف مختصر</span><strong>' + escapeHtml(introParagraphs[0] || 'القضية الفلسطينية قضية تاريخية وحقوقية ودولية متشابكة تتصل بالأرض والهوية والاحتلال واللجوء والشرعية الدولية.') + '</strong></article>' +
                    '<article class="print-report-card"><span>اتساع المجال</span><strong>لا تنحصر في بعد سياسي فقط، بل تمتد إلى الإنساني والاقتصادي والقانوني والثقافي، وهو ما يجعلها نموذجًا واضحًا لقضية عالمية ملحّة.</strong></article>' +
                '</div>' +
                '<article class="print-report-block"><span>التعريف والمدخل</span><h3>مدخل عام إلى القضية</h3>' + createPrintParagraphs(introParagraphs) + '</article>' +
                '<article class="print-report-block"><span>الأسباب</span><h3>الأسباب الأساسية لنشوء القضية</h3>' + createPrintParagraphs(causesParagraphs) + createPrintList(causesPoints) + '</article>' +
                '<article class="print-report-block"><span>التداعيات</span><h3>تأثير القضية على المواطنة العالمية</h3>' + createPrintParagraphs(impactParagraphs) + '</article>' +
                '<article class="print-report-block"><span>التأثير العالمي</span><h3>امتداد الأثر إلى المجتمع الدولي</h3>' + createPrintParagraphs(globalParagraphs) + createPrintList(globalPoints) + '</article>' +
                '<div class="print-figure-grid">' + figuresPartOne + '</div>';

            var pageTwoBody =
                '<div class="print-report-grid">' +
                    '<article class="print-report-card"><span>الشخصية المختارة</span><strong>يحيى السنوار شخصية سياسية بارزة ارتبط اسمها بالملف الفلسطيني في بعده الميداني والسياسي.</strong></article>' +
                    '<article class="print-report-card"><span>سبب الأهمية</span><strong>تنبع أهمية الشخصية من كونها تُقرأ ضمن بيئة اللجوء والحصار والانسداد السياسي، لا بوصفها حالة منفصلة عن بنية الصراع.</strong></article>' +
                    '<article class="print-report-card"><span>صلة الشخصية بالقضية</span><strong>يساعد تحليل الشخصية على فهم كيف تنتج البيئات الممتدة أنماطًا قيادية تؤثر في تطورات القضية على المستويين المحلي والدولي.</strong></article>' +
                '</div>' +
                '<article class="print-report-block"><span>نبذة</span><h3>من هو؟ ولماذا يرتبط بهذه القضية؟</h3>' + createPrintParagraphs(personaParagraphs) + '</article>' +
                '<article class="print-report-block"><span>أمثلة ومواقف</span><h3>مواقف حقيقية مرتبطة بالشخصية</h3>' + createPrintParagraphs(eventsParagraphs) + '</article>' +
                '<article class="print-report-block"><span>تحليل الإنجازات</span><h3>أثر الشخصية في مسار القضية</h3>' + createPrintList(analysisPoints) + '</article>' +
                '<div class="print-figure-grid">' + figuresPartTwo + '</div>';

            var pageThreeBody =
                '<div class="print-report-grid">' +
                    '<article class="print-report-card"><span>على مستوى الأفراد</span><strong>تعزيز الوعي، متابعة المصادر الموثوقة، والمشاركة في خطاب حقوقي مسؤول يرفض التبسيط والازدواجية.</strong></article>' +
                    '<article class="print-report-card"><span>على مستوى المجتمعات</span><strong>دعم المبادرات المدنية والتعليمية والإنسانية، وتوسيع الحوار العام حول العدالة والحقوق والتضامن العالمي.</strong></article>' +
                    '<article class="print-report-card"><span>على مستوى الدول</span><strong>الالتزام بالشرعية الدولية، حماية المدنيين، دعم الإغاثة، وربط أي مسار سياسي بمبدأ الحقوق لا بإدارة الأزمة فقط.</strong></article>' +
                '</div>' +
                '<article class="print-report-block"><span>حلول قابلة للتنفيذ</span><h3>مقترحات عملية لمعالجة القضية</h3>' + createPrintList(solutionsPoints) + '</article>' +
                '<article class="print-report-block"><span>الربط بين القضية والشخصية</span><h3>كيف يتكامل التحليل بين الجزأين؟</h3><p>تكشف الشخصية المختارة أن القضية لا تُفهم فقط من خلال النصوص القانونية أو السرد التاريخي، بل أيضًا من خلال الفاعلين الذين تشكلوا داخل ظروفها الممتدة. وبذلك يصبح الربط بين القضية والشخصية وسيلة لفهم أعمق لكيفية انتقال الأثر من البنية التاريخية إلى الموقف السياسي والحدث الميداني.</p></article>' +
                '<article class="print-report-block"><span>أبرز ما تعلمته</span><h3>خلاصة واستفادة</h3>' + createPrintParagraphs(reflectionParagraphs) + '</article>';

            var pageFourBody =
                '<article class="print-report-block"><span>تنبيه أكاديمي</span><h3>صياغة المراجع في نسخة الطباعة</h3><p>تتضمن هذه الصفحة المراجع المستخدمة في الموقع بصياغة مناسبة للطباعة، مع الحفاظ على تنوعها العلمي والحقوقي والقانوني والاقتصادي.</p></article>' +
                createPrintReferenceList();

            printReportShell.innerHTML =
                '<div class="print-cover">' +
                    '<span class="print-kicker">نسخة تقرير جاهزة للطباعة</span>' +
                    '<h1>' + escapeHtml(titleNode ? titleNode.textContent.trim() : document.title) + '</h1>' +
                    '<p>' + escapeHtml(subtitleNode ? subtitleNode.textContent.trim() : '') + '</p>' +
                    '<div class="print-cover-ribbon">' +
                        '<span>قضية وشخصية عالمية</span>' +
                        '<span>تقرير جامعي منسق للطباعة</span>' +
                        '<span>موعد التسليم: 28 مارس 2026</span>' +
                    '</div>' +
                    '<div class="print-meta-grid">' +
                        '<div class="print-meta-card"><span>الجهة الأكاديمية</span><strong>' + escapeHtml(universityName) + '</strong></div>' +
                        '<div class="print-meta-card"><span>الباحث</span><strong>' + escapeHtml(researcherName) + '</strong></div>' +
                        '<div class="print-meta-card"><span>الرقم الجامعي</span><strong>' + escapeHtml(studentId) + '</strong></div>' +
                        '<div class="print-meta-card"><span>المقرر</span><strong>' + escapeHtml(courseLine || 'المواطنة العالمية (G_STUDIES) - ربيع 2026') + '</strong></div>' +
                    '</div>' +
                    '<div class="print-highlight-grid">' +
                        '<div class="print-highlight-card"><span>محاور رئيسية</span><strong>' + sections.length + '</strong><small>مرتبطة ببنية التكليف من القضية إلى الشخصية ثم الحلول.</small></div>' +
                        '<div class="print-highlight-card"><span>مراجع موثقة</span><strong>' + referenceItems.length + '</strong><small>قانونية وحقوقية وأكاديمية واقتصادية ومتعددة الزوايا.</small></div>' +
                        '<div class="print-highlight-card"><span>صور توضيحية</span><strong>' + figureContainers.length + '</strong><small>مدمجة لدعم السرد والتحليل البصري داخل الموقع.</small></div>' +
                    '</div>' +
                    '<div class="print-cover-note">تم ترتيب هذه النسخة بصياغة تقرير جامعي واضحة، مع فصل بين الغلاف والفهرس والمتن والمراجع لتكون أقرب إلى متطلبات التسليم الرسمية.</div>' +
                '</div>' +
                '<div class="print-outline">' +
                    '<span class="print-kicker">فهرس التقرير</span>' +
                    '<h2>ترتيب المحاور والمداخل الأساسية</h2>' +
                    '<p>تاريخ تجهيز نسخة الطباعة: ' + escapeHtml(printedAt) + '</p>' +
                    '<ol class="print-outline-list">' + outlineItems + '</ol>' +
                    '<div class="print-outline-summary">' + summaryCards + '</div>' +
                    '<div class="print-outline-note">يبدأ الترقيم من المتن بعد هذا الفهرس، بينما يبقى الغلاف والفهرس خارج العد الأساسي للتقرير.</div>' +
                '</div>' +
                createPrintPageFrame(1, reportPageTotal, 'الجزء الأول', 'القضية العالمية: القضية الفلسطينية', 'يُعاد تنظيم هذا الجزء ليتوافق مع المطلوب في التكليف: اختيار القضية، تعريفها، تحليل أسبابها، بيان تداعياتها، ثم توضيح تأثيرها العالمي على المواطنة العالمية.', pageOneBody, printMeta) +
                createPrintPageFrame(2, reportPageTotal, 'الجزء الثاني', 'الشخصية العالمية المؤثرة: يحيى السنوار', 'يعرض هذا الجزء نبذة عن الشخصية، سبب ارتباطها بالقضية، ثم أمثلة ومواقف وإنجازات تساعد على تحليل درجة مساهمتها في مسار القضية المختارة.', pageTwoBody, printMeta) +
                createPrintPageFrame(3, reportPageTotal, 'الجزء الثالث', 'الحلول والاستفادة والتأمل', 'يركز هذا الجزء على ما يمكن اقتراحه من حلول عملية، وكيف يمكن للمواطن العالمي أن يسهم في المعالجة، ثم يختتم بربط واضح بين القضية والشخصية وأبرز ما تم تعلمه.', pageThreeBody, printMeta) +
                createPrintPageFrame(4, reportPageTotal, 'المراجع', 'قائمة المراجع الموثوقة', 'تتضمن هذه الصفحة المراجع المستخدمة في الموقع بصياغة مناسبة للطباعة، مع الحفاظ على تنوعها العلمي والحقوقي والقانوني والاقتصادي.', pageFourBody, printMeta);
        }

        function prepareForPrint() {
            if (printSnapshot) {
                return;
            }

            printSnapshot = {
                articleQuery: articleSearchInput ? articleSearchInput.value : '',
                referenceQuery: referenceSearchInput ? referenceSearchInput.value : '',
                referenceSort: referenceSort ? referenceSort.value : 'default',
                referenceFilter: activeReferenceFilter,
                tocFilter: activeTocFilter,
                routeKey: activeRouteKey,
                collapsedIds: sections.filter(function(section) {
                    return section.classList.contains('is-collapsed');
                }).map(function(section) {
                    return section.id;
                }),
                readingPreferences: Object.assign({}, readingPreferences)
            };

            cancelSpeechPlayback();

            sections.forEach(function(section) {
                section.classList.remove('is-collapsed');
            });
            syncSectionToolbarState();

            if (articleSearchInput) {
                articleSearchInput.value = '';
                clearSearchState();
            }

            if (referenceSearchInput) {
                referenceSearchInput.value = '';
            }

            if (referenceSort) {
                referenceSort.value = 'default';
            }

            readingPreferences.hideImages = false;
            readingPreferences.hideReferences = false;
            readingPreferences.focusMode = false;
            applyReadingPreferences();
            applyTocFilter('all');
            applyReferenceFilter('all');
            applyReadingRoute('all', false);
            renderPrintReportShell();
        }

        function openPdfPreview(shouldSyncUrl) {
            prepareForPrint();
            isPdfPreviewMode = true;
            syncPdfFileNameLabel();

            body.classList.add('pdf-preview-active');
            if (pdfPreviewControls) {
                pdfPreviewControls.hidden = false;
            }
            if (printReportShell) {
                printReportShell.setAttribute('aria-hidden', 'false');
            }
            if (shouldSyncUrl !== false) {
                updatePdfPreviewQueryState(true);
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
            showToast('تم فتح معاينة PDF بالتنسيق الجامعي.');
        }

        function closePdfPreview(shouldSyncUrl) {
            isPdfPreviewMode = false;
            body.classList.remove('pdf-preview-active');
            if (pdfPreviewControls) {
                pdfPreviewControls.hidden = true;
            }
            if (printReportShell) {
                printReportShell.setAttribute('aria-hidden', 'true');
            }
            if (shouldSyncUrl !== false) {
                updatePdfPreviewQueryState(false);
            }

            restoreAfterPrint();
            showToast('تمت العودة إلى وضع القراءة العادي.');
        }

        function triggerPdfExport() {
            syncPdfFileNameLabel();
            showToast('اختر "Save as PDF" ثم استخدم اسم الملف المقترح للحفظ.');
            window.print();
        }

        function restoreAfterPrint() {
            if (!printSnapshot) {
                return;
            }

            if (articleSearchInput) {
                articleSearchInput.value = printSnapshot.articleQuery;
                if (printSnapshot.articleQuery) {
                    runArticleSearch(false);
                } else {
                    clearSearchState();
                }
            }

            if (referenceSearchInput) {
                referenceSearchInput.value = printSnapshot.referenceQuery;
            }

            if (referenceSort) {
                referenceSort.value = printSnapshot.referenceSort;
            }

            sections.forEach(function(section) {
                section.classList.remove('is-collapsed');
            });
            printSnapshot.collapsedIds.forEach(function(sectionId) {
                var section = getSectionById(sectionId);
                if (section) {
                    section.classList.add('is-collapsed');
                }
            });
            syncSectionToolbarState();

            readingPreferences = Object.assign({}, defaultPreferences, printSnapshot.readingPreferences);
            applyReadingPreferences();
            applyTocFilter(printSnapshot.tocFilter);
            applyReferenceFilter(printSnapshot.referenceFilter);
            applyReadingRoute(printSnapshot.routeKey, false);
            updateSectionBookmarkButtons();
            if (printReportShell) {
                printReportShell.innerHTML = '';
                printReportShell.setAttribute('aria-hidden', 'true');
            }
            printSnapshot = null;
        }

        function createNotesDownload() {
            if (!researchNotes || !researchNotes.value.trim()) {
                showToast('لا توجد ملاحظات كافية للتحميل.');
                return;
            }

            var blob = new Blob([researchNotes.value], { type: 'text/plain;charset=utf-8' });
            var url = URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = 'palestine-research-notes.txt';
            link.click();
            URL.revokeObjectURL(url);
            showToast('تم تجهيز ملف الملاحظات للتحميل.');
        }

        function resetSpeechButtons() {
            document.querySelectorAll('.section-tool-btn[data-action="speak"]').forEach(function(button) {
                button.classList.remove('is-active');
                button.textContent = 'Ø§Ø³ØªÙ…Ø§Ø¹';
            });
        }

        function cancelSpeechPlayback() {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }

            activeSpeechSectionId = '';
            resetSpeechButtons();
        }

        function toggleSpeechForSection(sectionId, triggerButton) {
            var section = getSectionById(sectionId);
            if (!section || !('speechSynthesis' in window)) {
                showToast('ميزة الاستماع غير متاحة في هذا المتصفح.');
                return;
            }

            if (activeSpeechSectionId === sectionId) {
                cancelSpeechPlayback();
                if (triggerButton) {
                    triggerButton.textContent = 'استماع';
                    triggerButton.classList.remove('is-active');
                }
                showToast('تم إيقاف الاستماع.');
                return;
            }

            cancelSpeechPlayback();
            var utterance = new SpeechSynthesisUtterance(section.innerText);
            utterance.lang = 'ar';
            utterance.onend = function() {
                cancelSpeechPlayback();
                return;
                var speakButtons = document.querySelectorAll('.section-tool-btn[data-action="speak"]');
                speakButtons.forEach(function(button) {
                    button.classList.remove('is-active');
                    button.textContent = 'استماع';
                });
            };
            window.speechSynthesis.speak(utterance);
            activeSpeechSectionId = sectionId;

            var speakButtons = document.querySelectorAll('.section-tool-btn[data-action="speak"]');
            speakButtons.forEach(function(button) {
                var isCurrent = button.getAttribute('data-section') === sectionId;
                button.classList.toggle('is-active', isCurrent);
                button.textContent = isCurrent ? 'إيقاف' : 'استماع';
            });

            showToast('بدأ تشغيل القراءة الصوتية للمحور الحالي.');
        }

        function normalizeText(value) {
            return (value || '')
                .toLowerCase()
                .replace(/[\u064B-\u065F\u0670]/g, '')
                .replace(/[\u0623\u0625\u0622\u0671]/g, '\u0627')
                .replace(/\u0649/g, '\u064a')
                .replace(/\u0624/g, '\u0648')
                .replace(/\u0626/g, '\u064a')
                .replace(/\u0629/g, '\u0647')
                .replace(/\s+/g, ' ')
                .trim();
        }

        function updateThemeColor() {
            if (themeColorMeta) {
                themeColorMeta.setAttribute('content', body.classList.contains('dark-mode') ? '#0f172a' : '#115d3a');
            }
        }

        function applyTheme(theme) {
            var isDark = theme === 'dark';
            body.classList.toggle('dark-mode', isDark);

            if (themeIcon) {
                themeIcon.classList.toggle('fa-sun', isDark);
                themeIcon.classList.toggle('fa-moon', !isDark);
            }

            writeStoredValue('theme', isDark ? 'dark' : 'light');
            updateThemeColor();
        }

        function updateScrollUI() {
            var scrollTop = document.documentElement.scrollTop || body.scrollTop;
            var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

            if (progressBar) {
                progressBar.style.width = progress + '%';
            }

            if (backToTopButton) {
                backToTopButton.classList.toggle('show', scrollTop > 300);
            }
        }

        function activateRevealNode(node) {
            if (node && !node.classList.contains('active')) {
                node.classList.add('active');
            }
        }

        function initializeRevealObserver() {
            if (!revealNodes.length || !('IntersectionObserver' in window)) {
                revealElements();
                return;
            }

            revealObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        activateRevealNode(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.08,
                rootMargin: '0px 0px -10% 0px'
            });

            revealNodes.forEach(function(node) {
                if (node.classList.contains('active')) {
                    return;
                }

                revealObserver.observe(node);
            });
        }

        function revealElements() {
            if (!revealNodes.length) {
                return;
            }

            revealNodes.forEach(function(node) {
                if (node.getBoundingClientRect().top < window.innerHeight - 100) {
                    activateRevealNode(node);
                }
            });

            revealNodes = revealNodes.filter(function(node) {
                return !node.classList.contains('active');
            });
        }

        function setTocExpanded(isExpanded) {
            if (!sidebar || !tocToggleButton) {
                return;
            }

            var shouldCollapse = window.innerWidth <= 992 && !isExpanded;
            sidebar.classList.toggle('toc-collapsed', shouldCollapse);
            tocToggleButton.setAttribute('aria-expanded', shouldCollapse ? 'false' : 'true');
            tocToggleButton.classList.toggle('is-open', !shouldCollapse);

            if (sidebarStack) {
                sidebarStack.setAttribute('aria-hidden', shouldCollapse ? 'true' : 'false');
            }

            if (tocToggleText) {
                tocToggleText.textContent = shouldCollapse ? collapsedTocLabel : expandedTocLabel;
            }
        }

        function syncTocForViewport() {
            var isDesktopViewport = window.innerWidth > 992;

            if (isDesktopViewport) {
                setTocExpanded(true);
            } else if (!tocInitialized || wasDesktopViewport !== isDesktopViewport) {
                setTocExpanded(false);
            }

            wasDesktopViewport = isDesktopViewport;
            tocInitialized = true;
        }

        function updateActiveSection() {
            var currentId = '';
            var currentIndex = 0;

            sections.forEach(function(section, index) {
                if (window.scrollY >= section.offsetTop - 220) {
                    currentId = section.getAttribute('id');
                    currentIndex = index;
                }
            });

            currentId = currentId || (sections[0] ? sections[0].getAttribute('id') : '');

            var activeSection = sections[currentIndex] || sections[0];
            var completion = sections.length ? Math.max(1, Math.round(((currentIndex + 1) / sections.length) * 100)) : 0;
            currentSectionId = currentId;
            visitedSectionIds[currentId] = true;
            writeStoredValue(lastSectionKey, currentId);

            navLinks.forEach(function(link) {
                var isActive = currentId && link.getAttribute('href') === '#' + currentId;
                link.classList.toggle('active', isActive);

                if (isActive) {
                    link.setAttribute('aria-current', 'location');
                } else {
                    link.removeAttribute('aria-current');
                }
            });

            if (currentSectionLabel && activeSection) {
                currentSectionLabel.textContent = activeSection.getAttribute('data-nav-title') || '';
            }

            if (readingProgressBar) {
                readingProgressBar.style.width = completion + '%';
            }

            if (readingProgressText) {
                readingProgressText.textContent = completion + '% \u0645\u0646 \u0645\u062d\u0627\u0648\u0631 \u0627\u0644\u0628\u062d\u062b';
            }

            updateQuoteFromSection(activeSection);
            updateFocusPanel();
            setActiveTimelineStop(currentId);
            updateVisitedVisuals();
            updateSectionBookmarkButtons();
        }

        function updateResearchMetrics() {
            var sectionCount = sections.length;
            var referenceCount = referenceItems.length;
            var figureCount = figureContainers.length;
            var contentText = mainContent ? mainContent.innerText : '';
            var words = contentText.match(/\S+/g);
            var wordCount = words ? words.length : 0;
            var readingMinutes = Math.max(1, Math.ceil(wordCount / 170));
            var readingTimeLabel = readingMinutes + ' \u062f';

            setText('metricSections', sectionCount);
            setText('metricReferences', referenceCount);
            setText('metricFigures', figureCount);
            setText('metricReadingTime', readingTimeLabel);
            setText('sidebarRefCount', referenceCount);
            setText('sidebarFigureCount', figureCount);
            setText('sidebarReadingTime', readingTimeLabel);
        }

        function clearSearchState() {
            sections.forEach(function(section) {
                section.classList.remove('section-match', 'section-dim');
            });

            referenceItems.forEach(function(item) {
                item.classList.remove('ref-dim');
            });

            if (searchResultsMeta) {
                searchResultsMeta.textContent = defaultSearchMessage;
            }
        }

        function scheduleArticleSearch(shouldScrollToFirstMatch) {
            if (articleSearchTimer) {
                window.clearTimeout(articleSearchTimer);
            }

            articleSearchTimer = window.setTimeout(function() {
                runArticleSearch(shouldScrollToFirstMatch);
                articleSearchTimer = null;
            }, shouldScrollToFirstMatch ? 0 : 120);
        }

        function runArticleSearch(shouldScrollToFirstMatch) {
            if (!articleSearchInput) {
                return;
            }

            var rawQuery = articleSearchInput.value || '';
            var query = normalizeText(rawQuery);
            var matchedSections = 0;
            var matchedReferences = 0;
            var firstMatchedSection = null;

            if (!query) {
                clearSearchState();
                return;
            }

            sections.forEach(function(section) {
                var isMatch = normalizeText(section.innerText).indexOf(query) !== -1;
                section.classList.toggle('section-match', isMatch);
                section.classList.toggle('section-dim', !isMatch);

                if (isMatch) {
                    matchedSections += 1;
                    if (!firstMatchedSection) {
                        firstMatchedSection = section;
                    }
                }
            });

            referenceItems.forEach(function(item) {
                var isMatch = normalizeText(item.innerText).indexOf(query) !== -1;
                item.classList.toggle('ref-dim', !isMatch);

                if (isMatch) {
                    matchedReferences += 1;
                }
            });

            if (searchResultsMeta) {
                if (matchedSections || matchedReferences) {
                    searchResultsMeta.textContent = '\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 ' + matchedSections + ' \u0645\u062d\u0648\u0631 \u0648' + matchedReferences + ' \u0645\u0631\u062c\u0639 \u0645\u0637\u0627\u0628\u0642.';
                } else {
                    searchResultsMeta.textContent = '\u0644\u0627 \u062a\u0648\u062c\u062f \u0646\u062a\u0627\u0626\u062c \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0639\u0628\u0627\u0631\u0629 "' + rawQuery.trim() + '".';
                }
            }

            if (shouldScrollToFirstMatch && firstMatchedSection) {
                firstMatchedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function fallbackShare() {
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(window.location.href).then(function() {
                    alert('\u062a\u0645 \u0646\u0633\u062e \u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0641\u062d\u0629\u060c \u0648\u064a\u0645\u0643\u0646\u0643 \u0645\u0634\u0627\u0631\u0643\u062a\u0647 \u0627\u0644\u0622\u0646.');
                }).catch(function() {
                    alert('\u064a\u0645\u0643\u0646\u0643 \u0646\u0633\u062e \u0627\u0644\u0631\u0627\u0628\u0637 \u0645\u0646 \u0634\u0631\u064a\u0637 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0644\u0645\u0634\u0627\u0631\u0643\u062a\u0647.');
                });
                return;
            }

            alert('\u064a\u0645\u0643\u0646\u0643 \u0646\u0633\u062e \u0627\u0644\u0631\u0627\u0628\u0637 \u0645\u0646 \u0634\u0631\u064a\u0637 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0644\u0645\u0634\u0627\u0631\u0643\u062a\u0647.');
        }

        function getFigureAlt(placeholder) {
            if (!placeholder || !placeholder.parentNode) {
                return '';
            }

            var caption = placeholder.parentNode.querySelector('.figure-caption');
            return caption ? caption.textContent.trim() : '';
        }

        figureContainers.forEach(function(container, index) {
            container.setAttribute('role', 'button');
            container.setAttribute('tabindex', '0');
            container.setAttribute('aria-label', '\u0641\u062a\u062d \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u0648\u0636\u064a\u062d\u064a\u0629 \u0631\u0642\u0645 ' + (index + 1));

            container.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();

                    var uploadInput = container.nextElementSibling;
                    if (uploadInput && uploadInput.type === 'file') {
                        uploadInput.click();
                    }
                }
            });
        });

        window.loadImage = function(event, placeholderId) {
            var reader = new FileReader();
            reader.onload = function() {
                var placeholder = document.getElementById(placeholderId);

                if (!placeholder) {
                    return;
                }

                placeholder.innerHTML = '<img src="' + reader.result + '" alt="' + getFigureAlt(placeholder) + '" loading="lazy" decoding="async" style="width:100%; max-height:400px; object-fit:contain; border-radius:8px; display:block; margin:0 auto;">';
                placeholder.style.background = 'transparent';
                placeholder.style.padding = '0';
            };

            if (event.target.files[0]) {
                reader.readAsDataURL(event.target.files[0]);
            }
        };

        function injectDefaultFigure(placeholderId, imagePath, altText) {
            var placeholder = document.getElementById(placeholderId);
            if (!placeholder) {
                return;
            }

            placeholder.innerHTML = '<img src="' + imagePath + '" alt="' + altText + '" loading="lazy" decoding="async" style="width:100%; max-height:400px; object-fit:contain; border-radius:8px; display:block; margin:0 auto;">';
            placeholder.style.background = 'transparent';
            placeholder.style.padding = '0';
        }

        applyTheme(readStoredValue('theme', 'light') === 'dark' ? 'dark' : 'light');

        if (themeToggleButton) {
            themeToggleButton.addEventListener('click', function() {
                applyTheme(body.classList.contains('dark-mode') ? 'light' : 'dark');
            });
        }

        if (backToTopButton) {
            backToTopButton.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        if (shareButton) {
            shareButton.addEventListener('click', function() {
                var shareData = {
                    title: document.title,
                    text: shareText,
                    url: window.location.href
                };

                if (navigator.share) {
                    navigator.share(shareData).catch(function(error) {
                        if (error && error.name !== 'AbortError') {
                            fallbackShare();
                        }
                    });
                    return;
                }

                fallbackShare();
            });
        }

        if (articleSearchInput) {
            articleSearchInput.addEventListener('input', function() {
                scheduleArticleSearch(false);
            });

            articleSearchInput.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    if (articleSearchTimer) {
                        window.clearTimeout(articleSearchTimer);
                        articleSearchTimer = null;
                    }
                    runArticleSearch(true);
                }

                if (event.key === 'Escape') {
                    if (articleSearchTimer) {
                        window.clearTimeout(articleSearchTimer);
                        articleSearchTimer = null;
                    }
                    articleSearchInput.value = '';
                    clearSearchState();
                }
            });
        }

        if (tocToggleButton) {
            tocToggleButton.addEventListener('click', function() {
                var isExpanded = tocToggleButton.getAttribute('aria-expanded') === 'true';
                setTocExpanded(!isExpanded);
            });
        }

        navLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                var targetId = (link.getAttribute('href') || '').replace('#', '');

                if (targetId) {
                    event.preventDefault();
                    scrollToSection(targetId);
                    if (window.history && window.history.replaceState) {
                        try {
                            window.history.replaceState(null, '', '#' + targetId);
                        } catch (error) {
                            window.location.hash = targetId;
                        }
                    }
                }

                if (window.innerWidth <= 992) {
                    setTocExpanded(false);
                }
            });
        });

        keywordChipButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                if (!articleSearchInput) {
                    return;
                }

                articleSearchInput.value = button.getAttribute('data-keyword') || '';
                runArticleSearch(true);
                articleSearchInput.focus();
            });
        });

        tocFilterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                applyTocFilter(button.getAttribute('data-filter') || 'all');
            });
        });

        timelineButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                scrollToSection(button.getAttribute('data-target'), 'تم الانتقال إلى المحطة الزمنية المختارة.');
            });
        });

        routeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                applyReadingRoute(button.getAttribute('data-route') || 'all', true);
            });
        });

        if (routeTrail) {
            routeTrail.addEventListener('click', function(event) {
                var routeButton = event.target.closest('[data-target]');
                if (!routeButton) {
                    return;
                }

                scrollToSection(routeButton.getAttribute('data-target'), 'تم الانتقال إلى محطة داخل المسار المختار.');
            });
        }

        lensChipButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                applyKeywordLens(button.getAttribute('data-keyword') || '');
            });
        });

        glossaryLinkButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                applyKeywordLens(button.getAttribute('data-keyword') || '');
            });
        });

        if (glossarySearchInput) {
            glossarySearchInput.addEventListener('input', filterGlossary);
        }

        if (copyOutlineBtn) {
            copyOutlineBtn.addEventListener('click', copyArticleOutline);
        }

        if (randomSectionBtn) {
            randomSectionBtn.addEventListener('click', jumpToRandomSection);
        }

        if (focusUnreadBtn) {
            focusUnreadBtn.addEventListener('click', focusFirstUnreadSection);
        }

        if (activatePresentationModeBtn) {
            activatePresentationModeBtn.addEventListener('click', activatePresentationMode);
        }

        if (copyExecutiveSummaryBtn) {
            copyExecutiveSummaryBtn.addEventListener('click', function() {
                copyText(buildExecutiveSummaryText(), 'تم نسخ الملخص التنفيذي.');
            });
        }

        if (copySubmissionChecklistBtn) {
            copySubmissionChecklistBtn.addEventListener('click', function() {
                copyText(buildSubmissionChecklistText(), 'تم نسخ خطة التسليم.');
            });
        }

        if (copyOralOpeningBtn) {
            copyOralOpeningBtn.addEventListener('click', function() {
                copyText(buildOralOpeningText(), 'تم نسخ المقدمة الشفوية.');
            });
        }

        if (copyDefenseAnswersBtn) {
            copyDefenseAnswersBtn.addEventListener('click', function() {
                copyText(buildDefenseAnswersText(), 'تم نسخ أجوبة المناقشة.');
            });
        }

        if (copyMinutePlanBtn) {
            copyMinutePlanBtn.addEventListener('click', function() {
                copyText(buildFiveMinutePlanText(), 'تم نسخ خطة العرض الشفهي.');
            });
        }

        if (copyClosingReflectionBtn) {
            copyClosingReflectionBtn.addEventListener('click', function() {
                copyText(buildClosingReflectionText(), 'تم نسخ الخاتمة الشفوية.');
            });
        }

        if (openPaletteBtn) {
            openPaletteBtn.addEventListener('click', function() {
                openCommandPalette('');
            });
        }

        if (commandPaletteBtn) {
            commandPaletteBtn.addEventListener('click', function() {
                openCommandPalette('');
            });
        }

        if (commandPaletteClose) {
            commandPaletteClose.addEventListener('click', closeCommandPalette);
        }

        if (commandPaletteBackdrop) {
            commandPaletteBackdrop.addEventListener('click', closeCommandPalette);
        }

        if (paletteSearch) {
            paletteSearch.addEventListener('input', function() {
                renderPaletteResults(paletteSearch.value);
            });
            paletteSearch.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    var firstResult = paletteResults ? paletteResults.querySelector('.palette-result') : null;
                    if (firstResult) {
                        runPaletteAction(firstResult.getAttribute('data-action'), firstResult.getAttribute('data-value'));
                    }
                }
            });
        }

        paletteShortcutButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                var shortcutValue = button.getAttribute('data-palette-shortcut') || '';
                if (paletteSearch) {
                    paletteSearch.value = shortcutValue;
                    renderPaletteResults(shortcutValue);
                    paletteSearch.focus();
                }
            });
        });

        if (paletteResults) {
            paletteResults.addEventListener('click', function(event) {
                var resultButton = event.target.closest('.palette-result');
                if (!resultButton) {
                    return;
                }

                runPaletteAction(resultButton.getAttribute('data-action'), resultButton.getAttribute('data-value'));
            });
        }

        [prevSectionBtn, nextSectionBtn].forEach(function(button) {
            if (!button) {
                return;
            }

            button.addEventListener('click', function() {
                var targetId = button.getAttribute('data-target');
                if (targetId) {
                    scrollToSection(targetId, 'تم الانتقال بين المحاور عبر لوحة التركيز.');
                }
            });
        });

        if (briefingDeck) {
            briefingDeck.addEventListener('click', function(event) {
                var briefingButton = event.target.closest('[data-target]');
                if (!briefingButton) {
                    return;
                }

                scrollToSection(briefingButton.getAttribute('data-target'), 'تم فتح المحور من بطاقات الموجز.');
            });
        }

        if (copySpeakingPointsBtn) {
            copySpeakingPointsBtn.addEventListener('click', function() {
                copyText(createSpeakingPointsText(), 'تم نسخ نقاط العرض.');
            });
        }

        if (copyTimelineOutlineBtn) {
            copyTimelineOutlineBtn.addEventListener('click', function() {
                copyText(createTimelineOutlineText(), 'تم نسخ الخط الزمني.');
            });
        }

        if (copyEvidenceMapBtn) {
            copyEvidenceMapBtn.addEventListener('click', function() {
                copyText(createEvidenceMapText(), 'تم نسخ خريطة الأدلة.');
            });
        }

        if (copyCurrentSectionSnippetBtn) {
            copyCurrentSectionSnippetBtn.addEventListener('click', function() {
                var currentSection = getSectionById(currentSectionId);
                if (!currentSection) {
                    return;
                }
                copyText(getSectionTitle(currentSection) + '\n' + getLeadParagraphText(currentSection), 'تم نسخ موجز المحور الحالي.');
            });
        }

        if (quickJumpList) {
            quickJumpList.addEventListener('click', function(event) {
                var button = event.target.closest('[data-target]');
                if (!button) {
                    return;
                }

                var target = getSectionById(button.getAttribute('data-target'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }

        if (bookmarkChipList) {
            bookmarkChipList.addEventListener('click', function(event) {
                var button = event.target.closest('[data-target]');
                if (!button) {
                    return;
                }

                var target = getSectionById(button.getAttribute('data-target'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }

        if (mainContent) {
            mainContent.addEventListener('click', function(event) {
                var sectionButton = event.target.closest('.section-tool-btn');
                var copyReferenceButton = event.target.closest('.ref-copy-btn');

                if (copyReferenceButton) {
                    var refItem = copyReferenceButton.closest('.ref-item');
                    if (refItem) {
                        copyText(refItem.getAttribute('data-copy-text') || refItem.innerText.replace('نسخ', '').trim(), 'تم نسخ المرجع.');
                    }
                    return;
                }

                if (!sectionButton) {
                    return;
                }

                var action = sectionButton.getAttribute('data-action');
                var sectionId = sectionButton.getAttribute('data-section');
                var targetSection = getSectionById(sectionId);

                if (!targetSection) {
                    return;
                }

                if (action === 'link') {
                    copyText(window.location.href.split('#')[0] + '#' + sectionId, 'تم نسخ رابط المحور.');
                } else if (action === 'bookmark') {
                    toggleSavedSection(sectionId);
                } else if (action === 'collapse') {
                    var collapsed = targetSection.classList.toggle('is-collapsed');
                    sectionButton.textContent = collapsed ? 'فتح' : 'طي';
                    showToast(collapsed ? 'تم طي تفاصيل المحور.' : 'تم فتح تفاصيل المحور.');
                } else if (action === 'speak') {
                    toggleSpeechForSection(sectionId, sectionButton);
                }
            });
        }

        if (continueReadingBtn) {
            continueReadingBtn.addEventListener('click', function() {
                var savedSection = readStoredValue(lastSectionKey, currentSectionId) || currentSectionId;
                var target = getSectionById(savedSection);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    showToast('تم الانتقال إلى آخر محور وصلت إليه.');
                }
            });
        }

        if (bookmarkCurrentBtn) {
            bookmarkCurrentBtn.addEventListener('click', function() {
                toggleSavedSection(currentSectionId);
            });
        }

        if (clearBookmarksBtn) {
            clearBookmarksBtn.addEventListener('click', function() {
                savedSectionIds = [];
                persistSavedSectionIds();
                renderBookmarkChips();
                updateSectionBookmarkButtons();
                renderPaletteResults(paletteSearch ? paletteSearch.value : '');
                showToast('تم مسح جميع المحاور المحفوظة.');
            });
        }

        if (copySummaryBtn) {
            copySummaryBtn.addEventListener('click', function() {
                var title = document.querySelector('.hero-title');
                var subtitle = document.querySelector('.hero-subtitle');
                var summaryCards = Array.prototype.slice.call(document.querySelectorAll('.overview-card h2')).slice(0, 3).map(function(node) { return '- ' + node.textContent.trim(); }).join('\n');
                var summaryText = (title ? title.textContent.trim() : document.title) + '\n' + (subtitle ? subtitle.textContent.trim() : '') + '\n\n' + summaryCards;
                copyText(summaryText, 'تم نسخ ملخص البحث.');
            });
        }

        if (copyPageLinkBtn) {
            copyPageLinkBtn.addEventListener('click', function() {
                copyText(window.location.href, 'تم نسخ رابط الصفحة.');
            });
        }

        if (saveNotesBtn) {
            saveNotesBtn.addEventListener('click', function() {
                persistNotes(true);
            });
        }

        if (copyNotesBtn) {
            copyNotesBtn.addEventListener('click', function() {
                if (!researchNotes || !researchNotes.value.trim()) {
                    showToast('لا توجد ملاحظات لنسخها.');
                    return;
                }

                copyText(researchNotes.value, 'تم نسخ الملاحظات.');
            });
        }

        if (downloadNotesBtn) {
            downloadNotesBtn.addEventListener('click', createNotesDownload);
        }

        if (clearNotesBtn) {
            clearNotesBtn.addEventListener('click', function() {
                if (!researchNotes) {
                    return;
                }

                researchNotes.value = '';
                persistNotes(true);
            });
        }

        if (researchNotes) {
            researchNotes.addEventListener('input', updateNotesWordCount);
        }

        if (referenceSearchInput) {
            referenceSearchInput.addEventListener('input', filterAndSortReferences);
        }

        if (referenceSort) {
            referenceSort.addEventListener('change', filterAndSortReferences);
        }

        referenceFilterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                applyReferenceFilter(button.getAttribute('data-ref-filter') || 'all');
            });
        });

        if (copyReferencesBtn) {
            copyReferencesBtn.addEventListener('click', function() {
                var visibleRefs = referenceItems.filter(function(item) { return item.style.display !== 'none'; }).map(function(item) {
                    return item.getAttribute('data-copy-text') || item.innerText.replace('نسخ', '').trim();
                }).join('\n\n');
                copyText(visibleRefs, 'تم نسخ المراجع الظاهرة.');
            });
        }

        if (fontDecreaseBtn) {
            fontDecreaseBtn.addEventListener('click', function() {
                readingPreferences.fontScale = Math.max(0.85, Number((readingPreferences.fontScale - 0.05).toFixed(2)));
                persistReadingPreferences();
                applyReadingPreferences();
            });
        }

        if (fontIncreaseBtn) {
            fontIncreaseBtn.addEventListener('click', function() {
                readingPreferences.fontScale = Math.min(1.3, Number((readingPreferences.fontScale + 0.05).toFixed(2)));
                persistReadingPreferences();
                applyReadingPreferences();
            });
        }

        if (fontResetBtn) {
            fontResetBtn.addEventListener('click', function() {
                readingPreferences.fontScale = 1;
                readingPreferences.lineHeight = 'normal';
                readingPreferences.fontMode = 'classic';
                readingPreferences.widthMode = 'standard';
                readingPreferences.highContrast = false;
                readingPreferences.sepia = false;
                readingPreferences.hideImages = false;
                readingPreferences.hideReferences = false;
                readingPreferences.focusMode = false;
                persistReadingPreferences();
                applyReadingPreferences();
                filterAndSortReferences();
                showToast('تمت إعادة الواجهة إلى وضعها الافتراضي.');
            });
        }

        [lineHeightCompactBtn, lineHeightNormalBtn, lineHeightAiryBtn].forEach(function(button) {
            if (!button) {
                return;
            }
            button.addEventListener('click', function() {
                readingPreferences.lineHeight = button === lineHeightCompactBtn ? 'compact' : button === lineHeightAiryBtn ? 'airy' : 'normal';
                persistReadingPreferences();
                applyReadingPreferences();
            });
        });

        [fontClassicBtn, fontEditorialBtn, fontModernBtn].forEach(function(button) {
            if (!button) {
                return;
            }
            button.addEventListener('click', function() {
                readingPreferences.fontMode = button === fontModernBtn ? 'modern' : button === fontEditorialBtn ? 'editorial' : 'classic';
                persistReadingPreferences();
                applyReadingPreferences();
            });
        });

        [widthStandardBtn, widthNarrowBtn, widthWideBtn].forEach(function(button) {
            if (!button) {
                return;
            }
            button.addEventListener('click', function() {
                readingPreferences.widthMode = button === widthNarrowBtn ? 'narrow' : button === widthWideBtn ? 'wide' : 'standard';
                persistReadingPreferences();
                applyReadingPreferences();
            });
        });

        [
            { button: presetResearchBtn, preset: 'research' },
            { button: presetFocusBtn, preset: 'focus' },
            { button: presetPresentationBtn, preset: 'presentation' }
        ].forEach(function(item) {
            if (!item.button) {
                return;
            }

            item.button.addEventListener('click', function() {
                applyReadingPreset(item.preset);
            });
        });

        [
            { button: highContrastToggle, key: 'highContrast' },
            { button: sepiaToggle, key: 'sepia' },
            { button: imagesToggle, key: 'hideImages' },
            { button: referencesToggle, key: 'hideReferences' },
            { button: focusModeToggle, key: 'focusMode' }
        ].forEach(function(item) {
            if (!item.button) {
                return;
            }

            item.button.addEventListener('click', function() {
                readingPreferences[item.key] = !readingPreferences[item.key];
                persistReadingPreferences();
                applyReadingPreferences();
                filterAndSortReferences();
            });
        });

        if (openPdfPreviewBtn) {
            openPdfPreviewBtn.addEventListener('click', function() {
                triggerPdfExport();
            });
        }

        if (printPdfNowBtn) {
            printPdfNowBtn.addEventListener('click', triggerPdfExport);
        }

        if (copyPdfFileNameBtn) {
            copyPdfFileNameBtn.addEventListener('click', function() {
                copyText(getPdfFileName(), 'تم نسخ اسم ملف الـ PDF المقترح.');
            });
        }

        if (closePdfPreviewBtn) {
            closePdfPreviewBtn.addEventListener('click', function() {
                closePdfPreview(true);
            });
        }

        window.addEventListener('keydown', function(event) {
            var paletteOpen = commandPalette && !commandPalette.hidden;

            if (isPdfPreviewMode && event.key === 'Escape') {
                event.preventDefault();
                closePdfPreview(true);
                return;
            }

            if (paletteOpen && event.key === 'Escape') {
                event.preventDefault();
                closeCommandPalette();
                return;
            }

            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
                event.preventDefault();
                openCommandPalette('');
                return;
            }

            if (event.target && /input|textarea|select/i.test(event.target.tagName)) {
                return;
            }

            if (event.key === '/') {
                event.preventDefault();
                if (articleSearchInput) {
                    articleSearchInput.focus();
                    articleSearchInput.select();
                }
            } else if (event.key.toLowerCase() === 't') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (event.key.toLowerCase() === 'n') {
                if (researchNotes) {
                    researchNotes.focus();
                }
            } else if (event.key.toLowerCase() === 'b') {
                toggleSavedSection(currentSectionId);
            } else if (event.key.toLowerCase() === 'k') {
                event.preventDefault();
                openCommandPalette('');
            }
        });

        window.addEventListener('beforeprint', prepareForPrint);
        window.addEventListener('afterprint', function() {
            if (isPdfPreviewMode) {
                renderPrintReportShell();
                if (printReportShell) {
                    printReportShell.setAttribute('aria-hidden', 'false');
                }
                syncPdfFileNameLabel();
                return;
            }

            restoreAfterPrint();
        });

        enhanceSections();
        syncSectionToolbarState();
        enhanceReferenceItems();
        loadSavedSectionIds();
        renderBookmarkChips();
        renderQuickJumpChips();
        renderBriefingDeck();
        loadNotes();
        loadReadingPreferences();
        updateVisitMeta();
        applyTocFilter('all');
        applyReferenceFilter('all');
        applyReadingRoute('all', false);
        filterGlossary();
        updateEvidenceDashboard();
        renderPaletteResults('');
        updateSectionBookmarkButtons();
        updateVisitedVisuals();
        updateFocusPanel();
        updateSessionTimer();

        injectDefaultFigure('ph-1', 'map.png', '\u062e\u0631\u064a\u0637\u0629 \u062a\u0627\u0631\u064a\u062e\u064a\u0629 \u0644\u0641\u0644\u0633\u0637\u064a\u0646');
        injectDefaultFigure('ph-2', 'refugees.jpg', '\u0635\u0648\u0631\u0629 \u0644\u0644\u0627\u062c\u0626\u064a\u0646 \u0627\u0644\u0641\u0644\u0633\u0637\u064a\u0646\u064a\u064a\u0646');
        injectDefaultFigure('ph-3', 'economy.jpg', '\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0644\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0644\u0633\u0637\u064a\u0646\u064a');
        injectDefaultFigure('ph-4', 'un.jpg', '\u062c\u0644\u0633\u0629 \u0641\u064a \u0627\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062a\u062d\u062f\u0629');
        injectDefaultFigure('ph-5', 'sinwar.jpg', '\u0635\u0648\u0631\u0629 \u0623\u0631\u0634\u064a\u0641\u064a\u0629 \u0644\u064a\u062d\u064a\u0649 \u0627\u0644\u0633\u0646\u0648\u0627\u0631');
        injectDefaultFigure('ph-6', 'march.jpg', '\u0645\u0634\u0647\u062f \u0645\u0646 \u0627\u0644\u0645\u0633\u064a\u0631\u0627\u062a \u0641\u064a \u063a\u0632\u0629');

        function handleWindowScroll() {
            updateScrollUI();
            if (!revealObserver) {
                revealElements();
            }
            updateActiveSection();
        }

        function requestScrollUpdate() {
            if (scrollTicking) {
                return;
            }

            scrollTicking = true;
            window.requestAnimationFrame(function() {
                handleWindowScroll();
                scrollTicking = false;
            });
        }

        function startSessionTimer() {
            if (sessionTimerId) {
                window.clearInterval(sessionTimerId);
            }

            sessionTimerId = window.setInterval(function() {
                updateSessionTimer();
                updateSubmissionCountdown();
            }, 1000);
        }

        function stopSessionTimer() {
            if (!sessionTimerId) {
                return;
            }

            window.clearInterval(sessionTimerId);
            sessionTimerId = null;
        }

        window.addEventListener('scroll', requestScrollUpdate, { passive: true });
        window.addEventListener('resize', function() {
            syncTocForViewport();
            requestScrollUpdate();
        });
        window.addEventListener('orientationchange', syncTocForViewport);
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopSessionTimer();
                cancelSpeechPlayback();
                return;
            }

            updateSessionTimer();
            startSessionTimer();
        });

        updateResearchMetrics();
        updateSubmissionReadiness();
        updateSubmissionCountdown();
        initializeRevealObserver();
        syncTocForViewport();
        handleWindowScroll();
        startSessionTimer();
        syncPdfFileNameLabel();

        try {
            var launchUrl = new URL(window.location.href);
            if (launchUrl.searchParams.get('pdf') === '1') {
                openPdfPreview(false);
            }
        } catch (error) {
            // Ignore malformed local file URLs.
        }
    })();

