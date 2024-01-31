// Show the content and hide the loader after the page is loaded
function pageLoaded(){
  setTimeout(function() {
    document.querySelector(".container").style.display = "flex";
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".loader").classList.add('slide-out');
    setTimeout(function() {document.querySelector(".loader").style.display = "none";},500);
    setTimeout(function() {document.querySelector(".container").style.filter = "none";},500);
  }, 3000);
};
window.onload = pageLoaded;
document.addEventListener('DOMContentLoaded', () => {
  // Navbar functionality
  // const navbarLinks = document.querySelectorAll('.navbar__link'); 
  // navbarLinks.forEach(link => {
  //   link.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     navbarLinks.forEach(l => l.classList.remove('active'));
  //     link.classList.add('active');
  //   });
  // });
  const navHomeBtn = document.getElementById('nav-home');
  const scrollToHome = document.getElementById('home_sec');
  const navAboutBtn = document.getElementById('nav-about');
  const scrollToAbout = document.getElementById('about_sec');
  const navProjectsBtn = document.getElementById('nav-projects');
  const scrollToProjects = document.getElementById('projec_sec');
  const navFeedbackBtn = document.getElementById('nav-feedback');
  const scrollToFeedback = document.getElementById('feedback_sec');
navHomeBtn.addEventListener('click', () => {
  scrollToHome.scrollIntoView({ behavior: 'smooth' });
});navAboutBtn.addEventListener('click', () => {
  scrollToAbout.scrollIntoView({ behavior: 'smooth' });
});navProjectsBtn.addEventListener('click', () => {
  scrollToProjects.scrollIntoView({ behavior: 'smooth' });
});navFeedbackBtn.addEventListener('click', () => {
  scrollToFeedback.scrollIntoView({ behavior: 'smooth' });
});





// About setion menu functionality 
const menuButtons = document.querySelectorAll('.menu-btns');
const contentDivs = document.querySelectorAll('[id^="content"]');
menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    contentDivs.forEach(div => {
      div.style.display = 'none';
    });
    document.getElementById(target).style.display = 'block';
  });
});

menuButtons.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const pressedButtonId = link.id;
    menuButtons.forEach(l => {
      if (l.id === pressedButtonId) {
        l.classList.add('active');
      } else {
        l.classList.remove('active');
      }
    });
  });
});

const menuButtons1 = document.querySelectorAll('.menu-btns1');
const contentDivs1 = document.querySelectorAll('[id^="cont"]');
menuButtons1.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    contentDivs1.forEach(div => {
      div.style.display = 'none';
    });
    document.getElementById(target).style.display = 'block';
  });
});

menuButtons1.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const pressedButtonId = link.id;
    menuButtons1.forEach(l => {
      if (l.id === pressedButtonId) {
        l.classList.add('active');
      } else {
        l.classList.remove('active');
      }
    });
  });
});



  

  // Projects functionality
  const projectButtons = document.querySelectorAll('.prjts-viewButton');
  const projectViews = document.querySelectorAll('.prject-view');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  
  let currentProject = 2;
  
  function displayProject(n) {
    projectViews.forEach(div => {
      div.style.display = 'none';
    });
    projectButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    projectViews[n].style.display = 'flex';
    projectButtons[n].classList.add('active');
  }
  
  leftArrow.addEventListener('click', () => {
    if (currentProject > 0) {
      currentProject--;
    } else {
      currentProject = projectViews.length - 1;
    }
    displayProject(currentProject);
  });
  
  rightArrow.addEventListener('click', () => {
    if (currentProject < projectViews.length - 1) {
      currentProject++;
    } else {
      currentProject = 0;
    }
    displayProject(currentProject);
  });
  
  projectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentProject = index;
      displayProject(currentProject);
    });
  });
  
  displayProject(currentProject);

  // Modal functionality
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("Ry-Btn");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }










});
window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    document.querySelector(".navbar").classList.add('sticky')
  } else {
    document.querySelector(".navbar").classList.remove('sticky')
  }
  if (window.scrollY < 400) {
    document.querySelector("#nav-home").classList.add('active')
    document.querySelector("#nav-about").classList.remove('active')
    document.querySelector("#nav-projects").classList.remove('active')
    document.querySelector("#nav-feedback").classList.remove('active')
  }
  if (window.scrollY > 700) {
    document.querySelector("#about_sec").classList.add('scroll-anim')
    document.querySelector("#nav-home").classList.remove('active')
    document.querySelector("#nav-about").classList.add('active')
    document.querySelector("#nav-projects").classList.remove('active')
    document.querySelector("#nav-feedback").classList.remove('active')

  }
  if (window.scrollY > 1650) {
    document.querySelector("#projec_sec").classList.add('scroll-anim')
    document.querySelector("#nav-home").classList.remove('active')
    document.querySelector("#nav-about").classList.remove('active')
    document.querySelector("#nav-projects").classList.add('active')
    document.querySelector("#nav-feedback").classList.remove('active')
  }
  if (window.scrollY > 2700) {
    console.log("nigga nigga nigga")
    document.querySelector("#feedback_sec").classList.add('scroll-anim')
    document.querySelector("#nav-home").classList.remove('active')
    document.querySelector("#nav-about").classList.remove('active')
    document.querySelector("#nav-projects").classList.remove('active')
    document.querySelector("#nav-feedback").classList.add('active')
  }
});
