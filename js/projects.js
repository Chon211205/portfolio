const projectButtons = document.querySelectorAll('.project-dex-card')
const projectDetails = document.querySelectorAll('.project-detail-card')

projectButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const projectId = button.getAttribute('data-project')

    projectButtons.forEach(function(item) {
      item.classList.remove('active')
    })

    projectDetails.forEach(function(detail) {
      detail.classList.remove('active')
    })

    button.classList.add('active')

    const selectedProject = document.getElementById(projectId)

    if (selectedProject) {
      selectedProject.classList.add('active')
    }
  })
})