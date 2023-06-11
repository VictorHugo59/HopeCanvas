import { Link } from 'react-router-dom';
import { ReactComponent as SVG } from 'assets/images/logo-color.svg';

function Logo() {
  return (
    <Link to="/">
      <img src="logo-black.png" alt="Logo" width="25%" height="auto" />
    </Link>
  );
}

export { Logo };
