import HomePage from "../views/pages/HomePage";
import NotFoundPage from "../views/pages/NotFoundPage";
import CharactersPage from "../views/pages/CharactersPage";
import PlanetsPage from "../views/pages/PlanetsPage";
import StarshipsPage from "../views/pages/StarshipsPage";
import CharacterDetailsPage from "../views/pages/CharacterDetailsPage";
import PlanetDetailsPage from "../views/pages/PlanetDetailsPage";
import StarshipDetailsPage from "../views/pages/StarshipDetailsPage";
import SearchResultPage from "../views/pages/SearchResultPage";

export default {
  default: [
    {
      exact: true,
      path: "/",
      component: HomePage,
    },
    {
      exact: true,
      path: "/characters",
      component: CharactersPage,
    },
    {
      exact: true,
      path: "/characters/:id",
      component: CharacterDetailsPage,
    },
    {
      exact: true,
      path: "/planets",
      component: PlanetsPage,
    },
    {
      exact: true,
      path: "/planets/:id",
      component: PlanetDetailsPage,
    },
    {
      exact: true,
      path: "/starships",
      component: StarshipsPage,
    },
    {
      exact: true,
      path: "/starships/:id",
      component: StarshipDetailsPage,
    },
    {
      exact: true,
      path: "/search",
      component: SearchResultPage,
    },
    {
      path: "*",
      component: NotFoundPage,
    },
  ],
};
