
const home = () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'home');
    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('class', 'home-container');
    const text1 = document.createElement('p');
    text1.innerText = "Best PIZZA in your country";
    const text2 = document.createElement('p');
    text2.innerText = "Made with passion since 1982"
    const text3 = document.createElement('p');
    text3.innerText = "Order online or visit us!";
    const image = document.createElement('img');
    image.setAttribute('src', './images/chef-cook.jpg');
    image.setAttribute('class', 'home-image');

    homeContainer.appendChild(text1);
    homeContainer.appendChild(text2);
    homeContainer.appendChild(image);
    homeContainer.appendChild(text3);
    main.append(homeContainer);

    
    return main;
}

export default home;