import { useFetch } from '../../hooks/use-fetch';
import { ENDPOINTS } from '../../constants/endpoints';

export function BloodTypes() {

  const {data, error, loading, refetch} = useFetch(ENDPOINTS.BLOOD_TYPES);

  if (loading) return `Loading...`;

  if (error) return `Error!`;

  return (<section>
    <h1>Blood Type:</h1>
      <ul>
        <li>
        <h3>ID: {data?.id}</h3>
        </li>
        <li>
        <h3>Type: {data?.type}</h3>
        </li>
        <li>
        <h3>Group: {data?.group}</h3>
        </li>
      </ul>
    <button onClick = {refetch}>Refetch!</button>
  </section>
  )
};
