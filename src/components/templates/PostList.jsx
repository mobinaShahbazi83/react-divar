import { useQuery } from "@tanstack/react-query"
import { getPost } from "../../services/user"


function PostList() {
    const {data, isLoading} = useQuery(["my-post-list"], getPost)
  return (
    <div></div>
  )
}

export default PostList