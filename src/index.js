import "./style.css";
import { homeContent, loadContent } from "./homeContent.js"
import { menuContent } from "./menuContent.js";
import { aboutContent } from "./aboutContent.js";

console.log("Hello");
const homeBtn = document.querySelector("button#homeBtn");
const menuBtn = document.querySelector("button#menuBtn");
const aboutBtn = document.querySelector("button#aboutBtn");
const brandBtn = document.querySelector("button#brandBtn");

const content = document.querySelector("div#content");

document.addEventListener("click", event =>
{
    // console.log(event.target);
    if (event.target === homeBtn || event.target === brandBtn)
    {
        content.replaceChildren();
        loadContent(homeContent);
    }
    else if (event.target === menuBtn)
    {
        content.replaceChildren();
        loadContent(menuContent);
    }
    else if (event.target === aboutBtn)
    {
        content.replaceChildren();
        loadContent(aboutContent);
    }
    else
        ;
});
loadContent(homeContent);