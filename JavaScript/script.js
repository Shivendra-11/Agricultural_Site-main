let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

// Change slides every 3 seconds (adjust the time as needed)
setInterval(showSlides, 4000);

// Run showSlides() once on page load to start the slideshow
showSlides();
async function getData(){
    const url = 'https://api.weatherapi.com/v1/current.json?key=2e2a9ba24b4f41a6bf3181404230809&q=india&aqi=no';
   
   
    const data = fetch()
}; 
getData();
// apiKey = 2e2a9ba24b4f41a6bf3181404230809


const api = {
    key: "2fa73590fd8b5a4c6e68098ad5625395",
    base: "https://api.openweathermap.org/data/2.5/"
  };
  
  const searchbox = document.querySelector(".search-box");
  searchbox.addEventListener("keypress", setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((weather) => {
        return weather.json();
      })
      .then(displayResults);
  }
  
  function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
  
    let weather_el = document.querySelector(".current .weather");
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector(".hi-low");
    hilow.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;
  }
  
  function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
  
  document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form input values
    var name = document.getElementById('name').value;
    var number = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;

    // Do something with the input data (e.g., display it)
    console.log('Name:', name);
    console.log('Mobile No:', mobile);
    console.log('Email:', email);
    

    // You can also send the data to a server or perform other actions here

    // Reset the form (optional)
    this.reset();
  });


  // Function to open the embedded map link
  function openEmbeddedMap() {
      // Replace 'YOUR_EMBEDDED_MAP_LINK_HERE' with the actual embedded map link
      var embeddedMapLink = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1040.2179865125904!2d81.3104768261484!3d21.2217115553149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694214978509!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

      // Open the link in a new window or tab
      window.open(embeddedMapLink);
  }

  // Add a click event listener to the button
  document.getElementById('open-map-button').addEventListener('click', openEmbeddedMap);
