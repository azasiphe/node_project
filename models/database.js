import { pool} from '../config/config.js';

const getProducts = async () => {
  const [rows] = await pool.query('SELECT * FROM products');
  return rows;
};
const postProduct= async(prodName, quantity, amount,  prodUrl)=>{
  let [item] = await pool.query(`
  INSERT INTO products (prodName, quantity, amount,  prodUrl) VALUES (?,?,?,?)
  `,[prodName, quantity, amount,  prodUrl])
  return getProducts(item.insertIdId)
}
const deleteProduct = async(prodID)=>{
  const [item] = await pool.query(`
  DELETE FROM products where prodID =?
  `,[prodID])
  return getProducts()
}
const updateProduct = async(prodID,prodName, quantity, amount,  prodUrl)=>{
  const [product] = await pool.query(`
  UPDATE products
  SET prodName=?, quantity=?, amount=?,  prodUrl=?
  WHERE (prodID=?)`,
  [prodID, prodName, quantity, amount,prodUrl])
  return product
}
const getSingle = async(prodID)=>{
  let [response]= await pool.query(`
  SELECT * FROM products
  WHERE prodID=?
  `, [prodID])
  return response
}


export { getProducts,postProduct,deleteProduct,updateProduct ,getSingle};
