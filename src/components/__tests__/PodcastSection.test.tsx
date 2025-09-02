import React from 'react'
import { render, screen } from '@/utils/test-utils'
import PodcastSection from '../PodcastSection'
import { TEST_DATA } from '@/utils/test-utils'

describe('PodcastSection', () => {
  it('renders the main heading with podcast name', () => {
    render(<PodcastSection />)
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Wisdom Is Podcast')
  })

  it('displays the podcast mission statement', () => {
    render(<PodcastSection />)
    
    expect(screen.getByText(TEST_DATA.podcastInfo.mission)).toBeInTheDocument()
  })

  it('shows Steve as the podcast host', () => {
    render(<PodcastSection />)
    
    expect(screen.getByText('Hosted by Steve Allott')).toBeInTheDocument()
    expect(screen.getByText(/Lead vocalist and guitarist of Crowned and Free/)).toBeInTheDocument()
  })

  it('displays Nyasha T Music as co-host', () => {
    render(<PodcastSection />)
    
    expect(screen.getByText('Co-Hosted by Nyasha T Music')).toBeInTheDocument()
    expect(screen.getByText(/United Praisers artist and collaborator/)).toBeInTheDocument()
  })

  it('renders podcast features and benefits', () => {
    render(<PodcastSection />)
    
    expect(screen.getByText('Biblical wisdom for modern challenges')).toBeInTheDocument()
    expect(screen.getByText('Cultural apologetics and Christian worldview')).toBeInTheDocument()
    expect(screen.getByText('Engaging discussions on faith and society')).toBeInTheDocument()
    expect(screen.getByText('Practical application of biblical principles')).toBeInTheDocument()
  })

  it('shows the podcast mission details', () => {
    render(<PodcastSection />)
    
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(screen.getByText(/To bring Britain back to wisdom/)).toBeInTheDocument()
    expect(screen.getByText(/pointing people to Jesus Christ/)).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<PodcastSection />)
    
    const listenButton = screen.getByRole('button', { name: /Listen to Episodes/i })
    const contactButton = screen.getByRole('button', { name: /Contact About Podcast/i })
    
    expect(listenButton).toBeInTheDocument()
    expect(contactButton).toBeInTheDocument()
  })

  it('displays co-host features', () => {
    render(<PodcastSection />)
    
    expect(screen.getByText('Diverse Perspectives')).toBeInTheDocument()
    expect(screen.getByText('Cultural Relevance')).toBeInTheDocument()
    expect(screen.getByText('Authentic Faith')).toBeInTheDocument()
  })

  it('has proper styling and layout', () => {
    render(<PodcastSection />)
    
    const section = document.querySelector('section')
    expect(section).toHaveClass('section-padding')
    expect(section).toHaveClass('bg-gradient-to-br')
    expect(section).toHaveClass('from-slate-900')
  })

  it('shows correct color scheme for highlights', () => {
    render(<PodcastSection />)
    
    const wisdomText = screen.getByText('Wisdom Is')
    expect(wisdomText).toHaveClass('text-amber-400')
  })

  it('displays podcast availability information', () => {
    render(<PodcastSection />)
    
    expect(screen.getByText(/Available on all major platforms/)).toBeInTheDocument()
  })

  it('has proper accessibility structure', () => {
    render(<PodcastSection />)
    
    const headings = screen.getAllByRole('heading')
    expect(headings.length).toBeGreaterThan(2)
    
    // Check for proper heading hierarchy
    const mainHeading = screen.getByRole('heading', { level: 2 })
    expect(mainHeading).toBeInTheDocument()
  })
})
