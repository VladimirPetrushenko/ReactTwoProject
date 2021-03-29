

export const Cart = (props) => {
    const {quantity, handleBasket} = props;

    return <div className="cart green lighten-2 white-text" onClick={()=>handleBasket()}>
        <i className="material-icons">shopping_cart</i>
        {quantity? <span className="cart-quantity">{quantity}</span> : null}
    </div>
}