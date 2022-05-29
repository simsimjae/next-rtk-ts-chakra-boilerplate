import { isEmpty } from 'lodash';
import { useMemo } from 'react';

const useLoading = (datas?: any[]) => {
  const isLoading = useMemo(() => {
    if (isEmpty(datas)) return true;
    return (
      datas.filter(data => {
        if (typeof data === 'boolean') return data === false;
        else return isEmpty(data);
      }).length > 0
    );
  }, [datas]);

  return isLoading;
};

export default useLoading;
