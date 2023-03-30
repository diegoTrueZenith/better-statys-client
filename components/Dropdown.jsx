import { useContext, createContext, useMemo, useRef, useEffect } from 'react'
import cn from 'classnames'
const DropdownContext = createContext()
import { RiArrowDownSLine } from 'react-icons/ri'

function useDropdownContext() {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error(
      `Dropdown compound components cannot be rendered outside the Dropdown component`
    )
  }
  return context
}

export function DropdownArrow({ className }) {
  return <RiArrowDownSLine className={cn('dropdown__arrow', className)} />
}

export function DropdownTrigger({ children, className }) {
  const { setShow, index } = useDropdownContext()

  return (
    <div
      onClick={() => setShow((prev) => (prev === index ? null : index))}
      className={cn('dropdown__trigger', className)}
    >
      {children}
    </div>
  )
}

export function DropdownContent({ children, className }) {
  const { show } = useDropdownContext()
  const ref = useRef(null)
  useEffect(() => {
    if (!show) {
      ref.current.style.height = 0
    } else {
      ref.current.style.height = ref.current.scrollHeight + 'px'
    }
  }, [show])
  return (
    <div ref={ref} className={cn('dropdown__content', className)}>
      {children}
    </div>
  )
}

export function Dropdown({ children, className, show, setShow, index }) {
  const value = useMemo(
    () => ({ show: show === index, setShow, index }),
    [show, setShow, index]
  )
  return (
    <DropdownContext.Provider value={value}>
      <div className={cn('dropdown', className, { ['dropdown--show']: show === index })}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}
