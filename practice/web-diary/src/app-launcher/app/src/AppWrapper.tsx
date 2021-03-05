import React from 'react'
import AppHeader from '@ui/app-header'
import SearchPanel from '@ui/search'
import PostStatusFilter from '@ui/filter'
import PostList from '@ui/post-list'
import PostAddForm from '@ui/post-add-form'

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
