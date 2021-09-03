const { useState } = require("react");

function MovieSearch() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [year, setYear] = useState("");
  const [plot, setPlot] = useState("");

  function getMovieData() {
    let baseUrl = `http://www.omdbapi.com/`;
    let queryString = `?apikey=88e15bed&t=${title}`;
    let url = baseUrl + queryString;

    fetch(url, {
      method: "GET",
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setPoster(data.Poster);
        setTitle(data.Title);
        setYear(data.Year);
        setPlot(data.Plot);
      });
  }
  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search Movie"
          value={title}
          onChange={handleChange}
        ></input>
      </form>
      <button onClick={getMovieData}>Search</button>
      <div>
        <br />
        <img src={poster} />
        <h2> {title}</h2>
        <h3> {year}</h3>
        <p>{plot}</p>
        <br />
      </div>
    </div>
  );
}
module.exports = MovieSearch;
