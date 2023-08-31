import { useState } from "react";
import "./styles.css";

type Props = {
  onSearch: (searchText: string) => void;
};

export default function SearchPoke({ onSearch }: Props) {
  const [text, setText] = useState("");

  function handleChange(event: any) {
    setText(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(text);
  }

  function handleResetClick() {
    setText("");
    onSearch(""); 
  }

  return (
    <form className="poke-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔎︎</button>
      <input
        value={text}
        type="text"
        placeholder="Pokemon name"
        onChange={handleChange}
      ></input>
      <button type="reset" onClick={handleResetClick}>
        🗙
      </button>
    </form>
  );
}
