import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import TrustBar     from '@/components/TrustBar'
import Projects     from '@/components/Projects'
import BeforeAfter  from '@/components/BeforeAfter'
import WhyChooseUs  from '@/components/WhyChooseUs'
import Process      from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import FAQ          from '@/components/FAQ'
import FinalCTA     from '@/components/FinalCTA'
import { getPublishedContent } from '@/lib/cms-client'

export const revalidate = 0

export default async function Home() {
  const content = await getPublishedContent()

  return (
    <main>
      <Navbar />
      <Hero
        headline={content.hero.headline}
        description={content.hero.description}
        ctaPrimary={content.hero.ctaPrimary}
        ctaSecondary={content.hero.ctaSecondary}
      />
      <TrustBar />
      <Projects />
      <BeforeAfter />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ items={content.faq} />
      <FinalCTA
        phone={content.contact.phone}
        email={content.contact.email}
      />
    </main>
  )
}
