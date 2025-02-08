import { sendOtp } from "../../services/auth"
import styles from "./SendOtp.module.css"

function SendOtpForm({setStep, mobile, setMobile}) {
    const submitHandler =async(e) => {
        e.preventDefault()
        if(mobile.length !== 11) return

        const {response, error} = await sendOtp(mobile)
        if(response) setStep(2)
            if(error) console.log(error.response.data.message)
        console.log({response, error})
    }
  return (
  <form onSubmit={submitHandler} className={styles.form}>
    <p>ورود به حساب کاربری</p>
    <span>برای استفاده از امکانات دیوار لطفا شماره موبایل خود را وارد کنید. کد تایید به این شماره موبایل پیامک خواهد شد</span>
    <label htmlFor="inout">
        شماره موبایل خود را وارد بکنید
    </label>
    <input type="text" id="inout" placeholder="شماره موبایل"  value={mobile} onChange={e => setMobile(e.target.value)}/>
    <button type="submit">ارسال کد تایید</button>
  </form>
  )
}

export default SendOtpForm