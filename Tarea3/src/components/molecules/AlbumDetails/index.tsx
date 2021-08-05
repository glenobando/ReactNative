import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {IAction} from '../../../models/IAction';
import IAlbum from '../../../models/IAlbum';
import {IState} from '../../../models/IState';
import {updateCurrentAlbum} from '../../../store/actions/AlbumDetails';

interface Props {
  album: IAlbum | null;
  updateCurrentAlbumProp: (album: IAlbum | null) => void;
}

class AlbumDetails extends React.Component<Props> {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.CustomText}>
          {this.props.album?.id}. {this.props.album?.title}
        </Text>
        <Image
          source={{
            uri: this.props.album?.photo ? this.props.album?.photo.url : '',
          }}
          style={styles.Photo}
        />
        <Button
          title="Back"
          onPress={() => this.props.updateCurrentAlbumProp(null)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    album: state.Albums.currentAlbum,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, null, IAction>) => {
  return {
    updateCurrentAlbumProp: (album: IAlbum | null) =>
      dispatch(updateCurrentAlbum(album)),
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetails);
