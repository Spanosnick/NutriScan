import { useParams} from "react-router-dom";

export function Store() {
    const {id} = useParams();
  return (
    <div>
      <h1>This is a dynamic Store {id} </h1>
    </div>
  );
}
