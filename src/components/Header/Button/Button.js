import { cnHeader } from "../Header";
import "./Button.scss";

const Button = () => {
  return (
    <div className={cnHeader("Buttons")}>
      <div className={cnHeader("Button", { color: "blue" })}>
        <img
          className={cnHeader("Icon")}
          src={require("./assets/blue-plus.svg").default}
          alt="bluePlus"
        />
        <div>Добавить ученика</div>
      </div>
      <div className={cnHeader("Button", { color: "pink" })}>
        <img
          className={cnHeader("Icon")}
          src={require("./assets/pink-plus.svg").default}
          alt="bluePlus"
        />
        <div>Добавить ученика</div>
      </div>
    </div>
  );
};

export default Button;
