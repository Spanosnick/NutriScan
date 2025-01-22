import { useParams} from "react-router-dom";
import {AuthCheck} from "../AuthCheck";
import {useDispatch, useSelector} from "react-redux";
import {dummyStores} from "../../utils/data";
import StoreBasic from "../../components/Stores/StoreBasic";

export function Dashboard() {
    const user_store = useSelector((state) => state.user);
    const user_dispatch = useDispatch();
  return (
    <div className='p-4 d-flex justify-content-start align-content-center '>
        {dummyStores.map((store) => <StoreBasic key={store.id} storeInfos={store} />)
        }
    </div>
  );
}
