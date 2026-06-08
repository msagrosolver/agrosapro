import { useEffect, useRef, useState } from 'react';

const TRANSLATE_ELEMENT_ID = 'google_translate_element';
const TRANSLATE_SCRIPT_ID = 'google-translate-script';
const SOURCE_LANGUAGE = 'en';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hu', label: 'Magyar' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
];

const getTranslatedLanguage = () => {
  if (typeof document === 'undefined') {
    return SOURCE_LANGUAGE;
  }

  const cookie = document.cookie
    .split('; ')
    .find((item) => item.startsWith('googtrans='));

  const language = cookie ? decodeURIComponent(cookie.split('=')[1]).split('/').filter(Boolean).pop() : null;
  return languages.some((item) => item.code === language) ? language : SOURCE_LANGUAGE;
};

const hasUnsupportedTranslationCookie = () => {
  if (typeof document === 'undefined') {
    return false;
  }

  const cookie = document.cookie
    .split('; ')
    .find((item) => item.startsWith('googtrans='));

  if (!cookie) {
    return false;
  }

  const language = decodeURIComponent(cookie.split('=')[1]).split('/').filter(Boolean).pop();
  return language ? !languages.some((item) => item.code === language) : false;
};

const getGoogleCombo = () => document.querySelector(`#${TRANSLATE_ELEMENT_ID} select.goog-te-combo`);

const clearGoogleTranslateCookies = () => {
  const expires = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
  const hostname = window.location.hostname;
  const domains = [hostname, `.${hostname}`];

  document.cookie = `googtrans=; ${expires}; path=/`;
  domains.forEach((domain) => {
    document.cookie = `googtrans=; ${expires}; path=/; domain=${domain}`;
  });
};

const hideGoogleTranslateBanner = () => {
  if (typeof document === 'undefined' || !document.body) {
    return;
  }

  document.documentElement.style.setProperty('margin-top', '0', 'important');
  document.body.style.setProperty('top', '0px', 'important');
  document.body.style.setProperty('margin-top', '0', 'important');
  document.body.style.setProperty('position', 'static', 'important');

  document
    .querySelectorAll(
      [
        '.goog-te-banner-frame',
        '.goog-te-banner-frame.skiptranslate',
        'iframe.goog-te-banner-frame',
        'iframe[id=":1.container"]',
        '.VIpgJd-ZVi9od-ORHb-OEVmcd',
      ].join(', '),
    )
    .forEach((element) => {
      element.style.setProperty('display', 'none', 'important');
      element.style.setProperty('height', '0', 'important');
      element.style.setProperty('visibility', 'hidden', 'important');
    });
};

function GoogleTranslate() {
  const [activeLanguage, setActiveLanguage] = useState(getTranslatedLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    if (hasUnsupportedTranslationCookie()) {
      clearGoogleTranslateCookies();
    }

    const initializeTranslate = () => {
      const container = document.getElementById(TRANSLATE_ELEMENT_ID);
      const TranslateElement = window.google?.translate?.TranslateElement;

      if (!container || !TranslateElement) {
        return false;
      }

      if (container.dataset.initialized !== 'true') {
        new TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hu,de,it',
            autoDisplay: false,
          },
          TRANSLATE_ELEMENT_ID,
        );

        container.dataset.initialized = 'true';
      }

      hideGoogleTranslateBanner();
      return true;
    };

    window.googleTranslateElementInit = initializeTranslate;

    if (!document.getElementById(TRANSLATE_SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = TRANSLATE_SCRIPT_ID;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
      initializeTranslate();
    }

    const intervalId = window.setInterval(() => {
      initializeTranslate();
      hideGoogleTranslateBanner();
    }, 500);

    const observer = new MutationObserver(hideGoogleTranslateBanner);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style'],
      childList: true,
      subtree: true,
    });

    return () => {
      window.clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const applyLanguage = (languageCode, attempt = 0) => {
    const combo = getGoogleCombo();

    if (!combo) {
      if (attempt < 12) {
        window.setTimeout(() => applyLanguage(languageCode, attempt + 1), 250);
      }
      return;
    }

    combo.value = languageCode;
    combo.dispatchEvent(new Event('change'));
    window.setTimeout(hideGoogleTranslateBanner, 100);
  };

  const restoreEnglish = () => {
    const wasTranslated =
      getTranslatedLanguage() !== SOURCE_LANGUAGE ||
      document.documentElement.classList.contains('translated-ltr') ||
      document.documentElement.classList.contains('translated-rtl') ||
      document.body.classList.contains('translated-ltr') ||
      document.body.classList.contains('translated-rtl');

    clearGoogleTranslateCookies();

    const combo = getGoogleCombo();
    if (combo) {
      combo.value = '';
      combo.dispatchEvent(new Event('change'));
    }

    setActiveLanguage(SOURCE_LANGUAGE);
    hideGoogleTranslateBanner();

    if (wasTranslated) {
      window.location.reload();
    }
  };

  const handleLanguageSelect = (languageCode) => {
    setIsOpen(false);

    if (languageCode === activeLanguage) {
      return;
    }

    setActiveLanguage(languageCode);

    if (languageCode === SOURCE_LANGUAGE) {
      restoreEnglish();
      return;
    }

    applyLanguage(languageCode);
  };

  const selectedLanguage = languages.find((language) => language.code === activeLanguage) ?? languages[0];

  return (
    <div className="navbar__translate skiptranslate" translate="no">
      <div id={TRANSLATE_ELEMENT_ID} />
      <div className="language-picker" ref={pickerRef}>
        <button
          className="language-picker__button"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span>{selectedLanguage.label}</span>
          <span className="language-picker__chevron" aria-hidden="true" />
        </button>

        {isOpen && (
          <ul className="language-picker__menu" role="listbox" aria-label="Language">
            {languages.map((language) => (
              <li key={language.code} role="option" aria-selected={language.code === activeLanguage}>
                <button
                  className={`language-picker__option ${
                    language.code === activeLanguage ? 'language-picker__option--active' : ''
                  }`}
                  type="button"
                  onClick={() => handleLanguageSelect(language.code)}
                >
                  {language.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default GoogleTranslate;
