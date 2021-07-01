export interface ListInterface {
  items: [{ post?: string | number; important?: boolean; like?: boolean; id: number }]
  deleteItem: (
    postData: [{ post?: string | number; important?: boolean; like?: boolean; id: number }],
    id: number,
  ) => Array<any>
  importantItem: (
    postData: [{ post?: string | number; important?: boolean; like?: boolean; id: number }],
    id: number,
    status: boolean,
  ) => Array<any>
  likeItem: (
    postData: [{ post?: string | number; important?: boolean; like?: boolean; id: number }],
    id: number,
    status: boolean,
  ) => Array<any>
  postObject: { post?: string | number; important?: boolean; like?: boolean; id: number }
  setPostData: () => Array<any>
}
