import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

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
                <ul>
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
      <div className="header__title">
        <div className="container">TITLE</div>
      </div>
      <div className="header__footer">
        <div className="container">ADDRESS</div>
      </div>
    </div>
  );
};

export default Header;
