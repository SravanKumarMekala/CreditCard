// Write your code here
// src/components/CreditCard/index.js
import {useState} from 'react'
import {
  CreditCardContainer,
  CreditCardView,
  InputContainer,
  InputField,
  Label,
  CreditCardNumber,
  CardholderName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardholderName] = useState('')

  const handleCardNumberChange = event => {
    setCardNumber(event.target.value)
  }

  const handleCardholderNameChange = event => {
    setCardholderName(event.target.value)
  }

  return (
    <CreditCardContainer>
      <h1>CREDIT CARD</h1>
      <CreditCardView data-testid="creditCard">
        <CreditCardNumber>
          {cardNumber || 'XXXX XXXX XXXX XXXX'}
        </CreditCardNumber>
        <CardholderName>
          {cardholderName.toUpperCase() || 'CARDHOLDER NAME'}
        </CardholderName>
      </CreditCardView>
      <InputContainer>
        <Label htmlFor="cardNumber">Card Number</Label>
        <InputField
          id="cardNumber"
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
        <p>CARDHOLDER NAME</p>
        <InputField
          id="cardholderName"
          type="text"
          placeholder="Cardholder Name"
          value={cardholderName}
          onChange={handleCardholderNameChange}
        />
      </InputContainer>
      <h1>Payment Method</h1>
    </CreditCardContainer>
  )
}

export default CreditCard
