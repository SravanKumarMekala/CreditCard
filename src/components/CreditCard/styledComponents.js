// Style your elements here
// src/components/CreditCard/styledComponents.js
import styled from 'styled-components'

export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #d3d9e0;
  min-height: 100vh;
`

export const CreditCardView = styled.div`
  width: 300px;
  height: 180px;
  border-radius: 10px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: #ffffff;
`

export const CreditCardNumber = styled.p`
  font-size: 18px;
  margin: 0;
`

export const CardholderName = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  margin: 0;
`

export const InputContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: #475569;
  margin-bottom: 5px;
  font-size: 14px;
`

export const InputField = styled.input`
  border: 1px solid #c3cad9;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  color: #344e7a;
  margin-bottom: 15px;
  outline: none;

  &::placeholder {
    color: #c3cad9;
  }
`
