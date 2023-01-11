import { useFetch } from '../../hooks/use-fetch';
import { ENDPOINTS } from '../../constants/endpoints';

export function Beers() {

  const {data, error, loading, refetch} = useFetch(ENDPOINTS.BEERS);

  if (loading) return `Loading...`;

  if (error) return `Error!`;

  return (<section>
    <h1>Beer:</h1>
      <ul>
        <li>
        <h3>Brand: {data?.brand}</h3>
        </li>
        <li>
        <h3>Name: {data?.name}</h3>
        </li>
        <li>
        <h3>Alcohol: {data?.alcohol}</h3>
        </li>
      </ul>
    <button onClick = {refetch}>Refetch!</button>
  </section>
  );
};
