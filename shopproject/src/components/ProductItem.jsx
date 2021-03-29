export const ProductItem = (props) =>{
    const {
      mainId, 
      displayName, 
      displayDescription, 
      displayAssets: [{
        background,
      },],
      price:{
        regularPrice,
        finalPrice,
      },
      buy, 
    } = props;

    return <div className="card">
              <div className="card-image">
                <img src={background} alt={displayName}/>
              </div>
              <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
              </div>
              <div className="card-action">
                <button className="btn" onClick={()=>buy({id: mainId, price: finalPrice, name: displayName,})}>Buy</button>
                {finalPrice===regularPrice ? 
                  <span className='right'>{finalPrice} руб.</span>
                  : <div className="right">
                      <span className='right finalPrice'>{finalPrice} руб.</span>
                      <span className="right regularPrice">{regularPrice}</span>
                  </div>
                }
              </div>
            </div>
}