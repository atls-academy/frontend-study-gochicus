export interface ListInterface {
  items: [PostDataObject]
  deleteItem: CallbackInterface['callback']
  importantItem: CallbackInterface['callback']
  likeItem: CallbackInterface['callback']
  postObject: PostDataObject
  setPostData: () => PostDataObject[]
}

export interface PostDataObject {
  post?: string | number
  important?: boolean
  like?: boolean
  id: number
}

export interface CallbackInterface {
  callback: (id: number, postData?: PostDataObject, status?: boolean) => PostDataObject[]
}
