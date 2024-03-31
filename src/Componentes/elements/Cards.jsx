import styles from './Cards.module.css'
import ButtonA from './ButtonA'

function Cards({img, title, desc, repo}){
    return(
        <div className={styles.cards}>
            <img src={img}/>
            <h3>{title}</h3>
            <p>{desc}</p>
            <ButtonA text='Clique aqui' link={repo}/>
        </div>
    )
}

export default Cards