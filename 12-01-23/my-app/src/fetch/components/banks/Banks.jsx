import { useFetch } from '../../hooks/use-fetch';
import { ENDPOINTS } from '../../constants/endpoints';

export function Banks() {

  const {data, error, loading, refetch} = useFetch(ENDPOINTS.BANKS);

  if (loading) return `Loading...`;

  if (error) return `Error!`;

  return (<section>
    <h1>Banking data:</h1>
      <ul>
        <li>
        <h3>Account number: {data?.account_number}</h3>
        </li>
        <li>
        <h3>IBAN: {data?.iban}</h3>
        </li>
        <li>
        <h3>Bank name: {data?.bank_name}</h3>
        </li>
      </ul>
    <button onClick = {refetch}>Refetch!</button>
  </section>
  );
};
