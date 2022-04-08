import {urls} from "../Configs/Configs";
import {axiosService} from "./axiosService";

export const postService ={
    getPostsById:(id) => axiosService.get(`${urls.users}/${id}/posts`)
}
//const getCommentsById = (id) => {
//    return fetch(`${urls.users}/${id}/posts`)
 //       .then(value => value.json());
//};