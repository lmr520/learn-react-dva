import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
  path: '/muichips',
  title: '纸片',
  component: dynamicWrapper(app,[], () => import('./components'))
});

export default (app) => createRoute(app, routesConfig);
