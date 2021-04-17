//DEFINING AN ARRAY OF STRINGS WITH TS

const categories: string[] = [
  "Ronaldo",
  "Zidane",
  "Roberto Carlos",
  "Morientes",
];

//DEFINING AN ARRAY OF STRINGS WITH TS USING USESTATE

const [information, setInformation] = useState<string[]>([
  "Ronaldo",
  "Zidane",
  "Roberto Carlos",
  "Morientes",
]);

//HOW TO INSERT NEW ELEMENTS INTO AN ARRAY OF STRINGS WITH TS USING USESTATE

const [information, setInformation] = useState<string[]>([
  "Ronaldo",
  "Zidane",
  "Roberto Carlos",
  "Morientes",
]);

const handleAdd = () => {
  setInformation([...information, "Michel Salgado"]);
};

return (
  <div>
    <button onClick={() => handleAdd()}>Click me</button>
  </div>
);

//HOW TO INSERT ELEMENTS IN USESTATE FROM A INPUTBAR

function AddCategory() {
  const [inputValue, setInputValue] = useState<string>("How I met your mother");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          onChange={handleInputChange}
          className="textBar"
          value={inputValue}
        />
      </form>
      <pre>{inputValue}</pre>
    </>
  );
}

//HOW TO CALL A FUNCTION THROUGH A FORM PRESSING ENTER WITHOUT RELOADING THE PAGE

function Idontcarethename() {
  const handleSubmit = (e: any) => {
    e.preventDefault(); //It avoids the page to load again when the form is submitted
    console.log("Submit done");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="textBar" />
    </form>
  );
}

export default Idontcarethename;

//HOW TO PASS PROPS FROM A PARENT TO A CHILD USING USESTATE HOOK AND USING TYPESCRIPT

//My father component

function GifExpertApp() {
  const [information, setInformation] = useState<string[]>([
    "Ronaldo",
    "Zidane",
    "Roberto Carlos",
    "Morientes",
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <AddCategory setInformation={setInformation} />
    </div>
  );
}

//The interface I will need to pass like a prop the setInformation

import { Dispatch, SetStateAction } from "react";

export interface InformationProps {
  // setInformation: Dispatch<SetStateAction<string[]>>; //This solutions works
  setInformation: (information: string[]) => void; //But this solution is cleaner
}

//The child component

function AddCategory({ setInformation }: InformationProps) {
  const [inputValue, setInputValue] = useState<string>("How I met your mother");

  const handleSubmit = (e: any) => {
    e.preventDefault(); //It avoids the page to load again when the form is submitted
    setInformation((information: string[]) => [...information, inputValue]);
    //I havent passed the information, but I can access to it thanks to the setInformation. I have to do this modification of the state as if it was a callback, I mean, first of all, the information array of strings with all the values and later I destructure the array, and I push my inputValue in the end
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="textBar"
        value={inputValue}
      />
    </form>
  );
}

export default AddCategory;
