import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
  path: '/MuiPicker',
  title: '时间选择器',
  component: dynamicWrapper(app,[], () => import('./components'))
});

export default (app) => createRoute(app, routesConfig);
