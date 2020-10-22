import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

const useStore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const rootState = useSelector((state: RootState) => state);

  return { rootState, dispatch };
};

export default useStore;
