import { MdEmail, MdLock ,MdPerson } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { api } from "../../sevirces/api"
import {Container, Wrappar, Column, Row, Title, TitleLogin, SubTitleLogin, HaveCout, LoginNow } from './style'

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3,'No minimo três caracteres').required('Campo obrigatório'),
  }).required()

const Cadastro = ()=>{

    const navigate = useNavigate();

    const {control, handleSubmit,formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode:'onChange',
    })


    const onSubmit = async formData => {
        try{
            const {data} = await api.post(`/cadastro`, {
                nome: formData.name,
                email: formData.email,
                senha: formData.password,
            })
            if(data.length === 1){
                navigate('/feed')
            } else{
                alert('Email ou senha invalido')
            }
        }catch{
            alert('Houve um erro tente novamente!')
        }

    }

    return(
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                A plataforma para você aprender com experts, 
                dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            
            </Column>

            <Column>
                <Wrappar>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson/>}/> 
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/> 
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant='secondary' type="submit" />

                    </form>
                    

                    <Row>
                        <HaveCout>Já tenho conta.</HaveCout>
                        <LoginNow>Fazer login</LoginNow>
                    </Row>
                    
                        
                    
                </Wrappar>
            </Column>
        </Container>
        
        </>
    )
}

export {Cadastro}