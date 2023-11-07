'use client'
import { Center, Flex, Text } from '@chakra-ui/react'

import LandingHeader from '@/components/LandingHeader'
import FirstSection from '@/components/FirstSection'
import SecondSection from '@/components/SecondSection'
import ThirdSection from '@/components/ThirdSection'

export default function Home() {
  return (
    <Flex className="min-h-screen flex-1 flex-col bg-iaplus-eggshell">
      <LandingHeader />
      <FirstSection />
      <SecondSection />
      <Flex className="flex-col bg-[#DBDBFF]">
        <ThirdSection />
      </Flex>
    </Flex>
  )
}
