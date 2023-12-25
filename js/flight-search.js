document
  .getElementById("flightSearchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var fromDestination = document.getElementById("fromDestination").value;
    var toDestination = document.getElementById("toDestination").value;
    var departureDate = document.getElementById("departureDate").value;
    var returnDate = document.getElementById("returnDate").value;

    // Validate input or handle search here
    console.log(
      "Searching for flights from " + fromDestination + " to " + toDestination
    );

    // Here you would typically make an AJAX request to your server or an API
    // For demonstration purposes, let's just log the input values
    // In a real-world scenario, you would not use console.log here
    // Instead, you'd probably update the DOM with the search results

    // Simulating a result update
    document.getElementById("flightResultsContainer").innerHTML =
      "<p>Displaying search results...</p>";

    // Example: Make an AJAX request to fetch flight data
    // fetch('your-api-endpoint', {
    //     method: 'POST', // or 'GET'
    //     body: JSON.stringify({
    //         from: fromDestination,
    //         to: toDestination,
    //         departureDate: departureDate,
    //         returnDate: returnDate
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     // Process and display the data on your webpage
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
  });
// ... [previous JavaScript code] ...

// After fetching the data, dynamically generate the HTML for the flight options
function displayFlightOptions(flightData) {
  const availableFlightsElement = document.getElementById("availableFlights");
  availableFlightsElement.innerHTML = ""; // Clear previous results

  flightData.forEach((flight) => {
    const flightCard = document.createElement("div");
    flightCard.className = "col-md-4 mb-3";

    const cardContent = `
            <div class="card h-100">
                <div class="card-body">
                    <h6 class="card-title">${flight.date}</h6>
                    <p class="card-text">${
                      flight.price
                        ? flight.price + " VND"
                        : "No flights available"
                    }</p>
                </div>
            </div>
        `;

    flightCard.innerHTML = cardContent;
    availableFlightsElement.appendChild(flightCard);
  });
}

// Example usage:
// Assuming you have a function to fetch flight data that returns a promise
/*
fetchFlightData().then(flightData => {
    displayFlightOptions(flightData);
});
*/

// ... [rest of your JavaScript code] ...
