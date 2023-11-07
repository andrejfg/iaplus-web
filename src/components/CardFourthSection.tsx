import { Flex, Text } from '@chakra-ui/react'

interface CardFourtSectionProps {
  title: string
  content: string
}

export default function CardFourtSection({
  title,
  content,
}: CardFourtSectionProps) {
  return (
    <Flex className="max-w-[577px] flex-col gap-4 rounded-lg bg-white p-6 shadow-2xl">
      <Text className="font-body text-base font-medium text-[#3A00BA]">
        {title}
      </Text>
      <Text className="font-body text-sm font-medium text-iaplus-dark-blue">
        {content}
      </Text>
    </Flex>
  )
}
