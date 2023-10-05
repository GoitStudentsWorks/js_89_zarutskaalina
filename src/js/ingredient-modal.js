import refs from './refs';

export const setFavoriteButtonContent = ingredientId => {
  const ingredients = localStorage.getItem('ingredients');

  if (ingredients) {
    const parsedIngredients = JSON.parse(ingredients);
    const isIngredientInFavorite = parsedIngredients.find(
      ({ _id }) => ingredientId === _id
    );

    if (isIngredientInFavorite) {
      refs.ingredientModaFavoriteButton.textContent = 'Remove from favorite';
    } else {
      refs.ingredientModaFavoriteButton.textContent = 'Add to favoritesfgt';
    }
  }
};

export const makeCoctailBold = (coctailName, description) => {
  const coctailIndex = description
    .toLowerCase()
    .indexOf(coctailName.toLowerCase());
  const result =
    description.substring(0, coctailIndex) +
    `<b>${coctailName}</b>` +
    description.substring(coctailIndex + coctailName.length);
  return result;
};

export const modalContent = ({
  abv,
  alcohol,
  country,
  description,
  flavour,
  title,
  type,
}) =>
  `<h2 class="ingredient-modal-title">${title}</h2>
    <h3 class="ingredient-modal-subtitle">${type}</h3>
    <div class="divider"></div>
    <p class="ingredient-modal-description">
      ${makeCoctailBold(title, description)}
    </p>
    <ul class="ingredient-modal-list">
      ${
        type
          ? `<li>Type: ${type.toLowerCase()}</li>`
          : '<li>Type: not found</li>'
      }
      ${
        country
          ? `<li>Country of origin: ${country}</li>`
          : '<li>Country of origin: not found</li>'
      }
      ${alcohol === 'Yes' ? `<li>Alcohol by volume: ${abv}%</li>` : ''}
      ${
        flavour ? `<li>Flavour: ${flavour}</li>` : '<li>Flavour: not found</li>'
      }
    </ul>`;

export const handleAddToFavorite = () => {
  const ingredients = localStorage.getItem('ingredients');
  console.log(JSON.parse(ingredients));
  const currentIngredient = JSON.parse(
    localStorage.getItem('currentIngredient')
  );

  if (ingredients) {
    const parsedIngredients = JSON.parse(ingredients);
    const isIngredientInFavorite = parsedIngredients.find(
      ({ _id }) => currentIngredient['_id'] === _id
    );

    if (isIngredientInFavorite) {
      const filteredIngredients = parsedIngredients.filter(
        ({ _id }) => currentIngredient['_id'] !== _id
      );
      localStorage.setItem('ingredients', JSON.stringify(filteredIngredients));
      refs.ingredientModaFavoriteButton.textContent = 'Add to favoritedfdg';
    } else {
      localStorage.setItem(
        'ingredients',
        JSON.stringify([...parsedIngredients, currentIngredient])
      );
      refs.ingredientModaFavoriteButton.textContent = 'Remove from favorite';
    }
  } else {
    localStorage.setItem('ingredients', JSON.stringify([currentIngredient]));
  }

  setFavoriteButtonContent(currentIngredient['_id']);
};

const handleClose = () => {
  refs.backdrop.classList.remove('isShow');
  refs.ingredientModal.classList.remove('isShow');
  refs.ingredientModaContent.innerHTML = '';
  refs.ingredientModaFavoriteButton.removeEventListener(
    'click',
    handleAddToFavorite
  );
};

refs.backdrop.addEventListener('click', handleClose);
refs.ingredientModaCloseButton.addEventListener('click', handleClose);
refs.ingredientModaBackButton.addEventListener('click', handleClose);
