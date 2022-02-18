import { imageUrl } from "constants";
import React, { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { capitalize, getIdFromUrl } from "utils";

function Pokemon(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const id = useMemo(() => getIdFromUrl(props.url), [props.url]);

  useEffect(() => {
    setLoading(true);
    fetch(imageUrl + id + ".svg")
      .then((res) => res.blob())
      .then(() => setLoading(false))
      .catch((e) => setLoading(false));
  }, [id]);

  return (
    <div className="col-6 col-lg-3 mt-4">
      <div className="pokemon-card " onClick={() => navigate(`/pokemon/${id}`)}>
        <div className="d-flex justify-content-center">
          {loading ? <p>Loading...</p> : <img src={imageUrl + id + ".svg"} />}
        </div>
        <div>
          <p className="text-center">{capitalize(props.name)}</p>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
