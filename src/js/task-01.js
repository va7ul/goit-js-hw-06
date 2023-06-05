const allCategories = document.querySelector('#categories');

console.log('Number of categories:', allCategories.children.length);

const elementsOfCategories = allCategories.querySelectorAll('.item');

elementsOfCategories.forEach(item => {

    console.log('Category:', item.firstElementChild.textContent)
    console.log('Elements:', item.lastElementChild.children.length)
});