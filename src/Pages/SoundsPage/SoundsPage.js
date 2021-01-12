import React, { useEffect, useRef, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RainIcon from "../../Assets/icons/RainIcon.svg";
import LightIcon from "../../Assets/icons/LightIcon.svg";
import FireIcon from "../../Assets/icons/FireIcon.svg";
import BirdIcon from "../../Assets/icons/BirdIcon.svg";
import WindyIcon from "../../Assets/icons/WindyIcon.svg";

import MusicPlayer from "./components/MusicPlayer";
import ListBox from "./components/ListBox";
import MusicTypes from "./components/MusicTypes";

import { addToCart } from "../../store/actions/cart";

import "./SoundsPage.css";
import "../commonStyle.css";

const soundType = [
  { tag: "rain", source: RainIcon },
  { tag: "light", source: LightIcon },
  { tag: "fire", source: FireIcon },
  { tag: "bird", source: BirdIcon },
  { tag: "windy", source: WindyIcon },
];

const SoundsPage = () => {
  const sounds = useSelector((state) => state.sounds.sounds);
  const { pathname } = useLocation();
  const audio = useRef("audio_tag");
  const [currentSound, setCurrentSound] = useState({
    id: 0,
    name: "",
    soundSource: null,
  });
  const [isPaused, setIsPaused] = useState(audio.current.paused);

  const dispatch = useDispatch();

  const addItemToCart = () => {
    if (currentSound.id !== 0 && currentSound.name !== "") {
      dispatch(addToCart(currentSound));
    }
  };

  const playSound = (sound) => {
    setCurrentSound(sound);
    setIsPaused(false);
  };

  const nextSound = () => {
    let nextSnd = sounds.map((item) => {
      let nxtsnd = {};
      if ("/sounds/" + item.type === pathname) {
        if (item.sounds.length === currentSound.id) {
          nxtsnd = item.sounds.find((snd) => snd.id === 1);
        } else {
          nxtsnd = item.sounds.find((snd) => snd.id === currentSound.id + 1);
        }
      }
      return nxtsnd;
    });
    let indexOfSound = sounds.findIndex(
      (item) => "/sounds/" + item.type === pathname
    );

    setCurrentSound(nextSnd[indexOfSound]);
  };

  const prevSound = () => {
    let prevSnd = sounds.map((item) => {
      let prvsnd = {};
      if ("/sounds/" + item.type === pathname) {
        if (currentSound.id === 1) {
          prvsnd = item.sounds.find((snd) => snd.id === item.sounds.length);
        } else {
          prvsnd = item.sounds.find((snd) => snd.id === currentSound.id - 1);
        }
      }
      return prvsnd;
    });
    let indexOfSound = sounds.findIndex(
      (item) => "/sounds/" + item.type === pathname
    );

    setCurrentSound(prevSnd[indexOfSound]);
  };

  const toggleSound = () => {
    if (currentSound && currentSound.id !== 0 && currentSound.name !== "") {
      if (isPaused) {
        setIsPaused(false);
      } else {
        setIsPaused(true);
      }
    }
  };

  useEffect(() => {}, [pathname]);

  useEffect(() => {
    if (isPaused) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
  }, [currentSound, isPaused]);

  return (
    <div className="mainContainer">
      <div></div>
      <audio
        ref={audio}
        preload="auto"
        loop={true}
        type="audio/wav,audio/ogg"
        src={
          currentSound
            ? currentSound.soundSource
              ? currentSound.soundSource
              : ""
            : ""
        }
      />
      <MusicTypes soundType={soundType} pathname={pathname} />

      <ListBox
        SOUNDS={sounds}
        pathname={pathname}
        currentSound={currentSound}
        playSound={playSound}
      />
      <div className="current-play">
        <h3>{currentSound && currentSound.name}</h3>
      </div>
      <MusicPlayer
        AddToCart={addItemToCart}
        toggleSound={toggleSound}
        isPaused={isPaused}
        prevSound={prevSound}
        nextSound={nextSound}
      />
    </div>
  );
};

export default SoundsPage;
