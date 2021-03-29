import {ProductItem} from './ProductItem'

export const ProductList = (props) => {
    const { items = [], buy} = props;
    if(!items.length){
        return <h3 key={Math.random()}>Nothing here</h3>
    }
    return <div className="productList">
            {
                items.map((item)=>{
                    return <ProductItem key={item.id} {...item} buy = {buy}/>
                })
            }
            </div>
}