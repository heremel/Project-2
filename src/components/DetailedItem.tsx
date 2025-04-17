import { useState } from "react";
import { useParams } from "react-router";

export interface DetailedProps {
	country: CountryItem;
} //étape deux

export interface CountryItem {
	name: string;
	currencies: string;
	capital: string;
	region: string;
	subregion: string;
	languages: string[];
	landlocked: boolean;
} //étape une

function DetailedItem({ country }: DetailedProps) {
	//je dois récup ma current country
	const { countryName } = useParams<{ countryName: string }>();

	if (!country || country.name !== countryName) {
		return <p>Country not found!</p>;
	}

	return (
		<>
			<p>Name : {country.name}</p>
			<p>Currency : {country.currencies}</p>
			<p>Capital : {country.capital}</p>
			<p>Region : {country.region}</p>
			<p>Subregion : {country.subregion}</p>
			<p>Languages : {country.languages.join(", ")}</p>
			<p>Landlocked : {country.landlocked ? "Yes" : "No"}</p>
		</>
	);
}

export default DetailedItem;
//cree un setter qui sappelle set current country
//je
