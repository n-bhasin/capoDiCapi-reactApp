import React, { Component } from "react";
import axios from "axios";
// import ListGroup from "./ListGroup";
import LogTable from "./LogTable";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Chat extends Component {
  state = {
    logs: [],
    pageSize: 5,
    currentPage: 1,
    sortColumn: { path: "sender", order: "asc" },
  };
  async componentDidMount() {
    const response = await axios.get(
      `https://capodicapi.herokuapp.com/api/capodicapi/log`
    );
    const logs = response.data;
    console.log(logs);
    this.setState({ logs });
  }
//http://localhost:3001/api/capodicapi/log
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
  render() {
    const { length: count } = this.state.logs;
    const { pageSize, currentPage, logs: allLogs, sortColumn } = this.state;
    if (count === 0) return <p>There are no chats in database.</p>;

    const sorted = _.orderBy(allLogs, [sortColumn.path], [sortColumn.order]);
    const logs = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row m-4">
        <div className="col-10">
          <h2 style={{ paddingLeft: "20px" }}>All Log History</h2>
          <div style={{ paddingLeft: "20px" }}>
            <p>There are total {count} logs.</p>
            <LogTable logs={logs} onSort={this.handleSort} />
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
