import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";

export const CharacterInfo = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const { state } = useFetch(count);
  const { data, isLoading } = state;

  return (
    <>
      <h1 className="d-flex justify-content-center">Los simpsons API</h1>
      <h2 className="d-flex justify-content-center">Personajes</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="border border-3">
            <h3 className="d-flex justify-content-center">{data?.name}</h3>
            <img
              className="mx-auto d-block"
              src={`https://cdn.thesimpsonsapi.com/500${data?.portrait_path}`}
              alt="img"
            />
            <br />
            <p className="text-center">{data?.description}</p>
          </div>
        </>
      )}
      <br />
      <button onClick={() => handleIncrement(1)} disabled={isLoading}>
        Siguiente
      </button>
      <br />
      <button
        onClick={() => handleDecrement(1)}
        disabled={count == 1 || isLoading}
      >
        Anterior
      </button>
    </>
  );
};
