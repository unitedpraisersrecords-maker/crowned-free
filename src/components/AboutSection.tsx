'use client'

import { motion } from 'framer-motion'
import { Guitar, Piano, Heart, Crown, Zap, Music, Users } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          
          <h2 className="font-bold text-gray-900 mb-6">
            <span className="align-baseline text-3xl md:text-4xl">About</span>
            <span className="ml-2 align-baseline text-5xl md:text-6xl brand-gradient font-nexa">Crowned & Free</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The story behind the name and the artists who bring it to life
          </p>
        </motion.div>

        {/* Artist Profiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Meet the Artists
          </h3>
          
                      <div className="grid lg:grid-cols-2 gap-12">
              {/* Steve Allott */}
              <div className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                    <img 
                      src="/images/wisdom_is_steve_1.jpeg" 
                      alt="Steve Allott - Lead Vocalist & Guitarist" 
                      className="w-full h-full object-cover object-[50%_45%]"
                    />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-900">Steve Allott</h4>
                    <p className="text-primary-600 font-semibold">Lead Vocalist & Guitarist</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Lead vocalist and guitarist with a passion for sharing God's wisdom through music and 
                  the spoken word. Steve's powerful voice and skilled guitar work bring depth and 
                  authenticity to every performance.
                </p>
                <div className="flex items-center gap-3 text-primary-600 font-medium">
                  <Heart className="w-5 h-5" />
                  <span>Lead Vocals • Guitar • Wisdom Is Podcast Host</span>
                </div>
              </div>

                          {/* Frances Allott */}
              <div className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                    <img 
                      src="/images/crowned_and_free_frances_1.jpeg" 
                      alt="Frances Allott - Keys Player & Vocalist" 
                      className="w-full h-full object-cover object-[50%_45%]"
                    />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-900">Frances Allott</h4>
                    <p className="text-purple-600 font-semibold">Keys Player & Vocalist</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Keys player extraordinaire whose musical talent creates the foundation for Crowned and 
                  Free's distinctive sound. Frances's playing brings warmth and soul to every melody.
                </p>
                <div className="flex items-center gap-3 text-purple-600 font-medium">
                  <Heart className="w-5 h-5" />
                  <span>Keys • Harmony Vocals • Musical Arrangement</span>
                </div>
              </div>
          </div>
        </motion.div>

        {/* Name Meaning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-12">
            The Meaning Behind Our Name
          </h3>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl border border-primary-200 group-hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Steve - "Crowned"</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Representing the authority and wisdom that comes from God. Steve's role as a singer, 
                    guitarist, and podcast host reflects the crowned authority of sharing God's wisdom.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 group-hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Frances - "Free"</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Symbolizing the freedom found in Christ and the creative liberty that comes from 
                    walking in God's grace. Frances's keys playing brings this freedom to life through music.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
