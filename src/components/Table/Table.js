import { cn } from "@bem-react/classname";

import Loader from "../Loader/Loader";
import "./Table.scss";

export const cnTable = cn("Table");

const Table = ({ rows, loading, sortData, users }) => {
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className={cnTable("Box")}>
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th
                onClick={() => {
                  sortData("title");
                }}
              >
                Название урока
              </th>
              <th
                onClick={() => {
                  sortData("quantity");
                }}
                style={{ cursor: "pointer" }}
              >
                Упражнений в уроке
              </th>
              <th
                onClick={() => {
                  sortData("distance");
                }}
                style={{ cursor: "pointer" }}
              >
                Упражнений выполнено
              </th>
              <th
                onClick={() => {
                  sortData("distance");
                }}
                style={{ cursor: "pointer" }}
              >
                Ошибок
              </th>
              <th
                onClick={() => {
                  sortData("distance");
                }}
                style={{ cursor: "pointer" }}
              >
                Неточности
              </th>
              <th
                onClick={() => {
                  sortData("distance");
                }}
                style={{ cursor: "pointer" }}
              >
                Потраченно время
              </th>
              <th
                onClick={() => {
                  sortData("distance");
                }}
                style={{ cursor: "pointer" }}
              >
                Заработано террикоинов
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => {
              return (
                <tr key={item.issue}>
                  <td>{item.issue}</td>
                  <td> {item.class}</td>
                  <td>{item.classesNumber}</td>
                  <td>{item.success}</td>
                  <td>{item.errors}</td>
                  <td>{item.innacur}</td>
                  <td>{item.timeSpent}</td>
                  <td>{item.terrGot}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
