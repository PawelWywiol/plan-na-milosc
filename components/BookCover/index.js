import styled from "@emotion/styled";

import { ClickEventWrapper } from "../Analytics";

import { Button } from "../index";

const BookCoverWrapper = styled.div`
  position: relative;
`;

const ImageWrapper = styled.a`
  position: relative;
  flex-grow: 1;
  img {
    display: block;
    position: relative;
    max-width: 100%;
    min-width: 100%;
    width: 0;
    max-height: calc(100vh - 2 * 56px);
    object-fit: contain;
  }
`;

const ButtonWrapper = styled.p`
  text-align: center;
  position: sticky;
  bottom: 0;
`;

export default function BookCover() {
  const onClick = () => {
    SendEvent("AddToCart");
    SendEvent("KupNaEmpikCom");
    return false;
  };
  return (
    <BookCoverWrapper>
      <ImageWrapper onClick={onClick} href="https://rcl.ink/QUGhn">
        <img
          src="/images/book-cover.png"
          alt="Plan na miłość czyli jak stworzyć fajny związek"
          title="Plan na miłość czyli jak stworzyć fajny związek"
        />
      </ImageWrapper>
      <ButtonWrapper>
        <ClickEventWrapper
          component={Button}
          eventname={["KupNaEmpikCom", "AddToCart"]}
          aria-label={"Kup na empik.com"}
          href="https://rcl.ink/QUGhn"
          color="primary"
        >
          Kup na empik.com
        </ClickEventWrapper>
        <ClickEventWrapper
          component={Button}
          eventname={["KupNaWoblink"]}
          aria-label={"Kup na woblink.com"}
          href="https://woblink.com/ebook/plan-na-milosc-czyli-jak-stworzyc-fajny-zwiazek-aleksandra-gietka-ostrowska-logan-ury-211911u"
          color="primary"
        >
          Kup na woblink.com
        </ClickEventWrapper>
      </ButtonWrapper>
    </BookCoverWrapper>
  );
}
