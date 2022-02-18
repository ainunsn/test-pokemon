import DetailPokemon from "pages/detailPokemon/DetailPokemon";
import MyPokemon from "pages/myPokemon/MyPokemon";
import Pokemon from "pages/pokemon/Pokemon";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Pokemon />,
  },
  {
    path: "/my-pokemon",
    exact: true,
    element: <MyPokemon />,
  },
  {
    path: "/pokemon/:id",
    exact: true,
    element: <DetailPokemon />,
  },
];

export default routes;
