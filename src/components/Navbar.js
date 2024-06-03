import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
      <Navbar
          fixed="top"
          expand="md"
          className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              {[
                { to: "/", label: "Home", icon: AiOutlineHome },
                { to: "/about", label: "About", icon: AiOutlineUser },
                { to: "/project", label: "Projects", icon: AiOutlineFundProjectionScreen },
                { to: "/resume", label: "Resume", icon: CgFileDocument },
              ].map((item, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link as={Link} to={item.to}>
                      <item.icon style={{ marginBottom: "2px" }} /> {item.label}
                    </Nav.Link>
                  </Nav.Item>
              ))}
              <Nav.Item className="fork-btn">
                <Button
                    href="https://github.com/mayank1365/portfolio"
                    target="_blank"
                    className="fork-btn-inner"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
// Path: src/components/About/About.js