import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';

const Navbar = ({scrollToFooter}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-black sticky top-0 z-50 bg-transparent backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">BikeStore</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              HOME
            </Link>
            <Link to="/bicycles" className="text-sm font-medium hover:text-primary">
              BICYCLES
            </Link>
            {/* <Link to="/accessories" className="text-sm font-medium hover:text-primary">
              ACCESSORIES
            </Link> */}
            <button onClick={scrollToFooter} className="text-sm font-medium hover:text-primary">
              ABOUT
            </button>
            <button onClick={scrollToFooter} className="text-sm font-medium hover:text-primary">
              CONTACT
            </button>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="flex items-center space-x-1">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-sm">$0.00</span>
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="block py-2 hover:text-primary">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/bicycles" className="block py-2 hover:text-primary">
                  BICYCLES
                </Link>
              </li>
              {/* <li>
                <Link to="/accessories" className="block py-2 hover:text-primary">
                  ACCESSORIES
                </Link>
              </li> */}
              <li>
                <button onClick={scrollToFooter} className="block py-2 hover:text-primary">
                  ABOUT
                </button>
              </li>
              <li>
                <button onClick={scrollToFooter} className="block py-2 hover:text-primary">
                  CONTACT
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

