const paginator = (filtredRows, currentPage, rowsPerPage) => {
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filtredRows.slice(indexOfFirstRow, indexOfLastRow);

  return currentRows;
};

export default paginator;
