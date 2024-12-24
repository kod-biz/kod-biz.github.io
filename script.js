document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const header = document.querySelector('header');
    const hero = document.querySelector('#hero');
     const businessSections = document.querySelectorAll('.business-section');
     const footer = document.querySelector('footer');



    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        hero.classList.toggle('dark-mode');
        businessSections.forEach(section => section.classList.toggle('dark-mode'));
        footer.classList.toggle('dark-mode')
        darkModeToggle.classList.toggle('dark-mode');

         // Store dark mode preference in localStorage
        if(body.classList.contains('dark-mode')){
            localStorage.setItem('darkMode', 'enabled')
        }else{
            localStorage.setItem('darkMode', 'disabled')
        }
    }

     // Check user's preference on page load
     if(localStorage.getItem('darkMode') === 'enabled'){
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        hero.classList.add('dark-mode');
        businessSections.forEach(section => section.classList.add('dark-mode'));
        footer.classList.add('dark-mode')
        darkModeToggle.classList.add('dark-mode');
    }



    darkModeToggle.addEventListener('click', toggleDarkMode);
});