import React from 'react'
import { render, screen } from '@/utils/test-utils'
import AboutSection from '../AboutSection'

describe('AboutSection', () => {
  it('renders the main heading', () => {
    render(<AboutSection />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('About Crowned & Free')
  })

  it('displays the artists names', () => {
    render(<AboutSection />)

    expect(screen.getByText('Steve Allott')).toBeInTheDocument()
    expect(screen.getByText('Frances Allott')).toBeInTheDocument()
  })

  it('shows artist roles and descriptions', () => {
    render(<AboutSection />)

    expect(screen.getByText('Lead Vocalist & Guitarist')).toBeInTheDocument()
    expect(screen.getByText('Keys Player & Vocalist')).toBeInTheDocument()
  })

  it('renders the name meaning section', () => {
    render(<AboutSection />)

    expect(screen.getByText('The Meaning Behind Our Name')).toBeInTheDocument()
    expect(screen.getByText('Steve - "Crowned"')).toBeInTheDocument()
    expect(screen.getByText('Frances - "Free"')).toBeInTheDocument()
  })

  it('has proper accessibility structure', () => {
    render(<AboutSection />)

    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(7) // Main heading + 3 section headings + 4 sub-headings
  })

  it('applies correct CSS classes for styling', () => {
    render(<AboutSection />)

    const section = document.querySelector('section')
    expect(section).toHaveClass('bg-gradient-to-br')
    expect(section).toHaveClass('from-white')
    expect(section).toHaveClass('via-gray-50')
    expect(section).toHaveClass('to-white')
  })

  it('displays artist skills and talents', () => {
    render(<AboutSection />)

    expect(screen.getByText(/Lead Vocals/)).toBeInTheDocument()
    expect(screen.getAllByText(/Guitar/)).toHaveLength(2) // Appears in role and skills
    expect(screen.getAllByText(/Keys/)).toHaveLength(3) // Appears in role, description, and skills
    expect(screen.getByText(/Harmony Vocals/)).toBeInTheDocument()
  })

  it('shows the meaning behind Steve being "Crowned"', () => {
    render(<AboutSection />)

    const crownedText = screen.getByText(/Representing the authority and wisdom that comes from God/)
    expect(crownedText).toBeInTheDocument()
  })

  it('shows the meaning behind Frances being "Free"', () => {
    render(<AboutSection />)

    const freeText = screen.getByText(/Symbolizing the freedom found in Christ/)
    expect(freeText).toBeInTheDocument()
  })

  it('has the correct section ID for navigation', () => {
    render(<AboutSection />)

    const section = document.querySelector('section')
    expect(section).toHaveAttribute('id', 'about')
  })

  it('displays the "Meet the Artists" section heading', () => {
    render(<AboutSection />)

    expect(screen.getByText('Meet the Artists')).toBeInTheDocument()
  })
})
