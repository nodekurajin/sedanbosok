const axios = require('axios'); // Install axios library: npm install axios

async function getCarDetailsByVIN(vin) {
  // Replace with the actual API URL and your API key (if required)
  const API_URL = `https:// VIN API endpoint /decode?vin=${vin}`;

  try {
    const response = await axios.get(API_URL);
    const carData = response.data; // Replace "data" with the actual key in the response

    // Extract relevant car details based on the API's response format
    const details = {
      make: carData.ΜΑΚΕ, // Replace with actual property names from the API response
      model: carData.ΜΟΔΕΛ,
      year: carData.ΕΤΟΣ,
    };
    return details;
  } catch (error) {
    console.error("Error fetching car details:", error);
    return null; // Handle errors gracefully, like returning null
  }
}

// Example usage
const vin = "JH4NA11A16J000001"; // Replace with a valid VIN number
getCarDetailsByVIN(vin).then(carDetails => {
  if (carDetails) {
    console.log("Car details for VIN", vin, ":");
    console.log(`Make: ${carDetails.make}`);
    console.log(`Model: ${carDetails.model}`);
    console.log(`Year: ${carDetails.year}`);
  } else {
    console.log("Error retrieving car details for VIN", vin);
  }
});
