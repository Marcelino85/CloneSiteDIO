import { Link } from 'react-router-dom'
import bannerImagem from '../../assets/banner.png'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Container, TextContent, Title, TitleHighlight } from './styles'
const Home = ()=>{
    return(
        <>
        <Header />
        <Container>
            <div>
                <Title> <br />
                    <TitleHighlight>
                    Implemente
                    <br />
                    </TitleHighlight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional,
                 evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title='Começar agora' variant="secundary" onClick={()=>null} />
            </div>
            <div>
                <img src={bannerImagem} alt='imagem principal' />
            </div>
        </Container>
        
        </>
    )
}

export {Home}