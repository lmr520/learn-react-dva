import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
  path: '/cust',
  title: '我的',
  component: dynamicWrapper(app,[], () => import('./components'))
});

export default (app) => createRoute(app, routesConfig);
