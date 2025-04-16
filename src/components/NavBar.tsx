import { MainType } from "../App";


interface NavBarProps {
    setMainContent: React.Dispatch<React.SetStateAction<MainType>>;
    mainContent: MainType;
}





function NavBar({ mainContent, setMainContent }: NavBarProps) {
    function handleOnClick(string: MainType) {
        setMainContent(string)
    }

    return <>
        <button type="button" onClick={() => handleOnClick("About")}>About</button>
        <button type="button" onClick={() => handleOnClick("ListOfItems")}>ListOfItems</button>
        <button type="button" onClick={() => handleOnClick("MyItems")}>MyItems</button>

    </>
}

export default NavBar