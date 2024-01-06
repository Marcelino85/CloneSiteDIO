import { Link } from 'react-router-dom'
import bannerImagem from '../../assets/banner.png'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Container, TextContent, Title, TitleHighlight } from './styles'
import { Card } from '../../components/Cards'
const Feed = ()=>{
    return(
        <>
        <Header />
        <Container>
            <Card />
        </Container>
        
        </>
    )
}

export {Feed}