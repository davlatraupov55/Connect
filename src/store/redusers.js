import AsyncStorage from '@react-native-async-storage/async-storage';
import { SETRATING, SETLANG, SETREVIEWS, SETTEACHERS, SETDIVISION, SETTEACHER, NEWREVIEWS, SETNEWS, SETCOMMENT, SETSETTINGSDATA} from './actionType';
const initialState = {
    lang: '',
    divisions: [],
    news: [],
    comments: [],
    rating: [],
    teachers: [],
    alertSaveComp: '',
    teacher: [],
    headerToSettings: [],
    reviews: [
        {
            text: ''
        }
    ]
}


const LangStorage = async() =>{
    const language = await AsyncStorage.getItem('lang')

        initialState.lang = language;

}

export const mainReducer = (state = initialState, action) => {

LangStorage();


    switch (action.type) {

         case SETREVIEWS :
            return{
                ...state, reviews: action.payload
            };

            case SETSETTINGSDATA :
                state.headerToSettings = action.payload
                return{
                    ...state
                };

            case SETNEWS :
                return{
                    ...state, news: action.payload
                };

                case SETCOMMENT :
                    return{
                        ...state, 
                        comments: action.payload
                    };



                case NEWREVIEWS :
                    const text = action.payload;
                    const id_worker = action.id;
                    const id_student= 2;
     
    const a = {
          id_worker: id_worker,
        id_student: id_student,
        text: text,
    }
    state.reviews.unshift(a)  
                    return{
                        ...state, 
                        ...state.reviews
                    };




                   case SETDIVISION :
           
     return{
         ...state, divisions: action.payload
     };
     case SETTEACHERS :
           
        return{
            ...state, teachers: action.payload
        };
        case SETTEACHER :
           
            return{
                ...state, teacher: action.payload
            };

            case SETLANG :
console.log(action.payload)
                state.lang = action.payload;
                return{
                    ...state
                }; 


            
              case SETRATING :
    console.log(state.rating);
    state.rating.push(action.payload)
    return{
        ...state,
        ...state.rating,
        rating: state.rating
    }  
                    
                default: 
                return state;
}
}