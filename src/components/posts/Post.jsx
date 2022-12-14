import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/estevesryan.png"
            alt="Profile"
          />
          <div className={styles.authorInfor}>
            <strong>Ryan Esteves</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio รกs 08:13" dateTime="2022-05-11 08:13:38">
          Publicado hรก 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa ๐</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐
        </p>

        <p>
          ๐ <a href="#"> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#s">#novoprojeto </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
