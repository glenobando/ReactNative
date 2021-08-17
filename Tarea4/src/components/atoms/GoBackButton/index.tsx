import React, {useContext} from 'react';
import {Button} from 'react-native';
import {useHistory} from 'react-router-native';
import {AlbumsContext} from '../../../contexts/albums-context';

const GoBackButton = () => {
  const {updateCurrentAlbum} = useContext(AlbumsContext);
  const history = useHistory();
  return (
    <Button
      title="Back"
      onPress={() => {
        updateCurrentAlbum(null);
        history.goBack();
      }}
    />
  );
};

export default GoBackButton;
