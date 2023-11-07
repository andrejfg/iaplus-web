import { Center, Text } from '@chakra-ui/react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface CardFirstSectionProps {
  src: string | StaticImport
  text: string
}

export default function CardFirstSection({ src, text }: CardFirstSectionProps) {
  return (
    <Center className="gap-4">
      <Image className="h-fit w-10 object-contain" alt="celular" src={src} />
      <Text className="font-body text-xl text-white max-lg:text-sm">
        {text}
      </Text>
    </Center>
  )
}
