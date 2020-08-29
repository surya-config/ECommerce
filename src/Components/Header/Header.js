import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ items }, dispatch] = useStateValue();
  const [menu, setMenu] = useState(false);
  const sidebar = () => {
    setMenu(!menu);
  };
  return (
    <div id="header" className="header">
      <nav className="navbar">
        <Link to="/">
          <h3>Dapper</h3>
        </Link>
        <div className="navbar__search">
          <input type="text" placeholder="Search for products,brand etc..." />
          <SearchIcon className="navbar__searchicon" />
        </div>
        <div className="navbar__links">
          <div className="navbar__link">
            <Link to="/login">Sign In</Link>
          </div>

          <div className="navbar__link">
            <FavoriteBorderOutlinedIcon fontSize="large" />
          </div>

          <div className="navbar__link">
            <IconButton>
              <Link to="/cart">
                <ShoppingCartOutlinedIcon fontSize="large" />{" "}
              </Link>
            </IconButton>

            <span>{items?.length}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
