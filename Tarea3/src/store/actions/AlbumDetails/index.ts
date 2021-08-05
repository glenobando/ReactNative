import { UPDATE_CURRENT_ALBUM } from "..";
import IAlbum from "../../../models/IAlbum";

export const updateCurrentAlbum = (payload: IAlbum | null) => ({
    type: UPDATE_CURRENT_ALBUM,
    payload
});