function changeAboutMeText() {
    const aboutMeTexts = ["Tech Enthusiast", "Data Scientist", "Full Stack Web Developer"];
    const changeInterval = 2000; 
    const aboutMeElement = document.querySelector('.about-me');
    if (!aboutMeElement) return; 

    let textIndex = 0;

    function changeText() {
        aboutMeElement.textContent = aboutMeTexts[textIndex];
        textIndex = (textIndex + 1) % aboutMeTexts.length;
        setTimeout(changeText, changeInterval);
    }
    changeText(); 
}
document.addEventListener('DOMContentLoaded', function () {
    changeAboutMeText();     
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun'); // Change icon
        darkModeToggle.querySelector('i').classList.toggle('fa-moon'); // Change icon
        darkModeToggle.querySelector('i').classList.toggle('light-mode'); // Change icon color
    });    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;                
                progressBar.style.setProperty('--progress', `${progress}%`);
                progressBar.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    });

    const programmingLanguages = document.querySelectorAll('#programming-languages .skill');
    programmingLanguages.forEach(skill => {
        observer.observe(skill);
    });
});
