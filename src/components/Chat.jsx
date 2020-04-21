import React, { Component } from "react";
import axios from "axios";
import ListGroup from "./ListGroup";
import ChatTable from "./ChatTable";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import { getRooms } from "../services/roomApi";

class Chat extends Component {
  state = {
    chats: [],
    rooms: [],
    pageSize: 5,
    currentPage: 1,
    sortColumn: { path: "sender", order: "asc" },
  };
  async componentDidMount() {
    const response = await axios.get(
      `http://localhost:3002/api/capodicapi/chat`
    );

    const chats = response.data;
    const rooms = [{ roomname: "All Rooms" }, ...getRooms()];

    console.log(chats);
    console.log(rooms);
    this.setState({ chats, rooms: rooms });
  }
  handlePage = (page) => {
    this.setState({ currentPage: page });
  };
  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    console.log(sortColumn);
    this.setState({ sortColumn });
  };

  handleItem = (room) => {
    console.log(room);
    this.setState({ selectedRoom: room, currentPage: 1 });
  };
  render() {
    const { length: count } = this.state.chats;
    const {
      pageSize,
      currentPage,
      chats: allChats,
      sortColumn,
      selectedRoom,
    } = this.state;

    const filtered =
      selectedRoom && selectedRoom.name
        ? allChats.filter((c) => c.room == selectedRoom.name)
        : allChats;
    if (count === 0) return <p>There are no chats in database.</p>;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const chats = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row m-4">
        <div className="col-2">
          <h2 style={{ marginBottom: "20px" }}>Menu</h2>
          <ListGroup
            items={this.state.rooms}
            onItemSelect={this.handleItem}
            selectedItem={this.state.selectedRoom}
          />
        </div>
        <div className="col-10">
          <h2 style={{ paddingLeft: "20px" }}>All Chat History</h2>
          <div style={{ borderLeft: "1px solid #333", paddingLeft: "20px" }}>
            <p>There are total {count} chats.</p>
            <ChatTable chats={chats} onSort={this.handleSort} />
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
