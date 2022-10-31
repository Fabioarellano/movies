import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "../hooks/useQuery";
import { useNavigate } from "react-router-dom";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  // const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  //  useEffect(() => {
  //    setSearchText(search || "");
  //  }, [search]);

  const handleSubmit = (e) => {
    //  prevenir el submit por defecto  
    e.preventDefault(); 
    // navigate("/?search=" + searchText);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input 
          className={styles.searchInput} 
          type="text"
          value={search}
          autoFocus
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;
            //const value = e.target.value;
            // setSearchText(value);
            navigate("/?search=" + value);
          }}
         /> 
        <button className={styles.searchButton} type="submit">
           <FaSearch size={20} /> {/* //  icono de buscar */}
        </button>
      </div>
    </form>
  );
}