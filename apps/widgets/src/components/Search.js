import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('I only run once');
  }, [term]);


  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            className="input"
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;