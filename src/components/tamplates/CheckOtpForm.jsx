import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { getProfile } from "src/services/user";
import { setCookie } from "src/utils/ckookie";

import styles from "./CheckOtpForm.module.css";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const {refetch} = useQuery(["profile"],getProfile);
  const navigate = useNavigate();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    if (code.length > 5) return;
    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      console.log(response);
      setCookie(response.data);
      navigate("/");
      refetch();
    }

    if (error) {
      console.log(error.response.data.message);
    }
    console.log(code, mobile);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
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
      <button className={styles.backButton} onClick={(e) => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
