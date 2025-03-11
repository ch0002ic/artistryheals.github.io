import { useLocation } from "react-router-dom";
import { useState } from "react";

export function useNavbarLogic() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


  const linkClasses = (path: string): string => {

    // Example logic for determining link classes
    return path === location.pathname ? "active" : "";
  };

  return { isLoggedIn, setIsLoggedIn, linkClasses };
}
