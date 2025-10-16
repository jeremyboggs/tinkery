// Set the body to hidden to begin with.
document.body.className = 'hidden';
window.addEventListener('DOMContentLoaded', function () {

    setTimeout(function() {
        // Set the class to `fade-in` to animate the opacity to 1.
        document.body.className = 'fade-in';
    },500);
    // When an anchor element is clicked, set the body class to
    // `fade-out` to animate the opacity to 0 before updating the
    // window location to the new href.
    document.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default behavior.
            document.body.setAttribute('class', 'fade-out');
            setTimeout(function() {
                window.location.href = a.href;
            },1000);
        })
    });
});