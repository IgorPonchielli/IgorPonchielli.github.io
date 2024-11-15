$(document).ready(function () {
    // Navbar scroll effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
            $('.navbar').removeClass('navbar-dark');
            $('.nav-link').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
            $('.navbar').addClass('navbar-dark');
            $('.nav-link').removeClass('scrolled');

        }
    });

    // Smooth scroll for navigation links
    $('a.nav-link').click(function (e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Slightly scroll down on page load for mobile layouts
    $(window).on('load', function () {
        if ($(window).width() < 768) {
            $('html, body').animate({
                scrollTop: 60
            }, 1000);
        }
    });

    // Form submission
    $('#subscribe-form').submit(function (e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Formulário enviado com sucesso!');
        this.reset();
    });
});