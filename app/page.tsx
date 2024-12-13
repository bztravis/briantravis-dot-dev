import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <p>brian travis [dot] dev</p>
        <div className={styles.links}>
          <a href='https://twitter.com/_briantravis' target='_blank'>
            Twitter
          </a>
          <a href='https://www.linkedin.com/in/brian-z-travis/' target='_blank'>
            LinkedIn
          </a>
          <a href='https://github.com/bztravis' target='_blank'>
            GitHub
          </a>
          <a href='https://briantravisphoto.com' target='_blank'>
            Portrait Photography
          </a>
        </div>
      </div>
      <div>
        <h1>Coming</h1>
        <h1>Soon</h1>
      </div>
    </div>
  );
}
