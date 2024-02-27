import styled from 'styled-components'

export const InputContainer = styled.div`
    width:100%;
    max-width:295px;
    height:30px;
    border-botton:1px solid #3b3450;
      
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 20px 0;
    `
    
    export const IconContainer = styled.div`
    margin-right:10px;
    color: #8647AD;
    
    
`

export const InputText = styled.input`
    background-color:transparent;
    color:#FFFFFF;
    width:100%;
    border:0;
    height:30px;
    padding:5px;
    font-size:1rem;
`

export const ErrorText = styled.p`
    color:#FF0000;
    font-size:12px;
    margin:5px 0;
`