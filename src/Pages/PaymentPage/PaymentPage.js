import React, { useEffect, useState } from "react";

import Input from "../../UI/Input/Input";

import "./PaymentPage.css";
import "../commonStyle.css";

const PaymentPage = () => {
  const [creditCardForm, setCreditCardForm] = useState({
    number: {
      elementType: "input",
      elementConfig: {
        type: "number",
        placeholder: "Card Number",
      },
      value: "",
      validation: {
        required: true,
        length: 16,
        onlyNumber: true,
      },
      valid: false,
      touched: false,
      label: "Card Number",
    },
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      label: "Name",
    },
    expiration: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Expiration Date",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      label: "Expiration Date",
    },
    cvc: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "CVC",
      },
      value: "",
      validation: {
        required: true,
        onlyNumber: true,
      },
      valid: false,
      touched: false,
      label: "CVC",
    },
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event, id) => {
    const updatedCardForm = {
      ...creditCardForm,
    };
    const updatedFormElement = { ...updatedCardForm[id] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidty(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedCardForm[id] = updatedFormElement;

    setCreditCardForm(updatedCardForm);
  };

  const checkValidty = (value, rules) => {
    let isValid = true;
    const reg = /^[0-9\b]+$/;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.length) {
      isValid = value.length == rules.length && isValid;
    }

    if (rules.onlyNumber) {
      isValid = reg.test(value) && isValid;
    }

    return isValid;
  };

  const paymentHandler = (event) => {
    event.preventDefault();
    const paymentData = {};
    for (let formElementId in creditCardForm) {
      paymentData[formElementId] = creditCardForm[formElementId].value;
    }

    console.log(paymentData);
  };

  const checkFormIsValid = () => {
    let isValid = true;
    for (let formElement in creditCardForm) {
      if (!creditCardForm[formElement].valid) {
        isValid = false;
      }
    }

    setIsFormValid(isValid);
  };

  useEffect(() => {
    checkFormIsValid();
  }, [isFormValid, checkFormIsValid]);

  const formElementsArray = [];

  for (let key in creditCardForm) {
    formElementsArray.push({
      id: key,
      config: creditCardForm[key],
    });
  }

  return (
    <div className="mainContainer">
      <div
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "10px 0px" }}>
          <h2>Credit Card Information</h2>
        </div>
        <div className="creditCard-container">
          <form onSubmit={paymentHandler}>
            {formElementsArray.map((formElement) => (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => handleChange(event, formElement.id)}
                label={formElement.config.label}
              />
            ))}

            <div className="order-button-container">
              <button disabled={!isFormValid} className="order-button">
                Complete your order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
