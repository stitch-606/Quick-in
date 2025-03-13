document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
    document.body.classList.toggle('day-mode');
    
    const modeIcon = document.getElementById('mode-icon');
    
    if (document.body.classList.contains('night-mode')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
});