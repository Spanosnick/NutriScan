import { useParams} from "react-router-dom";

export function Store() {
    const {id} = useParams();
    // 1) With the id from useParams we can now fetch the store data from the server
    // 2) We can use the store data to display the store information
    // 3) We check if the store id is the same of the in localStorage if true we can display the edit button
  return (
    <div>
      <h1>This is a dynamic Store {id} </h1>
    </div>
  );
}
