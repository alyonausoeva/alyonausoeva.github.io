import React from "react";

const getFiltredRows = (searchText, columnTitle, condition, rows) => {
  if (searchText && columnTitle && condition) {
    return rows.filter((item) => {
      if (condition === "equal") {
        return item[columnTitle].toString() === searchText;
      }
      if (condition === "less") {
        return item[columnTitle] < searchText;
      }
      if (condition === "greater") {
        return item[columnTitle] > searchText;
      }
      if (condition === "contain") {
        return item[columnTitle]
          .toLowerCase()
          .includes(searchText.toLowerCase());
      }
      return <h2> Записи отсутсвуют </h2>;
    });
  }
  return rows;
};

export default getFiltredRows;
