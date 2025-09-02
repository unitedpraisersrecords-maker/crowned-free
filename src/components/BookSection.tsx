'use client'

import { motion } from 'framer-motion'
import { BookOpen, PenTool, Heart, Star, ArrowRight, Quote } from 'lucide-react'

export default function BookSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Steve's <span className="text-amber-600">Written Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond music and podcasting, Steve shares his insights and wisdom through the written word
          </p>
        </motion.div>

        {/* Book Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Author & Writer</h3>
                  <p className="text-amber-600 font-medium">Steve Allott</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Steve's writing reflects the same passion for wisdom and truth that he brings to his 
                music and podcast. His work explores themes of faith, wisdom, and the Christian life, 
                offering readers practical insights for daily living.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Biblical wisdom and insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Practical Christian living</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Cultural and societal analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Personal faith journey</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 text-center"
          >
            <div className="bg-gradient-to-br from-slate-100 to-gray-200 p-8 rounded-2xl shadow-lg">
              <div className="w-32 h-40 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Available Now</h4>
              <p className="text-gray-600 mb-6">
                Discover Steve's written works and gain deeper insights into the wisdom that 
                guides his music and ministry.
              </p>
              <button className="btn-primary w-full">
                <PenTool className="w-5 h-5" />
                Learn More About Steve's Books
              </button>
            </div>
          </motion.div>
        </div>

        {/* Writing Style & Themes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Heartfelt</h3>
            <p className="text-gray-600">
              Writing that comes from the heart, sharing personal experiences and insights 
              with authenticity and vulnerability.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wise</h3>
            <p className="text-gray-600">
              Drawing from biblical wisdom and life experience to offer practical guidance 
              for navigating faith and life's challenges.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <PenTool className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Engaging</h3>
            <p className="text-gray-600">
              Compelling writing style that draws readers in and makes complex topics 
              accessible and relatable.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-2xl text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Quote className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Words of Wisdom</h3>
            <p className="text-amber-100 text-lg max-w-3xl mx-auto mb-8">
              "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One 
              is understanding." - Proverbs 9:10
            </p>
            <p className="text-white text-lg mb-8">
              Steve's writing embodies this biblical truth, offering readers a path to deeper 
              understanding and spiritual growth.
            </p>
            
            <button className="btn-secondary bg-white text-amber-600 hover:bg-amber-50 border-white">
              <ArrowRight className="w-5 h-5" />
              Explore Steve's Written Works
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
