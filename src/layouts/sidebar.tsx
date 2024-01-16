interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Sidebar: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <aside className={`basis-64 ${className}`} {...props}>
      {children}
    </aside>
  )
}

export default Sidebar