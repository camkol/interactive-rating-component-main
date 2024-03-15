const start = document.querySelector("#start");
const thankYou = document.querySelector("#thankYou");
const select = document.querySelector("#select");
const icons = document.querySelectorAll(".rating-icon");
const submit = document.querySelector(".submit");

icons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Remove "rating-selected" class from all icons
    icons.forEach((icon) => {
      icon.classList.remove("rating-selected");
    });

    // Add "rating-selected" class to the clicked icon
    btn.classList.add("rating-selected");

    // Store the selected rating value in the window object
    window.stars = e.target.dataset.value;

    console.log("rating: " + window.stars);
  });
});

submit.addEventListener("click", (e) => {
  if (window.stars) {
    //alert(window.stars);
    select.innerText = `You selected ${window.stars} out of 5`;
    start.style.display = "none";
    thankYou.style.display = "block";
  } else {
    alert("Please select a rating");
  }
});
