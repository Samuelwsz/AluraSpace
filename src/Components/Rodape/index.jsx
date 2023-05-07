import styles from "./Rodape.module.scss"
import face from "./facebook.svg"
import ig from "./instagram.svg"
import tw from "./twitter.svg"

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a href="">
          <img src={face} alt="" />
        </a>
        <a href="">
          <img src={ig} alt="" />
        </a>
        <a href="">
          <img src={tw} alt="" />
        </a>
      </div>
      <div>
        <p>Desenvolvido por Alura</p>
      </div>
    </footer>
  )
}

export default Rodape
