import Sidebar from './components/layouts/sidebar';
import Header from './components/layouts/header';

// import Search from './pages/Search';
import CreatePlaylist from './pages/createPlaylist';

import {
  loginSpotify,
  getAccessTokenFromURL,
  getProfile,
} from './functions/auth';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="header">
        <Header loginSpotify={loginSpotify} namePage="Create Playlist" />
      </div>
      <div className="content">
        <CreatePlaylist
          getAccessTokenFromURL={getAccessTokenFromURL}
          getProfile={getProfile}
        />
      </div>
    </div>
  );
}

export default App;
