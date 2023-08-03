import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleRemoveItem = (id) => {
    cartCtx.removeItem(id);
  };
  const handleAddItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={handleRemoveItem.bind(null, item.id)}
            onAdd={handleAddItem.bind(null, item)}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}

      <div className={styles.total}>
        <span>Ukupni iznos:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Zatvori
        </button>
        {hasItems && <button className={styles.button}>Naruči</button>}
      </div>
    </Modal>
  );
}
