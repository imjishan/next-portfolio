"use client";
import { useState } from "react";
import Button from "@/components/Header/Button";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="fixed right-12 top-12">
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};
export default Header;
