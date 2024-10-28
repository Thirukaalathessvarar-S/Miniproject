// import React from 'react'
import logo from "../alumini logo.jpg";
import styled from "styled-components";
import { MdAccountCircle } from "react-icons/md";
import { NavLink, Router } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./Navbar.css";

const Nav = styled.div`
  background-color: #323232;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1rem;
  /* position: sticky; */
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    background-color: red;
    transition: 0.8 all ease;
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  .logo1 img {
    width: 250px; /* Reduces the width */
    height: 80px; /* Reduces the height */
    border-radius: 40%; /* Adds rounded corners */
    object-fit: cover; /* Keeps the image aspect ratio */
  }
`;

const ButtonContainer = styled.div`
  font-weight: 500;
  position: relative;
  display: flex;
  margin: 20px 30px 0px;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
  width: 100px;
  height: 50px;
  
  &:hover{
    transition: 0.5s;
    transform: scale(1.1);
  }
  &:not(hover){
    transition: 0.5s;
  }
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: #520f15;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  height: 40px;
  width: 150px;
  cursor: pointer;
  &:hover {
    transition: 0.8s;
    background-color: #520f15;
    color: white;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Navbar = () => {
  return (
    <header className="header1">
      <LogoContainer>
        <div className="logo1">
          <img src={logo} alt="Alumni Logo" />
        </div>
      </LogoContainer>
      <Nav className="navbar1">
        <ul className="nav_ul">
          <NavLink className="link" to="/">
            <li className="nav_li">
              <AiFillHome style={{ fontSize: "25px" }} />
            </li>
          </NavLink>
          <NavLink className="link" to="/searchfaculty">
            <li className="nav_li">Search Faculty</li>
          </NavLink>
          <NavLink className="link" to="/searchstudent">
            <li className="nav_li">Search Students</li>
          </NavLink>
          <NavLink className="link" to="/searchalumini">
            <li className="nav_li">Search Alumni</li>
          </NavLink>
        </ul>
      </Nav>
    </header>
  );
};

export default Navbar;
