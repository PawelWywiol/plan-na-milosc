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
          SendEvent("FacebookShare");
        }}
      >
        <FacebookIcon />
      </FacebookShareButton>{" "}
      <TwitterShareButton
        url={"https://plannamilosc.pl/"}
        title={"Sprawdź, jakim typem randkowicza jesteś!"}
        onClick={() => {
          SendEvent("TwitterShare");
        }}
      >
        <TwitterIcon />
      </TwitterShareButton>{" "}
      <WhatsappShareButton
        url={"https://plannamilosc.pl/"}
        title={"Sprawdź, jakim typem randkowicza jesteś!"}
        separator=":: "
        onClick={() => {
          SendEvent("WhatsupShare");
        }}
      >
        <WhatsappIcon />
      </WhatsappShareButton>{" "}
      <TelegramShareButton
        url={"https://plannamilosc.pl/"}
        title={"Sprawdź, jakim typem randkowicza jesteś!"}
        onClick={() => {
          SendEvent("TelegramShare");
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
          SendEvent("LinkZdobadzSwojPlanNaMiloscTutaj");
          return false;
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
        <a
          href="https://www.znak.com.pl/"
          onClick={(e) => {
            SendEvent("link_do_znak_com_pl");
            return false;
          }}
        >
          Społeczny Instytut Wydawniczy Znak Sp. z o.o.
        </a>
      </small>
    </center>
  </Section>
);
export default Footer;
