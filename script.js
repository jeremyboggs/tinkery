/* Fixed navigation on scroll.
 *
 * Sets the position of the main navigation to fixed if the window
 * scroll position is equal to, or greater than, to the top offset
 * of the nav element.
 *
 **/

let nav = document.querySelector('nav');
let navTop = nav.offsetTop; // Select the 'nav' element and its top offset.

var stickyNav = function(event) {
    if (window.scrollY >= navTop) {
        nav.style.position = 'fixed'; // Attaches the nav to the page, regardless of scroll.
        nav.style.top = '0px'; // Specifically set the top position to zero.
        nav.style.width = '100%'; // Must define width when setting position to fixed.
        nav.style.zIndex = '1000'; // Ensures nav is 'above' other content on the z axis.
    } else {
        nav.style.position = 'unset'; // Simply unset the fixed position value.
    }
};

window.addEventListener('scroll', stickyNav, false);

const observer = new IntersectionObserver((panels) => {
    panels.forEach((panel) => {
        if (panel.isIntersecting) {
            panel.target.classList.add('scroll-animation')
        } else {
            panel.target.classList.remove('scroll-animation')
        }
    })
},{ threshold: 0.2
});

const contentPanels = document.querySelectorAll('.content, aside');

contentPanels.forEach(function(e) {
    e.classList.add('animation');
});

for (let i = 0; i < contentPanels.length; i++) {
    const elements = contentPanels[i];
    observer.observe(elements);
}