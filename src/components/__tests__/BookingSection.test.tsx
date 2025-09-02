import React from 'react'
import { render, screen } from '@/utils/test-utils'
import BookingSection from '../BookingSection'
import { mockBookingData } from '@/utils/test-utils'

describe('BookingSection', () => {
  it('renders the main heading', () => {
    render(<BookingSection />)
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Book Crowned & Free')
  })

  it('displays the booking process steps', () => {
    render(<BookingSection />)
    
    expect(screen.getByText('Simple Booking Process')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('shows the three-step booking process', () => {
    render(<BookingSection />)
    
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Discuss Details')).toBeInTheDocument()
    expect(screen.getByText('Confirm & Prepare')).toBeInTheDocument()
  })

  it('renders the booking form', () => {
    render(<BookingSection />)
    
    expect(screen.getByText('Quick Booking Form')).toBeInTheDocument()
    expect(screen.getByLabelText(/Event Type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Preferred Date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Location/i)).toBeInTheDocument()
    expect(screen.getByText(/Message/i)).toBeInTheDocument()
  })

  it('has form fields with proper labels and IDs', () => {
    render(<BookingSection />)
    
    const eventTypeSelect = screen.getByLabelText(/Event Type/i)
    const dateInput = screen.getByLabelText(/Preferred Date/i)
    const locationInput = screen.getByLabelText(/Location/i)
    const messageTextarea = screen.getByText(/Message/i).closest('label')?.nextElementSibling
    
    expect(eventTypeSelect).toBeInTheDocument()
    expect(dateInput).toBeInTheDocument()
    expect(locationInput).toBeInTheDocument()
    expect(messageTextarea).toBeInTheDocument()
    
    // Check for proper ID attributes
    expect(eventTypeSelect).toHaveAttribute('id', 'eventType')
    expect(dateInput).toHaveAttribute('id', 'preferredDate')
    expect(locationInput).toHaveAttribute('id', 'location')
  })

  it('displays event type options', () => {
    render(<BookingSection />)
    
    const eventTypeSelect = screen.getByLabelText(/Event Type/i)
    expect(eventTypeSelect).toBeInTheDocument()
    
    // Check for select element and options
    expect(eventTypeSelect.tagName).toBe('SELECT')
    expect(screen.getByText('Church Service')).toBeInTheDocument()
    expect(screen.getByText('Christian Event')).toBeInTheDocument()
    expect(screen.getByText('Wedding')).toBeInTheDocument()
  })

  it('shows the submit button', () => {
    render(<BookingSection />)
    
    const submitButton = screen.getByRole('button', { name: /Send Booking Request/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('displays what we provide section', () => {
    render(<BookingSection />)
    
    expect(screen.getByText('What We Bring to Your Event')).toBeInTheDocument()
    expect(screen.getByText('Professional Sound')).toBeInTheDocument()
    expect(screen.getByText('Flexible Sets')).toBeInTheDocument()
    expect(screen.getByText('Audience Engagement')).toBeInTheDocument()
    expect(screen.getByText('Ministry Focus')).toBeInTheDocument()
  })

  it('shows performance types', () => {
    render(<BookingSection />)
    
    expect(screen.getByText('Performance Types')).toBeInTheDocument()
    expect(screen.getByText('Acoustic Sets')).toBeInTheDocument()
    expect(screen.getByText('Full Band')).toBeInTheDocument()
  })

  it('displays testimonials', () => {
    render(<BookingSection />)
    
    expect(screen.getByText(/Crowned and Free brought such a beautiful spirit/)).toBeInTheDocument()
    expect(screen.getByText(/Pastor Sarah Johnson, Grace Community Church/)).toBeInTheDocument()
  })

  it('has proper styling classes', () => {
    render(<BookingSection />)
    
    const section = document.querySelector('section')
    expect(section).toHaveClass('section-padding')
    expect(section).toHaveClass('bg-gradient-to-br')
    expect(section).toHaveClass('from-slate-50')
  })

  it('maintains proper accessibility', () => {
    render(<BookingSection />)
    
    // Check for proper form structure
    const form = document.querySelector('form')
    expect(form).toBeInTheDocument()
    
    // Check for proper form structure
    const inputs = screen.getAllByRole('textbox')
    expect(inputs.length).toBeGreaterThan(0)
    
    // Check for proper label associations
    const eventTypeLabel = screen.getByText('Event Type')
    const eventTypeSelect = screen.getByLabelText(/Event Type/i)
    expect(eventTypeLabel).toBeInTheDocument()
    expect(eventTypeSelect).toBeInTheDocument()
  })

  it('shows the correct color scheme for highlights', () => {
    render(<BookingSection />)
    
    // Find the span containing "Crowned" within the main heading
    const mainHeading = screen.getByRole('heading', { level: 2 })
    const crownedSpan = mainHeading.querySelector('span')
    expect(crownedSpan).toHaveClass('text-amber-600')
  })
})
