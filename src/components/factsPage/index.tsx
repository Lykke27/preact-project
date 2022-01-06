import { h, Fragment } from "preact";
import style from "./style.css";

type PropsType = {
  data: any[];
};

const Facts = (props: PropsType): JSX.Element => {
  return (
    <>
      <h1>Fun Facts!</h1>
      <ul>
        {props.data.map((fact) => (
          <div key={Math.random()}>
            <li>{fact.text}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Facts;
