import React from 'react'
import { render, screen } from '@/utils/test-utils'
import HeroSection from '../HeroSection'
import { TEST_DATA } from '@/utils/test-utils'

describe('HeroSection', () => {
  it('renders the main heading with artist name', () => {
    render(<HeroSection />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Crowned')
    expect(heading).toHaveTextContent('Free')
  })

  it('displays the artists names', () => {
    render(<HeroSection />)

    // The text is "Steve Allott & Frances Allott" so we need to find it differently
    expect(screen.getByText(/Steve Allott/)).toBeInTheDocument()
    expect(screen.getByText(/Frances Allott/)).toBeInTheDocument()
  })

  it('shows the music style description', () => {
    render(<HeroSection />)

    expect(screen.getByText(/Christian Rock/)).toBeInTheDocument()
    expect(screen.getByText(/Folk/)).toBeInTheDocument()
    expect(screen.getByText(/Country Music/)).toBeInTheDocument()
  })

  it('renders functional call-to-action links', () => {
    render(<HeroSection />)

    const bookLink = screen.getByRole('link', { name: /Book Live Performance/i })
    const podcastLink = screen.getByRole('link', { name: /Wisdom Is Podcast/i })

    expect(bookLink).toBeInTheDocument()
    expect(podcastLink).toBeInTheDocument()
    expect(bookLink).toHaveAttribute('href', '/booking')
    expect(podcastLink).toHaveAttribute('href', '/podcast')
  })

  it('displays feature icons with labels', () => {
    render(<HeroSection />)

    expect(screen.getByText('Live Music')).toBeInTheDocument()
    expect(screen.getByText('Podcast')).toBeInTheDocument()
    expect(screen.getByText('Author')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<HeroSection />)

    // Check for section element
    const mainSection = document.querySelector('section')
    expect(mainSection).toBeInTheDocument()
  })

  it('renders scroll indicator', () => {
    render(<HeroSection />)

    // The scroll indicator should be present (ChevronDown icon)
    const scrollIndicator = document.querySelector('[data-testid="scroll-indicator"]')
    expect(scrollIndicator).toBeInTheDocument()
  })

  it('applies correct CSS classes for styling', () => {
    render(<HeroSection />)

    const section = document.querySelector('section')
    expect(section).toHaveClass('min-h-screen')
    expect(section).toHaveClass('relative')
    expect(section).toHaveClass('flex')
  })

  it('displays the correct color scheme for artist names', () => {
    render(<HeroSection />)

    const crownedSpan = screen.getByText('Crowned')
    const freeSpan = screen.getByText('Free')

    expect(crownedSpan).toHaveClass('text-amber-400')
    expect(crownedSpan).toHaveClass('drop-shadow-lg')
    expect(freeSpan).toHaveClass('text-purple-400')
    expect(freeSpan).toHaveClass('drop-shadow-lg')
  })

  it('shows the Christian Music Duo badge', () => {
    render(<HeroSection />)

    expect(screen.getByText('Christian Music Duo')).toBeInTheDocument()
  })

  it('renders the play button for music preview', () => {
    render(<HeroSection />)

    expect(screen.getByText('Listen to our music')).toBeInTheDocument()
  })
})
