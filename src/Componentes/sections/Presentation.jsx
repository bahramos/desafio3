import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation() {
    return (
        <div className={styles.presentation}>
        <h1>Bárbara do Prado Ramos</h1>
        <p>Sou administradora de empresas, estou migrando para a área de Tecnologia com ênfase em Desenvolvimento Web. <br/>
            Entre minhas habilidades destaco a facilidade em revolver problemas diversos com praticidade e eficiência. <br/>
            Adoro novos desafios e estou sempre me atualizando buscando novos conhecimentos e soluções. <br/>
          </p>
        <ButtonA text='Saiba mais' link='https://www.linkedin.com/in/b%C3%A1rbara-ramos-04320b93/'/>
    </div>
    )
}

export default Presentation