import { h } from "preact";
import style from "./style.css";

type PropsType = {
  data: any[];
};

const Facts = (props: PropsType) => {
  return (
    <ul>
      {props.data.map((fact) => (
        <div key={Math.random()}>
          <li>{fact.text}</li>
        </div>
      ))}
    </ul>
  );
};

export default Facts;
