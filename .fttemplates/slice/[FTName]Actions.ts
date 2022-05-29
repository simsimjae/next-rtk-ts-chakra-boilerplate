import { createAsyncThunk } from '@reduxjs/toolkit';
import { uid } from 'uid';
import firebaseApp from '../../../config/firebaseConfig';
import <FTName | capitalize>Model from './<FTName | capitalize>Model';
import { instanceToPlain } from 'class-transformer';

export const post<FTName | capitalize> = createAsyncThunk('<FTName>Slice/post', async (<FTName>: <FTName | capitalize>Model, { rejectWithValue }) => {
  const data = instanceToPlain(<FTName>) as <FTName | capitalize>Model;
  await firebaseApp.firestore().collection('<FTName>s').doc(<FTName>.id).set(data);
  return data;
});

export const get<FTName | capitalize> = createAsyncThunk('<FTName>Slice/get', async (<FTName>Id: string, { rejectWithValue }) => {
  if (!<FTName>Id) return rejectWithValue('There is No <FTName> ID');
  const collection = firebaseApp.firestore().collection('<FTName>s');
  return (await collection.doc(<FTName>Id).get()).data() as <FTName | capitalize>Model;
});

export const get<FTName | capitalize>s = createAsyncThunk('<FTName>Slice/gets', async (_, { rejectWithValue }) => {
  return (await firebaseApp.firestore().collection('<FTName>s').get()).docs.map((doc) => doc.data()) as <FTName | capitalize>Model[];
});

export const update<FTName | capitalize> = createAsyncThunk('<FTName>Slice/update', async ({ id, changes }: { id: string; changes: Partial<<FTName | capitalize>Model> }, { rejectWithValue }) => {
  await firebaseApp.firestore().collection('<FTName>s').doc(id).update(changes);
  return { id, changes };
});


export const delete<FTName | capitalize> = createAsyncThunk('<FTName>Slice/delete', async (id: string, { rejectWithValue }) => {
  await firebaseApp.firestore().collection('<FTName>s').doc(id).delete();
  return id;
});

export const post<FTName | capitalize>Image = createAsyncThunk('<FTName>Slice/postImage', async ({ <FTName>Id, file }: { <FTName>Id: string; file: File }) => {
  const storageRef = firebaseApp.storage().ref(`/images/<FTName>s/${<FTName>Id}/${uid(25)}`);
  await storageRef.put(file);
  return (await storageRef.getDownloadURL()) as string;
});
