import { createStore } from "redux";
import { mainReducer } from "./redusers";

export const store = createStore(mainReducer);