import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
  title?: string
}

const ImageModal = ({ isOpen, onClose, src, alt, title }: ImageModalProps) => {
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setScale(1)
      setRotation(0)
      setPosition({ x: 0, y: 0 })
    }
  }, [isOpen])

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case '+':
        case '=':
          setScale(prev => Math.min(prev * 1.2, 5))
          break
        case '-':
          setScale(prev => Math.max(prev / 1.2, 0.1))
          break
        case 'r':
        case 'R':
          setRotation(prev => prev + 90)
          break
        case '0':
          setScale(1)
          setRotation(0)
          setPosition({ x: 0, y: 0 })
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleZoomIn = () => setScale(prev => Math.min(prev * 1.2, 5))
  const handleZoomOut = () => setScale(prev => Math.max(prev / 1.2, 0.1))
  const handleRotate = () => setRotation(prev => prev + 90)
  const handleReset = () => {
    setScale(1)
    setRotation(0)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = () => {
    if (scale > 1) {
      setIsDragging(true)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition(prev => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY
      }))
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <div className="relative w-full h-full flex flex-col">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6">
              <div className="text-white">
                {title && (
                  <h3 className="text-lg font-semibold truncate max-w-md">
                    {title}
                  </h3>
                )}
              </div>
              
              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleZoomOut}
                  className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors cursor-pointer"
                  title="Zoom Out (-)"
                >
                  <ZoomOut size={20} />
                </button>
                
                <span className="text-white text-sm font-mono px-2">
                  {Math.round(scale * 100)}%
                </span>
                
                <button
                  onClick={handleZoomIn}
                  className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors cursor-pointer"
                  title="Zoom In (+)"
                >
                  <ZoomIn size={20} />
                </button>
                
                <button
                  onClick={handleRotate}
                  className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors cursor-pointer"
                  title="Rotate (R)"
                >
                  <RotateCw size={20} />
                </button>
                
                <button
                  onClick={handleReset}
                  className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors text-sm cursor-pointer"
                  title="Reset (0)"
                >
                  Reset
                </button>
                
                <button
                  onClick={onClose}
                  className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div 
              className="flex-1 flex items-center justify-center p-6 pt-20 overflow-hidden"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <motion.img
                src={src}
                alt={alt}
                className={`max-w-none select-none ${
                  scale > 1 ? 'cursor-move' : 'cursor-zoom-in'
                }`}
                style={{
                  transform: `scale(${scale}) rotate(${rotation}deg) translate(${position.x}px, ${position.y}px)`,
                  maxHeight: scale === 1 ? '90vh' : 'none',
                  maxWidth: scale === 1 ? '90vw' : 'none',
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  if (scale === 1) {
                    handleZoomIn()
                  }
                }}
                onLoad={() => {
                  // Ensure image is properly centered when loaded
                  setPosition({ x: 0, y: 0 })
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Footer Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-center text-white/70 text-sm">
                <p>Click image to zoom • Drag to pan • Use keyboard shortcuts: +/- zoom, R rotate, 0 reset, Esc close</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageModal
