import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem"
import { clearCart } from "../utils/cartSlice"
import emptyCart from '../assets/empty-cart.svg'

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)

    const dispatch = useDispatch()

    function handleClearCart() {
        dispatch(clearCart())
    }


  return (cartItems.length == 0) ? 
  <div className="mt-20 h-[80vh] w-full flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold ">Your Cart Is Empty!!</h1>
    <img className="h-3/4" src={emptyCart} />
  </div> : (
    <div className="mt-28">
        <div className="flex items-center">
            <h1 className="text-2xl font-bold mx-5 md:mx-8 lg:mx-10 uppercase">Cart Items - {cartItems.length}</h1>
            <button onClick={() => handleClearCart()} className="px-5 py-2 bg-red-500 rounded text-white font-semibold hover:bg-red-600 active:scale-95 transition duration-300">Clear Cart</button>
        </div>
        {cartItems.map(item => <FoodItem key={item.id} {...item}/>)}
    </div>
  )
}

export default Cart