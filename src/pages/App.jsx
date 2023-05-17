import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Ha from '../components/ha'
import Haha from '../components/haha'
import axios from 'axios';
import React, {useState} from 'react';

function App() {
  let [shoes, setShoes] = useState([]);
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

      {shoes.map((a, i)=>{
        return (
          <>
          <h4>상품명 : {shoes[i].title}</h4>
          <p>상세설명 : {shoes[i].content}</p>
          <p>가격 : {shoes[i].price}</p>
          </>
        )
      })}

      <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
          let copy = [...shoes, ...결과.data]
          setShoes(copy)
        })
        .catch(()=>{
          console.log('실패함')
        })
      }}>버튼입니다</button>
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