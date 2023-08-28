import { useEffect, useRef } from "react";

function MyRefApp() {
  const countRef = useRef(0);
  const inputRef = useRef();

  const handleOnClick = () => {
    countRef.current = countRef.current += 1;
    console.log(countRef.current);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      The count is {countRef.current}
      <button onClick={handleOnClick}>count</button>
      <input ref={inputRef}></input>
    </div>
  );
}

export default MyRefApp;
