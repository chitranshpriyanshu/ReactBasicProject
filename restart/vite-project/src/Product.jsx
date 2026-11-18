import "./Product.css";
export default function Product({title,features,oldPrice,newPrice})
{
  let list = features.map((feature)=><li>{feature}</li>)
  return(
  <>
    <div className="card">
      <h2>{title}</h2>
      {list}
      <p>{oldPrice}</p>
      <p>{newPrice}</p>

    </div>

  </>
  )
}