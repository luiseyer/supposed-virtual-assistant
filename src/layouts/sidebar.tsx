interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Sidebar: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <aside className={`shrink-0 basis-72 bg-default-800 p-4 ${className}`} {...props}>
      {children}
    </aside>
  )
}

export default Sidebar
