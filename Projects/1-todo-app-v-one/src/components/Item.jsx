// const Item = (props) => {
//   let { foodItem } = props; // object destructuring
//   return <li className="list-group-item">{foodItem}</li>;
// };

import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton }) => {
  const handleBuyClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;