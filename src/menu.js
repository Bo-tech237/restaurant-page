
const menu = (imageSource, pizza, receip) => {
    const menuItem = document.createElement('div');
    menuItem.setAttribute('class', 'menu-item');
    const pizzaImage = document.createElement('img');
    let pizzaName = document.createElement('h1');
    pizzaName.setAttribute('class', 'menu-title');
    let pizzaReceip = document.createElement('p');

    pizzaImage.setAttribute('src', imageSource);
    pizzaName.innerText = pizza;
    pizzaReceip.innerText = receip;
    menuItem.appendChild(pizzaImage);
    menuItem.appendChild(pizzaName);
    menuItem.appendChild(pizzaReceip);

    return menuItem;
}

const menuBoard = () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'menu');
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');
    const mainBoard = document.createElement('div');
    mainBoard.setAttribute('id', 'menu-board');

    mainBoard.appendChild(menu('./images/carne.png','Carne', 'Tomato, Garlic'));
    mainBoard.appendChild(menu('./images/colorato.png','Colorato', 'Tomato, Garlic'));
    mainBoard.appendChild(menu('./images/crema.png','Crema', 'Tomato, Garlic'));
    mainBoard.appendChild(menu('./images/disgustoso.png','Disgustoso', 'Tomato, Garlic'));
    mainBoard.appendChild(menu('./images/gamberi.png','Gamberi', 'Tomato, Garlic'));
    mainBoard.appendChild(menu('./images/pepe.png','Pepe', 'Tomato, Garlic'));
    mainBoard.appendChild(menu('./images/pomodoro.png','Pomodoro', 'Tomato, Garlic'));
    mainBoard.appendChild(menu('./images/salsiccia.png','Salsiccia', 'Tomato, Garlic'));
    menuContainer.appendChild(mainBoard);
    main.append(menuContainer);

    return main;
}

export default menuBoard;