import styles from '../sections/Footer.module.css'
import { FaGithub, FaLinkedin,FaFigma } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
            <li>Meu contato: <br/>
            (13)99764-5435</li>
            <li>Email: <br/>
            bah_ramos@msn.com</li>
            <ul>
                <li><a href='https://github.com/bahramos'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/b%C3%A1rbara-ramos-04320b93/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://www.figma.com/files/user/1306257079098499339?fuid=1306257079098499339'><FaFigma size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Footer