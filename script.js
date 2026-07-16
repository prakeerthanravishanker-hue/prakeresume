document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.querySelector('.theme-toggle');

  const root = document.documentElement;



  const updateToggleLabel = () => {

    const theme = root.getAttribute('data-theme');

    toggle.textContent = theme === 'light' ? 'Dark mode' : 'Light mode';

  };



  if (!root.getAttribute('data-theme')) {

    root.setAttribute('data-theme', 'dark');

  }



  updateToggleLabel();



  toggle?.addEventListener('click', () => {

    const newTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';

    root.setAttribute('data-theme', newTheme);

    updateToggleLabel();

  });



  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('revealed');

          observer.unobserve(entry.target);

        }

      });

    },

    { threshold: 0.2 }

  );



  revealElements.forEach((element) => observer.observe(element));

});


