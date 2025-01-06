async function getCatFacts() {
  const API_URL = "https://cat-fact.herokuapp.com";
  const res = await fetch(`${API_URL}/facts`);
  const data = await res.json();

  return data;
}

getCatFacts().then((data) => {
  data.map((fact) => {
    console.log(
      "Hey, here the cat fact for today:",
      fact.text,
      " ",
      "btw, who told us this was: ",
      fact.user,
      '\n\n'
    );
  });
});

const client (url, method, auth)