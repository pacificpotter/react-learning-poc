function Random() {
  let number = Math.random() * 100;
  return (
    <h1 style={{ "background-color": "#444555" }}>
      random number is : {Math.round(number)}
    </h1>
  );
}

export default Random;
