import styled from "@emotion/styled";

import { Section, Sides, Side } from "../index";

import Title from "../Title";
import BookCover from "../BookCover";
import TestSection from "../TestSection";

const FixedSides = styled(Sides)`
  align-items: flex-start;
  ${Side}:first-of-type {
    position: sticky;
    top: var(--gap-md);
    @media (max-width: 920px) {
      position: relative;
      top: auto;
    }
  }
`;

export default function HomeSection() {
  return (
    <Section background>
      <Title />
      <FixedSides>
        <Side>
          <BookCover />
        </Side>
        <Side>
          <TestSection />
        </Side>
      </FixedSides>
    </Section>
  );
}
