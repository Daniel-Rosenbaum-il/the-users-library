import React, { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
export const Search = () => {
  const [filterBy, setFilterBy] = useState("id");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const searchRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const setSelectedFilter = (filter) => {
    setFilterBy(filter);
    setIsFilterModalOpen(!isFilterModalOpen);
  };
  return (
    <div className="search">
      <div className="search-field">
        <form onSubmit={handleSubmit}>
          <BiSearch />
          <label htmlFor="search"></label>
          <input
            ref={searchRef}
            type="text"
            className="search-input"
            placeholder="Search..."
          />
          <div className="border"></div>
          <div
            className="filter-selection"
            onClick={() => {
              setIsFilterModalOpen(!isFilterModalOpen);
            }}
          >
            {filterBy} <BsArrowDownShort />
          </div>
          {isFilterModalOpen && (
            <div className="filter-modal">
              <p onClick={() => setSelectedFilter("id")}>Id</p>
              <p onClick={() => setSelectedFilter("name")}>Name</p>
              <p onClick={() => setSelectedFilter("email")}>Email</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
