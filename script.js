document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const menu = document.querySelector('#navbar-default');

    button.addEventListener('click', function () {
        menu.classList.toggle('hidden');
        const expanded = menu.getAttribute('aria-expanded') === 'true' || false;
        menu.setAttribute('aria-expanded', !expanded);
    });

    // Cerrar el menú cuando se haga clic en un enlace
    const links = document.querySelectorAll('#navbar-default a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.add('hidden');
            menu.setAttribute('aria-expanded', 'false');
        });
    });

    // Cerrar el menú cuando se haga clic fuera de él
    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            menu.classList.add('hidden');
            menu.setAttribute('aria-expanded', 'false');
        }
    });
});

   // JavaScript to toggle the answers and rotate the arrows
        document.querySelectorAll('[id^="question"]').forEach(function(button, index) {
            button.addEventListener('click', function() {
                var answer = document.getElementById('answer' + (index + 1));
                var arrow = document.getElementById('arrow' + (index + 1));

                if (answer.style.display === 'none' || answer.style.display === '') {
                    answer.style.display = 'block';
                    arrow.style.transform = 'rotate(0deg)';
                } else {
                    answer.style.display = 'none';
                    arrow.style.transform = 'rotate(-180deg)';
                }
            });
        });

 // JavaScript para el desplazamiento suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
