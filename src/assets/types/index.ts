export type Category = {
  strCategory: string;
};

export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type SearchForm = {
  search: string;
};

//no hacer en la vida real esto es un atajo
export type MealDetails = {
  [key: string]: string;
};
