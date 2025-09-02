import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// Custom render function that includes providers if needed
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { ...options })

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render }

// Test data constants
export const TEST_DATA = {
  artistNames: {
    steve: 'Steve Allott',
    frances: 'Frances Allott',
    duo: 'Crowned and Free'
  },
  podcastInfo: {
    name: 'Wisdom Is',
    cohost: 'Nyasha T Music',
    mission: 'A return to wisdom for the nation of Britain, because wisdom is Jesus'
  },
  contactInfo: {
    email: 'info@crownedandfree.com',
    phone: '+44 (0) 123 456 789',
    location: 'United Kingdom'
  }
}

// Mock data for components
export const mockBookingData = {
  eventType: 'Church Service',
  date: '2024-12-25',
  location: 'Grace Community Church, London',
  message: 'Looking for a Christmas service performance'
}

export const mockContactData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  inquiryType: 'Live Performance Booking',
  message: 'Interested in booking for our church event'
}
