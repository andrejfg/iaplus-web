import { Flex, Center, Text } from '@chakra-ui/react'
import CardSecondSection from './CardSecondSection'
import Button from './Button'

export default function SecondSection() {
  return (
    <Flex className="relative flex-1">
      <Flex className="absolute -left-40 bottom-10 h-[631px] w-[631px] max-w-full rounded-full border-[40px] border-[#FCF2F9B2]" />
      <Flex className="z-10 flex-1 flex-col gap-3 p-10 max-lg:p-5">
        <Center>
          <Text className="font-body text-4xl font-bold tracking-widest text-iaplus-dark-blue max-lg:text-xl">
            Sobre
          </Text>
        </Center>
        <Center>
          <Text className="text-baseline text-6xl tracking-[0.25em] text-iaplus-blue max-lg:text-2xl">
            IA
            <em className="font-intro font-bold not-italic">PLUS</em>
          </Text>
        </Center>
        <Flex className="items-center pb-16 max-lg:flex-col max-lg:pb-4">
          <Flex className="flex-1 flex-col gap-4 p-8 max-lg:p-4">
            <Text className="font-body text-3xl font-medium max-lg:text-center max-lg:text-base ">
              Aumente sua produtividade e solucione o seu problema.
            </Text>
            <Text className="font-body text-lg font-light max-lg:text-center max-lg:text-sm">
              A IA Plus oferece dezenas de consultores virtuais alimentados pela
              melhor tecnologia CHATGPT. Com eles, otimize sua eficiência
              operacional liberando tempo para atividades estratégicas. Nossa
              <em className="font-bold not-italic text-iaplus-blue">
                {' missão '}
              </em>
              é facilitar sua jornada de ponta a ponta, otimizando os processos
              e garantindo resultados satisfatórios para você e setores da sua
              empresa.
            </Text>
          </Flex>
          <Flex className="relative flex-1 px-2 py-4">
            <Flex className="absolute right-10 top-12 h-[431px] w-[431px] max-w-full rounded-full bg-[#FCF2F9B2]" />
            <Center className="z-10 flex-1 gap-4">
              <Flex className="flex-1 flex-col gap-4">
                <CardSecondSection
                  src={require('@/assets/startup.svg')}
                  title={'Produtividade'}
                  content={'Soluções de IA pensadas na produtividade.'}
                />
                <CardSecondSection
                  src={require('@/assets/learning.svg')}
                  title={'Capacitação'}
                  content={'Treinamento e capacitação top de linha.'}
                />
              </Flex>
              <Flex className="flex-1">
                <CardSecondSection
                  src={require('@/assets/usb.svg')}
                  title={'Automação'}
                  content={'Chega de dor de cabeça.'}
                />
              </Flex>
            </Center>
          </Flex>
        </Flex>
        <Center className="z-10">
          <Button label="Teste Gratuitamente" />
        </Center>
      </Flex>
    </Flex>
  )
}
