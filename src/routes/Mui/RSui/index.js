import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
  path: '/RSui',
  title: 'Semantic-UI',
  component: dynamicWrapper(app,[], () => import('./components'))
});

export default (app) => createRoute(app, routesConfig);
