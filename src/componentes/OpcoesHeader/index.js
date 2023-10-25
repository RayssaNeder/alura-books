
import styled from 'styled-components';

const OpcoesContainer= styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    text-align: center;
`
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader(){
    return(
        <OpcoesContainer>
         { textoOpcoes.map((texto) => (
          <Opcao><p>{texto}</p></Opcao>
        ) ) }
        </OpcoesContainer>
    )
}

export default OpcoesHeader;