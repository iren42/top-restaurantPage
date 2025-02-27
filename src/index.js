import "./style.css";
import { homeContent, loadContent } from "./homeContent.js"
import { menuContent } from "./menuContent.js";
import { aboutContent } from "./aboutContent.js";

console.log("Hello");
const homeBtn = document.querySelector("button#homeBtn");
const menuBtn = document.querySelector("button#menuBtn");
const aboutBtn = document.querySelector("button#aboutBtn");

const content = document.querySelector("div#content");

document.addEventListener("click", event =>
{
    if (event.target === homeBtn)
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