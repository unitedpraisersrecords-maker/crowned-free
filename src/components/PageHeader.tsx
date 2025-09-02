import React from 'react'

type PageHeaderProps = {
  title: string
  subtitle?: string
  imageSrc?: string
}

export default function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <section className={`relative ${imageSrc ? 'min-h-[40vh]' : ''} flex items-center justify-center overflow-hidden`}>      
      {imageSrc && (
        <>
          <div className="absolute inset-0">
            <img src={imageSrc} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
          </div>
          <div className="relative z-10 text-center px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{title}</h1>
            {subtitle && <p className="text-white/80 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        </>
      )}

      {!imageSrc && (
        <div className="container-custom section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{title}</h1>
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
    </section>
  )
}
