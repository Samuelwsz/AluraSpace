import Cabecalho from "@/Components/Cabecalho"
import Menu from "@/Components/Menu"
import styles from "./PaginaInicial.module.scss"
import Banner from "@/Components/Banner"
import Rodape from "@/Components/Rodape"
import Galeria from "@/Components/Galeria"
import Populares from "@/Components/Populares"

const PaginaInicial = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  )
}
export default PaginaInicial
