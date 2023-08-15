import React from 'react'
import { Modal } from "antd"

const Modal = ({props}) => {
    const {title} = props
  return (
    <>
        <Modal>
        <p className="flex flex-col gap-2 ">
        <span className="cursor-pointer border bg-gray-300 flex gap-3 items-center rounded-full w-[450px] h-10 text-center p-2  px-[20px">
            {/* <BiCommentAdd size={20}/> */}
            <span className="text-sm font-semibold">{title}</span>
            </span>
        </p>
        </Modal>
    </>
  )
}

export default Modal