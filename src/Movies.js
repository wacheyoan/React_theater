import React, {useState,useEffect} from 'react';

const minYear = 2015;
const maxYear = 2017;
let movies = [];

function Movie(props) {
    return(
        <div className={'jumbotron'}>
            <h2>{props.title}</h2>
            <p>{props.actors}</p>
                {props.year}
                {props.language}
        </div>
    );
}

export default function Movies(props) {
    const [filters, setFilters] = useState({language: "any", year: 0, actorSearching: ""});

    useEffect(() => {
        const httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
                movies = JSON.parse(httpRequest.responseText).movies;
                setFilters({...filters,language: "any"});
            }
        };
        httpRequest.open('GET', 'movies.json');
        httpRequest.send();
    },[]);

    /*function selectChange(index){
        switch (index) {
            case 0:
                setFilters({...filters,year:0});
                return;
            case 1:
                setFilters({...filters,year:minYear});
                movies = movies.filter(m => m.year === minYear);
                return;
            case 2:
                setFilters({...filters,year:minYear+1});
                movies = movies.filter(m => m.year === minYear+1);
                return;
            case 3:
                setFilters({...filters,year:maxYear});
                movies = movies.filter(m => m.year === maxYear);

                return;

        }

    }*/

    if(movies.length === 0){
        return <div>Pas encore de films</div>;

    }
    let jsxMovies = movies
        .filter(m => filters.year == 0 || filters.year == m.year)
        .map((m,i) => <Movie key={i} {...m}/>);
    return(
    <div>
        <div>Filters :</div>
                Year : <select onChange={e => {
                    let index = e.target.selectedIndex;
                    let y = index <= 0 ? 0 : minYear-1+index;
                    setFilters({...filters,year:y});
    }}>
                <option value="any"></option>
                <option value="0">{minYear}</option>
                <option value="1">{minYear+1}</option>
                <option value="2">{maxYear}</option>
            </select>
                Actor : <input/>
            <h1>Movies :</h1>
             {jsxMovies}
    </div>
    );


}