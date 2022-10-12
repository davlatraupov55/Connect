import {SETMIDDLE, SETCOUNT, SETFEEDBACK, SETTEACHERS, SETLANG, SETSETTINGSDATA} from './actionType';

export const setmiddle = () => ({
    type: SETMIDDLE,
    pyload: ''
});

export const setLang = () => ({
    type: SETLANG,
    pyload: ''
});

export const setcount = () => ({
    type: SETCOUNT,
});
export const setfeedback = () => ({
    type: SETFEEDBACK,
    payload: ''
});
export const setteachers = () => ({
    type: SETTEACHERS,
    payload: '',
    id: ''
});
export const setsettingsdata = () => ({
    type: SETSETTINGSDATA,
    payload: '',
});

