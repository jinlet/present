// snowfall.js
$(document).ready(function() {
    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = $('<div class="snowflake"></div>');
        const startPosition = Math.random() * 100;
        const animationDuration = Math.random() * 5 + 5;

        snowflake.css({
            left: Math.random() * 100 + 'vw',
            top: Math.random() * 100 + 'vh',
            animationDuration: animationDuration + 's',
            animationDelay: Math.random() * 5 + 's',
        });

        $('body').append(snowflake);
    }
});
