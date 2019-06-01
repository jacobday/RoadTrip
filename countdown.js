// Set the date we're counting down to
  var countDownDate = new Date("Apr 18, 2019").getTime();

// Update the count down every 1 second
  var x = setInterval(function() {

// Get todays date and time
  var now = new Date().getTime();
    
// Find the distance between now and the count down date
  var distance = countDownDate - now;
    
// Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
// Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + " days left";
    
// If the count down is over, write some text 
    if (distance < 0) {
      document.getElementById("countdown").innerHTML = '<i class="fas fa-exclamation-triangle" style="color:rgba(214, 69, 65, 0.9)"></i>' + " " + Math.abs(days) + " days ago";
    }
}, 1000);
