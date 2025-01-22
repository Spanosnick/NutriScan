import {Link} from "react-router-dom";

export function StoresList() {
  return (
    <div>
      <h1>Stores List</h1>
      <ul>
          <li><Link to={'store/1'}> Store 1 </Link></li>
          <li><Link to={'store/2'}> Store 2 </Link></li>
          <li><Link to={'store/3'}> Store 3 </Link></li>
          <li><Link to={'store/4'}> Store 4 </Link></li>
      </ul>
    </div>
  );
}
