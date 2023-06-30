import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Add your header content here */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/tv-shows">TV Shows</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

