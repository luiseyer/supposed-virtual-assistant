interface Props {
  children?: React.ReactNode
}

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button
      type='button'
      className='rounded-md bg-primary px-5 py-2 text-sm hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-800'
    >
      {children}
    </button>
  )
}
