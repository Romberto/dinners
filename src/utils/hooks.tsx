import { useAppSelector } from "../app/hook"
import { userSelector } from "./selectors"

export const useUser = () => {
    return useAppSelector(userSelector)
}
