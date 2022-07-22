const root = document.querySelector("#root");
const imgPlace = document.querySelector(".img-place");
const userInput = document.querySelector("#user-input");
const requestButton = document.querySelector("#request-button");
const country = document.querySelector(".country");
const city = document.querySelector(".city");
const how = document.querySelector(".how");
const degree = document.querySelector(".degree");
const windSpeed = document.querySelector(".wind-speed");
const outputPlaceholder = document.querySelector(".output-place-placeholder");
const outputPlace = document.querySelector(".output-place");

requestButton.addEventListener("click", async () => {
  const userInputValue = userInput.value;
  userInput.value = "";
  const returnedData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInputValue}&appid=81bd9206d538a781120317279ec118a5`
  );
  const returnedJson = await returnedData.json();
  changeItems(returnedJson);
  console.log(returnedJson);
});

const changeItems = (jsonData) => {
  country.innerHTML = jsonData.sys.country;
  city.innerHTML = jsonData.name;
  how.innerHTML = jsonData.weather[0].description;
  degree.innerHTML = jsonData.main.temp;
  windSpeed.innerHTML = jsonData.wind.speed;
  console.log(outputPlaceholder)
  outputPlaceholder.classList.add('hidden')
  outputPlace.classList.remove("hidden");

};
