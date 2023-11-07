import { Center, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function LandingFooter() {
  return (
    <Flex className="flex-1 flex-col bg-iaplus-dark-blue">
      <Flex className="flex-1 gap-8 p-10 max-lg:flex-col">
        <Image
          className="h-fit w-52 object-contain"
          src={require('@/assets/LogoIAPLUS.png')}
          alt={'Logo IAPLUS'}
        />
        <Flex className="flex-1 flex-col gap-4 max-lg:flex-row">
          <Flex>
            <Text className="font-body font-semibold text-white">Produto</Text>
          </Flex>
          <Flex className="flex-1 flex-col gap-4">
            <Text className="cursor-pointer font-body text-white">
              Overview
            </Text>
            <Text className="cursor-pointer font-body text-white">Acessar</Text>
            <Text className="cursor-pointer font-body text-white">
              Acessibilidade
            </Text>
          </Flex>
        </Flex>
        <Flex className="flex-1 flex-col gap-4 max-lg:flex-row">
          <Flex>
            <Text className="font-body font-semibold text-white">Soluções</Text>
          </Flex>
          <Flex className="flex-1 flex-col gap-4">
            <Text className="cursor-pointer font-body text-white">
              Assistente CoCEO
            </Text>
            <Text className="cursor-pointer font-body text-white">CMO</Text>
            <Text className="cursor-pointer font-body text-white">PO</Text>
          </Flex>
        </Flex>
        <Flex className="flex-1 flex-col gap-4 max-lg:flex-row">
          <Flex>
            <Text className="font-body font-semibold text-white">Recursos</Text>
          </Flex>
          <Flex className="flex-1 flex-col gap-4">
            <Text className="cursor-pointer font-body text-white">
              Centro de ajuda
            </Text>
            <Text className="cursor-pointer font-body text-white">Blog</Text>
            <Text className="cursor-pointer font-body text-white">
              Tutoriais
            </Text>
            <Text className="cursor-pointer font-body text-white">FAQs</Text>
          </Flex>
        </Flex>
        <Flex className="flex-1 flex-col gap-4 max-lg:flex-row">
          <Flex>
            <Text className="font-body font-semibold text-white">Suporte</Text>
          </Flex>
          <Flex className="flex-1 flex-col gap-4">
            <Text className="cursor-pointer font-body text-white">Contato</Text>
            <Text className="cursor-pointer font-body text-white">
              Desenvolvedores
            </Text>
            <Text className="cursor-pointer font-body text-white">
              Documentação
            </Text>
          </Flex>
        </Flex>
        <Flex className="flex-1 flex-col gap-4 max-lg:flex-row">
          <Flex>
            <Text className="font-body font-semibold text-white">Empresa</Text>
          </Flex>
          <Flex className="flex-1 flex-col gap-4">
            <Text className="cursor-pointer font-body text-white">Sobre</Text>
            <Text className="cursor-pointer font-body text-white">
              Imprensa
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Center className="mb-12 flex-col">
        <Flex className="my-12 h-1 w-4/5 bg-[#334155]" />
        <Text className="font-body text-white">
          IAPLUS @ 2023. All rights reserved.
        </Text>
      </Center>
    </Flex>
  )
}
