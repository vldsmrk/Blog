const searchArea = document.querySelector('input[type="text"]');
const stopButton = document.querySelector('#stop');
const searchButton = document.querySelector('#search');
const canvas = document.querySelector('#chart');

let inputHeader = document.querySelector ('.post__header-input');
let inputDescription = document.querySelector ('.post__description-input');
let blogContent = document.querySelector ('.post__1');
const createButton = document.querySelector ('.post__create-button');

let coinsName = searchArea.value;
let dataUAH = 0;

//let cryp = await fetch (`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,UAH&api_key=4f4ec19cde9f2c855724b39c5a45b6f0f91557a74ea0e3d13d7c4ddc7b0e9aa4`)  

//console.log(cryp);

//let data = await cryp.json();

cryp(coinsName);

createButton.addEventListener('click',(Event)=>{
    Event.preventDefault();

    blogContent.innerHTML += `
        <div>
            <h3 class = "title-name">${dataUAH}</h3>
            <p class = "blog-discription">${inputDescription.value}</p>
            <p class = "blog-time">${new Date()}</p>
        </div>
    `
    inputHeader.value = '';
    inputDescription.value = '';
})


    

async function cryp(data, coinsName, chart){

    setInterval(async ()=>{  
        let cryp = await fetch (`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,UAH&api_key=4f4ec19cde9f2c855724b39c5a45b6f0f91557a74ea0e3d13d7c4ddc7b0e9aa4`)
        console.log(cryp);
        let data = await cryp.json();
        //addData(data.UAH);
        dataUAH = data.UAH;
        console.log(data);
    } ,   1000);
}

