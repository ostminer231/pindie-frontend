import Styles from "./CardsListSection.module.css";
import { CardsList } from "./CardsList";


export const CardsListSection = (props) => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
       <CardsList data={props.data} />
    </section>
  );
};
