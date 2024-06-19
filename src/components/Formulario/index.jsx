import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Formulario = ({ title, action }) => {

    const [dataForm, setDataForm] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dataForm);
        setDataForm({}); 
        document.querySelectorAll('input').forEach(input => {
            input.value = '';
        });
        document.querySelector('textarea').value = '';
        document.querySelector('#selecao').value = '';
        /* TODO: Implementar salvamento de dados */
    }
    

    return (
        <form onSubmit={handleSubmit}>
        <StyledForm>
            <h4>{title}</h4>
            <input type="text" value={dataForm.titulo} placeholder="Título" onChange={(e) => setDataForm({ ...dataForm, titulo: e.target.value })} />
            <select id="selecao" value={dataForm.selecao} onChange={(e) => setDataForm({ ...dataForm, selecao: e.target.value })} >
                <option value="" >Selecione uma Categoria</option>
                <option value="videos-front">Front End</option>
                <option value="videos-back">Back End</option>
                <option value="videos-mobile">Mobile</option>
            </select>
            <input type="text" value={dataForm.cod_video} placeholder="URL do vídeo" onChange={(e) => setDataForm({ ...dataForm, cod_video: e.target.value })} />
            <textarea type="text" value={dataForm.descricao} placeholder="Descricão" onChange={(e) => setDataForm({ ...dataForm, descricao: e.target.value })} />
            <StyledDivButtons>
                <button type="submit" onClick={handleSubmit}>{action}</button>
                <button type="reset">LIMPAR</button>
            </StyledDivButtons>
        </StyledForm>
        </form>
    )
}

const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
}

const StyledDivButtons = styled.div`
  width: 500px;
  display: flex;
  gap: 10px;
  button{
    cursor: pointer;
    &:hover {
      background-color: var(--white);
      color: var(--black);
      transition: 0.5s;
    }
  } 
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  input, select, textarea{
    width: 500px;
    height: 40px;
    border-radius: 8px;
    border: 0.5px solid var(--gray);
    background-color: var(--back1);
    color: var(--white);
    font-family: var(--font);
    font-size: var(--fntsz-small);
    font-weight: 500;
    padding-left: 10px;
    margin-bottom: 20px;
  }
    select{
        width: 515px;
        color: var(--gray1);
    }
    textarea{
        height: 100px;
    }
    button{
        cursor: pointer;
        &:hover {
            background-color: var(--white);
            color: var(--black);
            transition: 0.5s;
        }
        width: 500px;
        height: 40px;
        border-radius: 8px;
        background-color: var(--black);
        color: var(--white);
        border: none;
        color: var(--white);
        font-family: var(--font);
        font-size: var(--fntsz-small);
        font-weight: 500;
    }
    h4{
        font-family: var(--font);
        font-weight: 500;
        color: var(--white);
        font-size: 40px;
        margin-top: 30px;
        margin-bottom: 20px;
  }
`

export default Formulario