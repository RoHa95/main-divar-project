import React from "react";
import { checkOtp } from "services/auth";
import { setCookie } from "src/utils/ckookie";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    if (code.length > 5) return;
    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      console.log(response);
      setCookie(response.data);
    }

    if (error) {
      console.log(error.response.data.message);
    }
    console.log(code, mobile);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد پیامک شده</p>
      <sapn>کد پیامک شده به شماره به (({mobile})) را وارد کنید.</sapn>
      <label htmlFor="input">کد تایید را وارد کنید.</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">تایید کد</button>
      <button onClick={(e) => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
