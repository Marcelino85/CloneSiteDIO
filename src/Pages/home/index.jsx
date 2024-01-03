import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
const Home = ()=>{
    return(
        <>
        <Header />
        <Button title="Teste 01"/>
        <Button variant='secondary' title="Teste 02"/>
        <Link to ="/login">Fazer login</Link>
        </>
    )
}

export {Home}