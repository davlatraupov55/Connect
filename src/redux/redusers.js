import { setAccountInformation, setUserInformation, setPost, AddComment, setToken, isLoaded, commentCounter, setStickyTable, setNewRating, setDepartament, getTeachers } from './actionType';


const initialState = {
    userInformation: {"INN": null, "PNFL": null, "birthday": null, "citizenship": null, "group": {"course": 0, "title": "0"}, "n_contract": null, "name": "name", "passport": "passport", "patronymic": "patronymic", "place_birthday": null, "surname": "surname", "year_finish": null, "year_start": null},
    accountInformation: {"base_id": 0, "id": 0, "img": "n", "login": "davlatraupov", "profile_id": null},
    posts: [{"comment": 0, "date": "01.01.2020", "department": {"id": 0, "img": "n", "title": "ТС"}, "id": 7, "img": "n", "shorts": "shorts", "text": "text", "title": "title" }],
    comments: [{"comment":"comment","name_first":"name","name_two":"surname","img":"n"}],
    token: '',
    stickyTable: [{"date": "2022-09-02", "day": "2", "group": "group", "month": "9", "room": "room", "subject": "subject", "time_finish": "11:40", "time_start": "10:10", "worker": {"img": "img", "name": "name", "patronymic": "patronymic", "surname": "surname"}, "year": "year"}],
    isLoaded: false,
    comment_counter: 0,
    newRating: 0,
    department: [{"id": 1, "img": "department/6/whwrs1K8jPO0AWDuD81tkRC1R7Jpv5aimAiWkiso.jpg", "title": "ТС"}],
    teachers: [{"description": "description", "img": "https://connect-gubkin.uz/storage/workers/5/e5h7XMpVQ21O8CkcHcIXVPfdvcfp7z9Pb4X9aZlA.jpg", "name": "name", "number": null, "patronymic": "patronymic", "rating": "3", "surname": "surname"}]
}


export const mainReducer = (state = initialState, action) => {

  

    switch(action.type) {
        case setAccountInformation: 
            return {
                ...state,
                accountInformation: action.payload
            }
        case setUserInformation:
            return {
                ...state,
                userInformation: action.payload,
            }
        case setPost:
            return {
                ...state,
                posts: action.payload,
            }
            case AddComment:
                return {
                    ...state,
                    comments: action.payload
                }
                case setToken:
                    return {
                        ...state,
                        token: action.payload
                    }
                    case isLoaded:
                        return {
                            ...state,
                            isLoaded: action.payload
                        }
                        case commentCounter: 
                        return{
                            ...state,
                            comment_counter: action.payload
                        }
                        case setStickyTable: 
                        return {
                            ...state,
                            stickyTable: action.payload
                        }
                        case setNewRating:
                            return{
                                ...state,
                                newRating: action.payload
                            }
                            case setDepartament:
                                return{
                                    ...state,
                                    department: action.payload
                                }
                                case getTeachers:
                                    return{
                                        ...state,
                                        teachers: action.payload
                                    }
                    

        default: 
            return state;
    }
}
