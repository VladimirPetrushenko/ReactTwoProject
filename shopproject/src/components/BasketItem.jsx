export const BasketItem = (props) => {
    const { id, name, price, quantity, removeOrder, handleQuantity } = props;

    return (
        <li className="collection-item">
            {name}
            <i
                className="material-icons basket-quantity"
                onClick={() => handleQuantity({ id: id, value: quantity - 1 })}
            >
                remove
            </i>{' '}
            x{quantity}{' '}
            <i
                className="material-icons basket-quantity"
                onClick={() => handleQuantity({ id: id, value: quantity + 1 })}
            >
                add
            </i>{' '}
            = {quantity * price} руб.
            <span className="secondary-content">
                <i
                    className="material-icons basket-close-pointer"
                    onClick={() => removeOrder(id)}
                >
                    clear
                </i>
            </span>
        </li>
    );
};
