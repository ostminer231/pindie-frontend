import { useEffect, useState } from 'react';
import { getNormalizedGamesDataByCategory } from './api-utils';
import { isResponseOk } from './api-utils'; // убедитесь, что функция isResponseOk импортирована

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getNormalizedGamesDataByCategory(endpoint, category);
      setData(isResponseOk(data) ? data : []);
    }
    fetchData();
  }, [endpoint, category]);
  return data;
}
