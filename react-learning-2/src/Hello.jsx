function Hello() {
  let myName = "Prashant";
  let number = 4128;
  let fullName = () => {
    return "Prashant Kumbhar";
  };

  return (
    <p>
      Messageno: {number} I am {fullName()}
    </p>
  );
}

export default Hello;
