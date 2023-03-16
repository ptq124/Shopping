import React from 'react'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import useCart from '../hooks/useCart'

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1'
export default function CartItem({
  product,
  product: { id, image, title, quantity, price, option },
}) {
  const { addOrUpdateItem, removeItem } = useCart()
  const habdleMinus = () => {
    if (quantity < 2) return
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 })
  }
  const habdlePlus = () => {
    // addOrUpdateToCart({ ...product, quantity: quantity + 1 })
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 })
  }
  const habdleDelete = () => removeItem.mutate(id)

  return (
    <li className='flex justify-between items-center my-2'>
      <img className='w-24 md:w-48 rounded-lg' src={image} alt={title} />
      <div className='flex flex-1 justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg'>{title}</p>
          <p className='text-xl font-bold text-brand'>{option}</p>
          <p>{price}</p>
        </div>
        <div className='text-2xl flex items-center'>
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={habdleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={habdlePlus} />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={habdleDelete} />
        </div>
      </div>
    </li>
  )
}
