import React from "react";

const ChatTable = (props) => {
  const { chats, onSort } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("sender")}>Sender</th>
          <th onClick={() => onSort("message")}>Message</th>
          <th onClick={() => onSort("room")}>Room</th>
          <th onClick={() => onSort("date")}>Date</th>
        </tr>
      </thead>
      <tbody>
        {chats.map((chat, index) => (
          <tr key={chat._id}>
            <td>{chat.sender}</td>
            <td>{chat.message}</td>
            <td>{chat.room}</td>
            <td>{chat.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ChatTable;
