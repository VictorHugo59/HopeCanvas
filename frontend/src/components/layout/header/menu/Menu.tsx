import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/me">My NFTs</Link>
      </li>
      <li>
        <Link to="/create">Create NFT</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
    </ul>
  );
}

export { Menu };
