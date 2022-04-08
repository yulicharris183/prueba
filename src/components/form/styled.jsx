import styled from 'styled-components'
import { css } from 'styled-components'

export const Container = styled.form`
    width: 100%;
    height: 100%;
`
export const Flex = styled.div`
    display: flex;
    margin-bottom: ${({ marginB }) => marginB && marginB};
    justify-content: space-between;
    width: ${({ width }) => width ? width : '100%'};
`
const styles = css`
    width: ${({ width }) => width && width};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    background-color: #fff;
    border: 1px solid #D3D3D3;
    border-radius: 4px;
    height: 30px;
    padding: 15px;
    text-align: left;
    letter-spacing: 0px;
    color: #858585;
    opacity: 1;
    outline: none;
`

export const Input = styled.input`
    ${styles}
`
export const Select = styled.select`
    ${styles}
    height: 58px;
`

export const ButtonNext = styled.button`
    padding: 15px;
    border: none;
    font-weight: bold;
    border-radius: 5px;
    background-color: #003662;
    color: #fff;
    margin-left: auto !important;
`