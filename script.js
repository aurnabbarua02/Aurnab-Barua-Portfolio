function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("light-mode-icon").classList.toggle("active");
    document.getElementById("dark-mode-icon").classList.toggle("active");
}
document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.nav-link');

    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                navLinks.forEach(function(link) {
                    link.classList.remove('activeheader');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('activeheader');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(function(section) {
        observer.observe(section);
    });
});
