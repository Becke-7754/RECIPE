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
};

export const getInput = () => elements.searchInput.value;
export const renderRecipes = recipes => {
    recipes.forEach(renderRecipe);
}


