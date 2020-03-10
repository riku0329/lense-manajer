import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import {  LIGHT_ASH, ASH, LIGHT_BLACK, BLUE } from "./utils/color";

const BodyContainer = styled.div`
  background-color: white;
  height: 30rem;;
  width: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;

  @media screen and (max-width: 800px) {
    width: 80%;
    height: 40rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CustomButton = styled.button`
  color: ${LIGHT_BLACK};
  background-color: ${LIGHT_ASH};
  height: 2rem;
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  width: 25vh;
  &:hover {
    background-color: ${ASH};
  }
  &:active {
    transform: scale(0.9);
  }
`;
const DateButton = styled.button`
  background-color: ${LIGHT_ASH};
  border-radius: 3px;
  margin-top: 1rem;
  height: 2rem;
  font-size: 1rem;
  width: 20%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  outline: none;
  border: none;

  &:hover {
    background-color: ${BLUE}
  }

  &:active {
    transform: scale(.9);
  }
`;

const CountDown = styled.span`
  font-size: 2rem;
  padding-top: 5rem;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const countDownDay = targetDate => {
  const date = targetDate;
  const diffMSec = date - (new Date() - 1209600000);
  const limitDate = Math.floor(diffMSec / (1000 * 60 * 60 * 24));
  localStorage.setItem("limitDate", JSON.stringify(limitDate));
  return limitDate;
};

const Body = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [countDown, setCountDown] = useState();

  const CustomInput = ({ value, onClick }) => (
    <CustomButton onClick={onClick}>
      {value}
    </CustomButton>
  );

  useEffect(() => {
    const getLocalStorage = () => {
      const limitDate = JSON.parse(localStorage.getItem("limitDate"));
      setCountDown(limitDate);
    };
    return getLocalStorage();
  }, []);

  const addDays = () => {

  }

  const handleSubmit = () => {
    setCountDown(countDownDay(startDate));
    console.log(countDown);
  };
  return (
    <BodyContainer>
      <FormContainer>
        <DatePicker
          className="from-input"
          selected={startDate}
          onChange={date => setStartDate(date)}
          maxDate={addDays(new Date(), 5)}
          customInput={<CustomInput />}
        />
        <DateButton onClick={handleSubmit} type="button">
          開始
        </DateButton>
      </FormContainer>
      {!!countDown && <CountDown>残り{countDown}日で交換です。</CountDown>}
    </BodyContainer>
  );
};

export default Body;
