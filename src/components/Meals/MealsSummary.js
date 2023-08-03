import styles from "./MealsSummary.module.css";

export default function MealsSummary() {
  return (
    <section className={styles.summary}>
      <h2>Vrhunska gurmanska jela i kvaliteta koja se cijeni!</h2>
      <p>
        Birajte slasna jela iz naše bogate ponude i počastite se kvalitetnim i
        zdravim ručkom ili večerom jer vi to zaslužujete!
      </p>
      <p>
        Naša jela pripremljena su od strane vrhunskih domaćih kuhara koji
        odbijaju koristiti namirnice koje nisu iz naših vrtova i naših farmi!
      </p>
    </section>
  );
}
