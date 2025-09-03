'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Music, Mic, BookOpen, Home as HomeIcon, Info, MessageCircle, Play } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/#about', icon: Info },
    { name: 'Music', href: '/music', icon: Music },
    { name: 'Video', href: '/video', icon: Play },
    { name: 'Podcast', href: '/podcast', icon: Mic },
    { name: 'Book', href: '/book', icon: BookOpen },
    { name: 'Contact Us', href: '/#contact', icon: MessageCircle },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('header')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Close mobile menu on route change
  const handleNavigation = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={handleNavigation}>
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img
                src="/images/crowned-and-free-logo.png"
                alt="Crowned and Free Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex items-center mt-0.5 md:mt-1">
              <h1 className="text-4xl font-bold text-gray-900 font-nexa leading-none">
                <span className="brand-gradient">Crowned</span>
                <span className="mx-1 brand-gradient">&</span>
                <span className="brand-gradient">Free</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-700 hover:text-amber-600 font-medium transition-all duration-200 group relative"
                onClick={handleNavigation}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>{item.name}</span>
                {/* Hover underline effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full"></div>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-amber-600 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md overflow-hidden"
            >
              <nav className="py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleNavigation}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 group"
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium text-base">{item.name}</span>
                      {/* Hover indicator */}
                      <div className="ml-auto w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
