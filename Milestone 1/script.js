
var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skills-section');

function toggleSkillsSection() {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills Section';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills Section';
    }
}
// Add event listener to the button
toggleSkillsBtn.addEventListener('click', toggleSkillsSection);
