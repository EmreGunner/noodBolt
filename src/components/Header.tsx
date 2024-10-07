import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, BookOpen, Users, Briefcase, User, FileText } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { to: "/academy", icon: BookOpen, text: "Academy" },
    { to: "/agency", icon: Briefcase, text: "Agency" },
    { to: "/community", icon: Users, text: "Community" },
    { to: "/dashboard", icon: User, text: "Dashboard" },
    { to: "/blog", icon: FileText, text: "Blog" },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            NOOD
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.to} 
                className="text-text hover:text-primary transition duration-300 flex items-center border-b-2 border-transparent hover:border-primary"
              >
                <item.icon className="mr-1" size={18} />
                {item.text}
              </Link>
            ))}
            <Link to="/consultation" className="btn-primary">
              Book Consultation
            </Link>
          </nav>
          <button 
            className="md:hidden text-text" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="text-text hover:text-primary transition duration-300 flex items-center py-2 border-b border-accent" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="mr-2" size={18} />
                    {item.text}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/consultation" className="btn-primary block text-center mt-4" onClick={() => setIsMenuOpen(false)}>
                  Book Consultation
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header