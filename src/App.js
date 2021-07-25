import './App.css';
// import Header from './components/header/Header';
// import Sidebar from './components/sidebar/Sidebar';
// import CreatePlaylist from './pages/CreatePlaylist';
// import datas from './data/ListMusic';
import Search from './pages/Search';

function App() {
  return (
    <div className="app">
      <Search />
      {/* <div>
        <Header />
      </div>
      <div className="body">
        <Sidebar />
        <CreatePlaylist datas={datas} />
      </div> */}
    </div>
  );
}

export default App;
