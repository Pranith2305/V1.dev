"use client";

import React, { useReducer } from "react";
import { Button } from "./ui/button";  // Assuming this is a custom Button component

interface CreateButtonProps {
  label: string;
  onClick: () => Promise<any>;  // Expecting onClick to return a Promise
  disabled?: boolean;
  isLoading?: boolean;  // Fixed the typo here
}

interface CreateButtonState {
  isLoading: boolean;
  error: string | null;
  result: any | null;
}

const initialState: CreateButtonState = {
  isLoading: false,
  error: null,
  result: null,
};

type Action =
  | { type: "start" }
  | { type: "success"; payload: any }
  | { type: "error"; payload: string };

function reducer(
  state: CreateButtonState,
  action: Action
): CreateButtonState {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, error: null, result: null };
    case "success":
      return { ...state, isLoading: false, error: null, result: action.payload };
    case "error":
      return { ...state, isLoading: false, error: action.payload, result: null };
    default:
      return state;
  }
}

const CreateButton: React.FC<CreateButtonProps> = ({
  label,
  onClick,
  disabled = false,
  isLoading = false,
}) => {
  const [{ isLoading: buttonIsLoading }, dispatch] = useReducer(reducer, initialState);

  const handleClick = React.useCallback(() => {
    if (disabled) return;
    dispatch({ type: "start" });
    onClick()
      .then((result) => dispatch({ type: "success", payload: result }))
      .catch((error: any) => dispatch({ type: "error", payload: error.message || "Something went wrong" }));
  }, [disabled, onClick]);

  return (
    <Button
      type="button"
      disabled={disabled || isLoading || buttonIsLoading}
      onClick={handleClick}
      className={`rounded-full px-4 py-2 ${
        disabled
          ? "bg-gray-200 text-gray-400"
          : buttonIsLoading
          ? "bg-gray-300 text-gray-500"
          : "bg-gray-700 text-white hover:bg-gray-800 focus:ring-4"
      }`}
    >
      {isLoading || buttonIsLoading ? "Loading..." : label}
    </Button>
  );
};

export default CreateButton;
