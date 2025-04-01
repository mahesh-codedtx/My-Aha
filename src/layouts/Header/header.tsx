import "./header.css";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/icons/aha-logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { headerList } from "../../utils/header";
import AhaButton from "../../components/MyButton";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  // Function to close the nav bar when an item is clicked
  const closeNav = () => {
    setIsOpen(false);
  };
  //--AHA----
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`header-container ${
        isScrolled ? "header-scrolled" : "header-top-page"
      }`}
    >
      <div className="header-left">
        <div
          style={{ width: "58px", height: "38px" }}
          onClick={() => navigate("/")}
        >
          <img src={logo} className="cursor" style={{ width: "100%" }}></img>
        </div>
        <ul className="header-list">
          {headerList.map((header, index) => {
            return (
              <>
                <li
                  key={index}
                  className="cursor flex"
                  style={{ gap: "5px" }}
                  onClick={() => navigate(header.pageLink)}
                >
                  {header.title}
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="header-right">
        <IoIosSearch size={24} className="cursor" />
        <select className="header-drop-down-list cursor">
          <option className="drop-down-option">Telugu</option>
        </select>
        <AhaButton
          btntext={"Subscribe Now"}
          bgColor={"orange"}
          className={""}
        />
        <div className="flex sign-in-div cursor">
          <img
            src="https://www.aha.video/user-icon.a6b5f30360c95e43.svg"
            style={{
              background: "#383b41",
              borderRadius: "50%",
              width: "25px",
              padding: "1px",
            }}
          />

          <p className="sign-in-text">Sign In</p>
        </div>
      </div>
      <div className="header-menu-icon">
        <div
          className={`menu-icon ${isOpen ? "icon-move" : ""}`}
          onClick={toggleNav}
        >
          {isOpen ? "✖" : "☰"}
        </div>
        <div className={`side-nav ${isOpen ? "open" : ""}`}>
          <ul className="header-list-side">
            {headerList.map((header, index) => {
              return (
                <>
                  <li
                    key={index}
                    className="cursor flex"
                    style={{ gap: "5px" }}
                    onClick={() => {
                      navigate(header.pageLink);
                      closeNav();
                    }}
                  >
                    {header.title}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Header;
