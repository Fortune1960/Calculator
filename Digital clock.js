//Get the HTML elements for hours, minutes, and seconds
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

//Set an interval to update the clock every second
const clock = setInterval(
  function time() {
    //Get the current date and time
    const date_now = new Date();

    //Extract the hours, minutes, and seconds from current time
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    //Ensure the hours, minutes, and seconds are always two digits
    hr = hr.toString().padStart(2, "0");
    min = min.toString().padStart(2, "0");
    sec = sec.toString().padStart(2, "0");

    //Update the content of the respective HTML elements with current time
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
  },
  1000 //Run the function every 1000 milliseconds (1 second)
);