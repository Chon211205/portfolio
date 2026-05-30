function showSection(sectionId) {
  const sections = document.querySelectorAll('.info-section')

  sections.forEach(function(section) {
    section.classList.add('hidden')
  })

  const selectedSection = document.getElementById(sectionId)
  selectedSection.classList.remove('hidden')
}