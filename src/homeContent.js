function createHomeContent ()
{
    const homeContent = document.createElement("div");
    homeContent.classList.add("homeContent");

    const bgImg = document.createElement("div");
    bgImg.classList.add("bgImg");

    const history = document.createElement("div");
    history.classList.add("history");

    const history_h2 = document.createElement("h2");
    history_h2.textContent = "History";

    const history_text = document.createElement("p");
    history_text.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias mollitia dolores aspernatur explicabo, error sunt nam eius necessitatibus quasi? Quod ratione officiis ducimus iste consequuntur minima numquam, distinctio voluptatibus iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Molestias mollitia dolores aspernatur explicabo, error sunt nam eius necessitatibus quasi? Quod ratione officiis ducimus iste consequuntur minima numquam, distinctio voluptatibus iusto.";

    const openHoursDiv = document.createElement("div");
    openHoursDiv.classList.add("openHours");

    const openHours_h2 = document.createElement("h2");
    openHours_h2.textContent = "Opening Hours:";

    const openDays = document.createElement("p");
    openDays.textContent = "Monday — Saturday";
    const openHours = document.createElement("p");
    openHours.textContent = "From 12pm to 10pm";

    homeContent.append(bgImg, history, openHoursDiv);
    history.append(history_h2, history_text);
    openHoursDiv.append(openHours_h2, openDays, openHours);

    return (homeContent);
};

export const homeContent = createHomeContent();
export function loadContent(content) {
    const contentDiv = document.querySelector("div#content");
    contentDiv.append(content);
}