const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

const monthCapitalized = date.toLocaleString ("pt-br", {month:"long"}).charAt(0).toUpperCase() + 
    date.toLocaleString("pt-br", {month:"long"}).slice(1);

const dayNameCapitalized = date.toLocaleString ("pt-br", {weekday:"long"}).charAt(0).toUpperCase() + 
    date.toLocaleString ("pt-br", {weekday:"long"}).slice(1);

monthNameEl.innerText = monthCapitalized;

dayNameEl.innerText = dayNameCapitalized;

dayNumberEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();