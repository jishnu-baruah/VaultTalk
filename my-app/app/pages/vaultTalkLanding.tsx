'use client'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { DemoSection } from '@/components/DemoSection'
import { Footer } from '@/components/Footer'

export default function VaultTalkLanding() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
      </main>
      <Footer />
    </div>
  )
}