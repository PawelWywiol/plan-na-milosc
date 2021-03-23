import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";

import { SendEvent } from "../Analytics";

import { Button } from "../index";

const Info = styled.div`
  position: relative;
`;

const CardsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 530px;
  @media (max-width: 760px) {
    height: 480px;
  }
`;
const Cards = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 480px;
  margin: var(--gap-md) auto;
  @media (max-width: 760px) {
    height: 420px;
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  transform: translate3d(-50%, 0, 0);
  z-index: ${(props) => 100 - Math.abs(props.shift || 0)};
`;

const CardWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: var(--card-background);
  color: var(--card-text);
  margin: var(--gap-md) auto;
  text-align: center;
  border-radius: var(--gap-sm);
  box-shadow: 0px 8px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate3d(
    calc(0px + ${(props) => props.shift || 0} * var(--gap-md)),
    0,
    0
  );
  opacity: ${(props) => (props.shift ? 0 : 1)};
  visibility: ${(props) =>
    Math.abs(props.shift || 0) < 4 ? "visible" : "hidden"};
`;
const CardContent = styled.div`
  padding: var(--gap-lg) var(--gap-lg) var(--gap-md);
  @media (max-width: 760px) {
    padding: var(--gap-md) var(--gap-md) var(--gap-md);
  }
`;
const Attitude = styled.h2`
  font-size: 1.2rem;
  line-height: 1.4;
`;

const Counter = styled.div``;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: var(--gap-sm);
  a {
    margin-bottom: var(--gap-sm);
    margin-top: var(--gap-sm);
  }
`;

const NavWrapper = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  z-index: 100;
  @media (max-width: 760px) {
    top: 80%;
  }
`;
const NavContent = styled.div`
  display: block;
  position: relative;
  width: 70%;
  margin: auto;
  @media (max-width: 760px) {
    width: 60%;
  }
`;
const NavButton = styled.div`
  display: block;
  position: absolute;
  top: 0;
  border-left: 8px solid var(--primary-background);
  border-bottom: 8px solid var(--primary-background);
  width: 40px;
  height: 40px;
  transform: ${(props) =>
    props.prev
      ? "translate3d(-100%, -100%, 0) rotateZ(45deg) scale(1)"
      : "translate3d(100%, -100%, 0) rotateZ(-135deg) scale(1)"};
  ${(props) => (props.prev ? "left: 0;" : "right: 0;")}
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: ${(props) =>
      props.prev
        ? "translate3d(-100%, -100%, 0) rotateZ(45deg) scale(1.1)"
        : "translate3d(100%, -100%, 0) rotateZ(-135deg) scale(1.1)"};
  }
`;

const StyledH2 = styled.h2`
  color: var(--primary-background);
`;

const StyledP = styled.p`
  ${(props) =>
    props.selected
      ? `
    background-color: var(--primary-background);
    color: var(--primary-text);
    margin-left: -var(--gap-md);
    margin-right: -var(--gap-md);
    padding: var(--gap-md);
  `
      : ``}
`;

export default function TestSection() {
  const attitudes = [
    "Nie umawiam się na kolejną randkę, jeśli na pierwszej nie zaiskrzy.",
    "Na randce zastanawiam się, czy ta osoba spełnia moje kryteria.",
    "Czy nadal będę się spotykał się z tym kimś, jeśli zmienię się na plus (schudnę albo będę lepiej zarabiał)?",
    "Byłoby fajnie, gdyby połączył nas romantyczny traf.",
    "Zanim coś kupię, zapoznaję się z opinią innych.",
    "Nie mam teraz czasu na randki.",
    "Wierzę, że gdzieś czeka na mnie idealny partner. Po prostu jeszcze się nie spotkaliśmy.",
    'Podejmując decyzje, długo się zastanawiam, porównując wszystkie "za" i "przeciw".',
    "Znajomi mówią, że muszę częściej wychodzić.",
    "Apki randkowe są mało romantyczne. Wolę znaleźć partnera w tradycyjny sposób.",
    "Nigdy nie idę na kompromisy i jestem z tego dumny.",
    "Rzadko chodzę na randki.",
    "Nie wierzę, że miłość rodzi się z czasem. Albo czuje się ją od początku, albo wcale.",
    "Rozpoznam właściwego partnera, gdy go spotkam, bo będąc z nim, nie doznam żadnych wątpliwości.",
    "Żeby poznać kogoś wartościowego, też muszę być wartościowy.",
    "Miłość przychodzi sama. Zjawia się, kiedy chce.",
    "Znajomi mówią, że jestem zbyt wybredny.",
    "Teraz skupiam się na pracy. O randkach pomyślę później.",
  ];

  const [slide, setSlide] = useState(0);
  const [points, setPoints] = useState(new Array(attitudes.length).fill(0));

  const [mode, setMode] = useState("");

  const addPoints = (i, p) => {
    const newPoints = [...points];
    newPoints[i] = p;
    setPoints(newPoints);
  };

  const checkPoints = () => {
    const sum = new Array(3).fill(0);
    for (let i = 0; i < attitudes.length; i++) {
      if (!points[i]) {
        return setSlide(i);
      } else {
        if (i % 3 === 0) {
          sum[0] += points[i];
        }
        if (i % 3 === 1) {
          sum[1] += points[i];
        }
        if (i % 3 === 2) {
          sum[2] += points[i];
        }
      }
    }

    let result = [];

    if (sum[0] === Math.max(...sum)) {
      result.push("niepoprawnyromantyk");
    }
    if (sum[1] === Math.max(...sum)) {
      result.push("maksymalista");
    }
    if (sum[2] === Math.max(...sum)) {
      result.push("odwlekacz");
    }

    SendEvent("QuizWynik" + result.join(""));

    setMode(result.join("-"));
  };

  useEffect(() => {
    checkPoints();
  }, [points]);

  if (mode === "") {
    return (
      <Info>
        <h2>
          <strong>Sprawdź, jakim typem randkowicza jesteś!</strong>
        </h2>
        <p>
          Zastanawiacie się, dlaczego Wasze życie miłosne nie jest takie, o
          jakim marzycie? Gdzie popełniacie błąd? Ten test pozwoli Wam określić,
          jakim typem randkowicza jesteście, a książka wskaże, jak zmienić swoje
          wyobrażenia o miłości w realne działania.
        </p>
        <p style={{ textAlign: "center" }}>
          <Button
            onClick={() => {
              SendEvent("QuizStart");
              setMode("test");
            }}
            color="primary"
          >
            Zaczynamy
          </Button>
        </p>
      </Info>
    );
  } else if (mode === "test") {
    return (
      <Info>
        <p>
          Przeczytajcie uważnie każde zdanie, a następnie wskażcie, w jakim
          stopniu was określa. Zaznaczcie właściwą odpowiedź.
        </p>
        <CardsWrapper>
          <Cards>
            {attitudes.map((attitude, i) => (
              <SlideWrapper key={i} shift={i - slide}>
                <CardWrapper shift={i - slide}>
                  <CardContent>
                    <Counter>
                      Postawa {i + 1} / {attitudes.length}
                    </Counter>
                    <Attitude>{attitude}</Attitude>
                  </CardContent>
                  <ButtonsWrapper>
                    <Button
                      onClick={() => {
                        addPoints(i, 1);
                      }}
                      color={points[i] === 1 ? "light" : "primary"}
                    >
                      To mnie nie dotyczy
                    </Button>
                    <Button
                      onClick={() => {
                        addPoints(i, 2);
                      }}
                      color={points[i] === 2 ? "light" : "primary"}
                    >
                      Czasem się zdarza
                    </Button>
                    <Button
                      onClick={() => {
                        addPoints(i, 3);
                      }}
                      color={points[i] === 3 ? "light" : "primary"}
                    >
                      Wypisz, wymaluj ja
                    </Button>
                  </ButtonsWrapper>
                </CardWrapper>
              </SlideWrapper>
            ))}
          </Cards>
          <NavWrapper>
            <NavContent>
              <NavButton
                prev
                onClick={() => {
                  setSlide(slide > 0 ? slide - 1 : slide);
                }}
              />
              <NavButton
                next
                onClick={() => {
                  setSlide(slide + 1 < attitudes.length ? slide + 1 : slide);
                }}
              />
            </NavContent>
          </NavWrapper>
        </CardsWrapper>
      </Info>
    );
  } else {
    return (
      <Info>
        <br />
        {(mode || "").includes("niepoprawnyromantyk") && (
          <StyledP>
            <b>Niepoprawny romantyk:</b> Szukacie bratniej duszy, szczęśliwego
            zakończenia i życia jak w bajce. Kochacie kochać. Wierzycie, że
            jesteście sami, bo jeszcze nie spotkaliście właściwej osoby. Wasze
            życiowe motto brzmi: "Stanie się, co ma się stać". Niepoprawni
            romantycy mają wygórowane oczekiwania wobec związku.
          </StyledP>
        )}
        {(mode || "").includes("maksymalista") && (
          <StyledP>
            <b>Maksymalista:</b> Uwielbiacie tabele, zestawienia, rankingi.
            Porównujecie opinie i rozważacie wszystkie "za" i "przeciw", nim
            w końcu uznacie, że odnaleźliście właściwego partnera. Zanim
            podejmiecie decyzję, chcecie mieć stuprocentową pewność. Wasze motto
            brzmi: "Warto poczekać na najlepsze". Maksymaliści mają wygórowane
            oczekiwania wobec partnera.
          </StyledP>
        )}
        {(mode || "").includes("odwlekacz") && (
          <StyledP>
            <b>Odwlekacz:</b> Uważacie, że czas na randki jeszcze nie nadszedł,
            bo nie jesteście tacy, jakbyście sobie życzyli. Wysoko stawiacie
            sobie poprzeczkę. Zanim zaczniecie nowy projekt, musicie starannie
            się przygotować. To samo dotyczy randek. Wasze motto brzmi:
            "Zaczekam, aż będę idealny". Odwlekacze mają wygórowane oczekiwania
            wobec siebie.
          </StyledP>
        )}
        <p>
          Jeśli otrzymaliście wynik niejednoznaczny, kwalifikujący was do dwóch
          lub trzech z opisanych tu postaw, jeszcze raz przeczytajcie opis
          każdej z nich i wybierzcie najbardziej adekwatny. Jeśli nadal macie
          kłopoty, zróbcie zdjęcie i prześlijcie opisy komuś, komu ufacie. To
          wyjątkowo skuteczna metoda, ponieważ przyjaciele bardzo sprawnie
          identyfikują postawy wobec randek. Pamiętajcie, że ta ankieta odkrywa
          wasze słabości, a przyjaciele znają je jak nikt inny.
        </p>
        <p style={{ textAlign: "center" }}>
          <Button
            color="primary"
            onClick={() => {
              SendEvent("LinkKupTerazKsiazkeNaEmpikCom");
              return false;
            }}
            href="https://rcl.ink/5Dzw2"
          >
            Kup teraz książkę na Empik.com
          </Button>
        </p>
        <p>
          Skoro posiadacie już pewną wiedzę na swój temat, jeśli chodzi o
          randkowanie, zastanawiacie się pewnie: co zrobić z tym dalej? Jak
          randkować, by znaleźć miłość życia?
        </p>
        <p>Świadomość to połowa sukcesu, więc czas zabrać się do pracy!</p>
        <p>Dzięki tej książce dowiecie się:</p>
        <ul>
          <li>Jak uniknąć pułapek współczesnego randkowania.</li>
          <li>
            Jak znaleźć partnera, który w związku będzie chciał tego co ty.
          </li>
          <li>
            Która znajomość zawarta na portalu randkowym ma szansę przerodzić
            się w coś więcej.
          </li>
          <li>Kiedy zdecydować się na kolejny etap w związku.</li>
          <li>Jak wyleczyć złamane serce.</li>
        </ul>
        <br />

        <p style={{ textAlign: "center" }}>
          <Button
            onClick={() => {
              SendEvent("QuizReset");
              setPoints(new Array(attitudes.length).fill(0));
              setMode("");
            }}
            color="primary"
          >
            Spróbuj jeszcze raz
          </Button>
        </p>
      </Info>
    );
  }
}
