function createButtonWithSVG(svgPath)
{
    const button = document.createElement('button');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 50 50');
    svg.setAttribute('width', '50px');
    svg.setAttribute('height', '50px');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', svgPath);

    svg.appendChild(path);
    button.appendChild(svg);
    return (button);
}

function createAboutContent()
{
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('aboutContent');

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('address');

    const h2Address = document.createElement('h2');
    h2Address.textContent = 'Address';
    addressDiv.appendChild(h2Address);

    const address1 = document.createElement('p');
    address1.textContent = '3260 College Rd';
    addressDiv.appendChild(address1);

    const address2 = document.createElement('p');
    address2.textContent = 'Fairbanks, Alaska 99709';
    addressDiv.appendChild(address2);

    const address3 = document.createElement('p');
    address3.textContent = 'United States';
    addressDiv.appendChild(address3);

    aboutContent.appendChild(addressDiv);

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const h2Contact = document.createElement('h2');
    h2Contact.textContent = 'Contact';
    contactDiv.appendChild(h2Contact);

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('phoneNumber');
    phoneNumber.textContent = 'Phone number: (907) 344-0126';
    contactDiv.appendChild(phoneNumber);

    const button1 = createButtonWithSVG("M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z");
    const button2 = createButtonWithSVG("M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z");

    contactDiv.appendChild(button1);
    contactDiv.appendChild(button2);

    aboutContent.appendChild(contactDiv);
    return (aboutContent);
}

export const aboutContent = createAboutContent();