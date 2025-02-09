import PropTypes from "prop-types";
import search_icon from "/public/search.svg";
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        {/* search-logo */}
        <img src={search_icon} alt="Search" />

        {/* search-input-field */}
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.string,
};
