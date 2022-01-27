fetch("https://restcountries.com/v3.1/all").then(function (data) {
  return data.json().then(function (Countrylist) {
    var details = Countrylist;

    function AllCountries(countries) {
      var button = document.createElement("button")
      button.setAttribute("class","btn btn-primary")
      button.innerText="Click for Weather"
      button.addEventListener("click",
      function(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countries.name.common}&appid=230e7326a7d30b4b85c00de1b726f62a`)
        .then(function (data) {return data.json()})
        .then(function (climate) {
         alert(`The Temperature of ${countries.name.common} is ${climate.main.temp} and Timezone is ${climate.timezone}`)
        }).catch(error)
          alert("Something is Wrong")
        
      
      })
      const all = document.createElement("div");
      all.className = "container";
      all.innerHTML = `
           
   <h5 class="head">${countries.name.common}</h5>   
<img src="${countries.flags.png}" alt="" class="img">
<div class="text">
  <p>Capital:${countries.capital}</p>
  <p>Region: ${countries.region}</p>
  <p>Country Code:${countries.capital}</p>
  
</div>` 
 all.append(button)
 document.body.appendChild(all);

    }
    

    for (const countries of details) {
      AllCountries(countries);
    }
    
  })
  

});
