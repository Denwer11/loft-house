import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import Mouse from "../assets/img/header/mouse.svg";

const Header = () => {
  const navList = [
    "О комплексе",
    "Район",
    "Каталог квартир",
    "Ипотека",
    "Контакты",
  ];
  return (
    <div className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-row">
            <Link to="#!">
              <img src={Logo} alt="LoftHouse" />
            </Link>
            <div className="header__nav">
              <nav className="nav">
                <ul className="nav__list">
                  {navList.map((obj, i) => {
                    return (
                      <li>
                        <Link key={i} to="#!">
                          {navList[i]}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="header__title">
          Жилой комплекс <br></br> в историческом центре
          <Link to="#benefits">
            <img
              src={Mouse}
              alt="Scroll next"
              className="header__title-icon"
            ></img>
          </Link>
        </h1>
      </div>
      <div className="header__footer">
        <div className="container">
          <Link to="#!" className="info">
            Наб. реки Фонтанки 10-15
          </Link>
          <Link to="#!" className="info">
            8 (812) 123-45-67
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
