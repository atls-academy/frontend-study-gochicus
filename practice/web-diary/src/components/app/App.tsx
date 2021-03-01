import React from 'react'
import AppHeader from '../app-header/AppHeader'
import SearchPanel from '../search-panel/SearchPanel'
import PostStatusFilter from '../post-status-filter/PostStatusFilter'
import PostList from '../post-list/PostList'
import PostAddForm from '../post-add-form/PostAddForm'

import '../../style/app.css'

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  )
}

export default App
