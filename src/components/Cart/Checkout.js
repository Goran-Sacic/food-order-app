import { useRef, useState } from "react";

import React from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `${styles.control} ${
    formInputsValidity.name ? "" : styles.invalid
  }`;

  const streetControlClasses = `${styles.control} ${
    formInputsValidity.street ? "" : styles.invalid
  }`;

  const postalCodeControlClasses = `${styles.control} ${
    formInputsValidity.postalCode ? "" : styles.invalid
  }`;

  const cityControlClasses = `${styles.control} ${
    formInputsValidity.city ? "" : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Vaše ime</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Molimo unesite važeće ime.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Ulica</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Molimo unesite važeću ulicu.</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Poštanski broj</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Molimo unesite vežeći poštanski broj.</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">Grad</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Molimo unesite vežeći grad.</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Zatvori
        </button>
        <button className={styles.submit}>Potvrdi</button>
      </div>
    </form>
  );
};

export default Checkout;
