export const createMarkupCocktail = cocktail => {
  const { _id, drink, drinkThumb, description } = cocktail;
  return `<li class="cocktails-item" id="${_id}">
                    <img class="cocktails-image" src="${drinkThumb}" alt="foto ${drink}" />
                    <h3 class="cocktails-name">${drink}</h3>
                    <p class="cocktails-description">${description}</p>
                    <div class="cocktails-buttons">
                    <button class="cocktails-button" data-id="${_id}">learn more</button>
                    <button class="cocktails-button-favorite">
                        <svg class="icon">
                            <use href="./images/sprite.svg#icon-favorites-mobile-white"></use>
                        </svg>
                    </button>
                    </div>
          </li>`;
};