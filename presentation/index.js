// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  city: require("../assets/city.jpg"),
  back1: require("../assets/back1.jpg"),
  cover: require("../assets/cover.jpg")
};

preloader(images);

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React JS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            a javascript library to build the UI
          </Text>
          <Text margin="30px 0 0 0" textColor="quarternary">
            <Link href="https://github.com/M-ZubairAhmed" textColor="quarternary">M-ZubairAhmed</Link>
            <br/>
            <Link href="https://github.com/aravindballa" textColor="quarternary">aravindballa</Link>
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.back1} bgDarken="0.4">
          <Heading size={6} textColor="primary" caps>Agenda</Heading>
          <Text size={6} textColor="tertiary">Why React?</Text>
          <Text size={6} textColor="tertiary">Some basics of React</Text>
          <Text size={6} textColor="tertiary">Let's code an app!</Text>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={6} textColor="secondary" caps>Challenges with existing ones</Heading>
          <Text textColor="tertiary">jQuery</Text>
          <List>
            <ListItem>Direct DOM manupulation</ListItem>
            <ListItem>Slow</ListItem>
            <ListItem>Scaling</ListItem>
            <ListItem>No seperation of concerns</ListItem>
          </List>
          <Image src={"https://qph.ec.quoracdn.net/main-qimg-e8c49117f14d32200ef17f98a4b4059c"} height="300"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={6} textColor="secondary" caps>Challenges with existing ones</Heading>
          <Text textColor="tertiary">Angular</Text>
          <List>
            <ListItem>It's a framework!</ListItem>
            <ListItem>2 way binding</ListItem>
            <ListItem>Size of framework is bloated</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={6} textColor="secondary" caps>Why React? ❤️</Heading>
          <List>
            <ListItem>View MVC</ListItem>
            <ListItem>Virtual Dom</ListItem>
            <ListItem>Declarative</ListItem>
            <ListItem>Component Based</ListItem>
            <ListItem>SSR</ListItem>
            <ListItem>Javascript 😍</ListItem>
            <ListItem>Non Opiniated</ListItem>
            <ListItem>Its Functional</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={6} textColor="secondary" caps>Size Comparision</Heading>
          <Image src={"https://media.discordapp.net/attachments/384947522218622977/391216116107575306/image.png"}/>
        </Slide>

        <Slide transition={["fade"]} bgDarken="0.7" bgImage="https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/d560e7d7d695293217875d2db6fbb35b31fc1991_2880x1620.jpg?w=1200" textColor="primary">
          <BlockQuote>
            <Quote>Talk is cheap. Show me the code!</Quote>
            <Cite>Linus Torvalds</Cite>
          </BlockQuote>
        </Slide>

      </Deck>
    );
  }
}
