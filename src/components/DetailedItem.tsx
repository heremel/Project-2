export interface DetailedProps {

    country: CountryItem
} //étape deux

export interface CountryItem{
    name: string;
    currencies: string;
    capital: string;
    region: string;
    subregion: string;
    languages: string[];
    landlocked: boolean;
} //étape une 




function DetailedItem({country}: DetailedProps) { //je dois récup ma current country
    //doit utiliser une useState
    return (
        <>

        </>
    )
}

export default DetailedItem;