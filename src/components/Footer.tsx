'use client'

import { motion } from 'framer-motion'
import { Music, Mic, BookOpen, Heart, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container-custom py-6">
        {/* Bottom Bar - Only Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo and Copyright - Left Side */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white p-1">
                <img
                  src="/images/crowned-and-free-logo.png"
                  alt="Crowned and Free Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} <span className="font-nexa">Crowned & Free</span>. All rights reserved.
              </div>
            </div>
            
            {/* Legal Links - Right Side */}
            <div className="flex items-center gap-4 md:gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
