import React from 'react';

const Menu = ({ videoValues, handleClick }) => {
  return (
    <form onClick={(e) => handleClick(e.target.value)}>
      {videoValues.map((videoValue, i) => (
        <section key={i}>
          <input type="radio" name="video" value={videoValue} />
          <span>{videoValue}</span>
        </section>
      ))}
    </form>
  );
};

export default Menu;
