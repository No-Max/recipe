import Home from './views/Home';
import Recipe from './views/Recipe';

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
    path: '/test1',
    component: Home,
  },
  {
    pageTitle: null,
    showInMenu: false,
    path: '/recipe/:id',
    component: Recipe,
  },
]