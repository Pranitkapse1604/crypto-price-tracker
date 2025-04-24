import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAssets } from "./features/cryptos/cryptoSlice"; // adjust path as needed

const CryptoUpdater = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateAssets());
    }, 1500); // every 1.5 seconds

    return () => clearInterval(interval); // cleanup
  }, [dispatch]);

  return null; // this component doesn’t render anything
};

export default CryptoUpdater;