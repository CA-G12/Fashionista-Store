/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../../style/Card.css'
import Button from '../button/Button'

function updateQuantity(cartItemId, quantityValue) {
  return fetch('/updateCartItemQuantity', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cartItemId, quantityValue }),
  })
    .then((data) => data.json())
    .then((data) => console.log('hello update', data))
}

function Counter({ cartId, quantity }) {
  return (
    <div className="cart-counter">
      <Button
        onClick={() => updateQuantity(cartId, -1)}
        text="-"
        widthh="1.3rem"
      />
      <p>{quantity}</p>
      <Button
        onClick={() => updateQuantity(cartId, 1)}
        text="+"
        widthh="1.3rem"
      />
    </div>
  )
}

function Container({ card }) {
  return (
    <div className="content">
      <img className="product-img" alt="product-img" src={card.img_url} />
      <p className="product-name">{card.name}</p>
      <h3 className="product-price">{card.price}</h3>
      <p className="product-category">
        {card.category}{' '}
        <Link to={`/detailPage/${card.productId ? card.productId : card.id}`}>
          more...
        </Link>
      </p>
    </div>
  )
}

function addToCart(productId) {
  return fetch('/addCartItem', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  })
}

function reomoveFromCart(cartid) {
  return fetch(`/deleteCartItem/${cartid}`).catch((err) => console.log(err))
}

function Card({ name, card }) {
  if (name === true) {
    return (
      <div className="card">
        <Container card={card} />
        <Button
          onClick={() => {
            addToCart(card.id)
          }}
          disabled
          className="add-btn"
          text="Add"
          widthh="6rem"
          id={card.id}
        />
      </div>
    )
  }

  if (name === 'cart') {
    return (
      <div className="card">
        <div className="remove">
          <button onClick={() => reomoveFromCart(card.cartid)} type="submit">
            x
          </button>
        </div>
        <Container card={card} />
        <Counter cartId={card.cartid} quantity={card.quantity} />
      </div>
    )
  }
  if (!name) {
    return (
      <div className="card">
        <Container card={card} />
      </div>
    )
  }
}

export default Card
