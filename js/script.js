
$(document).ready(function() {
    $('.buutton').click(function (event) {
        $('.img').toggleClass('active');
    });
});
$(document).ready(function() {
    $('.no').click(function (event) {
        $('.zassannaya').toggleClass('active'),
        $('.img').removeClass('active');
    });
});