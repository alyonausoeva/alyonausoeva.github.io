import { cnHeader } from "../Header";
import "./StudentList.scss";

const StudentList = ({ users }) => {
  users = Array.from(users);
  return (
    <div className={cnHeader("StudentList")}>
      {users.map((user, index) => {
        return (
          <div className={cnHeader("Student")} key={user + index}>
            <img
              className={cnHeader("StudentIcon")}
              src={require("./assets/user.svg").default}
              alt="user"
            />
            <div>{user}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentList;
