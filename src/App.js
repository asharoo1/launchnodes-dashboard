import ThemeConfig from './theme';

import DataFetch from './pages/DataFetch';
import CopyDataFetch from './pages/CopyDataFetch';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <ThemeConfig>
        {/* <DataFetch /> */}
        <CopyDataFetch/>
      </ThemeConfig>
    </div>
  );
}
