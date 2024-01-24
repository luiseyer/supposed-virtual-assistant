import { clsx } from 'clsx'

type Props = React.HTMLProps<HTMLDivElement>

export const Sidebar: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <aside
      className={clsx('shrink-0 basis-72 bg-default-800 p-4', className)}
      {...props}
    >
      {children}
    </aside>
  )
}
