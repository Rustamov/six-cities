import MainScreen from '../../pages/main-screen/main-screen';

type PlaceCradsCount = {
  placeCradsCount: number;
}

function App({placeCradsCount}: PlaceCradsCount): JSX.Element {
  return (
    <MainScreen placeCradsCount={placeCradsCount} />
  );
}


export default App;
