import React from 'react'
import AppHeader from '../../app-header/src'
import SearchPanel from '../../search-panel/src'
import PostStatusFilter from '../../post-status-filter/src'
import PostList from '../../post-list/src'
import PostAddForm from '../../post-add-form/src'

export const AppWrapper = () => {
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
