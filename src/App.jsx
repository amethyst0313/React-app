import Fruits from "./Components/Fruits";

function App() {
  const fruits = [
    { id: 1, name: "Apple", price: 25 },
    { id: 2, name: "Banana", price: 70 },
    { id: 3, name: "Coconut", price: 35 },
    { id: 4, name: "Durian", price: 50 },
    { id: 5, name: "Mango", price: 100 },
  ];

  return (
    <>
      <Fruits items={fruits} category="Fruit Shop" />
    </>
  );
}

export default App;
