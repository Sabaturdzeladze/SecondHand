import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../../context-api/Context";
import { Account } from './Account';

class Header extends Component {
  state = {};

  render() {
    return (
      <Consumer>
        {value => (
          <header id="header">
            <div className="shipping-info">
              <p>Free 2 day shipping & Return!</p>
            </div>

            <div className="headerTop">
              <div className="headerTop--search">
                <form>
                  <input
                    type="text"
                    placeholder="Search for products"
                    name="search"
                    className="search-input"
                  />
                  <button type="submit" className="search-button">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              <div className="headerTop--logo">
                <h1 className="header-heading">Second Chance</h1>
              </div>
              <div className="headerTop--account-cart">
                <div className="headerTop--account-cart__items">
                  <Account user={value.user} value={value} />
                </div>
              </div>
            </div>

            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Clothing
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div className="dropdown-menu--flexed">
                        <ul className="dropdown-menu--flexed__category">
                          <Link
                            className="dropdown-item dropdown-menu--flexed__category--title"
                            to="/products/search?gender=men&category=clothing"
                          >
                            Men
                          </Link>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=polos"
                            >
                              Polos
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=coats and outwears"
                            >
                              Coats & Outerwears
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=sweaters and hoodies"
                            >
                              Sweaters & Hoodies
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=shirts"
                            >
                              Shirts
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=Tshirts and tops"
                            >
                              T-shirts & Tops
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=jeans"
                            >
                              Jeans
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=pants"
                            >
                              Pants
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=joggers and shorts"
                            >
                              Joggers & Shorts
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=winter pants"
                            >
                              Winter Pants
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=winter_jacket"
                            >
                              Winter Jacket
                            </Link>
                          </li>
                        </ul>
                        <ul className="dropdown-menu--flexed__category">
                          <Link
                            className="dropdown-item dropdown-menu--flexed__category--title"
                            to="/products/search?gender=women&category=clothing"
                          >
                            Women
                          </Link>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=dresses and skirts"
                            >
                              Dresses & Skirts
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=coats and outwears"
                            >
                              Coats & Outerwears
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=sweaters and hoodies"
                            >
                              Sweaters & Hoodies
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=shirts"
                            >
                              Shirts
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=Tshirts and tops"
                            >
                              T-shirts & Tops
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=jeans"
                            >
                              Jeans
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=pants"
                            >
                              Pants
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=joggers and shorts"
                            >
                              Joggers & Shorts
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=winter pants"
                            >
                              Winter Pants
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=winter jackets"
                            >
                              Winter Jacket
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shoes
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div className="dropdown-menu--flexed">
                        <ul className="dropdown-menu--flexed__category">
                          <Link
                            className="dropdown-item dropdown-menu--flexed__category--title"
                            to="/products/search?gender=men&category=shoes"
                          >
                            Men
                          </Link>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=sneakers and athletics"
                            >
                              Sneakers & Athletics
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=boots"
                            >
                              Boots
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=sandals"
                            >
                              Sandals
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=flats"
                            >
                              Flats
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=men&subCategory=heels"
                            >
                              Heels
                            </Link>
                          </li>
                        </ul>
                        <ul className="dropdown-menu--flexed__category">
                          <Link
                            className="dropdown-item dropdown-menu--flexed__category--title"
                            to="/products/search?gender=women&category=shoes"
                          >
                            Women
                          </Link>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=sneakers and athletics"
                            >
                              Sneakers & Athletics
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=boots"
                            >
                              Boots
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=sandals"
                            >
                              Sandals
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=oxfords"
                            >
                              Oxfords
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/products/search?gender=women&subCategory=loafers"
                            >
                              Loafers
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Accesories
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link
                        className="dropdown-item"
                        to="/products/search?subCategory=hats"
                      >
                        Hats
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/products/search?subCategory=belts"
                      >
                        Belts
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/products/search?subCategory=sunglasses"
                      >
                        Sunglasses
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/products/search?subCategory=watches"
                      >
                        Watches
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/products/search?subCategory=jewelry"
                      >
                        Jewelry
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/products/search?subCategory=wallets"
                      >
                        Wallets
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Bags
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link
                        className="dropdown-item"
                        to="/products/search?subCategory=wallets"
                      >
                        Handbags
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/products/search?subCategory=backpacks"
                      >
                        Backpacks
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/products/search?subCategory=luggage"
                      >
                        Luggage
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/deals">
                      Sale
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/newest">
                      Newest
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        )}
      </Consumer>
    );
  }
}

export default Header;
