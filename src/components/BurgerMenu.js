import { slide as Menu } from "react-burger-menu";
import React from "react";

function BurgerMenu() {
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <div className="div_burger">
      <Menu>
        <a class="navbar__item" href="#home">
          Home
        </a>

        <a class="navbar__item" href="#about">
          About
        </a>

        <a class="navbar__item" href="#portfolio">
          Porfolio
        </a>

        <a class="navbar__item" href="#contact">
          Contact
        </a>

        <a onClick={showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
