import { useState } from "react";

const Search = () => {
    const [text, setText] = useState("")
    const [result, setResult] = useState("")

    const findEyes = (e) => {
        e.preventDefault()
        const res = (text.toLowerCase().match(/i/g) || []).length;
        setResult(res)
    }

    return (
        <form onSubmit={findEyes}>
            <div className="search-contents">
                <h3>Enter your text to find the number of I's</h3>
                <input type="text" placeholder="Your I's go here ;)" value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="Enter" className="btn btn-block" />
                <div className="result">
                    {result.length != 0 &&
                        <label >Your text has {result} I's </label>
                    }
                </div>
            </div>
        </form>
    )
}

export default Search
