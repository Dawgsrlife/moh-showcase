import { motion } from 'framer-motion'
import { useState } from 'react'
import Section from '../components/Section'
import ImageModal from '../components/ImageModal'

interface TeamMember {
  name: string
  role: string
  description: string
  image: string
  imageAlt: string
}

interface TeamPhoto {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  category: 'mentor' | 'colleague' | 'colleagues' | 'team' | 'social'
}

const teamMembers: TeamMember[] = [
  {
    name: 'Lev Iourik',
    role: 'Project Manager & Mentor',
    description: 'Led and guided me through all tasks this term. Incredible mentor who provided consistent support and technical guidance throughout the migration project.',
    image: '/images/Lev Iourik.png',
    imageAlt: 'Lev Iourik - Project Manager and Mentor'
  }
]

const teamPhotos: TeamPhoto[] = [
  {
    id: 'praise-lev-1',
    title: 'Recognition from Lev',
    description: 'Positive feedback and guidance from my project manager',
    image: '/images/praise_from_lev_1.PNG',
    imageAlt: 'Praise and recognition from Lev Iourik',
    category: 'mentor'
  },
  {
    id: 'lunch-colleagues',
    title: 'Colleagues Lunch Gathering',
    description: 'Building relationships with the incredible MPBSDP team',
    image: '/images/lunch_with_colleagues.PNG',
    imageAlt: 'Lunch with colleagues from the team',
    category: 'colleagues'
  },
  {
    id: 'lunch-joanna',
    title: 'Lunch with Joanna',
    description: 'Joanna always brought good vibes and high spirits to the team',
    image: '/images/lunch_with_joanna_1.PNG',
    imageAlt: 'Lunch with Joanna - always positive energy',
    category: 'colleague'
  },
  {
    id: 'lunch-kevin-joanna',
    title: 'Colleagues Collaboration',
    description: 'Working together with Kevin and Joanna on various projects',
    image: '/images/lunch_with_kevin_and_joanna.PNG',
    imageAlt: 'Collaborative lunch with Kevin and Joanna',
    category: 'colleagues'
  },
  {
    id: 'jeffery-leetcode',
    title: 'Jeffery - The Chill Developer',
    description: 'Jeffery was hella chill and funny, always bringing humor to the workplace',
    image: '/images/jeffery leetcode.PNG',
    imageAlt: 'Jeffery working on LeetCode - always chill and funny',
    category: 'colleague'
  },
  {
    id: 'lunch-walk',
    title: 'Lunch Walk with Team',
    description: 'Taking breaks and building connections with the team',
    image: '/images/lunch_walk_with_colleagues.PNG',
    imageAlt: 'Walking and talking during lunch break with colleagues',
    category: 'social'
  },
  {
    id: 'donkatsu-lunch-2',
    title: 'Brown Donkatsu Team Lunch',
    description: 'Amazing team lunch at Brown Donkatsu with the MPBSDP student team',
    image: '/images/Brown Donkatsu Lunch Out with MPBSDP Student Team 2.png',
    imageAlt: 'Team lunch at Brown Donkatsu restaurant',
    category: 'team'
  },
  {
    id: 'donkatsu-lunch-3',
    title: 'More Team Bonding',
    description: 'Continued celebration and team bonding at our lunch outing',
    image: '/images/Brown Donkatsu Lunch Out with MPBSDP Student Team 3.png',
    imageAlt: 'More team bonding at Brown Donkatsu',
    category: 'team'
  },
  {
    id: 'origami-colleagues',
    title: 'Origami Fun with Team',
    description: 'Creative team building activities including origami with colleagues',
    image: '/images/origami_with_colleagues.PNG',
    imageAlt: 'Making origami with colleagues during break time',
    category: 'social'
  },
  {
    id: 'noodes-colleagues',
    title: 'Noodles Team Lunch',
    description: 'Another great team meal, building lasting friendships',
    image: '/images/noodes_with_colleagues.PNG',
    imageAlt: 'Enjoying noodles with the team',
    category: 'social'
  },
  {
    id: 'lunch-kevin-other-team',
    title: 'Cross-Team Collaboration',
    description: 'Building connections across different teams within the ministry',
    image: '/images/lunch_with_kevin_form_other_team.PNG',
    imageAlt: 'Lunch with Kevin from another team',
    category: 'colleague'
  },
  {
    id: 'out-with-colleagues',
    title: 'Out with Other Colleagues',
    description: 'Exploring the city and building friendships beyond the office',
    image: '/images/out with other colleagues.PNG',
    imageAlt: 'Out and about with other colleagues',
    category: 'social'
  },
  {
    id: 'solo-lunch',
    title: 'Reflection Time',
    description: 'Sometimes taking time to reflect on the amazing internship experience',
    image: '/images/solo_lunch.PNG',
    imageAlt: 'Solo lunch reflection time',
    category: 'social'
  },
  {
    id: 'vibes',
    title: 'Good Vibes All Around',
    description: 'The positive energy and good vibes that made this internship unforgettable',
    image: '/images/vibes.PNG',
    imageAlt: 'Good vibes and positive energy with the team',
    category: 'team'
  }
]

const Team = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null)

  const openImageModal = (src: string, alt: string, title: string) => {
    setSelectedImage({ src, alt, title })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }
  return (
    <>
      <Section id="team" variant="snap">
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="container-max section-padding">
            {/* Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Team & Collaboration
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The incredible people who made this internship experience unforgettable
              </p>
            </motion.div>

            {/* Featured Mentor Section */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Special Thanks to My Mentor
                </h3>
              </div>
              
              {teamMembers.map((member) => (
                <div key={member.name} className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      <div className="lg:col-span-1">
                        <div className="relative">
                          <img 
                            src={member.image}
                            alt={member.imageAlt}
                            className="w-full max-w-sm mx-auto rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => openImageModal(member.image, member.imageAlt, `${member.name} - ${member.role}`)}
                          />
                          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Thank You! 🙏
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">
                            {member.name}
                          </h4>
                          <p className="text-lg text-blue-600 font-semibold">
                            {member.role}
                          </p>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Team Photos Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Memories & Moments
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Thanks to Govardhan, Jeffery (hella chill and funny), Joanna (always good vibes and high spirits), 
                  Carol (all the humor and fun), and Shunhua (great LeetCode sessions)!
                </p>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                      <div className="relative overflow-hidden">
                        <img 
                          src={photo.image}
                          alt={photo.imageAlt}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer relative z-10"
                          loading="lazy"
                          onClick={() => openImageModal(photo.image, photo.imageAlt, photo.title)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-20 pointer-events-none">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            photo.category === 'mentor' ? 'bg-purple-100 text-purple-700' :
                            photo.category === 'colleague' || photo.category === 'colleagues' ? 'bg-blue-100 text-blue-700' :
                            photo.category === 'team' ? 'bg-green-100 text-green-700' :
                            'bg-pink-100 text-pink-700'
                          }`}>
                            {photo.category}
                          </span>
                        </div>

                        {/* Click hint */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="bg-black/50 text-white px-4 py-2 rounded-lg text-sm font-medium">
                            Click to expand
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {photo.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {photo.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Appreciation Note */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white rounded-3xl p-12">
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Forever Grateful 💙
                </h3>
                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                  This internship wasn't just about technical skills. It was about the incredible people 
                  who made every day enjoyable, challenging, and rewarding. From mentor guidance to 
                  colleague friendships, these relationships made all the difference.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeImageModal}
          src={selectedImage.src}
          alt={selectedImage.alt}
          title={selectedImage.title}
        />
      )}
    </>
  )
}

export default Team
