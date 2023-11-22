import React from "react";
import { useGlobalContext } from "./Context";

function Search() {
  const { input, setInput, isError } = useGlobalContext();

  return (
    <>
      <section className="search-section">
        <h2 className="heading">Search your favourite movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              autoFocus
              placeholder="search any movie here..."
              // value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
}

export default Search;
