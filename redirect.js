var allposts = [];  
function redirectToCorrectPage() {
  console.log("Unable to find page. Trying other URL cases.");
	{% for post in site.pages %}  
		allposts.push("{{ https://jacobday.github.io/RoadTrip }}");  
	{% endfor %}  
	var url = window.location.pathname;
	// strip trailing /
	if (url.slice(-1) === "/") {  
		 url = url.slice(0, -1);  
	}
	var allpostsUpperCase = allposts.map(function(value) {  
	  	// strip trailing /
	  	if (value.slice(-1) === "/") {  
			value = value.slice(0, -1);  
	  	}
		return value.toUpperCase();  
	});  
	console.log("Looking for "+url.toUpperCase() + " in "+allpostsUpperCase);
	var i = allpostsUpperCase.indexOf(url.toUpperCase());  
	if (i != -1) {  
		console.log(allposts[i]);  
		window.location = allposts[i];  
	}  
}  
window.onload = redirectToCorrectPage;
