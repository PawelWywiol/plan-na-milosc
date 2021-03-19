import { SendEvent } from "../Analytics";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";

import { Section, Button } from "../index";

const Footer = () => (
  <Section color="dark">
    <p style={{ textAlign: "center" }}>
      Udostępnij test znajomym, poznaj ich opinię i daj im szansę na poprawę
      własnego związku
    </p>
    <p style={{ textAlign: "center" }}>
      <FacebookShareButton
        url={"https://plannamilosc.pl/"}
        quote={"Sprawdź, jakim typem randkowicza jesteś!"}
        onClick={() => {
          SendEvent("facebook-share");
        }}
      >
        <FacebookIcon />
      </FacebookShareButton>{" "}
      <TwitterShareButton
        url={"https://plannamilosc.pl/"}
        title={"Sprawdź, jakim typem randkowicza jesteś!"}
        onClick={() => {
          SendEvent("twitter-share");
        }}
      >
        <TwitterIcon />
      </TwitterShareButton>{" "}
      <WhatsappShareButton
        url={"https://plannamilosc.pl/"}
        title={"Sprawdź, jakim typem randkowicza jesteś!"}
        separator=":: "
        onClick={() => {
          SendEvent("whatsup-share");
        }}
      >
        <WhatsappIcon />
      </WhatsappShareButton>{" "}
      <TelegramShareButton
        url={"https://plannamilosc.pl/"}
        title={"Sprawdź, jakim typem randkowicza jesteś!"}
        onClick={() => {
          SendEvent("telegram-share");
        }}
      >
        <TelegramIcon />
      </TelegramShareButton>
    </p>
    <br />
    <p style={{ textAlign: "center" }}>
      <Button
        color="primary"
        onClick={() => {
          SendEvent("zdobadz-swoj-plan-na-milosc-tutaj");
        }}
        href="https://rcl.ink/QUGhn"
      >
        Zdobądź swój plan na miłość tutaj
      </Button>
    </p>
    <br />
    <center>
      <small>
        Copyright © 2021{" "}
        <a href="https://www.znak.com.pl/">
          Społeczny Instytut Wydawniczy Znak Sp. z o.o.
        </a>
      </small>
    </center>
  </Section>
);
export default Footer;
