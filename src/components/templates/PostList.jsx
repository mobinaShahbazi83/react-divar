import { useQuery } from "@tanstack/react-query"
import { getPost } from "../../services/user"
import Loader from "../modules/Loader"
import { sp } from "../../utils/numbers"
import styles from "./PostList.module.css"


function PostList() {
    const {data, isLoading} = useQuery(["my-post-list"], getPost)
  return (
    <div className={styles.list}>
        {isLoading ? <Loader/> : (
            <>
            <h3>اگهی های شما</h3>
            {data.data.posts.map((i) => (
                <div key={post._id} className={styles.post}><img src={`${import.meta.env.VITE_BASE_URL} ${post.images[0]}`}/>
                <div>
                    <p>{post.options.title}</p>
                    <span>{post.options.content}</span>
                </div>
                <div className={styles.price}>
                    <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                    <span>{ sp(post.amount)} تومان</span>
                </div>
                </div>
            ))}
            
            </>
        )} 
    </div>
  )
}

export default PostList