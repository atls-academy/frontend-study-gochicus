export interface ListInterface {
  items: [PostDataObject['object']]
  deleteItem: (CallbackInterface) => PostDataObject['object'][]
  importantItem: (CallbackInterface) => PostDataObject['object'][]
  likeItem: (CallbackInterface) => PostDataObject['object'][]
  postObject: PostDataObject['object']
  setPostData: () => PostDataObject['object'][]
}

export interface PostDataObject {
  object: { post?: string | number; important?: boolean; like?: boolean; id: number }
}
export interface CallbackInterface {
  postData?: PostDataObject['object']
  id: number
  status?: boolean
}
