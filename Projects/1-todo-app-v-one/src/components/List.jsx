import Container from "./Container";
import ErrorMessage from "./ErrorMessage";
import FoodItems from "./FoodItems";
import FoodInput from "./FoodInput";
import { useState } from "react";

function List() {
  // useState return array with two elements current value & method
  let [foodItems, setFoodItems] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={handleKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>
          Above items are healthy that are good for your health and well being
        </p>
      </Container> */}
    </>
  );
}

export default List;
