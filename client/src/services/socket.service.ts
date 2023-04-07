import {io} from "socket.io-client";

import {baseURL} from "../constants";

export const socket = io(baseURL);
