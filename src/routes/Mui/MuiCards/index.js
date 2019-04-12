import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
  path: '/MuiCards',
  title: '卡片',
  component: dynamicWrapper(app,[], () => import('./components'))
});

export default (app) => createRoute(app, routesConfig);
