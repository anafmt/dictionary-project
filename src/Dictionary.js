import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results"
import Photos from "./Photos"

export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);


    function search () {
                    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = `da34a047131b20d5faab7d8tfo459827`
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
    axios.get(apiUrl).then(handleResponse);

    let photosApiKey = "da34a047131b20d5faab7d8tfo459827";
    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`
    axios.get(photosApiUrl).then(handlePhotosResponse);

    }

    function handlePhotosResponse (response) {
        setPhotos(response.data.photos);
    }


    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function handleResponse (response) {
        setResults(response.data);
}

    
    function handleKeywordChange (event) {
        setKeyword(event.target.value)
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
        <div className="Dictionary">
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="search" autoFocus={true} onChange={handleKeywordChange} placeholder="Lookup a word..." />
                </form>
                <div className="hint">i.e. algeria, ocean, queer, yellow, zimbabwe, window</div>
                </section>
        <Results results={results} />
        <Photos photos={photos} />
        </div>
)} else {
    load();
    return "Loading";
}}