import IAlbum from "./IAlbum";

export interface IAction {
    type: string;
    payload?: IAlbum[] | IAlbum | null;
}