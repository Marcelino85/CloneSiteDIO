import {MdEmail, MdLock} from 'react-icons/md'
import{useNavigate} from 'react-router-dom' 


import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin,Wrappar } from './styles'
const Login = ()=>{

    const navigate = useNavigate();

  
    const handleClickSignIn=()=>{
        navigate('/feed')
    }

    return(
        <>
        <Header />
        <Container>
            <Column>
               
                <Title>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional,
                 evoluindo em comunidade com os melhores experts.
                </Title>
               
            </Column>
            <Column>
                <Wrappar>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>

                    <form >
                        <Input placeholder="Endereço de e-mail" leftIcon={<MdEmail/>}/> 
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant='secondary' onClick={handleClickSignIn} type="submit" />

                    </form>

                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>

                </Wrappar>
            </Column>
        </Container>
        
        </>
    )
}

export {Login}