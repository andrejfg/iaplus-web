import { Center, Text } from '@chakra-ui/react'

interface ButttonProps {
  label: string
  background?: string
}

export default function Button({ label, background }: ButttonProps) {
  const backgroundButton = background
    ? 'bg-[' + background + ']'
    : 'bg-iaplus-button'

  return (
    <Center
      className={`cursor-pointer rounded-2xl px-6 py-3 max-lg:rounded-lg max-lg:px-4 max-lg:py-2 ${backgroundButton}`}
    >
      <Text className="font-body text-base font-semibold text-white max-lg:text-xs">
        {label}
      </Text>
    </Center>
  )
}
