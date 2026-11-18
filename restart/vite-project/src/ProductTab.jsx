import Product from "./Product"
export default function ProductTab()
{
  let arr1=["Good Quality","Affordable"]
  return (
    <>
    <Product title="Mouse" features={arr1} oldPrice="2334" newPrice="1988" />
    
    </>
  )
}