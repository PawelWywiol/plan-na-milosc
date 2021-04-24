import styled from "@emotion/styled";

import { ClickEventWrapper } from "./Analytics";

const Button = styled.a`
  line-height: 1.2;
  border-radius: 6px;
  padding: 1rem 2.6rem;
  font-weight: 500;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
  border-width: 1px;
  font-style: normal;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  background-color: var(--light-background);
  color: var(--light-text);
  margin: var(--gap-sm) auto;
  cursor: pointer;
  box-shadow: 0px 8px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--primary-text);
  white-space: nowrap;

  @media (max-width: 760px) {
    font-size: 0.7rem;
    font-size: 3.4vmin;
    padding: 1rem 1.3rem;
  }

  &:hover {
    background-color: var(--primary-background);
    color: var(--primary-text);
    border-color: var(--primary-text);
  }

  ${(props) =>
    props.color === "primary"
      ? `
    background-color: var(--primary-background);
    color: var(--primary-text);
  `
      : ``}

  ${(props) =>
    props.color === "negative"
      ? `
    background-color: var(--dark-background);
    color: var(--dark-text);
  `
      : ``}

${(props) =>
    props.color === "dark"
      ? `
    background-color: var(--dark-background);
    color: var(--dark-text);
  `
      : ``}
`;

const Sides = styled.div`
  position: relative;
  display: flex;
  column-gap: var(--gap-lg);
  justify-content: center;
  align-items: center;
  @media (max-width: 920px) {
    flex-direction: column;
    row-gap: var(--gap-lg);
  }
`;
const Side = styled.div`
  position: relative;
  flex: 1;
  @media (max-width: 920px) {
    width: 100%;
  }
`;

const SectionWrapper = styled.section`
  display: block;
  position: relative;
  padding: var(--gap-xl) 0;

  background-image: url(${(props) =>
    props.background ? "/images/waves-background.webp" : ""});

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) =>
    props.color === "primary"
      ? `
    background-color: var(--primary-background);
    color: var(--primary-text);
  `
      : ``}
  ${(props) =>
    props.color === "negative"
      ? `
    background-color: var(--dark-background);
    color: var(--dark-text);
  `
      : ``}
    ${(props) =>
    props.color === "dark"
      ? `
    background-color: var(--dark-background);
    color: var(--dark-text);
  `
      : ``};
`;

const SectionContent = styled.div`
  display: block;
  position: relative;
`;

const SectionChildren = styled.div`
  width: calc(1280px - 2 * var(--section-side-gap));
  max-width: calc(100vw - 2 * var(--section-side-gap));
  margin: 0 auto;
`;

const Section = ({ children, color, background }) => (
  <SectionWrapper color={color} background={background}>
    <SectionContent>
      <SectionChildren>{children}</SectionChildren>
    </SectionContent>
  </SectionWrapper>
);

export { Section, Sides, Side, Button, ClickEventWrapper };
