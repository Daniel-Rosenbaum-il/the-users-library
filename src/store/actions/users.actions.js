import { usersService } from "../../services/users.service";

export function getUsers(searchValue) {
  return async (dispatch) => {
    try {
      const users = await usersService.getUsers(searchValue);
      dispatch({ type: "SET_USERS", users });
    } catch (err) {
      console.log("usersActions: error in getUsers", err);
      dispatch({
        type: "SET_USER_MSG",
        userMsg: "Can not get users - please try again later",
      });
    }
  };
}

export function addUser(userToAdd) {
  return async (dispatch) => {
    try {
      const newUser = await usersService.addUser(userToAdd);
      dispatch({ type: "ADD_USER", newUser });
    } catch (err) {
      dispatch({
        type: "SET_USER_MSG",
        userMsg: "Can not add user",
      });
      console.log("UsersActions: err in adding user", err);
    }
  };
}

export function updateUser(userToUpdate) {
  return async (dispatch) => {
    try {
      const updatedUser = await usersService.updateUser(userToUpdate);
      dispatch({ type: "UPDATE_USER", updatedUser });
    } catch (err) {
      dispatch({
        type: "SET_USER_MSG",
        userMsg: "Can not update user",
      });
      console.log("UsersActions: err in update user", err);
    }
  };
}

export function removeUser(userId) {
  return async (dispatch) => {
    try {
      await usersService.removeUser(userId);
      dispatch({ type: "REMOVE_USER", userId });
    } catch (err) {
      dispatch({
        type: "SET_USER_MSG",
        userMsg: "Problem in deleting user",
      });
      console.log("UsersActions: err in deleting user", err);
    }
  };
}

export function setUserMsg(msg) {
  return (dispatch) => {
    dispatch({ type: "SET_USER_MSG", userMsg: msg });
  };
}
