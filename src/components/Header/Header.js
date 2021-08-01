import { cn } from "@bem-react/classname";

import Button from "./Button";
import StudentList from "./StudentList";
import "./Header.scss";

export const cnHeader = cn("Header");

const Header = ({users}) => {
  return (
    <>
      <div className={cnHeader("")}>
        <h1>Мои ученики</h1>
        <div className={cnHeader("Pages")}>
          <div className={cnHeader("Students")}>Ученки</div>
          <div>Группы</div>
        </div>
        <div className={cnHeader("Handlers")}>
        <Button />
        <StudentList users={users} />
        </div>
        
      </div>
    </>
  );
};

export default Header;
