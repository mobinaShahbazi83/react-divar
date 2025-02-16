import { use } from "react"
import Main from "../components/templates/Main"
import Sidebar from "../components/templates/Sidebar"
import { useQuery } from "@tanstack/react-query"
import { getAllPost } from "../services/user"
import Loader from "../components/modules/Loader"
import { getCategory } from "../services/admin"

 const styles = {display: "flex"}
 function HomePage() {
  const {data:posts, isLoading:postLoading} = useQuery(["post-list"], getAllPost)
  const {data:categories, isLoading:categoryLoading} = useQuery(["get-categories"],getCategory)
  return (
    <>
    {postLoading || categoryLoading ? <Loader/> : (
      <div style={styles}>
        <Sidebar categories={categories}/>
        <Main posts={posts}/>
      </div>
    )}
    </>
  )
}

export default HomePage