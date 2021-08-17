import React, {useContext} from 'react';
import {View} from 'react-native';
import {AlbumsContext} from '../../../contexts/albums-context';
import AlbumDetails from '../../molecules/AlbumDetails';
import AlbumList from '../../organisms/AlbumList';

const HomeScreen: React.FC = () => {
  const {currentAlbum} = useContext(AlbumsContext);
  return <View>{currentAlbum ? <AlbumDetails /> : <AlbumList />}</View>;
};

export default HomeScreen;
