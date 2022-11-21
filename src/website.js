import home from "./home";

import menuBoard from "./menu";

import contact from "./contact";


const header = () => {

    const content = document.getElementById('content');
    const header = document.createElement('div');
    const title = document.createElement('h1');

    header.setAttribute('id', 'header');
    title.setAttribute('class', 'header-title');

    title.innerText = 'SOPHIE RESTAURANT';

    header.appendChild(title);

    content.appendChild(header);

    return header;
}

const navbar = () => {
    const tab = document.createElement('div');
    tab.setAttribute('id', 'tab-list');
    const tabContent = document.createElement('div');

    const homeBtn = document.createElement('button');
    homeBtn.innerText = 'HOME';
    homeBtn.classList.add('button');
    tab.appendChild(homeBtn);
    tabContent.appendChild(tab);
    content.appendChild(tabContent);
    homeBtn.addEventListener('click', () => {
        if (tabContent.childElementCount > 1){
            tabContent.children[1].remove();
        }
        tabContent.appendChild(home());
    });

    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'MENU';
    menuBtn.classList.add('button');
    tab.appendChild(menuBtn);
    tabContent.appendChild(tab);
    content.appendChild(tabContent);
    menuBtn.addEventListener('click', () => {
        if (tabContent.childElementCount > 1){
            tabContent.children[1].remove();
        }
        tabContent.appendChild(menuBoard());
    });

    const contactBtn = document.createElement('button');
    contactBtn.innerText = 'CONTACT';
    contactBtn.classList.add('button');
    tab.appendChild(contactBtn);
    tabContent.appendChild(tab);
    content.appendChild(tabContent);
    contactBtn.addEventListener('click', () => {
        if (tabContent.childElementCount > 1){
            tabContent.children[1].remove();
        }
        tabContent.appendChild(contact());
    });

    tabContent.appendChild(home());

    return tab;
}

const footer = () => {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.innerText = `COPY RIGHT © ${new Date().getFullYear()} BOKALLI FERDINAND`;

    content.appendChild(footer);

    return footer;
}

export {header, navbar, footer};