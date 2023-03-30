import {
  Dropdown,
  DropdownArrow,
  DropdownContent,
  DropdownTrigger,
} from 'components/Dropdown'
import { useState } from 'react'
import cn from 'classnames'

function FAQ({ data, className }) {
  const [show, setShow] = useState(null)
  return (
    <div className={cn('faq', className)}>
      {data.map((item, index) => (
        <Dropdown
          className="faq__item"
          key={index}
          show={show}
          index={index}
          setShow={setShow}
        >
          <DropdownTrigger className="faq__item__trigger">
            <h3>{item.question}</h3>
            <DropdownArrow />
          </DropdownTrigger>
          <DropdownContent className="faq__item__content">
            <p>{item.answer}</p>
          </DropdownContent>
        </Dropdown>
      ))}
    </div>
  )
}

export default FAQ
