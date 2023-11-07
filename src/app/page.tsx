'use client'
import { Flex } from '@chakra-ui/react'

import LandingHeader from '@/components/LandingHeader'
import FirstSection from '@/components/FirstSection'
import SecondSection from '@/components/SecondSection'
import ThirdSection from '@/components/ThirdSection'
import FifthSection from '@/components/FifthSection'
import FourthSection from '@/components/FourthSection'
import LandingFooter from '@/components/LandingFooter'

export default function Home() {
  return (
    <Flex className="min-h-screen flex-1 flex-col bg-iaplus-eggshell">
      <LandingHeader />
      <FirstSection />
      <SecondSection />
      <Flex className="flex-col bg-gradient-to-b from-[#DBDBFF] via-iaplus-green to-iaplus-dark-blue">
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <LandingFooter />
      </Flex>
    </Flex>
  )
}
