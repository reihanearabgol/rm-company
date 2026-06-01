import Navbar          from '@/components/Navbar'
import Hero            from '@/components/Hero'
import TrustBar        from '@/components/TrustBar'
import ServicesSection from '@/components/ServicesSection'
import Projects        from '@/components/Projects'
import BeforeAfter     from '@/components/BeforeAfter'
import WhyChooseUs     from '@/components/WhyChooseUs'
import Process         from '@/components/Process'
import Testimonials    from '@/components/Testimonials'
import FAQ             from '@/components/FAQ'
import FinalCTA        from '@/components/FinalCTA'
import Footer          from '@/components/Footer'
import { getPublishedContent } from '@/lib/cms-client'
import type { Metadata } from 'next'

export const revalidate = 0

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPublishedContent()
  return {
    title: content.seo.title,
    description: content.seo.description,
  }
}

export default async function Home() {
  const content = await getPublishedContent()

  return (
    <main>
      <Navbar />
      <Hero
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        description={content.hero.description}
        ctaPrimary={content.hero.ctaPrimary}
        ctaSecondary={content.hero.ctaSecondary}
      />
      <TrustBar />
      <ServicesSection services={content.services} />
      <Projects />
      <BeforeAfter />
      <WhyChooseUs />
      <Process />
      <Testimonials
        satisfaction={content.stats?.satisfaction}
        projects={content.stats?.projects}
        years={content.stats?.years}
        review={content.stats?.review}
      />
      <FAQ items={content.faq} />
      <FinalCTA
        phone={content.contact.phone}
        email={content.contact.email}
      />
      <Footer
        copyright={content.footer.copyright}
        tagline={content.footer.tagline}
        phone={content.contact.phone}
        email={content.contact.email}
      />
    </main>
  )
}
