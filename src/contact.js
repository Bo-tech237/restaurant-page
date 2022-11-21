const contact = () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'contact');
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-container');
    const text1 = document.createElement('p');
    text1.innerText = "📞 125 369 158 254";
    const text2 = document.createElement('p');
    text2.innerText = "Simbock street 478, Yaounde, Cameroon";
    const image = document.createElement('img');
    image.setAttribute('src', './images/restaurant-location.png');
    image.setAttribute('class', 'contact-image');

    contactContainer.appendChild(text1);
    contactContainer.appendChild(text2);
    contactContainer.appendChild(image);
    main.append(contactContainer);
    
    return main;
}

export default contact;