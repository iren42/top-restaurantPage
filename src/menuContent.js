import frenchOnionSoup from "./assets/french-onion-soup.png";
import coqAuVin from "./assets/coq-au-vin-1.png";
import cassoulet from "./assets/cassoulet.png";

function createMenuContent()
{
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');

    const h2 = document.createElement('h2');
    h2.textContent = 'La Carte';
    menuContent.appendChild(h2);

    const dishes = [
        {
            title: 'French onion soup',
            imageSrc: frenchOnionSoup,
            imageAlt: 'French onion soup',
            description: `This is a traditional French soup made of onions and beef stock, usually
                  served with croutons and melted cheese on top. Dating back to Roman times, this was
                  traditionally a peasant dish although the current version dates from the 18th century. The
                  soup’s unique flavor comes from the caramelization of the onions, which often have brandy or
                  sherry added during the slow-cooking process.`
        },
        {
            title: 'Coq au vin',
            imageSrc: coqAuVin,
            imageAlt: 'Coq au vin',
            description: `This quintessential French food was popularized by Julia Child, becoming one
                  of her signature dishes. The dish sees chicken braised with wine, mushrooms, salty pork or bacon
                  (lardons), mushrooms, onions, garlic, and sometimes even a drop of brandy.`
        },
        {
            title: 'Cassoulet',
            imageSrc: cassoulet,
            imageAlt: 'Cassoulet',
            description: `Cassoulet is a comfort dish of white beans stewed slowly with meat. The dish
                  typically uses pork or duck but can include sausages, goose, mutton or whatever else the chef
                  has lying around.`
        }
    ];

    dishes.forEach(dish =>
    {
        const dishDiv = document.createElement('div');
        dishDiv.classList.add('dish');

        const dishTitle = document.createElement('h3');
        dishTitle.textContent = dish.title;
        dishDiv.appendChild(dishTitle);

        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        const dishImage = document.createElement('img');
        dishImage.src = dish.imageSrc;
        dishImage.alt = dish.imageAlt;
        dishImage.height = 200;
        dishImage.width = 300;
        rowDiv.appendChild(dishImage);

        const dishDescription = document.createElement('p');
        dishDescription.classList.add('description');
        dishDescription.textContent = dish.description;
        rowDiv.appendChild(dishDescription);

        dishDiv.appendChild(rowDiv);
        menuContent.appendChild(dishDiv);
    });
    return (menuContent);
}

export const menuContent = createMenuContent();
