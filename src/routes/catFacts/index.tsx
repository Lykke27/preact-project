import axios from "axios";
import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./style.css";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Facts from "../../components/factsPage";

const CatFacts: FunctionalComponent = () => {
  const area = "facts";
  const apiUrl = "https://cat-fact.herokuapp.com/facts";
  const { promiseInProgress } = usePromiseTracker({ area });
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    trackPromise(axios.get(apiUrl), area).then(({ data }) => {
      setFacts(data);
    });
  }, []);

  return (
    <div class={style.facts}>
      {promiseInProgress ? <div>Loading...</div> : <Facts data={facts} />}
    </div>
  );
};

export default CatFacts;
