

function CheckOtpForm({code,setCode, mobile, setStep}) {
    const submitHandler = (e) => {
        e.preventDefault()
        console.log({code, mobile})
    }
  return (
  <form onSubmit={submitHandler}>
    <p>تایید کد پیامک شده</p>
    <span>کد پیامک شده به شماره "{mobile}" را وارد کنید</span>
    <label htmlFor="input"> کد تایید را وارد کنید</label>
    <input type="text" id="input" placeholder="کد تایید" value={code} onChange={e => setCode(e.target.value)}/> 
    <button type="submit">ورود</button>
    <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
  </form>
  )
}

export default CheckOtpForm