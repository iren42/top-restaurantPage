import "./style.css";
import { homeContent, loadContent } from "./homeContent.js"
import { menuContent } from "./menuContent.js";
import { aboutContent } from "./aboutContent.js";

console.log("Hello");
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
const homeBtn = document.querySelector("button#homeBtn");
const menuBtn = document.querySelector("button#menuBtn");
const aboutBtn = document.querySelector("button#aboutBtn");
const brandBtn = document.querySelector("button#brandBtn");

const navBtns = [
    homeBtn,
    menuBtn,
    aboutBtn,
];
const content = document.querySelector("div#content");

document.addEventListener("click", event =>
{
    // console.log(event.target);
    if (event.target === homeBtn || event.target === brandBtn)
    {
        navBtns.forEach((nav) => {
            nav.classList.remove("active");
        });
        homeBtn.classList.add("active");
        content.replaceChildren();
        loadContent(homeContent);
    }
    else if (event.target === menuBtn)
    {
        navBtns.forEach((nav) =>
        {
            nav.classList.remove("active");
        });
        menuBtn.classList.add("active");
        content.replaceChildren();
        loadContent(menuContent);
    }
    else if (event.target === aboutBtn)
    {
        navBtns.forEach((nav) =>
        {
            nav.classList.remove("active");
        });
        aboutBtn.classList.add("active");
        content.replaceChildren();
        loadContent(aboutContent);
    }
    else
        ;
});
loadContent(homeContent);