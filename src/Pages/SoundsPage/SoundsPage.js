import React, { useEffect, useRef, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RainIcon from "../../Assets/icons/RainIcon.svg";
import LightIcon from "../../Assets/icons/LightIcon.svg";
import FireIcon from "../../Assets/icons/FireIcon.svg";
import BirdIcon from "../../Assets/icons/BirdIcon.svg";
import WindyIcon from "../../Assets/icons/WindyIcon.svg";

import useAudio from "../../Components/Music/Music";
import MusicPlayer from "./components/MusicPlayer";
import ListBox from "./components/ListBox";
import MusicTypes from "./components/MusicTypes";

import { addToCart } from "../../store/actions/cart";
import { fetchSounds } from "../../store/actions/sounds";

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
  const { pathname } = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const [currentSound, setCurrentSound] = useState({
    id: 0,
    name: "",
    source: "",
    price: "",
    type: "",
  });

  const sounds = useSelector((state) => state.sounds.sounds);

  const [playing, toggle] = useAudio(currentSound.source);

  //const [isPaused, setIsPaused] = useState(audio.current.paused);

  const dispatch = useDispatch();

  const addItemToCart = () => {
    if (currentSound.id !== 0 && currentSound.name !== "") {
      dispatch(addToCart(currentSound));
    }
  };

  const playSound = (sound) => {
    setCurrentSound(sound);
    //setIsPaused(false);
    toggle();
  };

  const nextSound = () => {
    let sameTypeSounds = [];
    for (let key in sounds) {
      if (sounds[key].type === currentSound.type) {
        sameTypeSounds.push(sounds[key]);
      }
    }
    if (sameTypeSounds.length > 1) {
      let nxtSound = sameTypeSounds.find((item) => item.id > currentSound.id);
      if (nxtSound) {
        setCurrentSound(nxtSound);
      }
    }
  };

  const prevSound = () => {
    let sameTypeSounds = [];
    for (let key in sounds) {
      if (sounds[key].type === currentSound.type) {
        sameTypeSounds.push(sounds[key]);
      }
    }
    if (sameTypeSounds.length > 1) {
      let prvSound = sameTypeSounds.find((item) => item.id < currentSound.id);
      if (prvSound) {
        setCurrentSound(prvSound);
      }
    }
  };

  const toggleSound = () => {
    // if (currentSound && currentSound.id !== 0 && currentSound.name !== "") {
    //   if (isPaused) {
    //     setIsPaused(false);
    //   } else {
    //     setIsPaused(true);
    //   }
    // }
    toggle();
  };

  useEffect(() => {}, [pathname]);

  // useEffect(() => {
  //   if (isPaused) {
  //     audio.current.pause();
  //   } else {
  //     audio.current.play();
  //   }
  // }, [currentSound, isPaused]);

  useEffect(() => {
    const loadSounds = async () => {
      setIsLoading(true);
      try {
        await dispatch(fetchSounds());
      } catch (err) {
        setError(err.message);
      }

      setIsLoading(false);
    };

    loadSounds();
  }, [dispatch]);

  return (
    <div className="mainContainer">
      <div></div>
      {/* <audio
        ref={audio}
        preload="auto"
        loop={true}
        type="audio/wav,audio/ogg"
        src={
          currentSound ? (currentSound.source ? currentSound.source : "") : ""
        }
      /> */}
      <MusicTypes soundType={soundType} pathname={pathname} />

      <ListBox
        error={error}
        loading={isLoading}
        sounds={sounds}
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
        isPaused={!playing}
        prevSound={prevSound}
        nextSound={nextSound}
      />
    </div>
  );
};

export default SoundsPage;
