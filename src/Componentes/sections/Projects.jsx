import styles from './Projects.module.css'
import Cards from '../elements/Cards'
import lpdnc from '../../Image/projects/lpdnc.svg'
import arquitetura from '../../Image/projects/arquitetura.svg'
import hnn from '../../Image/projects/hnn.svg'
import lpccxp from '../../Image/projects/lpccxp.svg'

function Projects(){
    return(
        <div>
            <h1>Projetos</h1>
            <div className={styles.projects} id='Projects'>
                <div>
                    <Cards
                    img={lpdnc}
                    title="LP - DNC"
                    desc="Desenvolvimento de uma Landing Page para o lançamento da Formação em Tecnologia."
                    repo="https://primeiralandingpagebarbara.netlify.app/"
                    />
                    <Cards
                    img={arquitetura}
                    title="Arquitetura"
                    desc="Página empresarial do ramo de Arquitetura."
                    repo="https://desafio1arquiteturabarbara.netlify.app/"
                    />
                </div>
                <div>
                <Cards
                    img={lpccxp}
                    title="LP - CCXP"
                    desc="Desenvolvimento de uma Landing Page para venda de ingressos de um evento."
                    repo="https://landing-page-ccxp-pearl.vercel.app/"
                    />
                    <Cards
                    img={hnn}
                    title="HNN - Gestão e Assessoria"
                    desc="Desenvolvimento de uma página de apresentação empresarial."
                    repo="https://hnngestaoeassessoria.vercel.app/"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects