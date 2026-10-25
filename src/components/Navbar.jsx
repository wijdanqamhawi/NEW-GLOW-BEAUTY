
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

import {
  SearchOutlined,
  LightModeOutlined,
  DarkModeOutlined,
  ShoppingBagOutlined,
  KeyboardArrowDown,
  AccountCircleOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

function Navbar() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");

  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Categories", path: "/categories" },
    { label: "All Products", path: "/products" },
  ];

  const handleSearch = (event) => {
    if (event.key === "Enter" && search.trim()) {
      navigate(
        `/products?search=${encodeURIComponent(search.trim())}`
      );
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: darkMode ? "#241A23" : "#FFFFFF",
        color: darkMode ? "#FFFFFF" : "#33232B",
        borderBottom: darkMode
          ? "1px solid #4B3945"
          : "1px solid #F4E8ED",
        transition: "background-color 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "72px !important",
          px: { xs: 2, md: 5 },
          gap: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
      
        <Box
          onClick={() => navigate("/home")}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src="/images/logo.svg"
            alt="Glow & Beauty Logo"
            sx={{
              width: 145,
              height: 48,
              objectFit: "contain",
              objectPosition: "left center",
              display: "block",
            }}
          />
        </Box>

      
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={NavLink}
              to={item.path}
              end={item.path === "/home"}
              sx={{
                px: 2,
                py: 1,
                borderRadius: "30px",
                fontSize: 12,
                fontWeight: 500,
                textTransform: "none",
                whiteSpace: "nowrap",
                color: darkMode ? "#F7EAF1" : "#4D3B45",

                "&.active": {
                  backgroundColor: "#FADDE9",
                  color: "#A44F77",
                  fontWeight: 600,
                },

                "&:hover": {
                  backgroundColor: darkMode
                    ? "#473240"
                    : "#FFF0F6",
                },
              }}
            >
          
              {item.path === "/home" && (
                <Box
                  component="img"
                  src="/images/Icon.png"
                  alt="Home Icon"
                  sx={{
                    width: 16,
                    height: 16,
                    objectFit: "contain",
                    mr: 0.6,
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                />
              )}

              {item.label}
            </Button>
          ))}
        </Box>

 
        <TextField
          size="small"
          placeholder="Search skincare, perfumes, lipsticks..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleSearch}
          sx={{
            flex: 1,
            maxWidth: 370,
            minWidth: 170,

            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              backgroundColor: darkMode
                ? "#42313E"
                : "#FFF0F6",
              fontSize: 12,
              height: 40,

              "& fieldset": {
                border: "none",
              },
            },

            "& .MuiInputBase-input": {
              color: darkMode ? "#FFFFFF" : "#4D3B45",
            },

            "& .MuiInputBase-input::placeholder": {
              color: "#A68C9B",
              opacity: 1,
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined
                    sx={{
                      fontSize: 19,
                      color: "#916C80",
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />

      
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
          }}
        >
 
          <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              sx={{
                color: darkMode ? "#F5C4D9" : "#57434F",
              }}
            >
              {darkMode ? (
                <DarkModeOutlined sx={{ fontSize: 21 }} />
              ) : (
                <LightModeOutlined sx={{ fontSize: 21 }} />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title="Shopping Cart">
            <IconButton
              onClick={() => navigate("/cart")}
              sx={{
                color: darkMode ? "#F5C4D9" : "#57434F",
              }}
            >
              <Badge
                badgeContent={3}
                color="secondary"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#B85C83",
                    color: "#FFFFFF",
                    fontSize: 10,
                    minWidth: 17,
                    height: 17,
                  },
                }}
              >
                <ShoppingBagOutlined sx={{ fontSize: 22 }} />
              </Badge>
            </IconButton>
          </Tooltip>

          <Box
            onClick={handleMenuOpen}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.3,
              cursor: "pointer",
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "#F5D9E5",
                color: "#A65B80",
                fontSize: 14,
              }}
            >
              G
            </Avatar>

            <KeyboardArrowDown
              sx={{
                fontSize: 18,
                color: darkMode ? "#FFFFFF" : "#57434F",
              }}
            />
          </Box>

       
          <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={() => {
                handleMenuClose();
                navigate("/profile");
              }}
            >
              <AccountCircleOutlined
                sx={{
                  mr: 1,
                  fontSize: 19,
                }}
              />
              My Profile
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleMenuClose();
                navigate("/login");
              }}
            >
              <LogoutOutlined
                sx={{
                  mr: 1,
                  fontSize: 19,
                }}
              />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
