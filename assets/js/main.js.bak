/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remote the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
  modalViews[modalClick].addEventListener("click", function () {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

function initializeSwiper() {
  /*==================== PORTFOLIO SWIPER  ====================*/
  let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // mousewheel: true,
    // keyboard: true
  });

  /*==================== PORTFOLIO SWIPER  ====================*/
  let swiperTestimonial = new Swiper(".testimonial__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // mousewheel: true,
    // keyboard: true
  });
}

/*==================== CONTACT ====================*/
function submitFormContact() {
  document.getElementById("contact__form-send-msg").submit();
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  sections.forEach((current) => {
    if (current) {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll header to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// ========== Mapbox ==========
function initializeMap() {
  const satelliteStyle = document.getElementById("satellite");
  if (!mapboxgl.supported()) {
    // alert('Your browser does not support Mapbox GL');
    const mapBox = document.getElementById("map");

    satelliteStyle.remove();

    mapBox.innerText = "Your browser does not support Mapbox GL";
    mapBox.style.fontWeight = 600;
    mapBox.style.color = "red";
  } else {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibGVodW5ndGluMTEiLCJhIjoiY2x3NmxreWxoMW8zODJpcGhvY3FlOGQ3bCJ9.T8ZIvnE3ogDQLDmcINuWjw";
    const monument = [106.654, 10.759979];
    const map = new mapboxgl.Map({
      container: "map",
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/mapbox/streets-v12",
      center: monument,
      zoom: 15,
    });

    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      "Here is where i live"
    );

    // create DOM element for the marker
    const el = document.createElement("div");
    el.id = "marker";

    // create the marker
    new mapboxgl.Marker(el)
      .setLngLat(monument)
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);

    map.addControl(new mapboxgl.FullscreenControl());

    // Change map style
    const classNameActive = "mapbox_style-active";

    satelliteStyle.onclick = () => {
      if (satelliteStyle.classList.contains(classNameActive)) {
        satelliteStyle.classList.remove(classNameActive);
        map.setStyle("mapbox://styles/mapbox/streets-v12");
      } else {
        satelliteStyle.classList.add(classNameActive);
        map.setStyle("mapbox://styles/mapbox/satellite-streets-v12");
      }
    };
  }
}

// ========== Detect lazy loading for loadSwiper & Mapbox ==========

function loadMapbox() {
  // Load Mapbox CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css";
  document.head.appendChild(link);

  // Load Mapbox JS
  const script = document.createElement("script");
  script.src = "https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js";
  script.onload = initializeMap; // Initialize the map once the script is loaded
  document.body.appendChild(script);
}

function loadSwiper() {
  // Load loadSwiper CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "assets/css/swiper-bundle.min.css";
  document.head.prepend(link);

  // Load loadSwiper JS
  const script = document.createElement("script");
  script.src = "assets/js/swiper-bundle.min.js";
  script.onload = initializeSwiper; // Initialize the swiper once the script is loaded
  document.body.appendChild(script);
}

function checkAndLoadSwiper() {
  const swiperPlaceholder = document.getElementById("services");
  const boundingRect = swiperPlaceholder.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Check if the bottom of the viewport is below the top of the element
  if (boundingRect.top < viewportHeight) {
    loadSwiper();
    loadMapbox();
    return true;
  }
  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  const swiperPlaceholder = document.getElementById("services");

  // Check if the swiper should be loaded immediately on load
  if (!checkAndLoadSwiper()) {
    if ("IntersectionObserver" in window) {
      let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (checkAndLoadSwiper()) {
              observer.unobserve(entry.target);
            }
          }
        });
      });

      observer.observe(swiperPlaceholder);
    } else {
      // Fallback if IntersectionObserver is not supported
      window.addEventListener("scroll", function () {
        if (checkAndLoadSwiper()) {
          window.removeEventListener("scroll", arguments.callee);
        }
      });
    }
  }
});
