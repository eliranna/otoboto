import { useState } from "react";

export function useUserMenu () {
  const [isOpened, openUserMenu] = useState(false);
  const open = () => {console.log('open'); openUserMenu(true)};
  const close = () => openUserMenu(false);
  return { isOpened, open, close };
};