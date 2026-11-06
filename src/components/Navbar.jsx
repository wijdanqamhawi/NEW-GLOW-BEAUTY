
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const { token, setToken } = useContext(AuthContext);

  const Logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#33232B",
        boxShadow: "none",
        borderBottom: "1px solid #F4E8ED",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/home"
          sx={{
            textDecoration: "none",
            color: "#B85C83",
            fontWeight: 700,
          }}
        >
          Glow Beauty
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/categories">
            Categories
          </Button>

          <Button color="inherit" component={Link} to="/products">
            All Products
          </Button>

          {token ? (
            <>
              <Button color="inherit" component={Link} to="/cart">
                Cart
              </Button>

              <Button color="inherit" component={Link} to="/profile">
                Profile
              </Button>

              <Button color="inherit" onClick={Logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>

              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
