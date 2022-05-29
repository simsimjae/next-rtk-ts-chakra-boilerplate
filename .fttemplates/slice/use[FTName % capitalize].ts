import useReduxStore from '../../useStore';
import <FTName | capitalize>Model from './<FTName | capitalize>Model';
import { delete<FTName | capitalize>, get<FTName | capitalize>s, get<FTName | capitalize>, update<FTName | capitalize>, post<FTName | capitalize> } from './<FTName>Actions';
import { <FTName>EntityAdapter } from './<FTName>Slice';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

const use<FTName | capitalize> = () => {
  const { state, dispatch } = useReduxStore();
  const isLoading = state.<FTName>.isLoading;
  const selectors = <FTName>EntityAdapter.getSelectors((state: RootState) => state.<FTName>);
  const selectAll = useCallback(() => useSelector(selectors.selectAll), []);
  const selectById = useCallback((id: string) => useSelector((state: RootState) => selectors.selectById(state, id)), []);
  const selectEntities = useCallback(() => useSelector(selectors.selectEntities), []);
  const selectIds = useCallback(() => useSelector(selectors.selectIds), []);
  const selectTotal = useCallback(() => useSelector(selectors.selectTotal), []);

  const dispatchPost = useCallback((<FTName>: <FTName | capitalize>Model) => dispatch(post<FTName | capitalize>(<FTName>)), []);
  const dispatchGet = useCallback((id: string) => dispatch(get<FTName | capitalize>(id)), []);
  const dispatchGets = useCallback(() => dispatch(get<FTName | capitalize>s()), []);
  const dispatchUpdate = useCallback((id: string, changes: Partial<<FTName | capitalize>Model>) => dispatch(update<FTName | capitalize>({ id, changes })), []);
  const dispatchDelete = useCallback((id: string) => dispatch(delete<FTName | capitalize>(id)), []);
  const dispatchPostImage = useCallback((file: File) => dispatchPostImage(file), []);

  return { state, isLoading, dispatchPost, dispatchGet, dispatchGets, dispatchUpdate, dispatchDelete, dispatchPostImage, selectAll, selectById, selectEntities, selectIds, selectTotal };
};

export default use<FTName | capitalize>;
