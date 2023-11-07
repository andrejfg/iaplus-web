interface LinkTextProps {
  href: string
  label: string
}

export default function LinkText({ href, label }: LinkTextProps) {
  return (
    <a
      className="font-body text-base font-semibold text-white underline max-lg:text-sm"
      href={href}
    >
      {label}
    </a>
  )
}
