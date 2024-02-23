

import  { getProducts,postProduct,deleteProduct,updateProduct,getSingle } from '../models/database.js';

const getMany = async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
const haveSingle = async (req,res)=>{
  res.send(await getSingle(+req.params.prodID))
  return response
}
 const addProduct = async (req,res)=>{
  const {prodName, quantity, amount,  prodUrl} = req.body
  const post =  await postProduct(prodName, quantity, amount, prodUrl)
  res.send(await getProducts())
}
const deleteItem =async (req,res)=>{
  await deleteProduct(req.params.prodID)
  res.json(await getProducts())
}
 const editProduct = async (req,res)=>{
  const [product] = await getSingle(+req.params.prodID)
  let {prodName, quantity, amount, prodUrl} = req.body
  prodName ? prodName=prodName : {prodName}=product
  quantity ? quantity=quantity : {quantity}=product
  amount ? amount=amount : {amount}=product
  prodUrl ? prodUrl=prodUrl : {prodUrl}=product
  const edit = await updateProduct(prodName, quantity, amount,  prodUrl,+req.params.prodID)
  res.json(await getProducts())
};

export default { getMany,editProduct, deleteItem,addProduct,haveSingle};
