import { Center, Text } from '@chakra-ui/react'

interface ButttonProps {
  label: string
  alt?: boolean
}

export default function Button({ label, alt }: ButttonProps) {
  const backgroundButton = alt ? 'bg-[#3A00BA]' : 'bg-iaplus-button'

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
