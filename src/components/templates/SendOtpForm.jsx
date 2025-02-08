import { sendOtp } from "../../services/auth"
import { useSendOtp } from "../../services/mutation"
import styles from "./SendOtp.module.css"

function SendOtpForm({setStep, mobile, setMobile}) {
  const { isPending, mutate } = useSendOtp();
    const submitHandler =async(e) => {
        e.preventDefault()
        if(mobile.length !== 11) return

       
        mutate(
          { mobile },
          {
            onSuccess: (data) => {
              setStep(2);
            },
            onError: (error) => {
              console.error(error.message);
            },
          }
        );
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