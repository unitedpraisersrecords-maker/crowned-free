'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Music, Mic, BookOpen, Home as HomeIcon, Info, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/#about', icon: Info },
    { name: 'Music', href: '/music', icon: Music },
    { name: 'Podcast', href: '/podcast', icon: Mic },
    { name: 'Book', href: '/book', icon: BookOpen },
    { name: 'Contact Us', href: '/#contact', icon: MessageCircle },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
                           {/* Logo */}
                 <Link href="/" className="flex items-center gap-3 group">
                   <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                     <img
                       src="/images/crowned-and-free-logo.png"
                       alt="Crowned and Free Logo"
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div className="hidden sm:block">
                     <h1 className="text-4xl font-bold text-gray-900 font-nexa">
                       <span className="brand-gradient">Crowned</span>
                       <span className="mx-1 brand-gradient">&</span>
                       <span className="brand-gradient">Free</span>
                     </h1>
                   </div>
                 </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
