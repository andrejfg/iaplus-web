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
    <Center className="h-80 w-60 flex-col gap-4 rounded-xl bg-iaplus-eggshell p-5 shadow-lg">
      <Center className="h-60 max-lg:h-32">
        <Image alt="celular" src={src} />
      </Center>
      <Text className="text-center font-body text-xl font-bold text-iaplus-blue max-lg:text-base">
        {title}
      </Text>
      <Text className="text-center font-body text-base max-lg:text-sm">
        {content}
      </Text>
    </Center>
  )
}
