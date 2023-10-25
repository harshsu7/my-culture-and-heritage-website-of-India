// script.js
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const allItems = document.getElementById('all-items').getElementsByTagName('li');

searchButton.addEventListener('click', performSearch);

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const matchingItems = [];

    for (const item of allItems) {
        const itemName = item.textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            matchingItems.push(item);
        }
    }

    displayResults(matchingItems);
}

function displayResults(results) {
    const resultsList = document.getElementById('search-results');
    resultsList.innerHTML = '';

    if (results.length === 0) {
        resultsList.style.display = 'none';
        return;
    }

    for (const result of results) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = result.textContent;
        link.href = result.querySelector('a').href; // Get the original link
        listItem.appendChild(link);
        resultsList.appendChild(listItem);
    }

    resultsList.style.display = 'block';
}
