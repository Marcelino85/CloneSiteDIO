import { Link } from 'react-router-dom'
import bannerImagem from '../../assets/banner.png'
import { Button } from '../../components/Button'
import { Card } from '../../components/Cards'
import { UserInfo } from '../../components/UserInfo'
import { Header } from '../../components/Header'
import { Container, column ,Title, TitleHighlight, Column } from './styles'

const Feed = () => {
    return(
        <>
        <Header />
       
        <Container>
            <Column flex={3}>
                <Card />
                
            </Column>

            <Column flex={1}>
            <TitleHighlight># TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            nome="Marcelino Albuquerque"
            image="https://avatars.githubusercontent.com/u/106674529?v=4"
            percentual={40}
          />
                          
               
            </Column>
            
        </Container>
        
        </>
    )
}

export {Feed}