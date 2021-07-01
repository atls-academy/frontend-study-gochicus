export interface PostDataObject {
  post?: string | number
  important?: boolean
  like?: boolean
  id: number
}

export type Callback = (id: number, postData?: PostDataObject, status?: boolean) => PostDataObject[]

export interface ListInterface {
  items: [PostDataObject]
  deleteItem: Callback
  importantItem: Callback
  likeItem: Callback
  postObject: PostDataObject
  setPostData: () => PostDataObject[]
}
