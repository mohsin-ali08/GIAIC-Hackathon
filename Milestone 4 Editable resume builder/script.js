document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const resumeDisplay = document.getElementById('resumeDisplay');
    const resumeContent = document.getElementById('resumeContent');
    const editButton = document.getElementById('editButton');
  
    // Function to generate resume content
    const generateResumeContent = (data) => {
      return `
        <h2 class="text-2xl font-semibold mb-4">Personal Information</h2>
        
        <div class="flex justify-center py-5 text-center">
      <img src="${data.profilePicture}" alt="Profile Picture" class="w-32 h-32 object-cover rounded-lg my-2"></p>
    </div>
        <p><strong>Profile Picture:</strong>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
  
        <h2 class="text-2xl font-semibold mb-4 mt-6">Education</h2>
        <p><strong>Degree:</strong> ${data.degree}</p>
        <p><strong>Institution:</strong> ${data.institution}</p>
        <p><strong>Graduation Year:</strong> ${data.graduationYear}</p>
  
        <h2 class="text-2xl font-semibold mb-4 mt-6">Skills</h2>
        <p>${data.skills}</p>
  
        <h2 class="text-2xl font-semibold mb-4 mt-6">Work Experience</h2>
        <p><strong>Job Title:</strong> ${data.jobTitle}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Years of Experience:</strong> ${data.workYears}</p>
      `;
    };
  
    // Function to handle form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      // Store data in localStorage
      localStorage.setItem('resumeData', JSON.stringify(data));
  
      // Display resume
      resumeContent.innerHTML = generateResumeContent(data);
      resumeDisplay.classList.remove('hidden');
      form.classList.add('hidden');
    });
  
    // Edit button functionality
    editButton.addEventListener('click', () => {
      resumeDisplay.classList.add('hidden');
      form.classList.remove('hidden');
    });
  
    // Load stored resume data if available
    const storedData = localStorage.getItem('resumeData');
    if (storedData) {
      const data = JSON.parse(storedData);
      resumeContent.innerHTML = generateResumeContent(data);
      resumeDisplay.classList.remove('hidden');
      form.classList.add('hidden');
    }
  });
  