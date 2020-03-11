import Home from './views/Home';
import Recipe from './views/Recipe';
import Ingredients from './views/Ingredients';

export default [
  {
    pageTitle: 'Все рецепты',
    showInMenu: true,
    path: '/',
    component: Home,
  },
  {
    pageTitle: 'Создать новый',
    showInMenu: true,
    path: '/test',
    component: Home,
  },
  {
    pageTitle: 'Ингредиенты',
    showInMenu: true,
    path: '/ingredients',
    component: Ingredients,
  },
  {
    pageTitle: null,
    showInMenu: false,
    path: '/recipe/:id',
    component: Recipe,
  },
]