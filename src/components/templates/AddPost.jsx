import { useQuery } from "@tanstack/react-query"
import styles from "./AddPost.module.css"
import { getCategory } from "../../services/admin"
import { useState } from "react"
import { getCookie } from "../../utils/cookie"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

function AddPost() {
    const {data} = useQuery(["get-categories"],getCategory)
    const [form, setForm] = useState({
        title: "",
        content: "",
        amount: "",
        city: "",
        category: null,
        images: null
    })
    const addHandler = (event) => {
        event.preventDefault()
        const formData = new FormData()
        for(let i in form) {
            formData.append(i, formData[i])
        }
        const token = getCookie("accessToken")
        axios.post(`${import.meta.env.VITE_BASE_URL}post/create`, formData ,{
            headers: { "Content-Type": "multipart/form-data",
                Authorization: `bearer ${token}`
             }
        }).then((res) => toast.success(res.data.message))
        .catch((error) => toast.error("مشکلی پیش امده است") )
    }

    const changeHandler = (event) => {
        const name = event.target.name
        if(name !== "images") {
            setForm({...form, [name]: event.target.value})
        } else {
            setForm({...form, [name]: event.target.files[0]})
        }

    }
  return (
  <form onChange={changeHandler} className={styles.form}>
    <h3>افزودن اگهی</h3>
    <label htmlFor="title">عنوان</label>
    <input type="text" name="title" id="title"/>
    <label htmlFor="content">توضیحات</label>
    <textarea name="content" id="content"/>
    <label htmlFor="amount">مبلغ</label>
    <input  type="number" name="amount" id="amount"/>
    <label htmlFor="city">شهر</label>
    <input type="text" name="city" id="city"/>
    <label htmlFor="category">دسته بندی</label>
    <select name="category" id="category">
        {data?.data.map((i) => (
            <option key={i._id} value={i._id}>{i.name}</option>
        ))}
    </select>
    <label htmlFor="images">عکس</label>
    <input type="file" name="images" id="images"/>
    <button onClick={addHandler}>ایجاد</button>
    <Toaster/>
  </form>
  )
}

export default AddPost

