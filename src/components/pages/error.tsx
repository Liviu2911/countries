type Props = {
  darkMode: boolean
  error: Error
}

export default function ErrorMessage({ darkMode, error }: Props) {
  return (
    <div
      className={`${
        darkMode ? "text-stone-200" : "text-stone-700"
      } transition-3`}
    >
      {error.message}
    </div>
  )
}
