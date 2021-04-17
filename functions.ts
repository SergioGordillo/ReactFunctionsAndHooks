//WAY OF RENDERIZING AN ARRAY CALLED INFORMATION USING MAP

<ol>
  {information.map((information) => {
    return <li key={information}>{information}</li>;
    // return <li>Hola</li>;
  })}
</ol>;
