import styles from "./FoodInput.module.css";

// const FoodInput = ({ handleOnChange }) => {
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter food item here"
      className={styles.foodInput}
      // onChange={handleOnChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
