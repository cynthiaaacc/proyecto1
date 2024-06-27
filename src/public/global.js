const globalInit = () => {
    const toggle = document.querySelector("#toggle");
    const navBar = document.querySelector("#navbar");
    let darkmode = localStorage.getItem('darkmode') === 'true' ? true : false;


    const setDarkMode = (dark) => {
      const html = document.querySelector("html");
      localStorage.setItem('darkmode', dark.toString());
      if (dark) {
        darkmode = dark
        html.classList.add("dark");
        toggle.checked = true;
        return
      }

      darkmode = dark
      html.classList.remove("dark");
      toggle.checked = false;
    }

    setDarkMode(darkmode)

    toggle.addEventListener("click", () => {
        setDarkMode(!darkmode)     
    }); 
}

document.addEventListener('DOMContentLoaded', globalInit, false);