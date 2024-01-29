import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {
  const { count } = useContext(CartContext);

  const totalQuantity = count.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={styles.cartContainer}>
      <FontAwesomeIcon style={styles.cartIcon} icon={faCartShopping} />
      <span style={styles.cartCount}>{totalQuantity}</span>
    </div>
  );
};

const styles = {
  cartContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: '#f8f8f8',
    borderRadius: '50px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  cartIcon: {
    color: '#3498db',
    fontSize: '24px',
    marginRight: '10px',
  },
  cartCount: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: 'black', // Cambié el color a negro
  },
};

export default CartWidget;
