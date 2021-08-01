import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchData } from "./modules";
import { selectData } from "./modules/selectors";
import { getRows } from "./modules/api";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/getCurrentRows";
import getCurrentRows from "./components/Pagination/paginator";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./styles.scss";
import TableHeader from "./components/TableHHeader";

function App() {
  const dispatch = useDispatch();

  const [sidebarIsOpen, setSidebarIsOpen] = useState(
    window.innerWidth > 1100 ? true : false
  );

  const info = useSelector(selectData);

  let firstUser;

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrectPage] = useState(1);
  const [users, setUsers] = useState("");
  const rowsPerPage = 3;

  useEffect(() => {
    const fetchRows = async () => {
      setLoading(true);
      const res = await getRows();
      setUsers(res.map((item) => item.name));
      setRows(res[0].progress);
      info && setRows(info);
      setLoading(false);
      return res;
    };
    fetchRows();
  }, [setUsers, setRows, info, firstUser, dispatch]);

  const currentRows = getCurrentRows(
    rows,
    currentPage,
    rowsPerPage,
    setCurrectPage
  );

  const paginate = (pageNumber) => {
    setCurrectPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="App__personal-account-container">
        <Sidebar sidebarIsOpen={sidebarIsOpen} toggleOpen={setSidebarIsOpen} />
        <div
          id="content-wrapper"
          className="App__personalaccount-wrapper non-auth"
        >
          <Header users={users} />
          <TableHeader users={users} />
          <Table rows={currentRows} loading={loading} users={users} />
          <Pagination
            rowsPerPage={rowsPerPage}
            totalRows={rows.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
