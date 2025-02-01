

function SendOtpForm({setStep, mobile, setMobile}) {
    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
  <form onSubmit={submitHandler}>
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