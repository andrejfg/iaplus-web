import { Flex, Text } from '@chakra-ui/react'
import Button from './Button'
import Image from 'next/image'

export default function GraphCardFourthSection() {
  return (
    <Flex className="flex-1 rounded-2xl bg-iaplus-dark-blue max-lg:flex-col">
      <Flex className="flex-1 flex-col items-start justify-around gap-10 p-10 max-md:gap-5 max-md:p-8 ">
        <Text className="font-body text-3xl font-bold text-white max-lg:text-2xl max-md:text-base ">
          Líder em transformação digital
        </Text>
        <Text className="font-body text-lg text-white max-lg:text-base max-md:text-sm">
          Maximize a produtividade da sua empresa com soluções inovadoras de IA.
          Escolha pacotes flexíveis e personalizados que atendam às suas
          necessidades. Nossa equipe de consultores virtuais treinados por IA
          lidera a transformação digital, automatizando tarefas repetitivas e
          liberando sua equipe para atividades estratégicas. Otimizando todos os
          setores, impulsionando a eficiência e a competitividade.
        </Text>
        <Button label={'Testar Gratuitamente'} alt />
      </Flex>
      <Flex className="flex-1">
        <Image
          className="h-fit w-full object-contain py-8 max-md:p-0 max-md:px-2"
          src={require('@/assets/graphStyle.svg')}
          alt={'grafico'}
        />
      </Flex>
    </Flex>
  )
}
