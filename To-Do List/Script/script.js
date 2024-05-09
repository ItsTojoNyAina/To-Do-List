$(document).ready(function () {
  const tache = $("#tache");
  const contain = $("#list-container");
  const themeSwitch = $(".theme-switch");
  const switchCircle = $(".theme-switch .switch");

  // Create a function to add a post
  function addPost() {
    // Get the event name element
    const eventName = $("textarea").val();

    // Create a new post element
    const post = $("<div>");
    post.addClass("post");

    // Add the event name and countdown timer to the post element
    post.append(`<h1>${eventName}</h1>`);
    post.append(`<p id="ChronoTime"></p>`);

    // Append the post element to the page
    $("#post").append(post);

    // Update the countdown timer
    updateCountdown();
  }

  // Create a function to update the countdown timer
  function updateCountdown() {
    // Get the current time and the event time
    const now = new Date();
    const eventTime = new Date($("#daty_time").val());

    // Calculate the time remaining until the event
    const timeRemaining = eventTime.getTime() - now.getTime();

    // Convert the time remaining to days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown timer
    $("#ChronoTime").html(`${days}j ${hours} h ${minutes}min ${seconds}s`);
  }

  // Add a click event listener to the "Ajouter" button
  $("#ajouter").on("click", function() {
    addPost();
  });

  // Add a click event listener to the "Add Task" button
  $("#addTaskBtn").click(function () {
      addTask();
  });

  // Dark and light mode
  themeSwitch.click(function () {
      $("body").toggleClass("dark-mode");
      $("body").toggleClass("light-theme");
      switchCircle.toggleClass("light-theme");
  });

  // Update the countdown timer every second
  setInterval(updateCountdown, 1000);
});
