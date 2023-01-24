import classes from "./AvailableMerch.module.css";
const DUMMY_MERCH = [
  {
    id: "m1",
    name: "Maccabi Tel Aviv 07/08 t-shirt",
    description:
      "A souvenir from the European runner-up from the 2007/08 season",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Barcelona 2009/10 shorts",
    description:
      "A souvenir from the European champion from the 2009/10 season",
    price: 16.5,
  },
  {
    id: "m3",
    name: "CSKA 2007/08 shorts",
    description:
      "A souvenir from the European champion from the 2008/09 season",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Maccabi Tel Aviv 2013/14 t-shirt",
    description:
      "A souvenir from the European champion from the 2013/14 season",
    price: 18.99,
  },
];

const AvailableMerch = () => {
  const merchList = DUMMY_MERCH.map((merch) => <li>{merch.name}</li>);

  return (
    <section className={classes.merch}>
      <ul>{merchList}</ul>
    </section>
  );
};

export default AvailableMerch;
