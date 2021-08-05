import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import IAlbum from '../../../models/IAlbum';
import {IState} from '../../../models/IState';
import AlbumListItem from '../../molecules/AlbumListItem';
import LoadingItem from '../../atoms/LoadingItem';

import {useDispatch, useSelector} from 'react-redux';
import {fetchAlbums} from '../../../store/actions/Albums';
import {updateCurrentAlbum} from '../../../store/actions/AlbumDetails';

const AlbumList: React.FC = ({}) => {
  const albums = useSelector((state: IState) => state.Albums.albums);
  const dispatch = useDispatch();

  const onAlbumClick = (album: IAlbum) => {
    dispatch(updateCurrentAlbum(album));
  };

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <View>
      {albums.length > 0 ? (
        <FlatList
          data={albums}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onAlbumClick(item)}>
              <AlbumListItem album={item} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <>
          <LoadingItem />
        </>
      )}
    </View>
  );
};

export default AlbumList;
