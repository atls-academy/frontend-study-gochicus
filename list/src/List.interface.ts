export interface ListInterface {
  items: [PostDataObject['object']]
  deleteItem: (postData: [PostDataObject['object']], id: number) => [PostDataObject['object']]
  importantItem: (
    postData: [PostDataObject['object']],
    id: number,
    status: boolean,
  ) => [PostDataObject['object']]
  likeItem: (
    postData: [PostDataObject['object']],
    id: number,
    status: boolean,
  ) => [PostDataObject['object']]
  postObject: PostDataObject['object']
  setPostData: () => [PostDataObject['object']]
}

export interface PostDataObject {
  object: { post?: string | number; important?: boolean; like?: boolean; id: number }
}
