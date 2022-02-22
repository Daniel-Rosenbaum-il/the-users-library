import axios from "axios";
import { storageService } from "./async-storage.service";
import { utilService } from "./util.service";

export const usersService = {
  getUsers,
  removeUser,
  getEmptyUser,
  addUser,
  updateUser,
};

async function getUsers() {
  try {
    let users = await storageService.query("users");
    if (!users || users.length === 0) {
      users = await axios.get("https://randomuser.me/api/?results=10");
      //not all users have an id, so to fix the issue i made a new id by 'makeId' function

      users = users.data.results.map((user) => {
        let userTemplate = getEmptyUser();
        return {
          ...userTemplate,
          id: user.id.value ? user.id.value : utilService.makeId(),
          title: user.name.title,
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
          country: user.location.country,
          city: user.location.city,
          streetNumber: user.location.street.number,
          streetName: user.location.street.name,
          userPicture: user.picture.medium,
        };
      });
      storageService.save("users", users);
      return users;
    }
    return users;
  } catch (err) {
    throw err;
  }
}
async function addUser(userToAdd) {
  try {
    const newUser = await storageService.post("users", userToAdd);
    return newUser;
  } catch (err) {
    throw err;
  }
}

async function updateUser(userToUpdate) {
  try {
    const updatedUser = await storageService.put("users", userToUpdate);
    return updatedUser;
  } catch (err) {
    throw err;
  }
}

async function removeUser(userId) {
  try {
    await storageService.remove("users", userId);
  } catch (err) {
    throw err;
  }
}

function getEmptyUser() {
  return {
    id: "",
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    streetNumber: "",
    streetName: "",
    userPicture: "",
  };
}
