export interface ListInterface {
  items: [{ post?: string; important?: boolean; like?: boolean; id: number }]
  deleteItem: []
  importantItem: []
  likeItem: []
  postObject: { post?: string; important?: boolean; like?: boolean; id: number }
  setPostData: []
}
