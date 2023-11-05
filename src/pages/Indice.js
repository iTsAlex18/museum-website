import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import can from "../images/can.jpeg";
import mina from "../images/mina.jpeg";
import mov from "../images/mov.jpeg";
import min from "../images/min.jpeg";
import profiriatoson from "../images/profiriatoson.jpeg";
import tecnologia from "../images/tecnologia.jpeg";
import patio from "../images/patio.jpeg";
import museo from "../images/museo.jpeg";
import hospital from "../images/hospital.jpeg";
import teatro from "../images/teatro.jpeg";

const Indice = () => {
  return (
    <Layout>
      <br/>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
        <Button>
        <NavLink to={"/primeroshabitantes"}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "400px" }}
              component={"img"}
              src={can}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                Primeros Habitantes
              </Typography>
            </CardContent>
          </CardActionArea>
          </NavLink>
          </Button>
        </Card>

        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
        <Button>
        <NavLink to={"/mineria"}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "400px" }}
              component={"img"}
              src={mina}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                Minería
              </Typography>
            </CardContent>
          </CardActionArea>
          </NavLink>
          </Button>
        </Card>

        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
        <Button>
        <NavLink to={"/movimientoobrero1906"}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "400px" }}
              component={"img"}
              src={mov}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                Movimiento Obrero 1906
              </Typography>
            </CardContent>
          </CardActionArea>
          </NavLink>
          </Button>
        </Card>

        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
        <Button>
        <NavLink to={"/mineros"}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "400px" }}
              component={"img"}
              src={min}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                Mineros
              </Typography>
            </CardContent>
          </CardActionArea>
          </NavLink>
          </Button>
        </Card>

        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
        <Button>
        <NavLink to={"/porfiriatosonora"}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "400px" }}
              component={"img"}
              src={profiriatoson}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                Porfiriato en Sonora
              </Typography>
            </CardContent>
          </CardActionArea>
          </NavLink>
          </Button>
        </Card>

        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
        <Button>
        <NavLink to={"/porfiriatotecnologíacananea"}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "400px" }}
              component={"img"}
              src={tecnologia}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                Porfiriato y Tecnología en Cananea
              </Typography>
            </CardContent>
          </CardActionArea>
          </NavLink>
          </Button>
        </Card>

        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
        <Button>
        <NavLink to={"/patiocárcelcananea"}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "400px" }}
              component={"img"}
              src={patio}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                El Legendario Patio de la Cárcel de Cananea
              </Typography>
            </CardContent>
          </CardActionArea>
          </NavLink>
          </Button>
        </Card>

        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
        <Button>
        <NavLink to={"/carcelcananea"}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "400px" }}
              component={"img"}
              src={museo}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                La Antigua Cárcel de Cananea
              </Typography>
            </CardContent>
          </CardActionArea>
          </NavLink>
          </Button>
        </Card>

        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
        <Button>
        <NavLink to={"/hospitaldelronquillo"}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "400px" }}
              component={"img"}
              src={hospital}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                Hospital del Ronquillo
              </Typography>
            </CardContent>
          </CardActionArea>
          </NavLink>
          </Button>
        </Card>

        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
        <Button>
        <NavLink to={"/teatroestudio(XEFQ)"}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "400px" }}
              component={"img"}
              src={teatro}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                El Teatro Estudio (XEFQ)
              </Typography>
            </CardContent>
          </CardActionArea>
          </NavLink>
          </Button>
        </Card>
      </Box>
    </Layout>
  );
};

export default Indice;