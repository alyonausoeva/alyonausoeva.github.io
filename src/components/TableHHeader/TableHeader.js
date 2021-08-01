import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchData } from "../../modules";
import { cnTable } from "../Table";
import "./TableHeader.scss";

const TableHeader = ({ users }) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(0);

  const handlChange = useCallback(
    (e) => {
      console.log(e.target.value);
      setCurrentUser(e.target.value);
      dispatch(fetchData(e.target.value));
    },
    [dispatch]
  );
  console.log(currentUser);
  return (
    <>
      <div className={cnTable("header")}>
        <div className={cnTable("pages")}>
          <div>Расписание</div>
          <div className={cnTable("progress")}>Успеваемость</div>
        </div>
        <div>
          <div className="d-flex flex-row">
            <label>
              <img
                className={cnTable("userIcon")}
                src={require("./assets/user.svg").default}
                alt="user"
              />
            </label>

            <select
              className={cnTable("select")}
              onChange={(value) => handlChange(value)}
            >
              {Array.from(users).map((user, index) => {
                return (
                  <option value={index} key={index}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableHeader;
