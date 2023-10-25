const searchWrapper = document.querySelector(".search-container");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const searchButton = searchWrapper.querySelector(".search-button");
let linkTag = searchWrapper.querySelector("a");
let webLink;

const stateResults = {
    "monument": "monument.html", 
    "indianart": "indianart.html",
    "dances": "dances.html",
    "festival": "festival.html",

   
    
};
inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = Object.keys(stateResults).filter((state) => {
           
            return state.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((state) => {
            
            return `<a href="${stateResults[state]}">${state}</a>`;
        });
        searchWrapper.classList.add("active"); 
        showSuggestions(emptyArray);
    } else {
        searchWrapper.classList.remove("active");
    }
}

searchButton.onclick = () => {
    let userData = inputBox.value;
    if (userData && stateResults[userData]) {
        window.location.href = stateResults[userData]; // Navigate to the specific state search results page
    }
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        listData = `<a href="#">No results found</a>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
