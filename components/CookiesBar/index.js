import React, { useState } from "react";

import styled from "@emotion/styled";

import { Button } from "../index";

const CookiesWrapper = styled.div`
  display: block;
  position: fixed;
  bottom: var(--gap-md);
  right: var(--gap-md);
  z-index: 1000;
`;
const CookiesContent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-background);
  color: var(--dark-text);
  padding-right: var(--gap-md);
  font-weight: 300;
  font-size: 0.8rem;
  max-width: calc(100vw - 2 * var(--gap-md));
  border-radius: var(--gap-sm);
  ${Button} {
    padding: var(--gap-sm);
  }
`;
const TextWrapper = styled.div`
  padding: var(--gap-md);
`;
const ButtonWrapper = styled.div``;

export default function CoockiesBar() {
  const [visible, setVisibility] = useState(true);
  return (
    visible && (
      <CookiesWrapper>
        <CookiesContent>
          <TextWrapper>
            Strona korzysta z plików cookies. Są one wykorzystywane w celu jak
            najlepszego świadczenia usług i dostosowania strony do Państwa
            potrzeb.
          </TextWrapper>
          <ButtonWrapper>
            <Button color="dark" onClick={() => setVisibility(false)}>
              ok
            </Button>
          </ButtonWrapper>
        </CookiesContent>
      </CookiesWrapper>
    )
  );
}
