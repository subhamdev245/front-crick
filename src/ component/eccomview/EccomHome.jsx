import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategories,selectCategoryLoading,selectCategoryError, fetchCategories } from '../../store/CategorySlice'
import ProductPage from '../comman/ProductPage'
import ProductCard from '../comman/ProductCard'
import CategoriesPage from '../comman/ShopByCategoryPage'


const EccomHome = () => {
  
  return (
    <CategoriesPage />
  )
}

export default EccomHome