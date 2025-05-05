import { useCountries } from "../contexts/CountriesContext";
import style from ".././assets/styles/FilterFavorite.module.css"
import type { MoD } from "../interfaces/allInterfaces";

function FilterFavorite() {
    const { favoriteList, setFavoriteList } = useCountries();

    const handleChangeFav = (option: MoD) => {
        if (favoriteList.memoriesOrDreams === option) {

            setFavoriteList((prev) => ({ ...prev, memoriesOrDreams: "both" }))
        }
        if (favoriteList.memoriesOrDreams !== option) {
            setFavoriteList((prev) => ({ ...prev, memoriesOrDreams: option }))
        }
    }

    return (<>
        <div className={style.inLine}>
        <input type="checkbox" id="dreams" name="dreams" checked={favoriteList.memoriesOrDreams === "dreams"} onChange={() => handleChangeFav("dreams")} />
        <label htmlFor="dreams">Dreams only</label>
        </div>
        <div className={style.inLine}>
        <input type="checkbox" id="memories" name="memories" checked={favoriteList.memoriesOrDreams === "memories"} onChange={() => handleChangeFav("memories")} />
        <label htmlFor="memories">Remembrances only</label>
        </div>

    </>)
}

export default FilterFavorite