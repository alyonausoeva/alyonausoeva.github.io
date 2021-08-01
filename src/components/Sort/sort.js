const getSortedData = (sortField, rows, sort, setRows, setSort) => {
  const clonedRows = rows.concat();
  let orderedRows;
  if (sort) {
    orderedRows = clonedRows.sort((a, b) => {
      return a[sortField] > b[sortField] ? 1 : -1;
    });
  } else {
    orderedRows = clonedRows.sort((a, b) => {
      return a[sortField] < b[sortField] ? 1 : -1;
    });
  }
  setRows(orderedRows);
  setSort(!sort);
};
export default getSortedData;
