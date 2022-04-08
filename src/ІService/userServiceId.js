import {axiosService} from "./axiosService";
import {urls} from "../Configs/Configs";

export const usersServiceId ={
    getById:(id)=> axiosService.get(`${urls.users}/${id}`)
}