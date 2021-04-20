import { elements } from './base';

// Private function
const renderRecipe = recipe => {
    console.log(recipe);
const markup = `
 <li>

<a href="#${recipe.recipe_id}" class="likes__link">
    <figure class="likes__fig">
        <img src="${recipe.image_url}" alt="Test">
    </figure>
    <div class="likes__data">
        <h4 class="likes__name">${recipe.title}</h4>
        <p  class=likes__author> ${recipe.publisher}</p>
    </div>
</a>
`;
// UL рүүгээ хийнэ
elements.searchResultList.insertAdjacentHTML('beforeend', markup);

};
export const clearSearchQuerry = () => {
    elements.searchInput.value = "";
};

export const clearSearchResult = () => {
    elements.searchResultList.innerHTML = '';
    elements.pageButtons.innerHTML = '';
};

export const getInput = () => elements.searchInput.value;
export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => {

// Хайлтын үр дүнг хуудаслаж үзүүлэх
    // page = 2, start = 10, end = 20
    const start = (currentPage - 1) * resPerPage;
    const end = currentPage * resPerPage;
    
        recipes.slice(start, end).forEach(renderRecipe);

// хуудаслалтын товчуудыг гаргаж ирэх
const totalPages = Math.ceil(recipes.length / resPerPage );
renderButtons(currentPage, totalPages);

};

const createButton = (page, type, direction) => `<button class="btn-inline results__btn--${type}" data-goto=${page}>
<svg class="search__icon">
    <use href="img/icons.svg#icon-triangle-${direction}"></use>
</svg>
<span>Хуудас ${page}</span>
</button>`;


const renderButtons = (currentPage, totalPages) => {
    let buttonHtml ;

    if(currentPage === 1 && totalPages > 1 ) {
        // 1-р хуудсан дээр байна, 2-р хуудас гэдэг товчийг гаргана.
        buttonHtml = createButton(2, "next", "right");
    } else if (currentPage < totalPages) {
        // Өмнөх болон дараагийн хуудасруу шилжих  товчийг үзүүлэх.
        buttonHtml = createButton(currentPage - 1, "prev", "left");
        buttonHtml += createButton(currentPage + 1, "next", "right");
    }
    else if (currentPage === totalPages) {
        // Хамгийн сүүлийн хуудас дээр байна. Өмнөх рүү шилжүүлэх товчийг  л үзүүлнэ.
        buttonHtml = createButton(currentPage - 1,"prev", "left")
    }


    elements.pageButtons.insertAdjacentHTML('afterbegin', buttonHtml);
};

