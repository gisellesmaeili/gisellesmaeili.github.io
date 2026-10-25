/**
 * cheQueo (چکیو) - Standalone Interactive Demo Engine
 * Designed for Client Presentations & Static Deployments (Zero Backend Required)
 */

(function () {
    'use strict';

    const TOMAN_SVG = '<span class="chq-toman-icon" aria-label="تومان" title="تومان"><svg width="16" height="14" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.32 6.118c.315-.154.552-.308.789-.539l.473-.692c.079-.308.158-.616.158-.924h7.492c.473 0 .867-.154 1.183-.385.236-.308.394-.692.394-1.231V.5h-1.025v1.77c0 .385-.237.616-.631.616H3.74V2.5c0-.385-.08-.616-.158-.924 0-.23-.158-.461-.316-.615a1.654 1.654 0 0 0-.473-.308C2.557.577 2.32.5 2.163.5c-.316 0-.553.077-.79.154C1.217.808.98.884.9 1.116c-.157.154-.315.307-.315.538-.079.231-.158.462-.158.693 0 .23 0 .462.08.693.078.23.157.384.236.538.157.077.315.231.552.308.236.077.473.077.867.077h.631c0 .154-.079.308-.079.462-.079.154-.236.308-.315.462-.079.076-.237.153-.473.23a1.515 1.515 0 0 1-.631.154H.27V6.35h1.025c.394-.077.71-.154 1.025-.231zm-.158-3.232c-.315 0-.473 0-.63-.154-.08-.077-.158-.231-.158-.462 0-.23.079-.462.157-.539.158-.077.316-.154.552-.154.237 0 .395.077.552.231.158.154.158.385.158.693v.462h-.63v-.077z" fill="currentColor"/><path d="M10.442.5H7.445v.923h2.997V.5zM12.73 8.504c-.08-.231-.158-.385-.316-.539-.157-.154-.315-.308-.552-.385a1.515 1.515 0 0 0-.63-.154c-.237 0-.474.077-.71.154-.237.077-.395.231-.552.385-.158.154-.237.308-.316.539-.079.23-.079.462-.079.692v.231c0 .231-.079.308-.158.462-.157.077-.315.154-.552.154H8.55a.61.61 0 0 1-.394-.154c-.08-.154-.158-.308-.158-.462V5.733H6.973v3.848c0 .308 0 .539.079.693.078.154.157.308.315.462.158.076.237.23.473.23.158.077.316.077.552.077h.552c.158 0 .395-.077.552-.153.158-.078.395-.231.474-.462.157.23.315.384.552.461.236.077.473.154.788.154.473 0 .947-.153 1.183-.461.316-.308.473-.77.473-1.309a9.513 9.513 0 0 0-.236-.77zM11.23 9.966c-.236 0-.394-.077-.473-.154-.236-.154-.236-.308-.236-.539 0-.23.078-.384.157-.538.08-.154.316-.231.552-.231.237 0 .474.077.552.23.08.155.158.309.158.54-.079.461-.315.692-.71.692zM4.923 8.504c0 .23 0 .384-.08.615l-.236.462c-.158.154-.315.23-.473.308a1.607 1.607 0 0 1-.71.154h-.71c-.236 0-.473 0-.71-.077-.157-.154-.315-.231-.394-.385-.079-.154-.236-.308-.236-.462-.08-.154-.08-.384-.08-.615v-.847H.27v.924c0 .77.236 1.385.63 1.847.395.461.947.692 1.735.692h.79c.393 0 .709-.077 1.024-.23.316-.155.552-.309.789-.54.237-.23.394-.538.473-.846.08-.308.158-.616.158-1v-2.77l-1.025-.078.079 2.848z" fill="currentColor"/><path d="M3.74 7.426H2.557v1.077H3.74V7.426z" fill="currentColor"/></svg></span>';

    // Mock Cheque Sample Vector Graphic (Crisp Retina SVG Data URL)
    const MOCK_CHEQUE_SVG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
        '<svg width="480" height="240" viewBox="0 0 480 240" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="480" height="240" rx="16" fill="#FBF9FE"/>' +
        '<rect x="8" y="8" width="464" height="224" rx="12" fill="#FFFFFF" stroke="#C084FC" stroke-width="1.5" stroke-dasharray="6 4"/>' +
        '<rect x="24" y="24" width="80" height="28" rx="6" fill="#7851A9"/>' +
        '<text x="64" y="42" fill="#FFFFFF" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">چک صیادی</text>' +
        '<rect x="120" y="26" width="220" height="24" rx="6" fill="#F3E8FF"/>' +
        '<text x="230" y="42" fill="#6B21A8" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">شناسه صیاد: ۱۴۰۳-۹۸۲۱-۴۴۰۲-۰۰۱۲</text>' +
        '<rect x="360" y="24" width="96" height="28" rx="6" fill="#FAF5FF" stroke="#E9D5FF"/>' +
        '<text x="408" y="42" fill="#581C87" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">بانک نمونه</text>' +
        '<line x1="24" y1="80" x2="456" y2="80" stroke="#E9D5FF" stroke-width="1"/>' +
        '<text x="440" y="72" fill="#64748B" font-size="11" font-family="sans-serif" text-anchor="end">به موجب این چک مبلغ:</text>' +
        '<line x1="24" y1="125" x2="456" y2="125" stroke="#E9D5FF" stroke-width="1"/>' +
        '<text x="440" y="117" fill="#64748B" font-size="11" font-family="sans-serif" text-anchor="end">در وجه:</text>' +
        '<rect x="24" y="150" width="160" height="66" rx="8" fill="#F8FAFC" stroke="#E2E8F0"/>' +
        '<text x="104" y="188" fill="#94A3B8" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">محل امضای صادرکننده</text>' +
        '<path d="M40 190 Q 60 170, 80 185 T 120 180" stroke="#7851A9" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
        '<rect x="290" y="160" width="166" height="46" rx="8" fill="#FAF5FF" stroke="#C084FC"/>' +
        '<text x="373" y="188" fill="#581C87" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">تأیید شده در سامانه صیاد ✔</text>' +
        '</svg>'
    );

    // Helper: Convert English digits to Persian
    function toFaDigits(str) {
        const fa = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return String(str).replace(/[0-9]/g, w => fa[+w]);
    }

    // Number to Persian Words
    function numberToPersianWords(num) {
        num = parseInt(num, 10);
        if (isNaN(num) || num === 0) return 'صفر';

        const ones = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
        const teens = ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'];
        const tens = ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'];
        const hundreds = ['', 'یکصد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'];
        const scales = ['', 'هزار', 'میلیون', 'میلیارد'];

        function convertChunk(n) {
            let parts = [];
            let h = Math.floor(n / 100);
            let remainder = n % 100;
            let t = Math.floor(remainder / 10);
            let o = remainder % 10;

            if (h > 0) parts.push(hundreds[h]);
            if (remainder >= 10 && remainder < 20) {
                parts.push(teens[remainder - 10]);
            } else {
                if (t > 0) parts.push(tens[t]);
                if (o > 0) parts.push(ones[o]);
            }
            return parts.join(' و ');
        }

        let chunks = [];
        let scaleIdx = 0;
        while (num > 0) {
            let chunk = num % 1000;
            if (chunk > 0) {
                let chunkWords = convertChunk(chunk);
                let scaleWord = scales[scaleIdx];
                chunks.unshift(scaleWord ? `${chunkWords} ${scaleWord}` : chunkWords);
            }
            num = Math.floor(num / 1000);
            scaleIdx++;
        }

        return chunks.join(' و ');
    }

    function formatMoney(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // Helper: Convert Jalali date (YYYY/MM/DD) to Persian words
    function jalaliToPersianWords(jalaliStr) {
        if (!jalaliStr) return '';
        const parts = String(jalaliStr).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).split('/');
        if (parts.length !== 3) return jalaliStr;
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10);
        const d = parseInt(parts[2], 10);

        const dayWords = {
            1: 'یکم', 2: 'دوم', 3: 'سوم', 4: 'چهارم', 5: 'پنجم', 6: 'ششم', 7: 'هفتم', 8: 'هشتم', 9: 'نهم', 10: 'دهم',
            11: 'یازدهم', 12: 'دوازدهم', 13: 'سیزدهم', 14: 'چهاردهم', 15: 'پانزدهم', 16: 'شانزدهم', 17: 'هفدهم', 18: 'هجدهم', 19: 'نوزدهم', 20: 'بیستم',
            21: 'بیست و یکم', 22: 'بیست و دوم', 23: 'بیست و سوم', 24: 'بیست و چهارم', 25: 'بیست و پنجم', 26: 'بیست و ششم', 27: 'بیست و هفتم', 28: 'بیست و هشتم', 29: 'بیست و نهم', 30: 'سی‌ام', 31: 'سی و یکم'
        };
        const monthNames = {
            1: 'فروردین', 2: 'اردیبهشت', 3: 'خرداد', 4: 'تیر', 5: 'مرداد', 6: 'شهریور',
            7: 'مهر', 8: 'آبان', 9: 'آذر', 10: 'دی', 11: 'بهمن', 12: 'اسفند'
        };

        const dayText = dayWords[d] || String(d);
        const monthText = monthNames[m] || String(m);
        const yearText = numberToPersianWords(y);

        return `${dayText} ${monthText} ${yearText}`;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const wizard = document.getElementById('chequeo-wizard-frame');
        if (!wizard) return;

        // Mock Config for Standalone Demo
        const demoConfig = {
            orderId: 1258,
            orderTotal: 48500000,
            companyName: 'شرکت پاپ اسنوی (سهامی خاص)',
            receiver: 'شرکت پاپ اسنوی (سهامی خاص)',
            sayadId: '14008923410',
            plans: [
                {
                    id: 'plan_6m',
                    title: 'طرح ۶ ماهه (۳ فقره چک)',
                    installments_count: 3,
                    prepayment_type: 'percent',
                    prepayment_val: 30,
                    interval_months: 2,
                    fee_type: 'percent',
                    fee_val: 0
                },
                {
                    id: 'plan_12m',
                    title: 'طرح ۱۲ ماهه (۶ فقره چک)',
                    installments_count: 6,
                    prepayment_type: 'percent',
                    prepayment_val: 40,
                    interval_months: 2,
                    fee_type: 'percent',
                    fee_val: 0
                }
            ]
        };

        let currentStep = 1;
        let selectedPlan = demoConfig.plans[0];
        let currentCalc = calculatePlan(demoConfig.orderTotal, selectedPlan);
        let activeChequeTabIndex = 0;
        let chequesData = [];

        // DOM Elements
        const headerTitle = document.getElementById('chq-header-title');
        const headerSub = document.getElementById('chq-header-sub');
        const navBackBtn = document.getElementById('chq-nav-back');
        const progressBar = document.getElementById('chq-progress-fill');
        const progressContainer = document.getElementById('chq-progress-container');
        const timerClock = document.getElementById('chq-timer-clock');
        const portalOverlay = document.getElementById('chequeo-portal-overlay');

        // Step 1 Elements
        const planSelector = document.getElementById('chq-plan-selector');
        const tabsBar = document.getElementById('chq-tabs-bar');
        const cardSayadBadge = document.getElementById('card-sayad-badge');
        const finalPrepayVal = document.getElementById('chq-final-prepay-val');
        const rulesAgreeWrap = document.getElementById('chq-agree-wrap');
        const rulesCheckbox = document.getElementById('chq-rules-checkbox');
        const step1NextBtn = document.getElementById('chq-step1-next');
        const openRulesModalBtn = document.getElementById('chq-open-rules-modal');
        const closeRulesModalBtn = document.getElementById('chq-close-rules-modal');
        const modalAgreeBtn = document.getElementById('chq-modal-agree-btn');
        const rulesModal = document.getElementById('chq-rules-modal');

        // Breakdown elements
        const bkOrderTotal = document.getElementById('bk-order-total');
        const bkBasePrepay = document.getElementById('bk-base-prepay');
        const bkChequesCount = document.getElementById('bk-cheques-count');
        const bkChequeAmount = document.getElementById('bk-cheque-amount');
        const bkRoundingRow = document.getElementById('bk-rounding-row');
        const bkRoundingDiff = document.getElementById('bk-rounding-diff');

        // Step 2 Elements
        const drawerNameInput = document.getElementById('chq-drawer-name');
        const nationalIdInput = document.getElementById('chq-national-id');
        const drawerPhoneInput = document.getElementById('chq-drawer-phone');
        const natIdBadge = document.getElementById('chq-natid-badge');
        const errDrawerName = document.getElementById('err-drawer-name');
        const errNationalId = document.getElementById('err-national-id');
        const errDrawerPhone = document.getElementById('err-drawer-phone');
        const step2NextBtn = document.getElementById('chq-step2-next');

        // Step 3 Elements
        const dynamicSlotsContainer = document.getElementById('chq-dynamic-slots-container');
        const customerNoteInput = document.getElementById('chq-customer-note');
        const step3NextBtn = document.getElementById('chq-step3-next');

        // Step 4 Elements
        const contractDrawerName = document.getElementById('contract-drawer-name');
        const contractNationalId = document.getElementById('contract-national-id');
        const sigCanvas = document.getElementById('signature-canvas');
        const clearSigBtn = document.getElementById('chq-clear-signature');
        const sigHint = document.getElementById('chq-signature-hint');
        const finalCertWrap = document.getElementById('chq-final-cert-wrap');
        const finalCertCheckbox = document.getElementById('chq-final-cert-checkbox');
        const submitWizardBtn = document.getElementById('chq-submit-wizard');
        const submitText = document.getElementById('chq-submit-text');

        // Step 5 Elements
        const btnModify = document.getElementById('chq-btn-modify');
        const simBtns = document.querySelectorAll('.chq-sim-btn');
        const stPrepayAmount = document.getElementById('st-prepay-amount');
        const stActionPrepayAmount = document.getElementById('st-action-prepay-amount');

        // Reposition Datepicker smoothly on portal scroll (never hide prematurely)
        if (portalOverlay) {
            portalOverlay.addEventListener('scroll', function () {
                if (typeof window.jalaliDatepicker !== 'undefined' && typeof window.jalaliDatepicker.setPosition === 'function') {
                    window.jalaliDatepicker.setPosition();
                }
            }, { passive: true });
        }

        // 1. Timer Countdown (15:00)
        let remainingSeconds = 15 * 60;
        function updateTimer() {
            if (!timerClock) return;
            const minutes = Math.floor(remainingSeconds / 60);
            const seconds = remainingSeconds % 60;
            timerClock.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            if (remainingSeconds > 0) remainingSeconds--;
        }
        setInterval(updateTimer, 1000);
        updateTimer();

        // 2. Jalali Datepicker Init
        function initJalaliPicker() {
            if (typeof window.jalaliDatepicker !== 'undefined') {
                try {
                    window.jalaliDatepicker.startWatch({
                        minDate: 'today',
                        useDropDownYears: true,
                        changeMonthRotateYear: true,
                        showTodayBtn: true,
                        showEmptyBtn: false,
                        autoHide: true
                    });
                } catch (e) { }
            }
        }
        initJalaliPicker();

        // 3. Calculator Engine
        function calculatePlan(totalAmount, plan) {
            const prepayVal = parseFloat(plan.prepayment_val || 0);
            const basePrepay = totalAmount * (prepayVal / 100);
            const remaining = totalAmount - basePrepay;
            const chequesCount = Math.max(1, parseInt(plan.installments_count || 1, 10));

            // Round down to 10,000 Tomans
            const rawCheque = remaining / chequesCount;
            const roundedCheque = Math.floor(rawCheque / 10000) * 10000;
            const chequesSum = roundedCheque * chequesCount;
            const roundingDiff = remaining - chequesSum;
            const finalPrepay = basePrepay + roundingDiff;

            // Generate Jalali due dates
            const cheques = [];
            const datesList = ['1405/09/02', '1405/11/02', '1406/01/02', '1406/03/02', '1406/05/02', '1406/07/02'];

            for (let i = 0; i < chequesCount; i++) {
                cheques.push({
                    index: i + 1,
                    amount: roundedCheque,
                    amount_words: numberToPersianWords(roundedCheque),
                    due_date: datesList[i] || `140${5 + Math.floor(i / 6)}/0${(i % 6) + 1}/02`
                });
            }

            return {
                order_total: totalAmount,
                base_prepayment: basePrepay,
                cheques_count: chequesCount,
                cheque_amount: roundedCheque,
                cheque_amount_words: numberToPersianWords(roundedCheque),
                rounding_difference: roundingDiff,
                final_prepayment: finalPrepay,
                cheques: cheques
            };
        }

        // 4. Render Step 1
        function renderStep1() {
            if (!currentCalc || !currentCalc.cheques) return;

            const activeCheque = currentCalc.cheques[activeChequeTabIndex] || currentCalc.cheques[0];
            if (activeCheque) {
                // Cheque is legally in RIALS (1 Toman = 10 Rials)
                const rialAmount = (activeCheque.amount || 0) * 10;
                const rialWords = numberToPersianWords(rialAmount);
                const rialStr = String(rialAmount);

                const cardRialAmountWords = document.getElementById('card-rial-amount-words');
                if (cardRialAmountWords) {
                    cardRialAmountWords.textContent = rialWords;
                }

                // Render Rial digit cells
                const cardRialDigitCells = document.getElementById('card-rial-digit-cells');
                if (cardRialDigitCells) {
                    cardRialDigitCells.innerHTML = '';
                    for (let d = 0; d < rialStr.length; d++) {
                        const cell = document.createElement('span');
                        cell.className = 'rial-digit-cell';
                        cell.textContent = toFaDigits(rialStr[d]);
                        cardRialDigitCells.appendChild(cell);
                    }
                }

                // Render Date cells and words
                const dueDate = activeCheque.due_date || '1405/09/02';
                const dateParts = dueDate.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).split('/');
                if (dateParts.length === 3) {
                    const y = dateParts[0];
                    const m = dateParts[1].padStart(2, '0');
                    const d = dateParts[2].padStart(2, '0');

                    const y1 = document.getElementById('card-date-y1');
                    const y2 = document.getElementById('card-date-y2');
                    const y3 = document.getElementById('card-date-y3');
                    const y4 = document.getElementById('card-date-y4');
                    const m1 = document.getElementById('card-date-m1');
                    const m2 = document.getElementById('card-date-m2');
                    const d1 = document.getElementById('card-date-d1');
                    const d2 = document.getElementById('card-date-d2');

                    if (y1) y1.textContent = toFaDigits(y[0] || '۱');
                    if (y2) y2.textContent = toFaDigits(y[1] || '۴');
                    if (y3) y3.textContent = toFaDigits(y[2] || '۰');
                    if (y4) y4.textContent = toFaDigits(y[3] || '۵');
                    if (m1) m1.textContent = toFaDigits(m[0] || '۰');
                    if (m2) m2.textContent = toFaDigits(m[1] || '۹');
                    if (d1) d1.textContent = toFaDigits(d[0] || '۰');
                    if (d2) d2.textContent = toFaDigits(d[1] || '۲');

                    const cardDateWords = document.getElementById('card-date-words');
                    const normalizedDate = dueDate.replace(/[۰-۹]/g, d =>
                        String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
                    );

                    if (cardDateWords) {
                        cardDateWords.textContent = jalaliToPersianWords(normalizedDate);
                    }
                }

                if (cardSayadBadge) {
                    cardSayadBadge.textContent = `1403 - 9821 - 4402 - 0${activeCheque.index || (activeChequeTabIndex + 1)}`;
                }
            }

            // Breakdown card
            if (bkOrderTotal) bkOrderTotal.innerHTML = `${formatMoney(currentCalc.order_total)} ${TOMAN_SVG}`;
            if (bkBasePrepay) bkBasePrepay.innerHTML = `${formatMoney(currentCalc.base_prepayment)} ${TOMAN_SVG}`;
            if (bkChequesCount) bkChequesCount.textContent = `${currentCalc.cheques_count} فقره چک صیادی`;
            if (bkChequeAmount) bkChequeAmount.innerHTML = `${formatMoney(currentCalc.cheque_amount)} ${TOMAN_SVG}`;
            if (bkRoundingDiff) bkRoundingDiff.innerHTML = `+ ${formatMoney(currentCalc.rounding_difference)} ${TOMAN_SVG}`;
            if (finalPrepayVal) finalPrepayVal.innerHTML = `${formatMoney(currentCalc.final_prepayment)} ${TOMAN_SVG}`;
            if (stPrepayAmount) stPrepayAmount.innerHTML = `${formatMoney(currentCalc.final_prepayment)} ${TOMAN_SVG}`;
            if (stActionPrepayAmount) stActionPrepayAmount.innerHTML = `${formatMoney(currentCalc.final_prepayment)} ${TOMAN_SVG}`;

            // Re-render carousel tabs
            if (tabsBar) {
                tabsBar.innerHTML = '';
                for (let i = 0; i < currentCalc.cheques_count; i++) {
                    const tab = document.createElement('div');
                    tab.className = `cheque-tab-pill ${i === activeChequeTabIndex ? 'is-active' : ''}`;
                    tab.setAttribute('data-cheque-idx', i);
                    tab.textContent = `چک ${numberToPersianWords(i + 1)}`;
                    tab.addEventListener('click', function () {
                        activeChequeTabIndex = i;
                        renderStep1();
                    });
                    tabsBar.appendChild(tab);
                }
            }
        }

        // Plan Dropdown change event
        if (planSelector) {
            planSelector.addEventListener('change', function () {
                const planId = this.value;
                const found = demoConfig.plans.find(p => p.id === planId);
                if (found) {
                    selectedPlan = found;
                    currentCalc = calculatePlan(demoConfig.orderTotal, selectedPlan);
                    activeChequeTabIndex = 0;
                    renderStep1();
                    renderDynamicSlots();
                }
            });
        }

        // 5. Step 1 Modal and Rules Checkbox Logic
        if (rulesAgreeWrap && rulesCheckbox) {
            rulesAgreeWrap.addEventListener('click', function () {
                rulesCheckbox.checked = !rulesCheckbox.checked;
                rulesAgreeWrap.classList.toggle('is-checked', rulesCheckbox.checked);
                if (step1NextBtn) step1NextBtn.disabled = !rulesCheckbox.checked;
            });
        }

        if (openRulesModalBtn && rulesModal) {
            openRulesModalBtn.addEventListener('click', () => rulesModal.classList.add('is-active'));
        }

        if (closeRulesModalBtn && rulesModal) {
            closeRulesModalBtn.addEventListener('click', () => rulesModal.classList.remove('is-active'));
        }

        if (modalAgreeBtn && rulesModal && rulesCheckbox && rulesAgreeWrap) {
            modalAgreeBtn.addEventListener('click', function () {
                rulesCheckbox.checked = true;
                rulesAgreeWrap.classList.add('is-checked');
                if (step1NextBtn) step1NextBtn.disabled = false;
                rulesModal.classList.remove('is-active');
            });
        }

        if (step1NextBtn) {
            step1NextBtn.addEventListener('click', () => goToStep(2));
        }

        // 6. Step 2 Identity Validation (Algorithm Checksum for Iranian National ID)
        function isValidIranianNationalId(code) {
            code = (code || '').trim();
            if (!/^\d{10}$/.test(code)) return false;
            if (/^(\d)\1{9}$/.test(code)) return false;

            let sum = 0;
            for (let i = 0; i < 9; i++) {
                sum += parseInt(code.charAt(i), 10) * (10 - i);
            }
            const remainder = sum % 11;
            const checkDigit = parseInt(code.charAt(9), 10);
            return (remainder < 2 && checkDigit === remainder) || (remainder >= 2 && checkDigit === (11 - remainder));
        }

        if (nationalIdInput) {
            nationalIdInput.addEventListener('input', function () {
                const val = this.value.trim();
                if (val.length === 10) {
                    const valid = isValidIranianNationalId(val);
                    if (natIdBadge) {
                        natIdBadge.hidden = false;
                        if (valid) {
                            natIdBadge.className = 'chq-chip chq-chip--green';
                            natIdBadge.textContent = 'کد ملی معتبر';
                            if (errNationalId) errNationalId.style.display = 'none';
                        } else {
                            natIdBadge.className = 'chq-chip chq-chip--red';
                            natIdBadge.textContent = 'الگوریتم نامعتبر';
                            if (errNationalId) errNationalId.style.display = 'block';
                        }
                    }
                } else {
                    if (natIdBadge) natIdBadge.hidden = true;
                    if (errNationalId) errNationalId.style.display = 'none';
                }
            });
        }

        if (step2NextBtn) {
            step2NextBtn.addEventListener('click', function () {
                let isValid = true;
                const name = (drawerNameInput ? drawerNameInput.value : '').trim();
                if (name.length < 3) {
                    if (errDrawerName) errDrawerName.style.display = 'block';
                    isValid = false;
                } else {
                    if (errDrawerName) errDrawerName.style.display = 'none';
                }

                const nid = (nationalIdInput ? nationalIdInput.value : '').trim();
                if (!isValidIranianNationalId(nid)) {
                    if (errNationalId) errNationalId.style.display = 'block';
                    isValid = false;
                } else {
                    if (errNationalId) errNationalId.style.display = 'none';
                }

                const phone = (drawerPhoneInput ? drawerPhoneInput.value : '').trim();
                if (!/^09\d{9}$/.test(phone)) {
                    if (errDrawerPhone) errDrawerPhone.style.display = 'block';
                    isValid = false;
                } else {
                    if (errDrawerPhone) errDrawerPhone.style.display = 'none';
                }

                if (isValid) {
                    if (contractDrawerName) contractDrawerName.textContent = name;
                    if (contractNationalId) contractNationalId.textContent = nid;
                    renderDynamicSlots();
                    goToStep(3);
                }
            });
        }

        // 7. Step 3 Dynamic Cheque Slots
        function renderDynamicSlots() {
            if (!dynamicSlotsContainer) return;
            dynamicSlotsContainer.innerHTML = '';

            const count = currentCalc.cheques_count || 1;
            const chequesList = currentCalc.cheques || [];

            for (let i = 0; i < count; i++) {
                const cheque = chequesList[i] || {
                    index: i + 1,
                    amount: currentCalc.cheque_amount || 0,
                    due_date: ''
                };

                const saved = chequesData[i] || {};
                const slotCard = document.createElement('div');
                slotCard.className = 'cheque-upload-slot-card';
                slotCard.setAttribute('data-slot-idx', i);

                slotCard.innerHTML = `
                    <div class="slot-header">
                        <span class="slot-title">فقره چک ${numberToPersianWords(i + 1)} (${formatMoney(cheque.amount)} ${TOMAN_SVG})</span>
                        <span class="chq-chip chq-chip--purple">سررسید: ${cheque.due_date || 'تعیین نشده'}</span>
                    </div>

                    <!-- 16-Digit Sayad Input with Inquiry Chip -->
                    <div class="input-row">
                        <div class="input-lbl">
                            <span>شناسه صیادی ۱۶ رقمی چک *</span>
                            <span class="chq-chip chq-chip--green slot-sayad-status" id="sayad-status-${i}" ${saved.sayad_id ? '' : 'hidden'}>استعلام: سفید</span>
                        </div>
                        <div class="sayad-ctrl-group">
                            <input type="text" class="sayad-ctrl-input slot-sayad-input" id="sayad-input-${i}" maxlength="25" placeholder="XXXX - XXXX - XXXX - XXXX" value="${saved.sayad_id || ''}">
                            <button type="button" class="sayad-btn-inquire" data-slot-id="${i}">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                                <span>استعلام</span>
                            </button>
                        </div>
                    </div>

                    <!-- Jalali Due Date Input -->
                    <div class="input-row">
                        <div class="input-lbl">
                            <span>تاریخ سررسید چک (تقویم جلالی) *</span>
                        </div>
                        <input type="text" class="input-ctrl slot-due-input" id="due-input-${i}" data-jdp placeholder="مثال: ۱۴۰۵/۰۹/۰۲" value="${saved.due_date || cheque.due_date || ''}" readonly style="cursor: pointer; background: #fff; font-size: 12px;">
                    </div>

                    <!-- Cheque Image Upload Dropzone -->
                    <div class="input-row">
                        <div class="input-lbl">
                            <span>تصویر روی چک صیادی بنفش *</span>
                        </div>
                        <input type="file" class="slot-file-input" id="file-input-${i}" accept="image/*" hidden>
                        
                        <div class="heroui-upload-box slot-upload-box" id="upload-box-${i}" ${saved.image_url ? 'hidden style="display:none;"' : ''}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7851A9" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <span class="upload-title">انتخاب یا کشیدن تصویر چک</span>
                            <span class="upload-sub">فرمت‌های JPG یا PNG حداکثر ۵ مگابایت</span>
                            <button type="button" class="btn-demo-quick-upload" data-slot-id="${i}">یا درج خودکار تصویر چک نمونه دمو</button>
                        </div>

                        <!-- Preview Thumbnail Box -->
                        <div class="upload-file-preview slot-preview-box" id="preview-box-${i}" ${saved.image_url ? '' : 'hidden'} style="${saved.image_url ? 'display: flex;' : 'display: none;'}">
                            <div class="preview-info-wrap">
                                <img src="${saved.image_url || ''}" alt="تصویر چک" class="preview-thumb-img" id="thumb-img-${i}">
                                <span class="preview-file-name" id="file-name-${i}">تصویر چک بارگذاری شد ✔</span>
                            </div>
                            <button type="button" class="slot-remove-file" data-slot-id="${i}" title="حذف تصویر">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                `;

                dynamicSlotsContainer.appendChild(slotCard);
                bindSlotEvents(i);
            }

            initJalaliPicker();
        }

        // 4x4 Masking and Events for each Cheque Slot
        function bindSlotEvents(index) {
            const sayadInput = document.getElementById(`sayad-input-${index}`);
            const inquireBtn = document.querySelector(`.sayad-btn-inquire[data-slot-id="${index}"]`);
            const statusChip = document.getElementById(`sayad-status-${index}`);
            const uploadBox = document.getElementById(`upload-box-${index}`);
            const fileInput = document.getElementById(`file-input-${index}`);
            const previewBox = document.getElementById(`preview-box-${index}`);
            const thumbImg = document.getElementById(`thumb-img-${index}`);
            const fileName = document.getElementById(`file-name-${index}`);
            const removeFileBtn = document.querySelector(`.slot-remove-file[data-slot-id="${index}"]`);
            const quickUploadBtn = document.querySelector(`.btn-demo-quick-upload[data-slot-id="${index}"]`);
            const dueInput = document.getElementById(`due-input-${index}`);

            // Jalali DatePicker direct binding for dynamic input
            if (dueInput) {
                dueInput.style.cursor = 'pointer';
                function openDatePicker(e) {
                    if (e) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (typeof window.jalaliDatepicker !== 'undefined') {
                        window.jalaliDatepicker.show(dueInput);
                    }
                }
                dueInput.addEventListener('click', openDatePicker);
                dueInput.addEventListener('focus', openDatePicker);
                dueInput.addEventListener('change', function () {
                    if (!chequesData[index]) chequesData[index] = {};
                    chequesData[index].due_date = this.value;
                });
                dueInput.addEventListener('jdp:change', function () {
                    if (!chequesData[index]) chequesData[index] = {};
                    chequesData[index].due_date = this.value;
                });
            }

            if (sayadInput) {
                sayadInput.addEventListener('input', function () {
                    let v = this.value.replace(/\D/g, '').substring(0, 16);
                    let formatted = '';
                    for (let j = 0; j < v.length; j++) {
                        if (j > 0 && j % 4 === 0) formatted += ' - ';
                        formatted += v.charAt(j);
                    }
                    this.value = formatted;

                    if (v.length === 16 && statusChip) {
                        statusChip.hidden = false;
                        statusChip.className = 'chq-chip chq-chip--green slot-sayad-status';
                        statusChip.textContent = 'استعلام: سفید';
                    }
                });
            }

            if (inquireBtn) {
                inquireBtn.addEventListener('click', function () {
                    const clean = sayadInput.value.replace(/\D/g, '');
                    if (clean.length < 16) {
                        alert('لطفاً شناسه صیادی ۱۶ رقمی را کامل وارد نمایید.');
                        return;
                    }
                    inquireBtn.textContent = 'در حال استعلام...';
                    setTimeout(() => {
                        inquireBtn.textContent = 'استعلام شد';
                        if (statusChip) {
                            statusChip.hidden = false;
                            statusChip.className = 'chq-chip chq-chip--green slot-sayad-status';
                            statusChip.textContent = 'وضعیت صیاد: سفید';
                        }
                    }, 600);
                });
            }

            // Quick sample cheque loader
            if (quickUploadBtn) {
                quickUploadBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    applyUploadedCheque(index, MOCK_CHEQUE_SVG, `تصویر_چک_صیادی_فقره_${numberToPersianWords(index + 1)}.jpg`);
                });
            }

            // Upload Box Dropzone & File Selection
            if (uploadBox && fileInput) {
                uploadBox.addEventListener('click', (e) => {
                    if (e.target.closest('.btn-demo-quick-upload')) return;
                    fileInput.click();
                });
                uploadBox.addEventListener('dragenter', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    uploadBox.style.background = '#faf5ff';
                });
                uploadBox.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    uploadBox.style.background = '#faf5ff';
                });
                uploadBox.addEventListener('dragleave', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    uploadBox.style.background = '#ffffff';
                });
                uploadBox.addEventListener('drop', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    uploadBox.style.background = '#ffffff';
                    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                        handleSlotFile(index, e.dataTransfer.files[0]);
                    }
                });

                fileInput.addEventListener('change', function () {
                    if (this.files && this.files[0]) {
                        handleSlotFile(index, this.files[0]);
                    }
                });
            }

            if (removeFileBtn) {
                removeFileBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!chequesData[index]) chequesData[index] = {};
                    chequesData[index].image_url = '';
                    if (fileInput) fileInput.value = '';
                    if (uploadBox) {
                        uploadBox.hidden = false;
                        uploadBox.style.display = 'flex';
                    }
                    if (previewBox) {
                        previewBox.hidden = true;
                        previewBox.style.display = 'none';
                    }
                });
            }
        }

        function applyUploadedCheque(index, dataUrl, displayName) {
            if (!chequesData[index]) chequesData[index] = {};
            chequesData[index].image_url = dataUrl;

            const uploadBox = document.getElementById(`upload-box-${index}`);
            const previewBox = document.getElementById(`preview-box-${index}`);
            const thumbImg = document.getElementById(`thumb-img-${index}`);
            const fileName = document.getElementById(`file-name-${index}`);

            if (thumbImg) thumbImg.src = dataUrl;
            if (fileName) {
                fileName.innerHTML = `<span style="display:inline-flex;align-items:center;gap:6px;"><span style="color:#10b981;font-weight:800;">✔</span> ${displayName || 'تصویر چک صیادی بارگذاری شد'}</span>`;
            }
            if (uploadBox) {
                uploadBox.hidden = true;
                uploadBox.style.display = 'none';
            }
            if (previewBox) {
                previewBox.hidden = false;
                previewBox.style.display = 'flex';
            }
        }

        function handleSlotFile(index, file) {
            if (!file) return;

            const displayName = file.name || 'تصویر_چک_صیادی.jpg';
            if (file.type && file.type.match('image.*')) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    applyUploadedCheque(index, e.target.result, displayName);
                };
                reader.onerror = function () {
                    applyUploadedCheque(index, MOCK_CHEQUE_SVG, displayName);
                };
                reader.readAsDataURL(file);
            } else {
                applyUploadedCheque(index, MOCK_CHEQUE_SVG, displayName);
            }
        }

        if (step3NextBtn) {
            step3NextBtn.addEventListener('click', function () {
                const count = currentCalc.cheques_count || 1;

                for (let i = 0; i < count; i++) {
                    const sayadInput = document.getElementById(`sayad-input-${i}`);
                    let sayadVal = (sayadInput ? sayadInput.value : '').replace(/\D/g, '');

                    // Auto-fill sample sayad number in demo mode if empty or incomplete
                    if (sayadVal.length < 16) {
                        if (sayadInput) {
                            sayadInput.value = '1403 - 9821 - 4402 - 001' + (i + 1);
                        }
                    }

                    // In demo mode: never block on image upload! Auto-assign mock cheque graphic if omitted
                    if (!chequesData[i] || !chequesData[i].image_url) {
                        applyUploadedCheque(i, MOCK_CHEQUE_SVG, `تصویر چک صیادی فقره ${numberToPersianWords(i + 1)}`);
                    }
                }

                goToStep(4);
            });
        }

        // 8. Step 4 Digital Signature Canvas
        let isDrawing = false;
        let hasSigned = false;
        let ctx = null;

        if (sigCanvas) {
            ctx = sigCanvas.getContext('2d');
            ctx.strokeStyle = '#3b0764';
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            function getCanvasPos(e) {
                const rect = sigCanvas.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                return {
                    x: (clientX - rect.left) * (sigCanvas.width / rect.width),
                    y: (clientY - rect.top) * (sigCanvas.height / rect.height)
                };
            }

            function startDraw(e) {
                e.preventDefault();
                isDrawing = true;
                hasSigned = true;
                const pos = getCanvasPos(e);
                ctx.beginPath();
                ctx.moveTo(pos.x, pos.y);
                if (sigHint) sigHint.textContent = 'امضا در حال رسم...';
            }

            function drawMove(e) {
                if (!isDrawing) return;
                e.preventDefault();
                const pos = getCanvasPos(e);
                ctx.lineTo(pos.x, pos.y);
                ctx.stroke();
            }

            function stopDraw(e) {
                if (!isDrawing) return;
                isDrawing = false;
                if (sigHint) sigHint.textContent = 'امضا با موفقیت رسم شد';
                checkStep4Readiness();
            }

            sigCanvas.addEventListener('mousedown', startDraw);
            sigCanvas.addEventListener('mousemove', drawMove);
            sigCanvas.addEventListener('mouseup', stopDraw);
            sigCanvas.addEventListener('mouseleave', stopDraw);

            sigCanvas.addEventListener('touchstart', startDraw, { passive: false });
            sigCanvas.addEventListener('touchmove', drawMove, { passive: false });
            sigCanvas.addEventListener('touchend', stopDraw, { passive: false });
        }

        if (clearSigBtn && ctx && sigCanvas) {
            clearSigBtn.addEventListener('click', function () {
                ctx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
                hasSigned = false;
                if (sigHint) sigHint.textContent = 'لطفاً داخل کادر امضا فرمایید';
                checkStep4Readiness();
            });
        }

        if (finalCertWrap && finalCertCheckbox) {
            finalCertWrap.addEventListener('click', function () {
                finalCertCheckbox.checked = !finalCertCheckbox.checked;
                finalCertWrap.classList.toggle('is-checked', finalCertCheckbox.checked);
                checkStep4Readiness();
            });
        }

        function checkStep4Readiness() {
            if (!submitWizardBtn) return;
            const certChecked = finalCertCheckbox && finalCertCheckbox.checked;
            submitWizardBtn.disabled = !(hasSigned && certChecked);
        }

        // 9. Simulated Submission (Transition to Step 5)
        if (submitWizardBtn) {
            submitWizardBtn.addEventListener('click', function () {
                if (!hasSigned || !finalCertCheckbox.checked) return;

                submitWizardBtn.disabled = true;
                if (submitText) submitText.textContent = 'در حال ارسال و ثبت مدارک...';

                setTimeout(function () {
                    submitWizardBtn.disabled = false;
                    if (submitText) submitText.textContent = 'ارسال نهایی برای بررسی';

                    const stName = document.getElementById('st-drawer-name');
                    if (stName) stName.textContent = (drawerNameInput ? drawerNameInput.value : '').trim() || 'محمد حسینی';

                    goToStep(5);
                }, 800);
            });
        }

        // 10. Step 5 Actions & Simulator Buttons
        if (btnModify) {
            btnModify.addEventListener('click', () => goToStep(3));
        }

        simBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const targetState = this.getAttribute('data-sim');
                const stAwaitingCheque = document.getElementById('state-awaiting-cheque');
                const stAwaitingPrepay = document.getElementById('state-awaiting-prepay');
                const stChequeRejected = document.getElementById('state-cheque-rejected');

                if (stAwaitingCheque) stAwaitingCheque.hidden = (targetState !== 'awaiting-cheque');
                if (stAwaitingPrepay) stAwaitingPrepay.hidden = (targetState !== 'awaiting-prepay');
                if (stChequeRejected) stChequeRejected.hidden = (targetState !== 'cheque-rejected');

                if (headerTitle) {
                    if (targetState === 'awaiting-prepay') headerTitle.textContent = 'تأیید مدارک و پرداخت پیش‌پرداخت';
                    else if (targetState === 'cheque-rejected') headerTitle.textContent = 'نیازمند اصلاح مدارک';
                    else headerTitle.textContent = 'نتیجه بررسی و وضعیت سفارش';
                }
            });
        });

        // 11. Multi-Step Navigation
        function goToStep(stepNumber) {
            currentStep = stepNumber;
            wizard.setAttribute('data-current-step', currentStep);

            for (let i = 1; i <= 5; i++) {
                const pane = document.getElementById(`chq-step-${i}`);
                if (pane) pane.classList.remove('is-active');
            }

            const activePane = document.getElementById(`chq-step-${currentStep}`);
            if (activePane) activePane.classList.add('is-active');

            if (headerTitle && headerSub) {
                switch (currentStep) {
                    case 1:
                        headerTitle.textContent = 'شرایط اقساط و قوانین';
                        headerSub.textContent = 'مرحله ۱ از ۴';
                        break;
                    case 2:
                        headerTitle.textContent = 'مشخصات هویتی صادرکننده';
                        headerSub.textContent = 'مرحله ۲ از ۴';
                        break;
                    case 3:
                        headerTitle.textContent = 'اطلاعات و بارگذاری چک‌ها';
                        headerSub.textContent = 'مرحله ۳ از ۴';
                        break;
                    case 4:
                        headerTitle.textContent = 'امضای دیجیتال و قرارداد';
                        headerSub.textContent = 'مرحله ۴ از ۴';
                        break;
                    case 5:
                        headerTitle.textContent = 'نتیجه بررسی و وضعیت سفارش';
                        headerSub.textContent = 'وضعیت نهایی';
                        break;
                }
            }

            if (navBackBtn) {
                navBackBtn.hidden = (currentStep === 1 || currentStep === 5);
            }

            if (progressBar && progressContainer) {
                if (currentStep === 5) {
                    progressContainer.hidden = true;
                } else {
                    progressContainer.hidden = false;
                    progressBar.style.width = `${currentStep * 25}%`;
                }
            }

            wizard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        const prevBtns = document.querySelectorAll('.chq-btn-prev');
        prevBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                if (currentStep > 1) goToStep(currentStep - 1);
            });
        });

        if (navBackBtn) {
            navBackBtn.addEventListener('click', function () {
                if (currentStep > 1 && currentStep < 5) goToStep(currentStep - 1);
            });
        }

        // Initial setup
        renderStep1();
    });
})();
