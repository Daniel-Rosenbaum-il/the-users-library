import React from "react";
import { GoLocation } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";

export const UserPreview = ({ user, deleteUser, handleUserEditOrAdd }) => {
  return (
    <div className="user-preview">
      <div className="user-title">
        <img src={user.userPicture} alt="User"></img>
        <p>
          {user.title}. {user.firstName} {user.lastName}
        </p>
      </div>
      <div className="user-details">
        <p>
          <HiOutlineIdentification /> {user.id}
        </p>
        <p>
          <MdAlternateEmail /> {user.email}
        </p>
        <p>
          <GoLocation /> {user.country}, {user.city}, {user.streetNumber}{" "}
          {user.streetName}
        </p>
      </div>
      <div className="user-actions ">
        <button
          className="danger-text"
          onClick={() => {
            deleteUser(user.id);
          }}
        >
          Delete
        </button>
        <button
          className="primary-text"
          onClick={() => {
            handleUserEditOrAdd(user);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
