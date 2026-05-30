const languageSelect = document.getElementById('language-select')
const translatableElements = document.querySelectorAll('[data-i18n]')

function getNestedTranslation(language, key) {
  const keys = key.split('.')
  let translation = translations[language]

  keys.forEach(function(currentKey) {
    if (translation) {
      translation = translation[currentKey]
    }
  })

  return translation
}

function changeLanguage(language) {
  translatableElements.forEach(function(element) {
    const key = element.getAttribute('data-i18n')
    const translatedText = getNestedTranslation(language, key)

    if (translatedText) {
      element.textContent = translatedText
    }
  })

  localStorage.setItem('language', language)
  document.documentElement.lang = language
}

if (languageSelect) {
  languageSelect.addEventListener('change', function(event) {
    changeLanguage(event.target.value)
  })

  const savedLanguage = localStorage.getItem('language') || 'es'

  languageSelect.value = savedLanguage
  changeLanguage(savedLanguage)
}