export interface ListInterface {
  items: [{ post?: string | number; important?: boolean; like?: boolean; id: number }]
  deleteItem: (
    postData: [{ post?: string | number; important?: boolean; like?: boolean; id: number }],
    id: number,
  ) => [{ post?: string | number; important?: boolean; like?: boolean; id: number }]
  importantItem: (
    postData: [{ post?: string | number; important?: boolean; like?: boolean; id: number }],
    id: number,
    status: boolean,
  ) => [{ post?: string | number; important?: boolean; like?: boolean; id: number }]
  likeItem: (
    postData: [{ post?: string | number; important?: boolean; like?: boolean; id: number }],
    id: number,
    status: boolean,
  ) => [{ post?: string | number; important?: boolean; like?: boolean; id: number }]
  postObject: { post?: string | number; important?: boolean; like?: boolean; id: number }
  setPostData: () => [{ post?: string | number; important?: boolean; like?: boolean; id: number }]
}
