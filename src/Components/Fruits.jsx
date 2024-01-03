import style from "./Fruits.module.css";

function Fruits(props) {
  const items = props.items;
  const category = props.category;

  const fruitItems = items.map((item) => (
    <li key={item.id}>
      <b>{item.name}:</b> {item.price}
    </li>
  ));

  return (
    <div className={style.div1}>
      <h1 className={style.title}>{category}</h1>
      <ol className={style.list}>{fruitItems}</ol>
    </div>
  );
}

export default Fruits;
