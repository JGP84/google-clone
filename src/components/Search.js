import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../datalayer/StateProvider";

function Search({ hideButtons = false }) {
  const [state, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault(); // stop refresh page
    dispatch({
      type: "SET_SEARCH_TERM",
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          placeholder="Search Google or type a URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
       {/* Microphone Icon */}
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGZpbGw9IiM0Mjg1RjQiIGQ9Ik0xMiAxNWMxLjY2IDAgMi45OS0xLjM0IDIuOTktM0wxNSA1YzAtMS42Ni0xLjM0LTMtMy0zUzkgMy4zNCA5IDV2N2MwIDEuNjYgMS4zNCAzIDMgM3oiLz48cGF0aCBmaWxsPSIjMzRBODUzIiBkPSJNMTEgMTguOTJoMlYyMmgtMnoiLz48cGF0aCBmaWxsPSIjRjRCNDAwIiBkPSJNNyAxMkg1YzAgMS45My43OCAzLjY4IDIuMDUgNC45NWwxLjQxLTEuNDFDNy41NiAxNC42MyA3IDEzLjM4IDcgMTJ6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTEyIDE3Yy0xLjM4IDAtMi42My0uNTYtMy41NC0xLjQ3bC0xLjQxIDEuNDFBNi45OSA2Ljk5IDAgMCAwIDEyLjAxIDE5YzMuODcgMCA2Ljk4LTMuMTQgNi45OC03aC0yYzAgMi43Ni0yLjIzIDUtNC45OSA1eiIvPjwvc3ZnPg=="
          alt=""
        />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
