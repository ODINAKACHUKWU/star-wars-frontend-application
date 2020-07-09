import HomePage from "../views/pages/HomePage";
import NotFoundPage from "../views/pages/NotFoundPage";

export default {
  default: [
    {
      exact: true,
      path: "/",
      component: HomePage,
    },
    {
      path: "*",
      component: NotFoundPage,
    },
  ],
};
