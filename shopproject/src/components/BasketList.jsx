import { BasketItem } from './BasketItem';

export const BasketList = (props) => {
    const { orders = [], handleBasket, removeOrder, handleQuantity } = props;
    const total = orders.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">
                Корзина
                <span className="secondary-content basket-close-pointer">
                    <i
                        className="material-icons"
                        onClick={() => handleBasket()}
                    >
                        clear
                    </i>
                </span>
            </li>
            {orders.length ? (
                orders.map((item) => {
                    return (
                        <BasketItem
                            key={item.id}
                            {...item}
                            removeOrder={removeOrder}
                            handleQuantity={handleQuantity}
                        />
                    );
                })
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая стоимость: {total}руб.{' '}
                <button className="secondary-content btn-small submit-basket">Оформить заказ</button>
            </li>
        </ul>
    );
};
