import getUserData from "../../services/users/usersData";
/**
 * check login function
 * @param {Object} stateData 
 * @return {bool} return true if loggedin,else false
 */
export default function checkLogin(state){

const userData = getUserData();
let isMatched = false;

userData.forEach((user, index)=>{
    if(user.username === state.username && user.password === state.password){
      return isMatched = true;
    }
});

return isMatched;

}