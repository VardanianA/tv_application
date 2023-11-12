import React, { useState } from "react";
import "./MainMenu.scss";
import searchIcon from "../../assets/icons/ICON - Search.png";
import homeIcon from "../../assets/icons/Group 46.png";
import tvIcon from "../../assets/icons/Group 56.png";
import movieIcon from "../../assets/icons/Group 54.png";
import genresIcon from "../../assets/icons/Group 53.png";
import watchIcon from "../../assets/icons/Group 47.png";

const MENU = [
  { id: 1, iconName: searchIcon, name: "Search" },
  { id: 2, iconName: homeIcon, name: "Home" },
  { id: 3, iconName: tvIcon, name: "TV Shows" },
  { id: 4, iconName: movieIcon, name: "Movies" },
  { id: 5, iconName: genresIcon, name: "Genres" },
  { id: 6, iconName: watchIcon, name: "Watch Later" },
];

const MainMenu = () => {
  const [window, setWindow] = useState(false);

  return (
    <div className="mainMenu">
      <div className="mainMenu__inner">
        <nav
          className="mainMenu__navbar-menu"
          onMouseOver={() => setWindow(true)}
          onMouseOut={() => setWindow(false)}
          style={{
            width: window === true ? "312px" : "160px",
            boxShadow: window === true ? "100px 3px 200px #040404" : "none",
          }}
        >
          <div
            className="mainMenu__name"
            style={{
              display: window === true ? "block" : "none",
            }}
          >
            Daniel
          </div>
          <ul className="mainMenu__list">
            {MENU.map((item, i) => (
              <div className="mainMenu__li-box" key={i}>
                <img
                  src={item.iconName}
                  alt={item.iconName}
                  className="mainMenu__img"
                />
                <li
                  className="mainMenu__li"
                  style={{
                    display: window === true ? "inline-block" : "none",
                    color: window === true ? "white" : "none",
                  }}
                >
                  {item.name}
                </li>
              </div>
            ))}
          </ul>
          <div
            className="mainMenu__footer"
            style={{ display: window === true ? "block" : "none" }}
          >
            <div className="mainMenu__footerItem">language</div>
            <div className="mainMenu__footerItem">get help</div>
            <div className="mainMenu__footerItem">exit</div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainMenu;
