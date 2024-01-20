import React from 'react'
import logo from '../../assets/logo-dio.svg'
import {Button} from '../Button'
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da Dio' />
                {autenticado ? (
                    <>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
    
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                    
                ) : null }
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/106674529?v=4" />
                ) : (
                    <>
                    <MenuRight href="/">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                    
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }