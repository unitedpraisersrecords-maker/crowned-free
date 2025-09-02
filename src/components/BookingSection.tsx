'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Music, Clock, Users, Star, CheckCircle } from 'lucide-react'

export default function BookingSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book <span className="brand-gradient font-nexa">Crowned & Free</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bring the unique sound and ministry of Crowned and Free to your event, church, or gathering
          </p>
        </motion.div>

        {/* Booking Process */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Simple Booking Process
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h4>
                  <p className="text-gray-600">
                    Reach out with your event details, date, and requirements. We'll respond within 24 hours.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Discuss Details</h4>
                  <p className="text-gray-600">
                    We'll discuss your event, musical preferences, and logistics to ensure the perfect fit.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Confirm & Prepare</h4>
                  <p className="text-gray-600">
                    Once confirmed, we'll prepare the perfect setlist and ensure everything is ready for your event.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Quick Booking Form
            </h4>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select 
                  id="eventType"
                  name="eventType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="church-service">Church Service</option>
                  <option value="christian-event">Christian Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="conference">Conference</option>
                  <option value="community-gathering">Community Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input 
                  id="preferredDate"
                  name="preferredDate"
                  type="date" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input 
                  id="location"
                  name="location"
                  type="text" 
                  placeholder="City, Venue, or Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your event and any specific requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                <Calendar className="w-5 h-5" />
                Send Booking Request
              </button>
            </form>
          </motion.div>
        </div>

        




      </div>
    </section>
  )
}
