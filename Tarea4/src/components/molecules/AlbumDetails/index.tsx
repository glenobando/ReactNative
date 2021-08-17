import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  AlbumsContext,
  AlbumsContextProps,
} from '../../../contexts/albums-context';
import GoBackButton from '../../atoms/GoBackButton';

class AlbumDetails extends React.Component {
  static contextType = AlbumsContext;

  componentDidMount() {}

  render() {
    const albums: AlbumsContextProps = this.context;
    return (
      <View style={styles.Container}>
        <Text style={styles.CustomText}>
          {albums.currentAlbum?.id}. {albums.currentAlbum?.title}
        </Text>
        <Image
          source={{
            uri: albums.currentAlbum?.photo
              ? albums.currentAlbum?.photo.url
              : '',
          }}
          style={styles.Photo}
        />
        <GoBackButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    padding: 16,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  CustomText: {
    fontSize: 32,
  },

  Photo: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
    margin: 5,
  },
});

export default AlbumDetails;
