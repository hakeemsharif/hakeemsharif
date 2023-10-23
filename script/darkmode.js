
let darkMode = localStorage.getItem('dark-theme'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

//var icon = document.getElementById("mainlogo");
let icon = localStorage.getItem('mainlogo');
let homeicon = localStorage.getItem('homeicon');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark-theme');
  //document.documentElement.classList.add('dark-theme');
  document.getElementById('dark-mode-toggle').src = "files/icons/Light.webp";
  // 2. Update darkMode in localStorage
  localStorage.setItem('dark-theme', 'enabled');
}

const enableIcon = () => {
    // 1. Add the class to the body
    
    document.getElementById('mainlogo').src = "files/hs-logo/LogoLight.webp";
    document.getElementById('homeicon').src = "files/icons/home-light.webp";
    // 2. Update darkMode in localStorage
    localStorage.setItem("mainlogo", 'enabled');
  }


const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark-theme');
  //document.documentElement.classList.remove('dark-theme');
  document.getElementById('dark-mode-toggle').src = "files/icons/Dark.webp";
  // 2. Update darkMode in localStorage 
  localStorage.setItem('dark-theme', null);
}

const disableIcon = () => {
    // 1. Add the class to the body 
    
    document.getElementById('mainlogo').src = "files/hs-logo/LogoMain.webp";
    document.getElementById('homeicon').src = "files/icons/home-dark.webp";
    // 2. Update darkMode in localStorage
    localStorage.setItem("mainlogo", null);
  }
 
// If the user already visited and enabled darkMode
// start things off with it on

if (darkMode === 'enabled') {
  enableDarkMode();
  enableIcon();
}


// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('dark-theme'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    enableIcon();
    console.log("enabled")
    //icon.src = "files/hs-logo/LogoLight.webp";


  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
    disableIcon();
    //icon.src = "files/hs-logo/LogoMain.webp";
  }
});


