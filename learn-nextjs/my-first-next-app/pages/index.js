import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="NextGenApps is a leading service provider in Information Technology Consulting, designing of custom software applications for mobile and web."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://nextgenapps.in">
            <img src="/logo.png" width={250} className={styles.logo}></img>
          </a>
        </h1>

        <p className={styles.description}>
          Transforming Businesses by building Next Generation Applications.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Who we are &rarr;</h2>
            <p>
              NextGenApps is a leading service provider in Information
              Technology Consulting, designing and development of custom
              software applications for mobile and web.
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Services &rarr;</h2>
            <ul>
              <li>Web Application Development</li>
              <li>Mobile Application Development</li>
              <li>DevOps Services</li>
              <li>QA Services</li>
              <li>Cloud Development (Azure and AWS)</li>
              <li>Support Services</li>
              <li>Project Management</li>
              <li>Staffing Services</li>
            </ul>
          </a>

          <a href="#" className={styles.card}>
            <h2>How to reachout? &rarr;</h2>
            <ul>
              <li>Email: info@nextgenapps.in</li>
              <li>
                Mobile: +91-9988461939,
                <br /> +91-9569680377
              </li>
            </ul>
            <br/>
            <em><strong>For Careers</strong>: You can drop your resume on info@nextgenapps.in, vinay@nextgenapps.in</em>
            
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Tech Stack &rarr;</h2>
            <ul>
              <li>Server Side Tech: .Net Core, php, Codeigniter, nodejs</li>
              <li>Front End: HTML, CSS, JavaScript, JQuery, Angular, React, Vue</li>
              <li>Databases: SQL, MySQL, Firebase, MongoDB, Cosmos DB</li>
              <li>Cloud: Azure, AWS</li>
            </ul>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span>&nbsp;NextGenApps</span>
        </a>
      </footer>
    </div>
  );
}
