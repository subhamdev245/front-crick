import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategories,selectCategoryLoading,selectCategoryError, fetchCategories } from '../../store/CategorySlice'
import ProductPage from '../comman/ProductPage'
import ProductCard from '../comman/ProductCard'
import CategoriesPage from '../comman/ShopByCategoryPage'
import Filter from '../comman/ui/Filter'
import { Link } from 'react-router-dom'


const EccomHome = () => {
  
  return (
     <>
     <CategoriesPage />
     </>
  )
}

export default EccomHome