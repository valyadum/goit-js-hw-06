 const categories = document.querySelectorAll(".item");
 console.log("Number of categories:", categories.length);

// const categorieEl = categories.forEach(categorie => {
//     const titleEl = categorie.querySelector('h2');
//     console.log('Category:', titleEl.textContent);

//     const elements = categorie.querySelectorAll('.item li');
//     console.log('Elements:', elements.length);
// });

const categorieEl = categories.forEach(categorie => {
    const titleEl = categorie.firstElementChild;
    console.log('Category:', titleEl.textContent);

    const ulElements = categorie.lastElementChild;
    const elements = ulElements.children;
    console.log('Elements:', elements.length);
})