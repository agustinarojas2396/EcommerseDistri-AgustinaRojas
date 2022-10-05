import { useContext } from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import "../scss/CartWidget.scss"

const CartWidget = () => {

    const { cartQuantity, cart } = useContext(CartContext)

    return (
        <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-visible' :''}`}>
            <BsFillCartCheckFill/>
            <span className="carrito">{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget