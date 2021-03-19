import styled from "@emotion/styled";

const TitleWrapper = styled.h1`
  position: relative;
  font-size: 92px;
  font-weight: 700;
  line-height: 0.6;
  text-align: center;
  font-family: futura-pt, sans-serif;
  margin: 0 auto var(--gap-xxl);
  color: var(--primary-color);
  & small {
    font-size: 44%;
  }
  @media (max-width: 760px) {
    font-size: 12vmin;
  }
`;

const Title = () => (
  <TitleWrapper>
    {" "}
    Plan na miłość
    <br />
    <small>czyli jak stworzyć fajny związek</small>
  </TitleWrapper>
);

export default Title;
