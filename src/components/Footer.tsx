'use client'

import { motion } from 'framer-motion'
import { Music, Mic, BookOpen, Heart, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-28 h-28 rounded-full bg-white p-1 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/crowned-and-free-logo.png"
                    alt="Crowned and Free Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#podcast" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Wisdom Is Podcast
                </a>
              </li>
              <li>
                <a href="#book" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Steve's Books
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-amber-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a 
                  href="mailto:info@crownedandfree.com" 
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  info@crownedandfree.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">United Kingdom</span>
              </div>
            </div>
          </motion.div>
        </div>



        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="font-nexa">Crowned & Free</span>. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
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
