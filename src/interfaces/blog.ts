export interface Blog {
  id:number,
  title:string,
  cover_image:string,
  readable_publish_date:string,
  user: {
    name:string,
    profile_image:string
  }
}
