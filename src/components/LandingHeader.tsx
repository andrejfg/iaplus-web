import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Center } from '@chakra-ui/react'
import Image from 'next/image'
import Button from './Button'

export default function LandingHeader() {
  return (
    <Flex className="w-full justify-between bg-iaplus-dark-blue px-16 py-8 max-md:px-6 max-md:py-4">
      <Image
        className="h-12 w-fit object-contain max-md:h-10"
        alt="logoIAPLUS"
        src={require('@/assets/LogoIAPLUS.png')}
      />
      <Center className="justify-end gap-4">
        <Button label={'Entrar'} />
        <Center>
          <Image
            className="h-5 w-fit object-contain"
            alt="countryFlag"
            src={require('@/assets/brazilFlag.png')}
          />
          <ChevronDownIcon boxSize={7} color="white" />
        </Center>
      </Center>
    </Flex>
  )
}
