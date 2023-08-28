import { useMemo, useState } from "react";

function isPasswordComplexEnough(password) {
  console.log("long calculation");
  //long compute time...
  for (let i = 0; i < 1000000000; i++) {
    return true;
  }
  return false;
}

function MyMemoApp() {
  const [count, setCount] = useState(0);
  const [password, setPassword] = useState("123");
  const isComplex = useMemo(
    () => isPasswordComplexEnough(password),
    [password]
  );

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      {isComplex}
    </div>
  );
}

export default MyMemoApp;
