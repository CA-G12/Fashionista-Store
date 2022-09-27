/* eslint-disable react/prop-types */
import '../../../style/Card.css';
import Button from '../../button/Button';

function Counter() {
  return (
    <div className="cart-counter">
      <Button text="-" widthh="1.3rem" />
      <p>1</p>
      <Button text="+" widthh="1.3rem" />
    </div>
  );
}

function Container({ card }) {
  return (
    <>
      <img className="product-img" alt="product-img" src={card.img_url} />
      <p className="product-name">{card.name}</p>
      <h3 className="product-price">{card.price}</h3>
      <p className="product-category">{card.category}</p>

    </>
  );
}

function Card({ name, card }) {
  if (name) {
    if (name === 'auth') {
      return (
        <div className="card">

          <Container card={card} />
          <Button className="add-btn" text="Add" widthh="3rem" />
        </div>
      );
    }

    if (name === 'cart') {
      return (
        <div className="card">

          <div className="remove">
            <button type="submit">x</button>
          </div>
          <Container card={card} />
          <Counter />

        </div>
      );
    }
    if (name === 'home') {
      return (
        <div className="card">
          <Container card={card} />
        </div>
      );
    }
  }
}

export default Card;
