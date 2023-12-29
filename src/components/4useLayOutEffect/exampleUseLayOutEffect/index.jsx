import { useEffect, useState, useRef, useLayoutEffect } from "react";

export const UseLayOutEffect1 = () => {
  const triviaDiv = useRef(null);
  const [info, setInfo] = useState(null);
  const getTrivia = () => {
    return Math.floor(Math.random() * 100);
  };

  const [data, setData] = useState();
  const [triviaNumber, setTriviaNumber] = useState(
    JSON.parse(localStorage.getItem("count")) || getTrivia
  );
  const isMounted = useRef(true);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(triviaNumber));
    const getData = async () => {
      const trivia = await fetch(
        `http://numbersapi.com/${triviaNumber}/trivia`
      );

      if (isMounted) {
        const question = await trivia.text();
        console.log(question);
        setData(question);
      }
    };
    getData();
    return () => (isMounted.current = false);
  }, [triviaNumber]);

  useLayoutEffect(() => {
    const textInfo = triviaDiv.current.getBoundingClientRect();
    setInfo(JSON.stringify(textInfo, null, 2));
  }, [data]);

  const handleClick = () => {
    const newNumber = getTrivia();
    setTriviaNumber(newNumber);
  };
  return (
    <>
      <div>
        Get new Trivia: <button onClick={handleClick}>New Trivia</button>
      </div>
      <div>
        <span ref={triviaDiv}>{data}</span>
      </div>
      <pre>{info}</pre>
    </>
  );
};
