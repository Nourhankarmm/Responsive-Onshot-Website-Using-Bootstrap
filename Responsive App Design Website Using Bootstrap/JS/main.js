function handleNavbarOnScroll() {
  const navbar = document.getElementById('mainNavbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-sticky-on');
  } else {
    navbar.classList.remove('navbar-sticky-on');
  }
}

window.addEventListener('scroll', handleNavbarOnScroll);


function parseShortNumber(str) {
  const suffix = str.slice(-1).toUpperCase();
  const num = parseFloat(str.slice(0, -1));
  if (suffix === 'M') return num * 1000000;
  if (suffix === 'K') return num * 1000;
  return parseFloat(str);
}


function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return num.toString();
}

const counters = document.querySelectorAll('.number');
const speed = 200; 

counters.forEach(counter => {
  const targetStr = counter.innerText;
  const target = parseShortNumber(targetStr);
  counter.innerText = '0';

  const updateCount = () => {
    let current = parseShortNumber(counter.innerText);
    if (isNaN(current)) current = 0;

    const increment = target / speed;

    if (current < target) {
      current = Math.min(current + increment, target);
      counter.innerText = formatNumber(current);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = formatNumber(target);
    }
  };

  updateCount();
});
//app screen
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 100,        
      stretch: -100,      
      depth: 300,       
      modifier: 1.5,   
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
});
// Side Navigation Bar Closes When a Navigation Link is Clicked
window.addEventListener("scroll", function () {
  let scrollUp = document.getElementById("scrollUp");
  if (window.scrollY > 200) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
});
