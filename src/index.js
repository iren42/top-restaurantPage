import "./style.css";
import { homeContent, loadContent } from "./homeContent.js"
import { menuContent } from "./menuContent.js";
import { aboutContent } from "./aboutContent.js";

if (process.env.NODE_ENV !== 'production')
{
    console.log('Looks like we are in development mode!');
}

class TabDOM
{
    #button;
    #content;
    constructor(button, content)
    {
        this.#button = button;
        this.#content = content;
    }
    get button()
    {
        return (this.#button);
    }
    addActiveClass()
    {
        this.#button.classList.add("active");
    }
    removeActiveClass()
    {
        this.#button.classList.remove("active");
    }
    appendContent(parent)
    {
        if (!(parent instanceof Element))
            return ;
        parent.append(this.#content);
    }
}

const homeBtn = document.querySelector("button#homeBtn");
const menuBtn = document.querySelector("button#menuBtn");
const aboutBtn = document.querySelector("button#aboutBtn");
const brandBtn = document.querySelector("button#brandBtn");

const contentDiv = document.querySelector("div#content");

const tabs = [];
if (menuBtn)
    tabs.push(new TabDOM(menuBtn, menuContent));
if (homeBtn)
    tabs.push(new TabDOM(homeBtn, homeContent));
if (aboutBtn)
    tabs.push(new TabDOM(aboutBtn, aboutContent));
if (brandBtn)
    tabs.push(new TabDOM(brandBtn, homeContent));

function removeAllActiveClass(arrayOfTabDOM)
{
    arrayOfTabDOM.forEach((item) =>
    {
        if (!(item instanceof TabDOM))
            return ;
        item.removeActiveClass();
    });
}

document.addEventListener("click", event =>
{
    let targetArray = tabs.filter(element => element.button === event.target);
    if (targetArray.length !== 0)
    {
        let [element] = targetArray;
        removeAllActiveClass(tabs);
        element.addActiveClass();
        if (!contentDiv)
            return ;
        contentDiv.replaceChildren();
        element.appendContent(contentDiv);
    }
});

loadContent(homeContent);