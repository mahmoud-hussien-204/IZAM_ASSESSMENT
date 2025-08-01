import { useSearchParams } from 'react-router';

import { getFilterValue } from '../utils/url.utils';

const useURLFilters = () => {
  const [searchParams, setSearchParamsMethod] = useSearchParams();

  const statusSearchParams = getFilterValue(searchParams.get('status'));

  const roleSearchParams = getFilterValue(searchParams.get('role'));

  const pageSearchParams = getFilterValue(searchParams.get('page')) || '1';

  const sizeSearchParams = getFilterValue(searchParams.get('size')) || '10';

  const orderBySearchParams = getFilterValue(searchParams.get('orderBy'));

  const searchSearchParams = getFilterValue(searchParams.get('search'));

  const offset = (+pageSearchParams - 1) * +sizeSearchParams;

  const setSearchParams = (params: Record<string, string | boolean | number>) => {
    const newSearchParams = new URLSearchParams(searchParams);

    for (const key in params) {
      if (params[key]) {
        newSearchParams.set(key, params[key].toString());
      }
    }
    setSearchParamsMethod(newSearchParams);
  };

  return {
    statusSearchParams,
    roleSearchParams,
    pageSearchParams,
    sizeSearchParams,
    orderBySearchParams,
    searchSearchParams,
    searchParams,
    setSearchParams,
    offset,
  };
};

export default useURLFilters;
