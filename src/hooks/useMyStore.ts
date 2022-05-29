import { AppDispatch } from './../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useMyStore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const rootState = useSelector((state: RootState) => state) as RootState;

  return { rootState, dispatch };
};

export default useMyStore;
