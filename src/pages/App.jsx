import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Ha from '../components/ha'
import Haha from '../components/haha'


function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <h4>안녕하세요</h4>
      <button onClick={()=>{ navigate('/') }}>홈네비</button>
      <button onClick={()=>{ navigate('/ha') }}>하네비</button>
      <button onClick={()=>{ navigate('/haha') }}>하하네비</button><br />

      <Link to="/"><button>홈</button></Link><br />
      <Link to="/ha"><button>하</button></Link><br />
      <Link to="/haha"><button>하하</button></Link>

      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<div>메인페이지</div>} />
          <Route path="/ha" element={<Ha/>} />
          <Route path="/haha" element={<Haha/>}></Route>
          <Route path="*" element={<div>404</div>}></Route>

          <Route path="/about" element={<About/>}>
            <Route path="member" element={<div>멤버임</div>} />
            <Route path="location" element={<About/>} />
          </Route>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;