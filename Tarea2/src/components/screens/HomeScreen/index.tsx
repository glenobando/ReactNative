import React, { useState } from 'react'
import { View } from 'react-native'
import IAlbum from '../../../models/IAlbum'
import AlbumDetails from '../../molecules/AlbumDetails'
import AlbumList from '../../organisms/AlbumList'

const HomeScreen: React.FC = () => {
    const [currentAlbum, setCurrentAlbum] = useState<IAlbum | null>(null);

    return (
        <View>
            {currentAlbum ? ( 
                <AlbumDetails album={currentAlbum} setCurrentAlbum={setCurrentAlbum}/>) : 
                (<AlbumList 
                setCurrentAlbum={setCurrentAlbum}
                />)
                }
        </View>
    )
}

export default HomeScreen
