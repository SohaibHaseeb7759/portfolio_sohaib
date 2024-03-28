document.addEventListener("DOMContentLoaded", function () {
  const containerHomepage = document.querySelector(".container_homepage");
  containerHomepage.classList.add("show");
});

document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll("section a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".animate-card");

  function checkVisibility() {
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const cardBottom = card.getBoundingClientRect().bottom;

      if (cardTop < window.innerHeight && cardBottom >= 0) {
        card.classList.add("visible");
      } else {
        card.classList.remove("visible");
      }
    });
  }

  document.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Check visibility on page load
});
// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add animation class when element is in viewport
function addAnimationClassToVisibleElements() {
  const cards = document.querySelectorAll(".card1");
  cards.forEach((card) => {
    if (isInViewport(card)) {
      card.classList.add("animate");
    } else {
      card.classList.remove("animate");
    }
  });
}

// Add event listener to check when the user scrolls
document.addEventListener("scroll", addAnimationClassToVisibleElements);

// Initial check for elements in viewport
addAnimationClassToVisibleElements();

function downloadCV() {
  // Replace 'path_to_your_cv.pdf' with the actual path to your CV file
  const cvUrl = "Sohaib's Resume (3).pdf";
  const anchorElement = document.createElement("a");
  anchorElement.href = cvUrl;
  anchorElement.download = "Muhammad_Sohaib_Haseeb_CV.pdf"; // Set the desired filename for the downloaded file
  anchorElement.click();
}

function openLink(url) {
  window.open(url, "_blank");
}

function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var mailtoLink =
    "mailto:sohaibhaseeb775916@gmail.com?subject=" +
    encodeURIComponent(subject) +
    "&body=Name: " +
    encodeURIComponent(name) +
    "%0D%0AEmail: " +
    encodeURIComponent(email) +
    "%0D%0ASubject: " +
    encodeURIComponent(subject) +
    "%0D%0AMessage: " +
    encodeURIComponent(message);

  window.location.href = mailtoLink;
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}
