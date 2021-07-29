import React, { useEffect, useState } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import axios from 'axios';
import IAlbum from '../../../models/IAlbum';
import IPhoto from '../../../models/IPhoto';
import AlbumListItem from '../../molecules/AlbumListItem';
import LoadingItem from '../../atoms/LoadingItem';

export interface AlbumListProps{
    setCurrentAlbum: React.Dispatch<React.SetStateAction<IAlbum | null>>;
}

const AlbumList: React.FC<AlbumListProps> = ({setCurrentAlbum}) => {
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const fetchAlbums = async () => {
        try{
            const albumResponse = await axios.get(
                'https://jsonplaceholder.typicode.com/albums'
            );

            const photoResponse = await axios.get(
                'https://jsonplaceholder.typicode.com/photos'
            );

            const albums = (albumResponse.data as IAlbum[]).map(album => ({
                ...album,
                photo: (photoResponse.data as IPhoto[]).find(photo => photo.albumId === album.id)
            }));

            //console.log(data);
            setAlbums(albums);
        } catch (error) {
            console.error(error)
        }
    };

    const onAlbumClick = (album: IAlbum) => {
        setCurrentAlbum(album);
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    return (
        <View>
            {albums.length > 0 ?
            <FlatList
                data={albums}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => onAlbumClick(item)}>
                        <AlbumListItem album={item}/>
                     </TouchableOpacity>
                )}
            /> : <>
                <LoadingItem/>
            </>}
        </View>
    )
}

export default AlbumList
