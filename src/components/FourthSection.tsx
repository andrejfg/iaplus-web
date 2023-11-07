import { Center, Flex, Text } from '@chakra-ui/react'
import CardFourthSection from './CardFourthSection'
import Image from 'next/image'
import GraphCardFourthSection from './GraphCardFourthSection'

export default function FourthSection() {
  return (
    <Flex className="flex-col gap-8 p-16">
      <Text className="font-body text-5xl font-bold text-[#3A00BA] max-lg:text-3xl">
        {'Soluções '}
        <span className="font-normal text-iaplus-dark-blue">IA</span>
        <em className="font-intro not-italic text-iaplus-dark-blue">PLUS</em>
      </Text>
      <Center className="flex-1">
        <Flex className="flex-1 flex-col items-center gap-6">
          <CardFourthSection
            title={'Assistente CoCEO'}
            content={
              'Nossa Plataforma inovadora leva a inteligência artificial a um novo patamar, oferecendo um parceiro virtual com inteligência de ponta ao seu lado. Seja impulsionado pela excelência e conquiste resultados extraordinários.'
            }
          />
          <CardFourthSection
            title={'Assistente CoCEO'}
            content={
              'Nossa Plataforma inovadora leva a inteligência artificial a um novo patamar, oferecendo um parceiro virtual com inteligência de ponta ao seu lado. Seja impulsionado pela excelência e conquiste resultados extraordinários.'
            }
          />
          <CardFourthSection
            title={'Assistente CoCEO'}
            content={
              'Nossa Plataforma inovadora leva a inteligência artificial a um novo patamar, oferecendo um parceiro virtual com inteligência de ponta ao seu lado. Seja impulsionado pela excelência e conquiste resultados extraordinários.'
            }
          />
        </Flex>
        <Flex className="flex-1 justify-center max-lg:hidden">
          <Image
            className="h-fit w-[375px] object-contain"
            src={require('@/assets/cellphone.png')}
            alt={''}
          />
        </Flex>
      </Center>
      <Flex className="mt-16">
        <GraphCardFourthSection />
      </Flex>
    </Flex>
  )
}
