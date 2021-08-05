import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import AlbumDetails from '../../molecules/AlbumDetails';
import AlbumList from '../../organisms/AlbumList';

const HomeScreen: React.FC = () => {
  const currentAlbum = useSelector(
    (state: IState) => state.Albums.currentAlbum,
  );
  return <View>{currentAlbum ? <AlbumDetails /> : <AlbumList />}</View>;
};

export default HomeScreen;
