import { useParams} from "react-router-dom";
import {AuthCheck} from "../AuthCheck";
import {useDispatch, useSelector} from "react-redux";

export function Dashboard() {
    const user_store = useSelector((state) => state.user);
    const user_dispatch = useDispatch();
  return (
    <div>
        {/*<AuthCheck/>*/}
      <h1>This is a Dashboard{user_store.user}  </h1>
    </div>
  );
}
