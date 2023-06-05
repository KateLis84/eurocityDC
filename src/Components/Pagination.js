import React from "react";
import Pagination from '@mui/material/Pagination';

export default function PaginationPage({postsPerPage, totalPosts, paginate}) {
  let pageNumber = 0;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber += 1;
  }
  

  function handleLocalChange(event, newAlignment) {
    paginate(newAlignment);
  }

  return (
    <Pagination
      count={pageNumber}
      variant="outlined"
      shape="rounded"
      onChange={handleLocalChange}
    />
  );
}