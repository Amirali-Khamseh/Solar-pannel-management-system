//Getting the project Id from the URl
const projectId = window.location.pathname.split('/')[3];
const id = window.location.pathname.split('/')[4];

var map = L.map('map').setView([54, 15], 4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.fitWorld();
//Getting one specific product from the enpi point  
fetch(`/products/map/${projectId}`)
    .then(response => response.json())
    .then(products => {
        // Loop through products and add markers to the map
        for (const property in products) {
            products[property].forEach((item) => {

                if (item._id === id) {

                    var marker = L.marker([item.latitude, item.longitude]).addTo(map);
              
                }

            });
        }


    })
    .catch(error => console.log('Error fetching products', error));







//Setting up the value for the user's range input
const value = document.querySelector("#value")
const input = document.querySelector("#pi_input")
value.textContent = input.value
input.addEventListener("input", (event) => {
    value.textContent = event.target.value
})
