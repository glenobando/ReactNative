import { IAction } from "../../../models/IAction"
import IAlbum from "../../../models/IAlbum"
import { UPDATE_ALBUMS, UPDATE_CURRENT_ALBUM } from "../../actions";

export interface IAlbumsState{
    albums: IAlbum[];
    currentAlbum: IAlbum;
}

const initialState = {
    albums: [],
    currentAlbum: null
};

export default (state = initialState, { type, payload }: IAction) => {
    switch (type) {
        case UPDATE_ALBUMS:
            return {...state, albums: payload};
        case UPDATE_CURRENT_ALBUM:
            return {...state, currentAlbum: payload};
        default:
        return state
    }
}
