import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';



const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHojHg9o8vF7Zie54noYhr703CIQZdkwcyyPM8xdW&s";




const Home = () => {
    const ProductCard = ({name,id,price,handler,imgSrc}) => (
        <div className="ProductCard">
            <img src={imgSrc} alt={name} />
            <p>{name}</p>
            <h4>${price}</h4>
            <button onClick={()=> handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
        </div>
    )
    const productList = [
        {
            name:"mac book",
            price:12000,
            imgSrc:img1,
            id:"asdhksfnufnenfnen",
        },
        {
            name:"black shoes",
            price:490,
            imgSrc:img2,
            id:"yguygueydgayguyguyfehrb",
        },
    ]


    const dispatch = useDispatch();
    const addToCartHandler = (options) => {
        dispatch({ type:"addToCart",payload:options})
        dispatch({type:"calculatePrice"});
        toast.success("Added To Cart");

    }
    return (
        <div className="home">
            {
                productList.map(i => {
                    return(
                        <ProductCard
                         key={i.id} 
                         imgSrc={i.imgSrc} 
                         name={i.name} 
                         price={i.price}
                         id={i.id}
                         handler={addToCartHandler}
                         />
                    )
                    
                })
            }
        </div>
    )
}



export default Home
