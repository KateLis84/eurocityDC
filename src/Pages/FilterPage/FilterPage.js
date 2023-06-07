import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Filters from "./Filters.js";
import Card from "../../Components/Card/Card.js";
import Pagination from "../../Components/Pagination.js";

import FlatCard from "../../Components/FlatCard/FlatCard.js";

import { HashLink as Link } from "react-router-hash-link";

export default function FilterPage() {
  window.scrollTo(0, 0);

  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(12);

  useEffect(() => {
    document.getElementById("heroEffectHeader").style.display = "none";
    document.getElementById("customHeader").className = 'header header-scroll';
  }, []);


  let selectedComplex = null;
  const location = useLocation();
  if (useLocation().state == null) {

  } else {
    selectedComplex = location.state.selectedComplex;
  }
  function setNewValues(flats) {
    setFiltered(flats);
  }

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = filtered.slice(indexOfFirstPost, indexOfLastPost);

  function paginate(PageNumber) {
    setCurrentPage(PageNumber);
  }
   

  return (
    <div className="filterPage">
      <Filters setNewValues={setNewValues} preValues={selectedComplex} />
      <div className="filterPage__list">
        {currentPost.map((el) => {
          return (
            <Link
              to={"/flat/" + el.jkID + "/" + el.id}
              style={{ all: "unset" }}
              state={{ from: "FilterPage" }}
            >
              <FlatCard
                data={el}
              />
            </Link>
          );
        })}
      </div>

      <div className="filterPage__pagination">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filtered.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
