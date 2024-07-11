"use client";

import { KeyboardEventHandler, useState } from "react";
import { setTimeout } from "timers";

interface Props {
  handleAddTag: (text: string) => void;
}

function TagInput({ handleAddTag }: Props) {
  const [value, setValue] = useState<string>();
  const [isRuning, setIsRunning] = useState<boolean>(false);

  const handlePressEnter: KeyboardEventHandler = (e) => {
    if (isRuning || e.code !== "Enter" || !value) {
      return;
    }

    setIsRunning(true);
    setTimeout(() => {
      handleAddTag(value.trim());
      setValue("");
      setIsRunning(false);
    }, 200);
  };

  return (
    <input
      type="text"
      value={value}
      onKeyDown={handlePressEnter}
      onChange={(e) => setValue(e.target.value)}
      className="px-2 py-1 border border-gray-200"
    />
  );
}

export default TagInput;
