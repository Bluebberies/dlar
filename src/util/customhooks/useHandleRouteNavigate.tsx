import { useNavigate } from "react-router-dom";

const useHandleRouteNavigate = (url: string) => {
  const navigate = useNavigate();

  return () => navigate(url);
};

export default useHandleRouteNavigate;
