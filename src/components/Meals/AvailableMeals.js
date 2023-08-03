import React from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const PLACEHOLDER_MEALS = [
  {
    id: "m1",
    name: "Pohana piletina + prilog",
    description:
      "Pohani pileći odrezak i prilog po izboru, kruh i tartat uključeni",
    price: 8,
  },
  {
    id: "m2",
    name: "Grill piletina + prilog",
    description:
      "Pileći odrezak pečen na roštilju i prilog po izboru, kruh i tartar uključeni",
    price: 8,
  },
  {
    id: "m3",
    name: "Salata piletina",
    description:
      "Slasna i zdrava salata za tijelo koje baš treba osvježenje; rajčica, zelena salata, zelje, piletina",
    price: 5,
  },
  {
    id: "m4",
    name: "Juha od rajčice",
    description: "Kremasta juha obogaćena raznim začinima (kurkum, biber)",
    price: 3,
  },
];

export default function AvailableMeals() {
  const mealsList = PLACEHOLDER_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
