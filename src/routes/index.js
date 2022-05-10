import initRouter from './router';

const routeSwitch = initRouter({});

export const routing = async (ctx) => {
  await routeSwitch(ctx.pathname, ctx);
};
