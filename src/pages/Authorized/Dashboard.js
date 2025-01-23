import {dummyStores} from "../../utils/data";
import StoreBasic from "../../components/Stores/StoreBasic";

export function Dashboard() {

  return (
    <div className='p-4 d-flex justify-content-start align-content-center flex-wrap '>
        {dummyStores.map((store) => <StoreBasic key={store.id} storeInfos={store} />)
        }
    </div>
  );
}
