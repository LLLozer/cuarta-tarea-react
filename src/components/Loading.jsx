import giphy from "../assets/giphy.gif";

export const Loading = () => {
  return (
    <>
      <h1>Cargando...</h1>
      <img src={giphy} />
    </>
  );
};
