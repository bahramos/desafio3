import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#Technology'>Tecnologias</Nav.Link></li>
                <li><Nav.Link href='#About'>Sobre mim</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://github.com/bahramos'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/b%C3%A1rbara-ramos-04320b93/'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar