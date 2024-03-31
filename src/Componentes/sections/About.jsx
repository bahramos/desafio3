import Timeline from "../elements/Timeline"
import TimelineItem from "../elements/TimelineItem"

function About(){
    return(
        <div>
            <h1>Sobre mim</h1>
            <Timeline>
            <TimelineItem title="2008" content="Início da carreira trabalhando com concessão de rodovias."/>
            <TimelineItem title="2017" content="Transição de carreira, migrando para o setor de administração de empresas e licitações."/>
            <TimelineItem title="2022" content="Iniciei a gestão de um Polo Educacional, em paralelo ao trabalho de administração de empresas."/>
            <TimelineItem title="2023" content="Dei início ao curso de programação na DNC."/>
            <TimelineItem title="2024" content="Pretendo migrar para a área de tecnologia."/>
            </Timeline>
        </div>
    )
}

export default About