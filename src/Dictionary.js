import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";

export default function Dictionary () {
    let [keyword, setKeyword] = useState(null);
    function search (event) {
        event.preventDefault();
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value)
    }


    function handleResponse (response) {
        console.log(response.data);
    }

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = `da34a047131b20d5faab7d8tfo459827`
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        </form>
        </div>
)}