
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Categories() {

  const scrollRef = useRef(null);

  const getCategories = async () => {
    return [
      {
        id: 1,
        name: "Skincare",
        items: "24 items",
        image: "/images/skincare.jpg",
      },
      {
        id: 2,
        name: "Makeup",
        items: "18 items",
        image: "/images/makeup.jpg",
      },
      {
        id: 3,
        name: "Haircare",
        items: "16 items",
        image: "/images/haircare.jpg",
      },
      {
        id: 4,
        name: "Perfumes",
        items: "12 items",
        image: "/images/perfume.jpg",
      },
      {
        id: 5,
        name: "Body Care",
        items: "20 items",
        image: "/images/bodycare.jpg",
      },
    ];
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5,
    
  });
  
console.log(data);
  const scrollCategories = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction * 240,
      behavior: "smooth",
    });
  };

  if (isPending) return <CircularProgress />;

  if (isError)
    return (
      <Alert severity="error">
        Failed to load categories.
      </Alert>
    );

  return (
    <Box sx={{ mt: 7, width: "100%" }}>

      <Box sx={{ textAlign: "center", mb: 4 }}>

        <Typography
          sx={{
            color: "#B85C83",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "3px",
            mb: 1.5,
          }}
        >
          DISCOVER YOUR BEAUTY
        </Typography>

        <Typography
          component="h2"
          sx={{
            color: "#33232B",
            fontFamily: "Georgia, serif",
            fontSize: { xs: 30, md: 42 },
            fontWeight: 500,
            letterSpacing: "-1px",
          }}
        >
          Shop by{" "}
          <Box
            component="span"
            sx={{
              color: "#B85C83",
              fontStyle: "italic",
            }}
          >
            Category
          </Box>
        </Typography>

        <Box
          sx={{
            width: 55,
            height: 2,
            backgroundColor: "#D8A0B6",
            mx: "auto",
            my: 2,
            borderRadius: 5,
          }}
        />

        <Typography
          sx={{
            color: "#927684",
            fontSize: 14,
          }}
        >
          A little luxury for every part of your beauty ritual.
        </Typography>

      </Box>

   
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
          mb: 2,
        }}
      >
        <IconButton
          size="small"
          onClick={() => scrollCategories(-1)}
          sx={{
            backgroundColor: "#FCE3EC",
            color: "#B85C83",
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
        </IconButton>

        <IconButton
          size="small"
          onClick={() => scrollCategories(1)}
          sx={{
            backgroundColor: "#FCE3EC",
            color: "#B85C83",
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
        </IconButton>
      </Box>


      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollBehavior: "smooth",
          pb: 2,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {data.map((category) => (
          <Card
            key={category.id}
            sx={{
              flex: {
                xs: "0 0 75%",
                sm: "0 0 42%",
                md: "0 0 calc((100% - 64px) / 5)",
              },
              minWidth: 0,
              backgroundColor: "#FCEBF1",
              borderRadius: "15px",
              boxShadow: "none",
              border: "1px solid #F3DFE7",
              p: 1,
              boxSizing: "border-box",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 20px rgba(184,92,131,0.12)",
              },
            }}
          >

           
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={category.image}
                alt={category.name}
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: "11px",
                  display: "block",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "rgba(255,255,255,0.92)",
                  borderRadius: "20px",
                  px: 1.2,
                  py: 0.4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#8C6D7C",
                    fontWeight: 600,
                  }}
                >
                  {category.items}
                </Typography>
              </Box>
            </Box>

        
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: 1.5,
                pb: 0.5,
                px: 0.5,
              }}
            >
              <Typography
                sx={{
                  color: "#33232B",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {category.name}
              </Typography>

              <ArrowForwardIcon
                sx={{
                  fontSize: 16,
                  color: "#B85C83",
                }}
              />
            </Box>

          </Card>
        ))}
      </Box>

    </Box>
  );
}
