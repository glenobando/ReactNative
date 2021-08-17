import React, {createContext, useContext, useState} from 'react';
import {Route, useHistory} from 'react-router-native';
import IAlbum from '../models/IAlbum';

export interface AlbumsContextProps {
  albums: IAlbum[];
  currentAlbum: IAlbum | null;
  setAlbums: (albums: IAlbum[]) => void;
  updateCurrentAlbum: (album: IAlbum | null) => void;
}

export const AlbumsContext = createContext<AlbumsContextProps>({
  albums: [],
  currentAlbum: null,
  setAlbums: () => {},
  updateCurrentAlbum: () => {},
});

export const AlbumsProvider: React.FC = ({children}) => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [currentAlbum, updateCurrentAlbum] = useState<IAlbum | null>(null);
  const val = {albums, currentAlbum, setAlbums, updateCurrentAlbum};
  return (
    <AlbumsContext.Provider value={val}>{children}</AlbumsContext.Provider>
  );
};

export const useAlbums = () => useContext(AlbumsContext);
