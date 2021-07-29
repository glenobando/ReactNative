import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import IAlbum from '../../../models/IAlbum';

export interface AlbumDetailsProps {
    album: IAlbum;
    setCurrentAlbum: React.Dispatch<React.SetStateAction<IAlbum | null>>;
}

export class AlbumDetails extends React.Component<AlbumDetailsProps> {

    constructor(props: AlbumDetailsProps) {
        super(props);

        this.state = {

        }
    }


    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.CustomText}>{this.props.album.id}. {this.props.album.title}</Text>
                <Image source={{uri: this.props.album.photo?this.props.album.photo.url:""}} style = {styles.Photo}/>
                <Button title="Back" onPress={() => this.props.setCurrentAlbum(null)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        padding: 16,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    CustomText: {
        fontSize: 32
    },

    Photo: {
        height: 300, 
        width: 300,
        resizeMode: 'contain', 
        margin: 5
    }
});

export default AlbumDetails
