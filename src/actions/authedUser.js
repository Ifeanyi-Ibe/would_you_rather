export const SET_AUTHD_USER = 'SET_AUTHD_USER';
export const UNSET_AUTHD_USER = 'UNSET_AUTHD_USER'

export function setAuthdUser(id){
  return {
    type: SET_AUTHD_USER,
    id
  }
}

export function unsetAuthdUser () {
  return {
    type: UNSET_AUTHD_USER
  }
}