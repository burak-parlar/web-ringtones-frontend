import rain1 from "../Assets/sounds/rain1.wav";
import rain2 from "../Assets/sounds/rain2.wav";
import light1 from "../Assets/sounds/light1.ogg";
import light2 from "../Assets/sounds/light2.wav";
import fire1 from "../Assets/sounds/fire1.wav";
import fire2 from "../Assets/sounds/fire2.wav";
import fire3 from "../Assets/sounds/fire3.wav";
import bird1 from "../Assets/sounds/bird1.wav";
import bird2 from "../Assets/sounds/bird2.wav";
import windy1 from "../Assets/sounds/windy1.wav";

const SOUNDS = [
  {
    id: 1,
    type: "rain",
    sounds: [
      { id: 1, name: "RAIN 1", soundSource: rain1, price: 3.99 },
      { id: 2, name: "RAIN 2", soundSource: rain2, price: 3.99 },
    ],
  },
  {
    id: 2,
    type: "light",
    sounds: [
      { id: 1, name: "LIGHTINING 1", soundSource: light1, price: 3.99 },
      { id: 2, name: "LIGHTINING 2", soundSource: light2, price: 2.99 },
    ],
  },
  {
    id: 3,
    type: "fire",
    sounds: [
      { id: 1, name: "FIRE 1", soundSource: fire1, price: 3.99 },
      { id: 2, name: "FIRE 2", soundSource: fire2, price: 5.99 },
      { id: 3, name: "FIRE 3", soundSource: fire3, price: 1.99 },
    ],
  },
  {
    id: 4,
    type: "bird",
    sounds: [
      { id: 1, name: "BIRD 1", soundSource: bird1, price: 3.99 },
      { id: 2, name: "BIRD 2", soundSource: bird2, price: 4.99 },
    ],
  },
  {
    id: 5,
    type: "windy",
    sounds: [{ id: 1, name: "WINDY 1", soundSource: windy1, price: 3.99 }],
  },
];

export default SOUNDS;
