import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { UPDATE_ALBUMS } from "..";
import { IAction } from "../../../models/IAction";
import IAlbum from "../../../models/IAlbum";
import IPhoto from "../../../models/IPhoto";
import { IState } from "../../../models/IState";

export const updateAlbums = (payload: IAlbum[]) => ({
    type: UPDATE_ALBUMS,
    payload
});

export const fetchAlbums = () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
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
        dispatch(updateAlbums(albums));
  
      } catch (error) {
        console.error(error);
      }
}