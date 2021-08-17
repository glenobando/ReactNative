import React, {useContext, useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import IAlbum from '../../../models/IAlbum';
import AlbumListItem from '../../molecules/AlbumListItem';
import LoadingItem from '../../atoms/LoadingItem';

import {AlbumsContext} from '../../../contexts/albums-context';
import axios from 'axios';
import IPhoto from '../../../models/IPhoto';
import {useHistory} from 'react-router-native';

const AlbumList: React.FC = ({}) => {
  const {albums, setAlbums} = useContext(AlbumsContext);
  const {updateCurrentAlbum} = useContext(AlbumsContext);
  const history = useHistory();

  const onAlbumClick = (album: IAlbum) => {
    updateCurrentAlbum(album);
    history.push('/details');
  };

  const fetchAlbums = async () => {
    try {
      const albumResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );

      const photoResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );

      const albums = (albumResponse.data as IAlbum[]).map(album => ({
        ...album,
        photo: (photoResponse.data as IPhoto[]).find(
          photo => photo.albumId === album.id,
        ),
      }));

      setAlbums(albums);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAlbums();
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
