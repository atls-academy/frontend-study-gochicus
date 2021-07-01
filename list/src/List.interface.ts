export interface ListInterface {
  items: [{ post?: string; important?: boolean; like?: boolean; id: number }]
  deleteItem: (
    postData: [{ post?: string; important?: boolean; like?: boolean; id: number }],
    id: number,
  ) => []
  importantItem: (
    postData: [{ post?: string; important?: boolean; like?: boolean; id: number }],
    id: number,
    status: boolean,
  ) => []
  likeItem: (
    postData: [{ post?: string; important?: boolean; like?: boolean; id: number }],
    id: number,
    status: boolean,
  ) => []
  postObject: { post?: string; important?: boolean; like?: boolean; id: number }
  setPostData: []
}
