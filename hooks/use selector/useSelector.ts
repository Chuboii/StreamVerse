import { useSelector } from "react-redux";
import type { RootState } from "../../lib/redux/store/store";

export const useAppSelector = useSelector.withTypes<RootState>();
