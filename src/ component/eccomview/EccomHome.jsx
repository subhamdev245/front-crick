import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategories,selectCategoryLoading,selectCategoryError, fetchCategories } from '../../store/CategorySlice'
import ProductPage from '../comman/ProductPage'


const EccomHome = () => {
  const productId = "6734868b796f427a7d42fd42"
  return (
    <ProductPage productId={"6734868b796f427a7d42fd42"}/>
  )
}

export default EccomHome