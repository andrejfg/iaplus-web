import { Center, Text } from '@chakra-ui/react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface CardSecondSectionProps {
  src: string | StaticImport
  title: string
  content: string
}
export default function CardSecondSection({
  src,
  title,
  content,
}: CardSecondSectionProps) {
  return (
    <Center className="flex-col rounded-xl bg-iaplus-eggshell px-2 py-4 shadow-lg">
      <Center className="py-4">
        <Image className="w-2/3" alt="celular" src={src} />
      </Center>
      <Text className="text-center font-body text-xl font-bold text-iaplus-blue max-lg:text-sm">
        {title}
      </Text>
      <Text className="text-center font-body text-base max-lg:text-xs">
        {content}
      </Text>
    </Center>
  )
}
