import logo from "./logo.png";
import homeSluis from "./homeSluis.png";
import homeVlam from "./homeVlam.png";
import villaIrmaLogo from "./villaIrmaLogo.png";

import "./App.css";
import Confetti from "react-confetti";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Stack,
  Divider,
} from "@mui/material";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Stack direction="row" flexWrap="wrap">
          <Stack alignItems="center" width="100%" paddingTop="20px">
            <img src={villaIrmaLogo} style={{ width: "200px" }} />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Villa Irma Verhuur
            </Typography>
            <Typography variant="body2" color="text.primary">
              Koten in Leuven
            </Typography>

            <Divider variant="middle" width="80%" sx={{ margin: "20px" }} />
          </Stack>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap="20px"
            width="100%"
            justifyContent="center"
            paddingBottom="20px"
            paddingTop="10px"
          >
            {/* <Confetti numberOfPieces={3} gravity={0.015} wind={0.005} width={window.screen.width} height={window.screen.height}/> */}
            <Card
              sx={{
                width: 350,
                maxWidth: 345,
                ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <CardActionArea
                onClick={() => {
                  window.location.href = "?sluis";
                }}
              >
                <CardMedia
                  sx={{ height: 350, backgroundSize: "60%" }}
                  image={homeSluis}
                  title="Sluis 13"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Sluis 13
                  </Typography>
                  <Typography fontStyle="italic" paragraph>
                    Charmant herehuis voor 8 studenten met gedeelde keuken en
                    kleine tuin
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sluisstraat 13, 3000 Leuven
                  </Typography>
                </CardContent>
                {/* <CardActions> */}
                {/* <Button size="small">Share</Button> */}
                {/* <Button size="small">Learn More</Button> */}
                {/* </CardActions> */}
              </CardActionArea>
            </Card>
            <Card
              sx={{
                width: 350,
                maxWidth: 345,
                ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <CardActionArea
                onClick={() => {
                  window.location.href = "?vlam";
                }}
              >
              <CardMedia
                sx={{ height: 350, backgroundSize: "60%" }}
                image={homeVlam}
                title="Vlam 25"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Vlam 25
                </Typography>
                <Typography fontStyle="italic" paragraph>
                  Elegant studentenhuis met 10 studio's en gemeenschappelijke fietsenstalling
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Vlamingenstraat 25, 3000 Leuven
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Stack>
      </header>
    </div>
  );
}

export default Home;
