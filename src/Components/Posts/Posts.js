import React,{useContext,useEffect,useState} from 'react';
import { ProductContext } from '../../store/ProductContext';
import Heart from '../../assets/Heart';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../store/Context';
import './Post.css';

function Posts() {

  const [products, setProducts] = useState([]);
  const {setSelectedProduct} = useContext(ProductContext)
  const history = useHistory()
  const getProducts = ()=>{
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }
  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div className="postParentDiv">
    <div className="recommendations">
      <div className="heading">
        <span style={{marginLeft:150}}>Fresh recommendations</span>
      
      </div>
      <div className="cards-container">
        {products.map((product) => (
          <div className="card" key={product.id} onClick={()=>{
            setSelectedProduct(product)
            history.push('/view')
          }}>
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.title}</p>
            </div>
            <div className="date">
              <span>{new Date().toDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}


export default Posts;
