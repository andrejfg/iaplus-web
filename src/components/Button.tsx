import { Center, Text } from '@chakra-ui/react'

interface ButttonProps {
  label: string
}

export default function Button({ label }: ButttonProps) {
  return (
    <Center className="cursor-pointer rounded-2xl bg-iaplus-button px-6 py-3 max-lg:rounded-lg max-lg:px-4 max-lg:py-2">
      <Text className="font-body text-base font-semibold text-white max-lg:text-xs">
        {label}
      </Text>
    </Center>
  )
}
