import React, { useState } from "react";

import homeVlam from "./homeVlam.png";
import homeVlamSide from "./homeVlamSide.png";

import homeVlamKamer1_1 from "./homeVlamKamer1-1.jpeg";
import homeVlamKamer1_2 from "./homeVlamKamer1-2.jpeg";
import homeVlamKamer1_3 from "./homeVlamKamer1-3.jpeg";

import homeVlamKamer2_1 from "./homeVlamKamer2-1.jpeg";
import homeVlamKamer2_2 from "./homeVlamKamer2-2.jpeg";
import homeVlamKamer2_3 from "./homeVlamKamer2-3.jpeg";

import homeVlamKamer3_1 from "./homeVlamKamer3-1.jpeg";
import homeVlamKamer3_2 from "./homeVlamKamer3-2.jpeg";
import homeVlamKamer3_3 from "./homeVlamKamer3-3.jpeg";

import homeVlamKamer4_1 from "./homeVlamKamer4-1.jpeg";
import homeVlamKamer4_2 from "./homeVlamKamer4-2.jpeg";
import homeVlamKamer4_3 from "./homeVlamKamer4-3.jpeg";

import homeVlamKamer5_1 from "./homeVlamKamer5-1.jpeg";
import homeVlamKamer5_2 from "./homeVlamKamer5-2.jpeg";
import homeVlamKamer5_3 from "./homeVlamKamer5-3.jpeg";

import homeVlamKamer6_1 from "./homeVlamKamer6-1.jpeg";
import homeVlamKamer6_2 from "./homeVlamKamer6-2.jpeg";
import homeVlamKamer6_3 from "./homeVlamKamer6-3.jpeg";

import homeVlamKamer7_1 from "./homeVlamKamer7-1.jpeg";
import homeVlamKamer7_2 from "./homeVlamKamer7-2.jpeg";
import homeVlamKamer7_3 from "./homeVlamKamer7-3.jpeg";

import homeVlamKamer8_1 from "./homeVlamKamer8-1.jpeg";
import homeVlamKamer8_2 from "./homeVlamKamer8-2.jpeg";
import homeVlamKamer8_3 from "./homeVlamKamer8-3.jpeg";

import homeVlamKamer9_1 from "./homeVlamKamer9-1.jpeg";
import homeVlamKamer9_2 from "./homeVlamKamer9-2.jpeg";
import homeVlamKamer9_3 from "./homeVlamKamer9-3.jpeg";

import homeVlamKamer10_1 from "./homeVlamKamer10-1.jpeg";
import homeVlamKamer10_2 from "./homeVlamKamer10-2.jpeg";
import homeVlamKamer10_3 from "./homeVlamKamer10-3.jpeg";

import villaIrmaLogo from "./villaIrmaLogo.png";

import Typography from "@mui/material/Typography";
import { Stack, Divider, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imagesKamer1 = [homeVlamKamer1_3, homeVlamKamer1_1, homeVlamKamer1_2];

const imagesKamer2 = [homeVlamKamer2_1, homeVlamKamer2_3, homeVlamKamer2_2 ];

const imagesKamer3 = [homeVlamKamer3_1, homeVlamKamer3_2, homeVlamKamer3_3];

const imagesKamer4 = [homeVlamKamer4_1, homeVlamKamer4_3, homeVlamKamer4_2];

const imagesKamer5 = [homeVlamKamer5_1, homeVlamKamer5_2, homeVlamKamer5_3];

const imagesKamer6 = [homeVlamKamer6_2, homeVlamKamer6_3, homeVlamKamer6_1];

const imagesKamer7 = [homeVlamKamer7_1, homeVlamKamer7_2, homeVlamKamer7_3];

const imagesKamer8 = [ homeVlamKamer8_3,homeVlamKamer8_2,  homeVlamKamer8_1];

const imagesKamer9 = [homeVlamKamer9_1, homeVlamKamer9_2, homeVlamKamer9_3];

const imagesKamer10 = [homeVlamKamer10_1, homeVlamKamer10_3, homeVlamKamer10_2];

function Vlam() {
  const [selectedRoom, setSelectedRoom] = React.useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <Stack direction="column" minWidth="900px" flexWrap="wrap">
          <Stack
            direction="row"
            alignItems="center"
            width="100%"
            paddingTop="20px"
          >
            <img src={homeVlam} style={{ width: "150px" }} />
            <img
              src={homeVlamSide}
              style={{ width: "350px", paddingLeft: "5px" }}
            />
            <Stack
              direction="column"
              alignItems="baseline"
              sx={{ paddingLeft: "30px" }}
              maxWidth="500px"
            >
              <Typography variant="h4" color="text.primary" sx={{textWrap: 'nowrap'}} paragraph>
                Vlamingenstraat 25, 3000 Leuven
              </Typography>
              <Typography color="text.secondary" textAlign="left">
                Elegant studentenhuis, gelegen in centrum Leuven. Aangename buurt met het Stadspark, de Grote en de Oude markt op wandelafstand. Dicht bij faculteit Rechten, Talen en Economie. 10 studio’s met gemeenschappelijke fietsenstalling. Drie verdiepingen met privé badkamer en keuken. Draadloos internet.
              </Typography>
            </Stack>
          </Stack>
          <Divider variant="middle" width="80%" sx={{ margin: "20px" }} />
          <Stack direction="row" gap={2}>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(1)}>
                Kamer 1
              </a>
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(2)}>
                Kamer 2
              </a>
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(3)}>
                Kamer 3
              </a>
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(4)}>
                Kamer 4
              </a>
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(5)}>
                Kamer 5
              </a>
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(6)}>
                Kamer 6
              </a>
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(7)}>
                Kamer 7
              </a>
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(8)}>
                Kamer 8
              </a>
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(9)}>
                Kamer 9
              </a>
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(10)}>
                Kamer 10
              </a>
            </Typography>
          </Stack>
          <Divider variant="middle" width="80%" sx={{ margin: "5px" }} />

          <Stack direction="column" maxWidth="1000px" gap={4} paddingTop="30px">
            {selectedRoom === 1 && (
              <Box>
                <Typography
                  color="text.primary"
                  variant="h5"
                  textAlign="left"
                  paragraph
                >
                  Kamer 1
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                Lumineuze kamer op gelijkvloers (16m²) met twee grote ramen en behoud van originele marmeren schouwmantel. De kamer heeft ook een hoogslaperconstructie en is daardoor extra ruim. Bezit eigen kitchenette en badkamer (lavabo en douche). Toilet in de gang en te delen met 3 andere studenten. Op aanvraag is de kamer bemeubeld huren mogelijk. Een gemeenschappelijke fietsenstalling aanwezig. 
                </Typography>
                <Carousel useKeyboardArrows={false}>
                  {imagesKamer1.map((URL, index) => (
                    <div className="slide">
                      <img alt="sample_file" src={URL} key={index} />
                    </div>
                  ))}
                </Carousel>
              </Box>
            )}
            {selectedRoom === 2 && (
              <Box>
                <Typography
                  color="text.primary"
                  variant="h5"
                  textAlign="left"
                  paragraph
                >
                  Kamer 2
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                Aangename kamer op gelijkvloers (18m²) met uitzicht op privé terras. Rustig milieu met eigen kitchenette en badkamer (lavabo en douche). Behoud van originele marmeren schouwmantel en door de hoogslaperconstructie is de kamer extra ruim. Toilet aanwezig in de gang en te delen met 3 andere studenten. Op aanvraag is de kamer bemeubeld huren mogelijk. Een gemeenschappelijke fietsenstalling aanwezig.
                </Typography>
                <Carousel useKeyboardArrows={false}>
                  {imagesKamer2.map((URL, index) => (
                    <div className="slide">
                      <img alt="sample_file" src={URL} key={index} />
                    </div>
                  ))}
                </Carousel>
              </Box>
            )}
            {selectedRoom === 3 && (
              <Box>
                <Typography
                  color="text.primary"
                  variant="h5"
                  textAlign="left"
                  paragraph
                >
                  Kamer 3
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                Ruime dubbele kamer op gelijkvloers (23m²) met uitzicht op privé terras. Rustig studiemilieu met eigen kitchenette en badkamer (lavabo en douche). Toilet aanwezig in de gang en te delen met 3 andere studenten. Op aanvraag is de kamer bemeubeld huren mogelijk. Een gemeenschappelijke fietsenstalling aanwezig. 
                </Typography>
                <Carousel useKeyboardArrows={false}>
                  {imagesKamer3.map((URL, index) => (
                    <div className="slide">
                      <img alt="sample_file" src={URL} key={index} />
                    </div>
                  ))}
                </Carousel>
              </Box>
            )}
            {selectedRoom === 4 && (
              <Box>
                <Typography
                  color="text.primary"
                  variant="h5"
                  textAlign="left"
                  paragraph
                >
                  Kamer 4
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                Lumineuze kamer op eerste verdieping (22m²) met twee grote ramen. Rustig studiemilieu met eigen kitchenette en badkamer (lavabo en douche). Toilet aanwezig in de gang en te delen met 3 andere studenten. Op aanvraag is de kamer bemeubeld huren mogelijk. Een gemeenschappelijke fietsenstalling aanwezig. 
                </Typography>
                <Carousel useKeyboardArrows={false}>
                  {imagesKamer4.map((URL, index) => (
                    <div className="slide">
                      <img alt="sample_file" src={URL} key={index} />
                    </div>
                  ))}
                </Carousel>
              </Box>
            )}
            {selectedRoom === 5 && (
              <Box>
                <Typography
                  color="text.primary"
                  variant="h5"
                  textAlign="left"
                  paragraph
                >
                  Kamer 5
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                De kleinste, maar ook de gezelligste kamer van de eerste verdieping (14m²). De kamer heeft een hoogslaperconstructie waardoor veel mogelijk is. Eigen kitchenette en badkamer (lavabo en douche). Toilet aanwezig in de gang en te delen met 3 andere studenten. Op aanvraag is de kamer bemeubeld huren mogelijk. Een gemeenschappelijke fietsenstalling aanwezig.
                </Typography>
                <Carousel useKeyboardArrows={false}>
                  {imagesKamer5.map((URL, index) => (
                    <div className="slide">
                      <img alt="sample_file" src={URL} key={index} />
                    </div>
                  ))}
                </Carousel>
              </Box>
            )}
            {selectedRoom === 6 && (
              <Box>
                <Typography
                  color="text.primary"
                  variant="h5"
                  textAlign="left"
                  paragraph
                >
                  Kamer 6
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                Ruime dubbele kamer op eerste verdieping (22m²). Rustig studiemilieu met eigen kitchenette en badkamer (lavabo en douche). Toilet aanwezig in de gang en te delen met 3 andere studenten. Op aanvraag is de kamer bemeubeld huren mogelijk. Een gemeenschappelijke fietsenstalling aanwezig. 
                </Typography>
                <Carousel useKeyboardArrows={false}>
                  {imagesKamer6.map((URL, index) => (
                    <div className="slide">
                      <img alt="sample_file" src={URL} key={index} />
                    </div>
                  ))}
                </Carousel>
              </Box>
            )}
            {selectedRoom === 7 && (
              <Box>
                <Typography
                  color="text.primary"
                  variant="h5"
                  textAlign="left"
                  paragraph
                >
                  Kamer 7
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                Een gezellige kamer op de tweede verdieping (13m²) met uitzicht op de daken van onze pittoreske stad Leuven. Kamer heeft eigen kitchenette en badkamer (lavabo en douche). Rustig studiemilieu met toilet aanwezig in de gang om te delen met 4 andere studenten. Op aanvraag is de kamer bemeubeld huren mogelijk. Een gemeenschappelijke fietsenstalling aanwezig. 
                </Typography>
                <Carousel useKeyboardArrows={false}>
                  {imagesKamer7.map((URL, index) => (
                    <div className="slide">
                      <img alt="sample_file" src={URL} key={index} />
                    </div>
                  ))}
                </Carousel>
              </Box>
            )}

            {selectedRoom === 8 && (
              <Box>
                <Typography
                  color="text.primary"
                  variant="h5"
                  textAlign="left"
                  paragraph
                >
                  Kamer 8
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                Sfeervolle kamer op de tweede verdieping (14m²) met lumineuze ramen. Rustig studiemilieu met eigen kitchenette en badkamer (lavabo en douche). Toilet aanwezig in de gang en te delen met 4 andere studenten. Op aanvraag is de kamer bemeubeld huren mogelijk. Een gemeenschappelijke fietsenstalling aanwezig. 
                </Typography>
                <Carousel useKeyboardArrows={false}>
                  {imagesKamer8.map((URL, index) => (
                    <div className="slide">
                      <img alt="sample_file" src={URL} key={index} />
                    </div>
                  ))}
                </Carousel>
              </Box>
            )}

{selectedRoom === 9 && (
              <Box>
                <Typography
                  color="text.primary"
                  variant="h5"
                  textAlign="left"
                  paragraph
                >
                  Kamer 9
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                Ruime mezzanine op de tweede verdieping (28m²) met lumineuze ramen. Rustig studiemilieu met eigen kitchenette en badkamer (lavabo en douche). Toilet aanwezig in de gang en te delen met 4 andere studenten. Op aanvraag is de kamer bemeubeld huren mogelijk. Een gemeenschappelijke fietsenstalling aanwezig. 
                </Typography>
                <Carousel useKeyboardArrows={false}>
                  {imagesKamer9.map((URL, index) => (
                    <div className="slide">
                      <img alt="sample_file" src={URL} key={index} />
                    </div>
                  ))}
                </Carousel>
              </Box>
            )}

{selectedRoom === 10 && (
              <Box>
                <Typography
                  color="text.primary"
                  variant="h5"
                  textAlign="left"
                  paragraph
                >
                  Kamer 10
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                Ruime dubbele kamer op de tweede verdieping (22m²) met eigen privé terras. Rustig studiemilieu met eigen kitchenette en badkamer (lavabo en douche). Toilet aanwezig in de gang en te delen met 4 andere studenten. Op aanvraag is de kamer bemeubeld huren mogelijk. Een gemeenschappelijke fietsenstalling aanwezig. 
                </Typography>
                <Carousel useKeyboardArrows={false}>
                  {imagesKamer10.map((URL, index) => (
                    <div className="slide">
                      <img alt="sample_file" src={URL} key={index} />
                    </div>
                  ))}
                </Carousel>
              </Box>
            )}
            <a href="/">
              <Stack alignItems="center" width="100%" paddingBottom="50px">
                <img src={villaIrmaLogo} style={{ width: "200px" }} />
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Villa Irma Verhuur
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Koten in Leuven
                </Typography>
              </Stack>
            </a>
          </Stack>
        </Stack>
      </header>
    </div>
  );
}

export default Vlam;
