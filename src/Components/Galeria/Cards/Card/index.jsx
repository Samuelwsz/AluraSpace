import favorito from "./favorito.png"
import open from "./open.png"

const Card = ({ item, styles }) => {
  return (
    <li className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={item.imagem}
        alt={item.titulo}
      />
      <p className={styles.galeria__descricao}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
          <img src={favorito} alt="icone curtir" />
          <img src={open} alt="icone abrir modal" />
        </span>
      </div>
    </li>
  )
}

export default Card
