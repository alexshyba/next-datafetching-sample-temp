import styles from "../styles/Home.module.css";

export default function Home({ facts }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Cat facts</h1>
        <h2 className={styles.description}>these are fetched and rendered at build time</h2>
        <ul>
          {facts.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://cat-fact.herokuapp.com/facts");
  const data = await res.json();

  if (data && Array.isArray(data)) {
    const facts = data.map((f) => f.text);
    return {
      props: {
        facts,
      },
    };
  }

  return {
    props: {},
  };
}
