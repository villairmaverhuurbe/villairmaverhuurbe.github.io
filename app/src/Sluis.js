import React, { useState, useEffect } from "react";

import kotLabel from "./Kot-label-groen.png";

import homeSluis from "./homeSluis.png";
import homeSluisSide from "./homeSluisSide.png";
import homeSluisKamer1_1 from "./homeSluisKamer1-1.jpeg";
import homeSluisKamer1_2 from "./homeSluisKamer1-2.jpeg";
import homeSluisKamer1_4 from "./homeSluisKamer1-4.jpeg";

import homeSluisKamer2_1 from "./homeSluisKamer2-1.jpeg";
import homeSluisKamer2_2 from "./homeSluisKamer2-2.jpeg";
import homeSluisKamer2_3 from "./homeSluisKamer2-3.jpeg";

import homeSluisKamer3_1 from "./homeSluisKamer3-1.jpeg";
import homeSluisKamer3_2 from "./homeSluisKamer3-2.jpeg";
import homeSluisKamer3_3 from "./homeSluisKamer3-3.jpeg";

import homeSluisKamer4_1 from "./homeSluisKamer4-1.jpeg";
import homeSluisKamer4_2 from "./homeSluisKamer4-2.jpeg";
import homeSluisKamer4_3 from "./homeSluisKamer4-3.jpeg";

import homeSluisKamer5_1 from "./homeSluisKamer5-1.jpeg";
import homeSluisKamer5_2 from "./homeSluisKamer5-2.jpeg";
import homeSluisKamer5_3 from "./homeSluisKamer5-3.jpeg";

import homeSluisKamer6_1 from "./homeSluisKamer6-1.jpeg";
import homeSluisKamer6_2 from "./homeSluisKamer6-2.jpeg";
import homeSluisKamer6_3 from "./homeSluisKamer6-3.jpeg";

import homeSluisKamer7_1 from "./homeSluisKamer7-1.jpeg";
import homeSluisKamer7_2 from "./homeSluisKamer7-2.jpeg";
import homeSluisKamer7_3 from "./homeSluisKamer7-3.jpeg";

import homeSluisKamer8_1 from "./homeSluisKamer8-1.jpeg";
import homeSluisKamer8_2 from "./homeSluisKamer8-2.jpeg";
import homeSluisKamer8_3 from "./homeSluisKamer8-3.jpeg";

import villaIrmaLogo from "./villaIrmaLogo.png";

import Typography from "@mui/material/Typography";
import { Stack, Divider, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const kamerAvailable = [ /* 1 */ false, /* 2 */ false, /* 3 */  true, /* 4 */ false, /* 5 */  false, /* 6 */  false , /* 7 */ false, /* 8 */ false];

const imagesKamer1 = [homeSluisKamer1_4, homeSluisKamer1_1, homeSluisKamer1_2];

const imagesKamer2 = [homeSluisKamer2_1, homeSluisKamer2_2, homeSluisKamer2_3];

const imagesKamer3 = [homeSluisKamer3_1, homeSluisKamer3_2, homeSluisKamer3_3 ];

const imagesKamer4 = [homeSluisKamer4_1, homeSluisKamer4_2, homeSluisKamer4_3];

const imagesKamer5 = [homeSluisKamer5_1, homeSluisKamer5_2, homeSluisKamer5_3];

const imagesKamer6 = [homeSluisKamer6_1, homeSluisKamer6_2, homeSluisKamer6_3];

const imagesKamer7 = [homeSluisKamer7_1, homeSluisKamer7_2, homeSluisKamer7_3];

const imagesKamer8 = [homeSluisKamer8_1, homeSluisKamer8_2, homeSluisKamer8_3];

function Sluis() {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const kamer = urlParams.get('kamer');
  
  const [selectedRoom, setSelectedRoom] = React.useState(Number(kamer) || 1);

  const showRoomAvailableIcon = (roomNumber) => {
    return <span style={{marginLeft: '5px'}}>{kamerAvailable[roomNumber - 1] ? '✅' : '❌'}</span>
  }

  const showRoomAvailableText = (roomNumber) => {
    return kamerAvailable[roomNumber -1 ] ? <></> : <span style={{marginLeft: '5px'}}>(verhuurd)</span>
  }

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
            <img src={homeSluis} style={{ width: "150px" }} />
            <img
              src={homeSluisSide}
              style={{ width: "280px", paddingLeft: "30px" }}
            />
            <Stack
              direction="column"
              alignItems="baseline"
              sx={{ paddingLeft: "30px" }}
              maxWidth="500px"
            >
              <Typography variant="h4" color="text.primary" paragraph>
                Sluisstraat 13, 3000 Leuven
              </Typography>
              <Typography color="text.secondary" textAlign="left">
                Charmant herenhuis, gelegen in het centrum van Leuven. Aangename
                buurt met het Sluispark en supermarkt Colruyt op wandelafstand.
                Acht studenten delen gemeenschappelijke keuken en kleine tuin
                met fietsenstalling. Vier verdiepingen met elk twee kamers.
                Badkamer met douche en toilet per verdieping. Draadloos internet
                en intercom systeem aanwezig.
              </Typography>
            </Stack>
            <a  target="_blank" href="https://www.kuleuven.be/stuvo/kot/zoeken/prive/kotlabel">
              <img alt="kot label groen" src={kotLabel} style={{ width: "100px", height: "100px" }} />
            </a>
          </Stack>
          <Divider variant="middle" width="80%" sx={{ margin: "20px" }} />
          <Stack direction="row" gap={2}>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(1)}>
                Kamer 1
              </a>
              { showRoomAvailableIcon(1) } 
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(2)}>
                Kamer 2
              </a>
              { showRoomAvailableIcon(2) } 
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(3)}>
                Kamer 3
              </a>
              { showRoomAvailableIcon(3) } 
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(4)}>
                Kamer 4
              </a>
              { showRoomAvailableIcon(4) } 
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(5)}>
                Kamer 5
              </a>
              { showRoomAvailableIcon(5) } 
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(6)}>
                Kamer 6
              </a>
              { showRoomAvailableIcon(6) } 
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(7)}>
                Kamer 7
              </a>
              { showRoomAvailableIcon(7) } 
            </Typography>
            <Typography color="text.secondary" textAlign="left" paragraph>
              <a href="#" onClick={() => setSelectedRoom(8)}>
                Kamer 8
              </a>
              { showRoomAvailableIcon(8) } 
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
                  { showRoomAvailableText(1) } 
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                  Charmante ruime kamer (4x5m²) op de gelijkvloers. Twee grote
                  ramen met gordijnen en luiken met zicht op rivier de Dijle.
                  Antieke haardschouw, radiator en eigen lavabo aanwezig. Houten
                  parketvloer en hoog plafond. Intercom systeem aanwezig.
                  Gedeeld toilet, gedeelde douche met 1 andere persoon van
                  datzelfde verdiep. Gemeenschappelijke keuken met een gedeelde
                  tuin met ruimte voor fietsen. Draadloos internet.
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
                  { showRoomAvailableText(2) } 
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                  Gezellige mezzanine (3x5m²) op de gelijkvloers. Groot raam met
                  gordijnen en uitzicht op de tuin. Radiator en eigen lavabo
                  aanwezig. Houten parketvloer en hoog plafond. Intercom systeem
                  aanwezig. Gedeeld toilet, gedeelde douche met 1 andere persoon
                  van datzelfde verdiep. Gemeenschappelijke keuken met een
                  gedeelde tuin met ruimte voor fietsen. Draadloos internet.
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
                  { showRoomAvailableText(3) } 
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                  Charmante ruime kamer (4x5m²) op eerste verdieping. Drie grote
                  ramen met gordijnen met zicht op rivier de Dijle. Antieke
                  haardschouw en drie radiatoren aanwezig. Houten parketvloer en
                  hoog plafond. Intercom systeem aanwezig. Gedeeld toilet,
                  gedeelde douche met 1 andere persoon van datzelfde verdiep.
                  Gemeenschappelijke keuken met een gedeelde tuin met ruimte
                  voor fietsen. Draadloos internet.
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
                  { showRoomAvailableText(4) } 
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                  Eenvoudige kamer (3x5m²) op eerste verdieping. Groot raam met
                  gordijnen en uitzicht op de tuin. Radiator, houten parketvloer
                  en hoog plafond. Intercom systeem aanwezig. Gedeeld toilet,
                  gedeelde douche met 1 andere persoon van datzelfde verdiep.
                  Gemeenschappelijke keuken met een gedeelde tuin met ruimte
                  voor fietsen. Draadloos internet.
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
                  { showRoomAvailableText(5) } 
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                  Charmante ruime kamer (4x5m²) op tweede verdieping. Drie grote
                  ramen met gordijnen met zicht op rivier de Dijle. Antieke
                  haardschouw en drie radiatoren aanwezig. Houten parketvloer en
                  hoog plafond. Intercom systeem aanwezig. Gedeeld toilet,
                  gedeelde douche met 1 andere persoon van datzelfde verdiep.
                  Gemeenschappelijke keuken met een gedeelde tuin met ruimte
                  voor fietsen. Draadloos internet.
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
                  { showRoomAvailableText(6) } 
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                  Stijlvolle kamer (3x5m²) op tweede verdieping. Groot raam met
                  gordijnen en uitzicht op de tuin. Radiator, houten parketvloer
                  en hoog plafond. Intercom systeem aanwezig. Gedeeld toilet,
                  gedeelde douche met 1 andere persoon van datzelfde verdiep.
                  Gemeenschappelijke keuken met een gedeelde tuin met ruimte
                  voor fietsen. Draadloos internet.
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
                  { showRoomAvailableText(7) } 
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                  Gezellige zolderkamer (4x5m²) op derde verdieping. Twee
                  veluxen en 1 groter ramen met gordijnen. Radiator, houten
                  parketvloer en hoog plafond met antieke balken. Intercom
                  systeem aanwezig. Gedeeld toilet, gedeelde douche met 1 andere
                  persoon van datzelfde verdiep. Gemeenschappelijke keuken met
                  een gedeelde tuin met ruimte voor fietsen. Draadloos internet.
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
                  { showRoomAvailableText(8) } 
                </Typography>
                <Typography color="text.secondary" textAlign="left" paragraph>
                  Gezellige zolderkamer (3x5m²) op derde verdieping. Grote velux
                  met uitzicht op centrum Leuven. Radiator, houten parketvloer
                  en hoog plafond met antieke balken. Intercom systeem aanwezig.
                  Gedeeld toilet, gedeelde douche met 1 andere persoon van
                  datzelfde verdiep. Gemeenschappelijke keuken met een gedeelde
                  tuin met ruimte voor fietsen. Draadloos internet.
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
            <Stack>
              <Typography color="text.primary" textAlign="center" paragraph variant="h7">
                Meer informatie?
                </Typography>
                <Typography color="text.primary" textAlign="center" paragraph variant="h6">
                Stuur een e-mail naar: <a href="mailto:sluis@villairmaverhuur.be">sluis@villairmaverhuur.be</a>
                </Typography>
            </Stack>
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

export default Sluis;
