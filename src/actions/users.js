export const ACCEPT_USERS = 'ACCEPT_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION';

export function acceptUsers(users){
    return{
        type: ACCEPT_USERS,
        users
    }
}

export function addUserQuestion (authedUser, qid) {
    return {
      type: ADD_USER_QUESTION,
      authedUser,
      qid
    }
  }

export function saveUserAnswer (auth, qid, option) {
  return {
    type: USER_ANSWER_QUESTION,
    auth,
    qid,
    option
  }
}