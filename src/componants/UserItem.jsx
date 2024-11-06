import React from "react";

function UserItem({ user, onDelete }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.lastName}</td>
      <td>{user.position}</td>
      <td>
        <button onClick={() => onDelete()}>Delete</button>
      </td>
    </tr>
  );
}

export default UserItem;
