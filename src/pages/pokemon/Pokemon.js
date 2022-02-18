import Banner from "components/banner/Banner";
import LoadingPage from "components/loading/LoadingPage";
import Pagination from "components/pagination/Pagination";
import ListPokemon from "components/pokemon/ListPokemon";
import useQuery from "hooks/useQuery";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { capitalize } from "utils";

function Pokemon(props) {
  const query = useQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const perPage = 10;

  const s = useSelector(({ reducer }) => reducer);

  const onPageChange = (page) => {
    navigate(`?page=${page}`);
  };

  useEffect(() => {
    let offset = (Number(page) - 1) * 10;
    dispatch({ type: "FETCH_POKEMON_REQUESTED", offset });
  }, [page]);

  return (
    <>
      {s.pokemon.loading && <LoadingPage />}
      <Banner />
      <div className="pokemon-main">
        <div className="total-pokemon">
          <p>Total of pokemon are {s.pokemon.data?.count || 0}</p>
        </div>
        <ListPokemon pokemon={s.pokemon.data.results || []} />
        <div className="pokemon-pagination">
          <Pagination
            page={Number(page)}
            perPage={perPage}
            onPageChange={onPageChange}
            totalData={s.pokemon.data?.count || 0}
          />
        </div>
      </div>
    </>
  );
}

export default Pokemon;
