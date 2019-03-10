(function () {

    const storageKeyBName = 'bitdust_i18n';
    const defaultLanguage = 'en';

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
        i18n.changeLanguage(event.target.value);
    }

    const i18n = domI18n({
        selector: '[data-translatable]',
        languages: [defaultLanguage, 'pt', 'ru', 'nl', 'zh'],
        defaultLanguage: defaultLanguage,
        currentLanguage: getLanguage()
    });

    const languageSelector = document.querySelector('select[name="language"]');
    languageSelector.value = getLanguage();
    languageSelector.onchange = changeEventHandler;

})();