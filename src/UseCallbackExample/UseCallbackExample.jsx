import { memo, useCallback, useState } from "react";

function MyUseCallbackExample() {
  const [dogCount, setDogCount] = useState(0);
  const [catCount, setCatCount] = useState(0);

  const updateCatDb = useCallback(() => {
    console.log(`There are ${catCount} cats`);
  }, [catCount]);

  return (
    <div>
      <button onClick={() => setDogCount(dogCount + 1)}>Dogs {dogCount}</button>
      <button onClick={() => setCatCount(catCount + 1)}>Cats {catCount}</button>
      <DisplayNumberOfCatsMemoized
        updateCatDb={updateCatDb}
        catCount={catCount}
      />
    </div>
  );
}

function DisplayCatInfo({ updateCatDb, catCount }) {
  console.log("DisplayCatInfo render");
  return (
    <div>
      Cat Count {catCount}
      <button onClick={updateCatDb}>Update Cat db</button>
    </div>
  );
}
const DisplayNumberOfCatsMemoized = memo(DisplayCatInfo);

export default MyUseCallbackExample;
