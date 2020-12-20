
$(document).ready(function() {
    $('.buutton').click(function (event) {
        $('.img').toggleClass('active');
        $('.zassannaya').removeClass('active');
    });
});
$(document).ready(function() {
    $('.no').click(function (event) {
        $('.zassannaya').toggleClass('active'),
        $('.img').removeClass('active');
    });
});