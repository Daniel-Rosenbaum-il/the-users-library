import React from "react";
import { UserPreview } from "./UserPreview";

export const UsersList = ({ users, deleteUser, handleUserEditOrAdd }) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <UserPreview
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          handleUserEditOrAdd={handleUserEditOrAdd}
        />
      ))}
    </div>
  );
};
