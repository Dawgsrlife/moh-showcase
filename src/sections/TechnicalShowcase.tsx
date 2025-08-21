import { motion } from 'framer-motion'
import { useState } from 'react'
import Section from '../components/Section'
import ImageModal from '../components/ImageModal'

interface TechnicalImage {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  category: 'technical' | 'testing' | 'development' | 'analysis'
  technologies?: string[]
}

const technicalImages: TechnicalImage[] = [
  {
    id: 'egp-flw-matching-2',
    title: 'Advanced File Matching System',
    description: 'Enhanced EGP to FLW file matching algorithm with improved accuracy',
    image: '/images/egp_flw_matching_2.PNG',
    imageAlt: 'Advanced EGP to FLW file matching system',
    category: 'development',
    technologies: ['Python', 'FuzzyWuzzy', 'File Processing']
  },
  {
    id: 'sas-eg-8-5',
    title: 'System Architecture Overview',
    description: 'Comprehensive view of the SAS Viya enterprise architecture setup',
    image: '/images/SAS_EG_8_5.png',
    imageAlt: 'System architecture and setup overview',
    category: 'technical',
    technologies: ['SAS Viya', 'Enterprise Architecture', 'Kubernetes']
  }
]

const TechnicalShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null)

  const openImageModal = (src: string, alt: string, title: string) => {
    setSelectedImage({ src, alt, title })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }
  return (
    <>
      <Section id="technical-showcase" variant="snap">
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
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
                Technical Deep Dive
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Behind-the-scenes look at the technical implementation and system architecture
              </p>
            </motion.div>

            {/* Technical Images Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {technicalImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.image}
                        alt={image.imageAlt}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer relative z-10"
                        loading="lazy"
                        onClick={() => openImageModal(image.image, image.imageAlt, image.title)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 pointer-events-none z-20">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          image.category === 'technical' ? 'bg-blue-100 text-blue-700' :
                          image.category === 'testing' ? 'bg-green-100 text-green-700' :
                          image.category === 'development' ? 'bg-purple-100 text-purple-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {image.category}
                        </span>
                      </div>

                      {/* Click hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-black/50 text-white px-4 py-2 rounded-lg text-sm font-medium">
                          Click to expand
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {image.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {image.description}
                      </p>
                      
                      {/* Technologies */}
                      {image.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {image.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technical Skills Summary */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white rounded-3xl p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    Technical Excellence Achieved
                  </h3>
                  <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                    From file processing automation to enterprise architecture understanding, 
                    every project contributed to a comprehensive skill set in modern cloud technologies.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                    <div className="text-white/80">Scripts Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">36x</div>
                    <div className="text-white/80">Performance Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-400 mb-2">90%</div>
                    <div className="text-white/80">Automation Success</div>
                  </div>
                </div>
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

export default TechnicalShowcase
