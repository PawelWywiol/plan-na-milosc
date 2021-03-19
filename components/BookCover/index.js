import styled from "@emotion/styled";

import { SendEvent } from "../Analytics";

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
    SendEvent("kup-na-empik-com");
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
        <Button color="primary" onClick={onClick} href="https://rcl.ink/QUGhn">
          Kup na empik.com
        </Button>
      </ButtonWrapper>
    </BookCoverWrapper>
  );
}
