import { useNavigate } from "react-router-dom"
import { checkOtp } from "../../services/auth"
import { setCookie } from "../../utils/cookie"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "../../services/user"
import styles from "./CheckOtp.module.css"


function CheckOtpForm({code,setCode, mobile, setStep}) {
  const navigate = useNavigate()
  const {refetch} = useQuery(["profile"], getProfile)
    const submitHandler = async (e) => {
        e.preventDefault()
       if(code.length !== 5) return

       const {response, error} = await checkOtp(mobile, code)
       if (response) {
        setCookie(response.data)
        console.log(response.data)
        navigate("/")
        refetch()
       } 
       if(error) {
        console.log(error.response.data.message)
       }
    }
  return (
  <form onSubmit={submitHandler} className={styles.form}>
    <p>تایید کد پیامک شده</p>
    <span>کد پیامک شده به شماره "{mobile}" را وارد کنید</span>
    <label htmlFor="input"> کد تایید را وارد کنید</label>
    <input type="text" id="input" placeholder="کد تایید" value={code} onChange={e => setCode(e.target.value)}/> 
    <button type="submit">ورود</button>
    <button onClick={() => setStep(1)} className={styles.backButton}>تغییر شماره موبایل</button>
  </form>
  )
}

export default CheckOtpForm