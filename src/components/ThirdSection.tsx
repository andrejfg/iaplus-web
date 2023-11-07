import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'
import CardThirdSection from './CardThirdSection'
import Image from 'next/image'

export default function ThirdSection() {
  return (
    <Flex className="flex-1 flex-col p-20 max-lg:p-10">
      <Flex className="items-baseline gap-2">
        <Text className="text-center font-body text-3xl font-semibold text-iaplus-blue max-lg:text-lg">
          {'Pilares da '}
          <span className="font-normal">IA</span>
          <em className="font-intro font-bold not-italic">PLUS</em>
        </Text>
        <ArrowForwardIcon className="text-2xl text-iaplus-blue max-lg:text-sm" />
      </Flex>
      <Flex className="flex-1 max-lg:flex-col">
        <Flex className="relative flex-1">
          <Image
            className="absolute h-full object-cover opacity-50 max-lg:object-contain"
            src={require('@/assets/detalheFundo.png')}
            alt={'fundo'}
          />
          <Flex className="z-10 flex-1 flex-col items-center justify-start gap-8 p-10 max-lg:p-4">
            <Flex>
              <Text className="font-body text-4xl font-extrabold tracking-wider text-iaplus-dark-blue max-lg:text-center max-lg:text-lg">
                {'Veja o que a '}
                <span className="font-normal text-iaplus-blue">IA</span>
                <em className="font-intro not-italic text-iaplus-blue">PLUS</em>
                {' pode '}
                <em className="not-italic text-iaplus-blue">resolver</em>
                {' para você ou sua empresa.'}
              </Text>
            </Flex>
            <Image
              className="h-fit w-[320px] max-lg:w-[200px] max-md:w-[100px] "
              src={require('@/assets/LogoIAPLUSColoridoVertical.png')}
              alt={'AIPLUSLogoColorida'}
            />
          </Flex>
        </Flex>
        <Flex className="flex-1 flex-col gap-4">
          <CardThirdSection
            src={require('@/assets/pageUpdate.svg')}
            title={'Tarefas repetitivas e de baixo valor agregado'}
            content={
              'Muitas empresas enfrentam o desafio de lidar com tarefas rotineiras e repetitivas, consumindo tempo e recursos preciosos que poderiam ser direcionados para atividades mais estratégicas. Nossas soluções permitem fazer trabalhos que demoravam horas em questão de minutos pela IAPLUS.IO permite a automatização dessas tarefas, liberando a equipe para focar em atividades de maior valor.'
            }
          />
          <CardThirdSection
            src={require('@/assets/fingerprintScan.svg')}
            title={'Eficiência Operacional'}
            content={
              'As empresas buscam melhorar a eficiência de suas operações para economizar tempo e recursos é algo que toda empresa busca. Disponibilizamos consultores de todas as áreas empresariais para satisfazer suas dúvidas 24h por dia, otimize processos, reduza erros, maior eficácia operacional para sua empresa como um todo.'
            }
          />
          <CardThirdSection
            src={require('@/assets/man.svg')}
            title={'Escassez de recursos humanos qualificados'}
            content={
              'Em alguns setores e regiões, pode ser desafiador encontrar profissionais qualificados para preencher determinadas funções. A iaplus.io oferece funcionários digitais comandados por IA, que podem preencher essas lacunas de forma eficiente e qualificada, garantindo que as empresas tenham acesso aos recursos necessários.'
            }
          />
          <CardThirdSection
            src={require('@/assets/firewall.svg')}
            title={'Resistência à adoção de tecnologia'}
            content={
              'Algumas empresas podem resistir à implementação de tecnologias avançadas, como a IA, devido a preocupações com a curva de aprendizado, integração com sistemas existentes ou medo de substituição de funcionários. A IAPLUS aborda essas preocupações, oferecendo suporte especializado, soluções personalizadas e um modelo de negócio flexível para garantir uma transição tranquila e aproveitamento máximo dos benefícios da IA.'
            }
          />
          <CardThirdSection
            src={require('@/assets/laptop.svg')}
            title={'Investimento financeiro'}
            content={
              'Os custos associados à implementação de tecnologias de IA podem ser uma objeção para algumas empresas. A IAPLUS oferece pacotes e planos flexíveis, adaptados às necessidades específicas de cada empresa, proporcionando um retorno significativo sobre o investimento e permitindo que as empresas tenham acesso aos benefícios da IA de forma acessível.'
            }
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
