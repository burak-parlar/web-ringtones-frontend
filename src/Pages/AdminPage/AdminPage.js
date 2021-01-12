import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DeleteIcon from "../../Assets/icons/Delete.svg";

import Input from "../../UI/Input/Input";

import { addToSounds, deleteFromSounds } from "../../store/actions/sounds";

import "./AdminPage.css";
import "../commonStyle.css";

const AdminPage = () => {
  const [adminForm, setAdminForm] = useState({
    type: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Sound Type",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      label: "Sound Type",
    },
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Sound Name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      label: "Sound Name",
    },
    price: {
      elementType: "input",
      elementConfig: {
        type: "number",
        placeholder: "Sound Price",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      label: "Sound Price",
    },
    soundSource: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Sound Source",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      label: "Sound Source",
    },
  });

  const sounds = useSelector((state) => state.sounds.sounds);

  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();

  const addSound = (event) => {
    event.preventDefault();
    let sound = {};

    sound.name = adminForm.name.value;
    sound.type = adminForm.type.value;
    sound.price = adminForm.price.value;

    sound.soundSource = adminForm.soundSource.value;
    if (sound.name !== "" && sound.price !== "" && sound.soundSource !== "") {
      dispatch(addToSounds(sound));
    }
  };

  const deleteSound = (type, soundId) => {
    dispatch(deleteFromSounds(type, soundId));
  };

  const handleChange = (event, id) => {
    const updatedAdminForm = {
      ...adminForm,
    };
    const updatedFormElement = { ...updatedAdminForm[id] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidty(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedAdminForm[id] = updatedFormElement;

    setAdminForm(updatedAdminForm);
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

  const checkFormIsValid = () => {
    let isValid = true;
    for (let formElement in adminForm) {
      if (!adminForm[formElement].valid) {
        isValid = false;
      }
    }

    setIsFormValid(isValid);
  };

  useEffect(() => {
    checkFormIsValid();
  }, [isFormValid, checkFormIsValid]);

  const adminFormElementsArray = [];

  for (let key in adminForm) {
    adminFormElementsArray.push({
      id: key,
      config: adminForm[key],
    });
  }

  const soundList = () => {
    const soundTypes = [...sounds];
    const soundList = [];

    for (let soundType in soundTypes) {
      for (let sound in soundTypes[soundType].sounds) {
        soundList.push({
          type: soundTypes[soundType].type,
          sound: soundTypes[soundType].sounds[sound],
        });
      }
    }

    const listElements = [];

    for (let snd in soundList) {
      listElements.push(
        <li
          key={
            soundList[snd].type +
            soundList[snd].sound.id +
            soundList[snd].sound.name
          }
          className="soundsItem"
        >
          <div style={{ flex: 5 }}>
            <h5>{soundList[snd].sound.name}</h5>
          </div>
          <div
            className="delete-container"
            onClick={() =>
              deleteSound(soundList[snd].type, soundList[snd].sound.id)
            }
          >
            <img src={DeleteIcon} />
          </div>
          <div style={{ flex: 2 }}>
            <h5>Type</h5> {soundList[snd].type}
          </div>

          <div style={{ flex: 2 }}>
            <h5>Price</h5> {soundList[snd].sound.price}$
          </div>
        </li>
      );
    }
    return listElements;
  };

  return (
    <div className="mainContainer">
      <div
        style={{
          display: "flex",
          flex: 1,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Management Panel</h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 4,
          width: "100%",

          justifyContent: "space-evenly",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        <div>
          <div style={{ marginBottom: "20px" }}>
            <h2>Add Sound</h2>
          </div>
          <form onSubmit={addSound}>
            {adminFormElementsArray.map((formElement) => (
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

            <div className="addSound-button-container">
              <button disabled={!isFormValid} className="addSound-button">
                Add Sound
              </button>
            </div>
          </form>
        </div>
        <div>
          <div style={{ marginBottom: "20px" }}>
            <h2>Sound List</h2>
          </div>

          <div className="soundsBox">
            <ul className="sounds">{soundList()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
