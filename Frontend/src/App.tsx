/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container } from "./components/ui/UiComponents";
import Home from "./pages/Home";
import StatsPage from "./pages/StatPage";
import styled from "@emotion/styled";
import { FaBars } from "react-icons/fa";

// Styled components
const NavBar = styled.nav`
  background-color: #1e1e1e;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;


const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: white;
  width: 100%;
  text-align: center;

  &:hover {
    color: blue
  }
`;

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container bg="#212121" minHeight="100vh">
      <Router>
        <NavBar>
          <MenuToggle onClick={() => setMenuOpen((prev) => !prev)}>
            <FaBars />
          </MenuToggle>

          <NavLinks isOpen={menuOpen}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/stats">Statistics</NavLink>
          </NavLinks>
        </NavBar>

        <main style={{ padding: "1.5rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </main>
      </Router>
    </Container>
  );
};

export default App;
