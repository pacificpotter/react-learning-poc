import Container from "./Container";
import ErrorMessage from "./ErrorMessage";
import FoodItems from "./FoodItems";
import FoodInput from "./FoodInput";

function List() {
  let foodItems = ["Curry", "Green vegitables", "Roti", "Salad", "Milk"];
  // let foodItems = [];
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput></FoodInput>
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
