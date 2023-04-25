import { auth, provider } from "../Firebase";
import {SET_USER} from "./action_type";
export const setUser=(payload)=>({
type:SET_USER,
user:payload,
});
export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)//for the sign in pop-up
      .then((payload) => {
        
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth(){
  return(dispatch)=>{
    auth.onAuthStateChanged(async(user)=>{
      if(user){
        dispatch(setUser(user));
      }
    });
  }
}
export function signOutAPI(){
  return (dispatch)=>{
    auth.signOut().then(()=>{
      dispatch(setUser(null));
    }).catch((error)=>{
      console.log(error.nessage);
    })
  }
}
