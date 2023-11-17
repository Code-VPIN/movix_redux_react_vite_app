import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { fetchDataFromApi } from './utils/api'

import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import MainRoute from './mainRoute'




function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home)
  // console.log(url)

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        console.log(res)
        dispatch(getApiConfiguration(res))
      })
  }
  return (
    <div className='App'>
      <MainRoute />
    </div>
  )
}

export default App
