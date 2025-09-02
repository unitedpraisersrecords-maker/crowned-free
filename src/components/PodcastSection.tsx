'use client'

import { motion } from 'framer-motion'
import { Mic, Play, Headphones, BookOpen, Heart, MessageCircle, Globe } from 'lucide-react'

export default function PodcastSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-amber-400">Wisdom Is</span> Podcast
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A return to wisdom for the nation of Britain, because wisdom is Jesus
          </p>
        </motion.div>

        {/* Podcast Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Apologetics for the Modern Age
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Join Steve Allott and co-host Nyasha T Music of United Praisers as they explore 
              the timeless wisdom found in Scripture and its relevance to today's challenges. 
              Each episode brings biblical truth to bear on contemporary issues facing Britain.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">Biblical wisdom for modern challenges</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">Cultural apologetics and Christian worldview</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">Engaging discussions on faith and society</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">Practical application of biblical principles</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
          >
            <div className="w-24 h-24 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                src="/images/wisdom_is_logo_1.png" 
                alt="Wisdom Is Podcast Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <h4 className="text-2xl font-bold mb-4">Hosted by Steve Allott</h4>
            <p className="text-gray-300 mb-6">
              Lead vocalist and guitarist of Crowned and Free, bringing his passion for God's 
              wisdom to the podcast world.
            </p>
            <div className="flex items-center justify-center gap-2 text-amber-400 font-medium">
              <Headphones className="w-4 h-4" />
              <span>Available on all major platforms</span>
            </div>
          </motion.div>
        </div>

        {/* Co-Host Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Co-Hosted by Nyasha T Music</h3>
            <p className="text-gray-300 text-lg">
              United Praisers artist and collaborator, bringing diverse perspectives and insights 
              to the conversation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Diverse Perspectives</h4>
              <p className="text-gray-400 text-sm">
                Different viewpoints enriching the discussion
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Cultural Relevance</h4>
              <p className="text-gray-400 text-sm">
                Addressing issues facing modern Britain
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Authentic Faith</h4>
              <p className="text-gray-400 text-sm">
                Real conversations about real faith
              </p>
            </div>
          </div>
        </motion.div>

        {/* Podcast Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-8 rounded-2xl border border-amber-400/30">
            <div className="w-20 h-20 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-amber-400" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              To bring Britain back to wisdom by pointing people to Jesus Christ, the source of all 
              true wisdom. Through engaging discussions, biblical insights, and cultural analysis, 
              we seek to equip listeners with the knowledge and understanding needed to navigate 
              life's challenges with God's guidance.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-amber-600 hover:bg-amber-700">
                <Play className="w-5 h-5" />
                Listen to Episodes
              </button>
              <button className="btn-secondary border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white">
                <MessageCircle className="w-5 h-5" />
                Contact About Podcast
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
