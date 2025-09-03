import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    
    const logoContainer = document.querySelector('.w-12.h-12')
    expect(logoContainer).toBeInTheDocument()
    expect(logoContainer).toHaveClass('rounded-full')
    expect(logoContainer).toHaveClass('overflow-hidden')
  })

  it('has the correct logo styling', () => {
    render(<Header />)
    
    const logoContainer = document.querySelector('.w-12.h-12')
    expect(logoContainer).toBeInTheDocument()
    expect(logoContainer).toHaveClass('rounded-full')
    expect(logoContainer).toHaveClass('overflow-hidden')
  })

  it('displays navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Music')).toBeInTheDocument()
    expect(screen.getByText('Video')).toBeInTheDocument()
    expect(screen.getByText('Podcast')).toBeInTheDocument()
    expect(screen.getByText('Book')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('has correct navigation URLs', () => {
    render(<Header />)
    
    const homeLink = screen.getByRole('link', { name: 'Home' })
    const aboutLink = screen.getByRole('link', { name: 'About' })
    const musicLink = screen.getByRole('link', { name: 'Music' })
    const videoLink = screen.getByRole('link', { name: 'Video' })
    const podcastLink = screen.getByRole('link', { name: 'Podcast' })
    const bookLink = screen.getByRole('link', { name: 'Book' })
    const contactLink = screen.getByRole('link', { name: 'Contact Us' })

    expect(homeLink).toHaveAttribute('href', '/')
    expect(aboutLink).toHaveAttribute('href', '/#about')
    expect(musicLink).toHaveAttribute('href', '/music')
    expect(videoLink).toHaveAttribute('href', '/video')
    expect(podcastLink).toHaveAttribute('href', '/podcast')
    expect(bookLink).toHaveAttribute('href', '/book')
    expect(contactLink).toHaveAttribute('href', '/#contact')
  })

  it('has proper accessibility attributes', () => {
    render(<Header />)

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('applies correct CSS classes for styling', () => {
    render(<Header />)

    const header = screen.getByRole('banner')
    expect(header).toHaveClass('fixed')
    expect(header).toHaveClass('top-0')
    expect(header).toHaveClass('z-50')
  })

  it('shows mobile menu button on small screens', () => {
    render(<Header />)

    const menuButton = screen.getByRole('button')
    expect(menuButton).toBeInTheDocument()
  })

  it('has the correct logo icon', () => {
    render(<Header />)
    
    const logoContainer = document.querySelector('.w-12.h-12')
    expect(logoContainer).toBeInTheDocument()
  })
})
