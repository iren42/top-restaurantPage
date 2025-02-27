import "./style.css";
import { homeContent, loadContent} from "./homeContent.js"
import { menuContent } from "./menuContent.js";
import { aboutContent } from "./aboutContent.js";

console.log("Hello");
// loadContent(homeContent);
const homeBtn = document.querySelector("button#homeBtn");
const menuBtn = document.querySelector("button#menuBtn");
const aboutBtn = document.querySelector("button#aboutBtn");

const content = document.querySelector("div#content");

document.addEventListener("click", event =>
{
    event.preventDefault();
    console.log(event.target.id);
    if (event.target === homeBtn)
    {
        content.replaceChildren();
        loadContent(homeContent);
    }

});
// loadContent(aboutContent);