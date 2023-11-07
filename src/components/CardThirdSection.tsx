import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useState } from 'react'

interface CardThirdSectionProps {
  src: string | StaticImport
  title: string
  content: string
}

export default function CardThirdSection({
  src,
  title,
  content,
}: CardThirdSectionProps) {
  const [visible, setVisible] = useState<boolean>(false)

  function onClick() {
    setVisible((prev) => !prev)
  }
  return (
    <Flex className="flex-col rounded-lg bg-white shadow-lg" onClick={onClick}>
      <Flex className="items-center justify-between rounded-lg p-4 shadow-md">
        <Flex className="flex-1 items-center gap-4">
          <Image alt="celular" src={src} />
          <Text className="font-body text-xl font-extrabold text-iaplus-dark-blue max-lg:text-base">
            {title}
          </Text>
        </Flex>
        <Flex
          className={`cursor-pointer rounded-full border-[3px] border-iaplus-blue ${
            visible && 'bg-iaplus-blue'
          }`}
        >
          <ChevronDownIcon
            className={`text-3xl ${
              !visible ? 'text-iaplus-dark-blue' : 'rotate-180 text-white'
            }`}
          />
        </Flex>
      </Flex>
      {visible && (
        <Flex className="p-4 px-8">
          <Text className="font-body text-base max-lg:text-sm">{content}</Text>
        </Flex>
      )}
    </Flex>
  )
}
