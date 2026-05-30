const translations = {
  es: {
    back: 'Volver',
    trainerCardTitle: 'TRAINER CARD',
    webDeveloper: 'Desarrollador Web',
    regionLabel: 'Región:',
    typeLabel: 'Tipo:',
    profileTitle: 'Perfil',
    profileText:
      'Soy un desarrollador web en formación, enfocado en crear interfaces claras, funcionales y visualmente atractivas. Este portafolio está inspirado en una Pokédex para presentar mi información de forma interactiva, organizada y con una identidad visual diferente. Ya que Pokémon es de mis videojuegos favoritos y me marcó la vida.',
    goalTitle: 'Objetivo',
    goalText:
      'Crear proyectos web que combinen buena estructura, código limpio, diseño responsivo y una experiencia de usuario clara.',
    pokemonTeamTitle: 'Equipo Pokémon'
  },

  en: {
    back: 'Back',
    trainerCardTitle: 'TRAINER CARD',
    webDeveloper: 'Web Developer',
    regionLabel: 'Region:',
    typeLabel: 'Type:',
    profileTitle: 'Profile',
    profileText:
      'I am a web developer in training, focused on creating clear, functional and visually attractive interfaces. This portfolio is inspired by a Pokédex to present my information in an interactive, organized way with a different visual identity, since Pokémon is one of my favorite video games and had a strong impact on my life.',
    goalTitle: 'Goal',
    goalText:
      'To create web projects that combine good structure, clean code, responsive design and a clear user experience.',
    pokemonTeamTitle: 'Pokémon Team'
  },

  de: {
    back: 'Zurück',
    trainerCardTitle: 'TRAINERKARTE',
    webDeveloper: 'Webentwickler',
    regionLabel: 'Region:',
    typeLabel: 'Typ:',
    profileTitle: 'Profil',
    profileText:
      'Ich bin ein Webentwickler in Ausbildung und konzentriere mich darauf, klare, funktionale und visuell ansprechende Benutzeroberflächen zu erstellen. Dieses Portfolio ist von einem Pokédex inspiriert, um meine Informationen interaktiv, organisiert und mit einer besonderen visuellen Identität zu präsentieren, da Pokémon eines meiner Lieblingsvideospiele ist und mich stark geprägt hat.',
    goalTitle: 'Ziel',
    goalText:
      'Webprojekte erstellen, die gute Struktur, sauberen Code, responsives Design und eine klare Benutzererfahrung kombinieren.',
    pokemonTeamTitle: 'Pokémon-Team'
  },

  zh: {
    back: '返回',
    trainerCardTitle: '训练师卡',
    webDeveloper: '网页开发者',
    regionLabel: '地区：',
    typeLabel: '类型：',
    profileTitle: '个人简介',
    profileText:
      '我是一名正在学习中的网页开发者，专注于创建清晰、实用并且具有视觉吸引力的界面。这个作品集的灵感来自宝可梦图鉴，用互动、有组织并且有独特视觉风格的方式展示我的信息，因为宝可梦是我最喜欢的电子游戏之一，也对我的人生留下了很深的影响。',
    goalTitle: '目标',
    goalText:
      '创建结合良好结构、整洁代码、响应式设计和清晰用户体验的网页项目。',
    pokemonTeamTitle: '宝可梦队伍'
  }
}

const languageSelect = document.getElementById('language-select')
const translatableElements = document.querySelectorAll('[data-i18n]')

function changeLanguage(language) {
  translatableElements.forEach(function(element) {
    const key = element.getAttribute('data-i18n')

    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key]
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