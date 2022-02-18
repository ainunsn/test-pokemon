/** @jsxImportSource @emotion/react */

function ListPokemonDetail({ title, data, Component }) {
  return (
    <>
      <p css={{ fontWeight: "bold", color: "white" }}>{title}</p>
      <div
        css={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {data &&
          data
            .slice(0, 6)
            .map((form, key) => <Component key={key} {...form} />)}
      </div>
    </>
  );
}

export default ListPokemonDetail;
