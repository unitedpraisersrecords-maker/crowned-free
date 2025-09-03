import { render, screen } from '@testing-library/react'
import HeroSection from '../HeroSection'

describe('HeroSection', () => {
  it('renders the video background', () => {
    render(<HeroSection />)
    
    const video = document.querySelector('video')
    expect(video).toBeInTheDocument()
    expect(video).toHaveAttribute('poster', '/images/crowned_and_free_artist_pic_1.jpeg')
    expect(video).toHaveAttribute('autoPlay')
    expect(video).toHaveAttribute('loop')
    expect(video).toHaveAttribute('playsInline')
  })

  it('renders the scroll indicator', () => {
    render(<HeroSection />)
    
    const scrollIndicator = screen.getByTestId('scroll-indicator')
    expect(scrollIndicator).toBeInTheDocument()
  })

  it('has proper styling classes', () => {
    render(<HeroSection />)
    
    const section = document.querySelector('section')
    expect(section).toHaveClass('relative', 'min-h-screen', 'flex', 'items-center', 'justify-center', 'overflow-hidden')
  })

  it('has video source with correct path', () => {
    render(<HeroSection />)
    
    const videoSource = document.querySelector('source')
    expect(videoSource).toHaveAttribute('src', '/videos/hero.mp4')
    expect(videoSource).toHaveAttribute('type', 'video/mp4')
  })

  it('has proper overlay elements', () => {
    render(<HeroSection />)
    
    const overlays = document.querySelectorAll('.absolute.inset-0')
    expect(overlays.length).toBeGreaterThan(1) // Should have multiple overlay divs
  })
})
