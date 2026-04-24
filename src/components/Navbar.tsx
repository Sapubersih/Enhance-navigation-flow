import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }: any) => ({
    marginRight: "15px",
    textDecoration: "none",
    color: isActive ? "blue" : "black",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
    </nav>
  );
};

export default Navbar;
