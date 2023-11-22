import HomeRestaurant from '../views/pages/home';
import Like from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': HomeRestaurant,
  '/home': HomeRestaurant,
  '/favorite': Like,
  '/detail/:id': Detail,

};

export default routes;
