import { Center, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Button from '@/components/Button'
import LinkText from '@/components/LinkText'
import CardFirstSection from '@/components/CardFirstSection'
export default function FirstSection() {
  return (
    <Flex className="relative flex-1 flex-col rounded-br-[40%] bg-iaplus-dark-blue">
      <Image
        className="absolute left-8 h-2/3 w-fit object-contain opacity-70"
        alt="fundo2"
        src={require('@/assets/detalheFundo.png')}
      />
      <Flex className="z-10 flex-1 items-start p-10 max-lg:p-6">
        <Center className="flex-1 flex-col gap-4 self-center ">
          <Text className="font-body text-5xl font-bold text-white max-lg:text-2xl">
            IA Desenvolvida com a Tecnologia do ChatGPT 4.0
          </Text>
          <Text className="font-body text-xl text-white max-lg:text-sm">
            Contrate consultores digitais, e otimize os resultados utilizando o
            melhor da tecnologia IA, 24H por dia.
          </Text>
          <Flex className="w-full flex-1 flex-col items-start justify-between gap-10 max-lg:items-center">
            <Flex className="items-center justify-between gap-4">
              <Button label="Experimente nossa tecnologia" />
              <LinkText href={''} label={'Saiba mais'} />
            </Flex>
            <Flex className="flex-col items-start gap-8">
              <CardFirstSection
                src={require('@/assets/infinity.png')}
                text="Sem limitações de uso"
              />
              <Flex className="flex-wrap justify-between gap-8 max-lg:hidden">
                <CardFirstSection
                  src={require('@/assets/thumbsUp.svg')}
                  text="Soluções personalizadas"
                />
                <CardFirstSection
                  src={require('@/assets/levelUp.svg')}
                  text="Valores Competitivos"
                />
                <CardFirstSection
                  src={require('@/assets/win.svg')}
                  text="Líder em transformação digital"
                />
              </Flex>
            </Flex>
          </Flex>
        </Center>
        <Image
          className="h-fit w-2/5 max-w-3xl object-contain max-lg:hidden"
          alt="celular"
          src={require('@/assets/celular.png')}
        />
      </Flex>
    </Flex>
  )
}
