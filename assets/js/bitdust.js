(function () {

    const storageKeyBName = 'bitdust_i18n';
    const defaultLanguage = 'en';
    const translatable = document.querySelectorAll('[data-content]');
    const languageSelector = document.querySelector('select[name="language"]');
    languageSelector.value = getLanguage();
    languageSelector.onchange = changeEventHandler;

    function getLanguage() {
        let language = window.localStorage[storageKeyBName];
        if (!language) {
            window.localStorage.setItem(storageKeyBName, defaultLanguage);
            language = defaultLanguage;
        }
        return language;
    }

    /**
     *
     * @param event
     */
    function changeEventHandler(event) {
        window.localStorage.setItem(storageKeyBName, event.target.value);
        renderContent();
    }

    function renderContent() {
        translatable.forEach(item => {
            let contentId = item.dataset.content;
            item.innerText = bitdust_translations[getLanguage()][contentId] || bitdust_translations[defaultLanguage][contentId] || item.innerText || 'Missing translation';
        });
    }

    renderContent();

})();