import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "../cmps/Search";
import { UserEdit } from "../cmps/UserEdit";
import { UsersList } from "../cmps/UsersList";
import { usersService } from "../services/users.service";
import {
  addUser,
  getUsers,
  removeUser,
  setUserMsg,
  updateUser,
} from "../store/actions/users.actions";

export const Home = () => {
  const dispatch = useDispatch();
  const { users, userMsg } = useSelector((state) => state);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const deleteUser = (userId) => {
    dispatch(removeUser(userId));
  };

  const handleUserEditOrAdd = (user) => {
    setIsOpenModal(true);
    setUser(user);
  };

  const submitForm = (newUser) => {
    let validEmailIdx = users.findIndex((user) => user.email === newUser.email);
    if (validEmailIdx === -1 || newUser.id === users[validEmailIdx].id) {
      if (newUser.id) {
        dispatch(updateUser(newUser));
      } else {
        newUser.userPicture = `https://robohash.org/${newUser.email}?gravatar=yes`;
        dispatch(addUser(newUser));
      }
    } else {
      dispatch(
        setUserMsg(
          "The Email you entered is already registered, please use another"
        )
      );
      setTimeout(() => {
        dispatch(setUserMsg(""));
      }, 4000);
    }
  };

  return (
    <main className="container">
      <Search />
      <button
        className="add-btn primary"
        onClick={() => {
          handleUserEditOrAdd(usersService.getEmptyUser());
        }}
      >
        Add User
      </button>
      <UsersList
        users={users}
        deleteUser={deleteUser}
        handleUserEditOrAdd={handleUserEditOrAdd}
      />
      {isOpenModal && (
        <UserEdit
          user={user}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          submitForm={submitForm}
        />
      )}
      {userMsg && <div className="user-msg">{userMsg}</div>}
    </main>
  );
};
