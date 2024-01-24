import { Input } from '@nextui-org/react'
import { RiSearch2Line } from '@remixicon/react'

const classNames = {
  input: 'bg-transparent',
  innerWrapper: 'bg-transparent',
  inputWrapper: [
    'h-10',
    'bg-default-800',
    'group-data-[hover=true]:bg-default-700',
    'group-data-[focus=true]:bg-default-700',
    'cursor-pointer',
  ],
}

export const SearchInput: React.FC = () => {
  return (
    <Input
      type='text'
      placeholder='search'
      size='sm'
      classNames={classNames}
      startContent={<RiSearch2Line size='16' />}
    />
  )
}
