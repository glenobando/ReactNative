import styled from '@emotion/native';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import IAlbum from '../../../models/IAlbum';

export interface AlbumListItemProps {
  album: IAlbum;
}

const AlbumListItem: React.FC<AlbumListItemProps> = ({album}) => {
  return (
    <ItemContainer>
      <Image
        source={{uri: album.photo ? album.photo.thumbnailUrl : ''}}
        style={styles.Photo}
      />
      <ItemText>{album.title}</ItemText>
    </ItemContainer>
  );
};

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 16px;
  padding: 8px 12px;
  margin: 4px 4px;
`;

const ItemText = styled.Text`
  font-size: 16px;
`;
const styles = StyleSheet.create({
  Photo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    margin: 5,
  },
});
export default AlbumListItem;
