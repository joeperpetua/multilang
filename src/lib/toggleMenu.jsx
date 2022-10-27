import {sleep} from './sleep.js';

const toggleMenu = async () => {
    let nav = document.querySelector(".Nav");
    let menu = document.querySelector(".Menu");
    let navIcon = document.querySelector(".nav-icon");
    let title = document.querySelector("#nav-title");
    if (menu.className.includes("open")) {
      menu.className = "Menu closed";
      await sleep(50, 'ms');
      nav.removeAttribute("style");
      navIcon.src = "https://img.icons8.com/48/FFFFFF/settings--v1.png";
      title.innerText = "MultiLang"
    }else {
      menu.className = "Menu opened";
      await sleep(50, 'ms');
      nav.setAttribute("style", "justify-content: flex-end;");
      navIcon.src = "https://img.icons8.com/fluency-systems-filled/48/FFFFFF/x.png";
      title.innerText = "Settings"
    }
}

export {toggleMenu};