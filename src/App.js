import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Home, Login, Public, Personal, Album, WeekRank, ZingChart, Search, SearchSongs, SearchAll} from './containers/public';

import path from './ultis/path';
import { useEffect } from 'react';
import * as actions from './store/actions';
import { useDispatch } from 'react-redux';

function App() {
  
  const dispatch = useDispatch()
  useEffect(() => { 
    dispatch(actions.getHome())
  },[])

  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
        
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.MY_MUSIC} element={<Personal />} />
          <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
          <Route path={path.PLAYLIST__TITLE__PID} element={<Album />} />
          <Route path={path.WEEKRANK_TITLE_PID} element={<WeekRank />} />
          <Route path={path.ZING_CHART} element={<ZingChart/>}/>

          <Route path={path.SEARCH} element={<Search/>}>
            <Route path={path.SEARCH_ALL} element={<SearchAll/>}/>
            <Route path={path.SEARCH_SONG} element={<SearchSongs/>}/>
          </Route>

          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
