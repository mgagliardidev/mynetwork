import { PopoverButton } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'

const PopOverListLink = (props:any) => {
  return (
    <li className="font-bold p-4 text-lg" ><Link href={props.path}><PopoverButton>{props.text}</PopoverButton></Link></li>
  )
}

export default PopOverListLink