
import { Card } from '../../components/Cards'
import { UserInfo } from '../../components/UserInfo'
import { Header } from '../../components/Header'
import { Container, Column ,Title, TitleHighlight } from './styles'

const Feed = () => {
    return(
        <>
        <Header autenticado={true}/>
       
        <Container>
            <Column flex={3}>
              <Title>Feed</Title>
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