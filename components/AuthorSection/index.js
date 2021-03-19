import styled from "@emotion/styled";

import { Section, Sides, Side } from "../index";

const Info = styled.div``;

const FixedSides = styled(Sides)`
  @media (max-width: 920px) {
    flex-direction: column-reverse;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex-grow: 0.3;
  @media (max-width: 920px) {
    width: 100%;
  }
  img {
    display: block;
    position: relative;
    border-radius: 50%;
    max-width: 100%;
    min-width: 100%;
    width: 0;
    max-height: calc(100vh - 2 * 56px);
    object-fit: contain;
  }
`;

export default function AutorSection() {
  return (
    <Section color="primary">
      <Info>
        <FixedSides>
          <Side>
            <p>
              <strong>Logan Ury</strong> – coach randkowania, psycholożka
              behawioralna i uznana na całym świecie ekspertka w dziedzinie
              miłości XXI wieku. Wykładowczyni TED-a. Prowadziła zespół nauk
              behawioralnych Google, jest właścicielką firmy wykorzystującej
              wiedzę z nauk behawioralnych w życiu miłosnym
            </p>
          </Side>
          <ImageWrapper>
            <img
              src="/images/ury-logan.jpg"
              alt="Logan Ury"
              title="Logan Ury"
            />
          </ImageWrapper>
        </FixedSides>
      </Info>
    </Section>
  );
}
