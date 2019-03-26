// Fades Heading
     (function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2500)
            .delay(5000)
            .fadeOut(2500, showNextQuote);
    }
    
    showNextQuote();
    
})();
