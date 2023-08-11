const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const categorieEl = categories.forEach(categorie => {
    const titleEl = categorie.querySelector('h2');
    console.log('Category:', titleEl.textContent);

    const elements = categorie.querySelectorAll('.item li');
    console.log('Elements:', elements.length);
});