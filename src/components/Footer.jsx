
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

import { Link as RouterLink } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Footer() {
  const linkStyle = {
    display: "block",
    color: "#8C6D7C",
    fontSize: 12,
    textDecoration: "none",
    mb: 0.8,
    "&:hover": {
      color: "#B85C83",
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#FFF0F5",
        px: { xs: 3, md: 7 },
        pt: 5,
        pb: 4,
        borderTop: "1px solid #F3DFE7",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "1.6fr repeat(3, 1fr)",
          },
          gap: 4,
          maxWidth: 1300,
          mx: "auto",
        }}
      >
    
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
            }}
          >
            <Box
              component="img"
              src="/images/logo.svg"
              alt="Glow & Beauty Logo"
              sx={{
                width: 65,
                height: 45,
                objectFit: "contain",
              }}
            />

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#33232B",
              }}
            >
              Glow & Beauty
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#927684",
              fontSize: 12,
              lineHeight: 1.9,
              maxWidth: 260,
              mb: 2,
            }}
          >
            Your Beauty. Your Glow. Curated luxury skincare,
            makeup, and fragrances made to illuminate your
            natural radiance.
          </Typography>

        
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              aria-label="Instagram"
              size="small"
              sx={{
                backgroundColor: "#FCE3EC",
                color: "#B85C83",
                "&:hover": {
                  backgroundColor: "#F4C9D9",
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: 17 }} />
            </IconButton>

            <IconButton
              aria-label="Pinterest"
              size="small"
              sx={{
                backgroundColor: "#FCE3EC",
                color: "#B85C83",
                "&:hover": {
                  backgroundColor: "#F4C9D9",
                },
              }}
            >
              <PinterestIcon sx={{ fontSize: 17 }} />
            </IconButton>

            <IconButton
              aria-label="Email"
              size="small"
              sx={{
                backgroundColor: "#FCE3EC",
                color: "#B85C83",
                "&:hover": {
                  backgroundColor: "#F4C9D9",
                },
              }}
            >
              <EmailOutlinedIcon sx={{ fontSize: 17 }} />
            </IconButton>
          </Box>
        </Box>

     
        <Box>
          <Typography
            sx={{
              color: "#33232B",
              fontWeight: 600,
              fontSize: 13,
              mb: 2,
            }}
          >
            Quick Links
          </Typography>

          <Link component={RouterLink} to="/home" sx={linkStyle}>
            Home
          </Link>

          <Link component={RouterLink} to="/categories" sx={linkStyle}>
            Categories
          </Link>

          <Link component={RouterLink} to="/products" sx={linkStyle}>
            All Products
          </Link>

          <Link component={RouterLink} to="/about" sx={linkStyle}>
            About Us
          </Link>
        </Box>

      
        <Box>
          <Typography
            sx={{
              color: "#33232B",
              fontWeight: 600,
              fontSize: 13,
              mb: 2,
            }}
          >
            Categories
          </Typography>

          <Link
            component={RouterLink}
            to="/products/category/skincare"
            sx={linkStyle}
          >
            Skincare
          </Link>

          <Link
            component={RouterLink}
            to="/products/category/makeup"
            sx={linkStyle}
          >
            Makeup
          </Link>

          <Link
            component={RouterLink}
            to="/products/category/haircare"
            sx={linkStyle}
          >
            Haircare
          </Link>

          <Link
            component={RouterLink}
            to="/products/category/perfumes"
            sx={linkStyle}
          >
            Perfumes
          </Link>

          <Link
            component={RouterLink}
            to="/products/category/body-care"
            sx={linkStyle}
          >
            Body Care
          </Link>
        </Box>

       
        <Box>
          <Typography
            sx={{
              color: "#33232B",
              fontWeight: 600,
              fontSize: 13,
              mb: 2,
            }}
          >
            Customer Support
          </Typography>

          <Link
            component={RouterLink}
            to="/shipping-policy"
            sx={linkStyle}
          >
            Shipping Policy
          </Link>

          <Link
            component={RouterLink}
            to="/returns"
            sx={linkStyle}
          >
            Returns & Exchanges
          </Link>

          <Link
            component={RouterLink}
            to="/faq"
            sx={linkStyle}
          >
            FAQ
          </Link>

          <Link
            component={RouterLink}
            to="/orders"
            sx={linkStyle}
          >
            Order Status
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
