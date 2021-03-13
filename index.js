const menuBurger = document.querySelector('.menu__burger');
const navMain = document.querySelector('.blog__navigation');

let inputHeader = document.querySelector ('.post__header-input');
let inputDescription = document.querySelector ('.post__description-input');
let blogContent = document.querySelector ('.post__1');
const createButton = document.querySelector ('.post__create-button');

createButton.addEventListener('click',(Event)=>{
    Event.preventDefault();

    blogContent.innerHTML += `
        <div>
            <h3 class = "title-name">${inputHeader.value}</h3>
            <p class = "blog-discription">${inputDescription.value}</p>
            <p class = "blog-time">${new Date()}</p>
        </div>

    `
    inputHeader.value = '';
    inputDescription.value = '';
})


menuBurger.addEventListener('click', (Event) => {
    navMain.classList.toggle('visible');
});