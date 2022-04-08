import axios from "axios";
import {baseUrls} from "../Configs/Configs";

export const axiosService = axios.create({baseUrls})