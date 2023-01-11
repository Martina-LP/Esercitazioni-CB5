import { useFetch } from '../../hooks/use-fetch';
import { ENDPOINTS } from '../../constants/endpoints';

export function CreditCards() {

  const {data, error, loading, refetch} = useFetch(ENDPOINTS.CREDIT_CARDS);

  if (loading) return `Loading...`;

  if (error) return `Error!`;

  return (<section>
    <h1>Credit card:</h1>
      <ul>
        <li>
        <h3>Type: {data?.credit_card_type}</h3>
        </li>
        <li>
        <h3>Number: {data?.credit_card_number}</h3>
        </li>
        <li>
        <h3>Expiry date: {data?.credit_card_expiry_date}</h3>
        </li>
      </ul>
    <button onClick = {refetch}>Refetch!</button>
  </section>
  )
};
