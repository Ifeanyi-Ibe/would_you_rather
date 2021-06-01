import { SET_AUTHD_USER, UNSET_AUTHD_USER } from '../actions/authedUser'

export default function authedUser(state=null, action){
    switch (action.type){
        case SET_AUTHD_USER:
            return action.id;
        case UNSET_AUTHD_USER :
            return null;
          default :
            return state
    }
}