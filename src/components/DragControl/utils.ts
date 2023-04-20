import { RefObject } from "react";

const DRAG_THRESHOLD = 0.7;
const EMPTY_THRESHOLD = 0.1;
const DRAG_PLACEHOLDER = "Drag to navigate";

enum DRAG_ENDPOINT {
  "MINI_GAMES" = "mini_games",
  "EMPTY" = "empty",
  "CV" = "cv",
  "ABOUT" = "about",
  "PLACEHOLDER" = "placeholder",
}

export const endpoint_map = {
  [DRAG_ENDPOINT.EMPTY]: {
    url: "/",
    label: "",
  },
  [DRAG_ENDPOINT.MINI_GAMES]: {
    url: "/games",
    label: "Mini games",
  },
  [DRAG_ENDPOINT.CV]: {
    url: "/cv",
    label: "My CV",
  },
  [DRAG_ENDPOINT.ABOUT]: {
    url: "/about",
    label: "About me",
  },
  [DRAG_ENDPOINT.PLACEHOLDER]: {
    url: "/",
    label: DRAG_PLACEHOLDER,
  },
};

export const getDragResult = (
  inputX: number,
  inputY: number,
  divisor: number
) => {
  if (
    (Math.abs(inputX / divisor) < EMPTY_THRESHOLD &&
      Math.abs(inputY / divisor) < EMPTY_THRESHOLD) ||
    !divisor
  ) {
    return endpoint_map[DRAG_ENDPOINT.PLACEHOLDER];
  }
  if (
    Math.abs(inputX / divisor) > DRAG_THRESHOLD &&
    Math.abs(inputY / divisor) < DRAG_THRESHOLD
  ) {
    return inputX < 0
      ? endpoint_map[DRAG_ENDPOINT.EMPTY]
      : endpoint_map[DRAG_ENDPOINT.MINI_GAMES];
  }
  if (
    Math.abs(inputX / divisor) < DRAG_THRESHOLD &&
    Math.abs(inputY / divisor) > DRAG_THRESHOLD
  ) {
    return inputY > 0
      ? endpoint_map[DRAG_ENDPOINT.CV]
      : endpoint_map[DRAG_ENDPOINT.ABOUT];
  }
  return endpoint_map[DRAG_ENDPOINT.EMPTY];
};

export const getDivisorFromRef = (ref: RefObject<HTMLDivElement>) => {
  let clientWidth;
  if (ref!.current) {
    clientWidth = ref!.current.clientWidth;
  }
  return (clientWidth || 0) / 4;
};
