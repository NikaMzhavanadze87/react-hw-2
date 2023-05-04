import React from 'react';

function List(props) {
  const listItems = props.europ.map((country, index) =>
    <li key={index}>{country}</li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default List;

