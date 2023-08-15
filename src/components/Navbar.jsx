import React from "react";
import { Logo, Search, Store } from "../assets/images/index";

const navListItem = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "Tv & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

function Navbar() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
          {navListItem.map((item) => (
            <li>
              <a className="link-styled">{item}</a>
            </li>
          ))}
          <li>
            <img src={Search} alt="Search" />
          </li>
          <li>
            <img src={Store} alt="Apple" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
