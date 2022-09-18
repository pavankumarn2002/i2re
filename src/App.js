import './App.css';
import './dist/css/main.css';
import './dist/css/i2.css';
import Cdn from './content/cdnLinks';
import C from './content/cell-c';
import Q from './content/cell-Q';
import Cp from './content/columnPosition';
import W from './content/cell-w';
import Wp from './content/widthPosition';
import H from './content/cell-h';
import P from './content/cell-p';
import M from './content/cell-m';
import D from './content/cell-d';
import G from './content/cell-G';
import T from './content/cell-t';
import Ts from './content/cell-ts';
import Bs from './content/cell-bs';
import F from './content/cell-f';
import B from './content/cell-b';
import R from './content/cell-r';
import Bg from './content/cell-bg';
import O from './content/cell-o';
import Ta from './content/cell-ta';
import Dw from './content/cell-dw';
import A from './content/cell-a';
import SlNormal from './content/SlNormal';
import SlAbsolute from './content/SlAbsolute';
import SlResponsive from './content/SlResponsive';
import SlNest from './content/SlNest';
import Tb from './content/cell-tb';
import Sm from './content/cell-sm';
import Ap from './content/cell-ap';
import Pa from './content/cell-pa';
import Po from './content/cell-po';
import Input from './content/input';
import IconInput from './content/iconInput';
import Select from './content/select';
import IconSelect from './content/iconSelect';
import TextBox from './content/textBox';
import CheckBox from './content/checkBox';
import RadioBox from './content/radioBox';
import Mo from './content/cell-mo';
import Fl from './content/cell-fl';
import Gr from './content/cell-gr';
import Pc from './content/cell-pc';
import An from './content/cell-an';
import Ss from './content/cell-ss';
import Wz from './content/cell-wz';
import Bu from './content/cell-bu';
import Tg from './content/cell-tg';
import Pi from './content/cell-pi';
import Pb from './content/cell-pb';
import Rm from './content/cell-rm';
import Cm from './content/cell-cm';
import Nv from './content/cell-nv';
import Data from './content/data'
import logo from './dist/Img/logo-blue.png';
import {
  BrowserRouter as Router, Link,
  Routes, Route
} from 'react-router-dom'
import React, { Component } from "react";
export class App extends Component {
  render() {
    return (
      <div class="page-sec">
        <header cell-bg="[-c2]">
          <div cell-q="[-cw]" class="">
            <div cell-nv="[-nv:-st-fx]" class="">
              <div cell-nv="[-na]" class="">
                <div cell-nv="[-lg]" cell-bg="[-c2]" class="">
                  <p cell-f="[-s35-c5-w9-f2]" cell-p="[-p5]">
                    <img src={logo} />
                  </p>
                  <button cell-d="[-dn-ln-tb-mb-sb]" class=" ">
                    <i class="fa fa-bars">
                    </i>
                  </button>
                </div>
                <div cell-nv="[-li]" cell-bg="[-c2]" class="">
                  <p cell-p="[-l7]">
                    <a href="#" cell-f="[-f1-s15-w5-c5-dn]">
                      link-1</a>
                  </p>
                  <p cell-p="[-l7]">
                    <a href="#" cell-f="[-f1-s15-w5-c5-dn]">
                      link-2</a>
                  </p>
                  <p cell-p="[-l7]">
                    <a href="#" cell-f="[-f1-s15-w5-c5-dn]">
                      link-3</a>
                  </p>
                  <p cell-p="[-l7]">
                    <a href="#" cell-f="[-f1-s15-w5-c5-dn]">
                      link-4</a>
                  </p>
                  <div cell-dw="[-dw0:-cn-a2]" class=" ">
                    <div cell-dw="[-da]" class="">
                      <div cell-f="[-f1-s15-w5-c5]" cell-dw="[-l]" cell-w="[-wa]" cell-p="[-p2]" class="">
                        <p cell-p="[-l7]">
                          <a href="#" cell-f="[-f1-s15-w5-c5-dn]">
                            link-5</a>
                        </p>
                      </div>
                      <div cell-dw="[-c]" cell-bg="[-c1]" cell-p="[-p7]" class="">
                        Content</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Router >
          <div cell-c='[-c20]' class="cell-c">
            <div cell-c="[-c20]" cell-m="[-t45]" class="">
              <div cell-sl="[-aa:-da5(5)-la7(7)-ta7(7)-ma7(7)-sa20(20)-df1(1)-lf1(1)-tf1(1)-mf1(1)-sf1(1)]" class="as-slide">
                <div cell-q="[-q-cc]" cell-p="[-p2]" class="">
                  <button class="btn as-left-open">
                    as-left-open</button>
                  <button class="btn as-right-open">
                    as-right-open</button>
                </div>
                <div cell-q="[-q]" class="">
                  <div cell-sl="[-lo]" cell-bg='[-c4]' class="column">
                    <div cell-t="[-r]" class="">
                      <button class="btn as-left-close">
                        X</button>
                    </div>
                    <nav class="menu">
                      <div class="list">
                        <Link to="content/cdnLinks">CDN Links</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-c">cell-c</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-Q">cell-Q</Link>
                      </div>
                      <div class="list">
                        <Link to="content/columnPosition">cell-Q Column Positions</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-w">cell-w</Link>
                      </div>
                      <div class="list">
                        <Link to="content/widthPosition">cell-Q width Positions</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-h">cell-h</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-p">cell-p</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-m">cell-m</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-d">cell-d</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-G">cell-G</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-t">cell-t</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-ts">cell-ts</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-bs">cell-bs</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-f">cell-f</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-b">cell-b</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-r">cell-r</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-bg">cell-bg</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-o">cell-o</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-ta">cell-ta</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-dw">cell-dw</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-a">cell-a</Link>
                      </div>
                      <div class="list">
                        <Link to="content/SlNormal">cell-sl(ns)</Link>
                      </div>
                      <div class="list">
                        <Link to="content/SlAbsolute">cell-sl(as)</Link>
                      </div>
                      <div class="list">
                        <Link to="content/SlResponsive">cell-sl(rs)</Link>
                      </div>
                      <div class="list">
                        <Link to="content/SlNest">cell-sl(nest)</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-tb">cell-tb</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-sm">cell-sm</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-ap">cell-ap</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-pa">cell-pa</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-po">cell-po</Link>
                      </div>
                      <div class="list">
                        <Link to="content/input">cell-in(input)</Link>
                      </div>
                      <div class="list">
                        <Link to="content/iconInput">cell-in(Icon Input)</Link>
                      </div>
                      <div class="list">
                        <Link to="content/select">cell-in(Select Box)</Link>
                      </div>
                      <div class="list">
                        <Link to="content/iconSelect">cell-in(Icon Select Box)</Link>
                      </div>
                      <div class="list">
                        <Link to="content/textBox">cell-in(Text Area)</Link>
                      </div>
                      <div class="list">
                        <Link to="content/checkBox">cell-in(Check Box)</Link>
                      </div>
                      <div class="list">
                        <Link to="content/radioBox">cell-in(Radio)</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-mo">cell-mo</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-fl">cell-fl</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-gr">cell-gr</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-pc">cell-pc</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-an">cell-an</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-ss">cell-ss</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-wz">cell-wz</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-bu">cell-bu</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-tg">cell-tg</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-pi">cell-pi</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-pb">cell-pb</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-rm">cell-Rm</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-cm">cell-Cm</Link>
                      </div>
                      <div class="list">
                        <Link to="content/cell-nv">cell-Nv</Link>
                      </div>
                    </nav>
                  </div>
                  <div cell-sl="[-m]" cell-c="[-co]" cell-bg='[-c2]' cell-p="[-p25]" class="column">
                    <div cell-c='[-c20]' class="content-sec">
                      <Routes>
                        <Route path="content/cdnLinks" element={<Cdn />} />
                        <Route path="content/cell-c" element={<C />} />
                        <Route path="content/cell-Q" element={<Q />} />
                        <Route path="content/columnPosition" element={<Cp />} />
                        <Route path="content/cell-w" element={<W />} />
                        <Route path="content/widthPosition" element={<Wp />} />
                        <Route path="content/cell-h" element={<H />} />
                        <Route path="content/cell-p" element={<P />} />
                        <Route path="content/cell-m" element={<M />} />
                        <Route path="content/cell-d" element={<D />} />
                        <Route path="content/cell-g" element={<G />} />
                        <Route path="content/cell-t" element={<T />} />
                        <Route path="content/cell-ts" element={<Ts />} />
                        <Route path="content/cell-bs" element={<Bs />} />
                        <Route path="content/cell-f" element={<F />} />
                        <Route path="content/cell-b" element={<B />} />
                        <Route path="content/cell-r" element={<R />} />
                        <Route path="content/cell-bg" element={<Bg />} />
                        <Route path="content/cell-o" element={<O />} />
                        <Route path="content/cell-ta" element={<Ta />} />
                        <Route path="content/cell-dw" element={<Dw />} />
                        <Route path="content/cell-a" element={<A />} />
                        <Route path="content/SlNormal" element={<SlNormal />} />
                        <Route path="content/SlAbsolute" element={<SlAbsolute />} />
                        <Route path="content/SlResponsive" element={<SlResponsive />} />
                        <Route path="content/SlNest" element={<SlNest />} />
                        <Route path="content/cell-tb" element={<Tb />} />
                        <Route path="content/cell-sm" element={<Sm />} />
                        <Route path="content/cell-ap" element={<Ap />} />
                        <Route path="content/cell-pa" element={<Pa />} />
                        <Route path="content/cell-po" element={<Po />} />
                        <Route path="content/input" element={<Input />} />
                        <Route path="content/iconInput" element={<IconInput />} />
                        <Route path="content/select" element={<Select />} />
                        <Route path="content/iconSelect" element={<IconSelect />} />
                        <Route path="content/textBox" element={<TextBox />} />
                        <Route path="content/checkBox" element={<CheckBox />} />
                        <Route path="content/radioBox" element={<RadioBox />} />
                        <Route path="content/cell-mo" element={<Mo />} />
                        <Route path="content/cell-fl" element={<Fl />} />
                        <Route path="content/cell-gr" element={<Gr />} />
                        <Route path="content/cell-pc" element={<Pc />} />
                        <Route path="content/cell-an" element={<An />} />
                        <Route path="content/cell-ss" element={<Ss />} />
                        <Route path="content/cell-wz" element={<Wz />} />
                        <Route path="content/cell-bu" element={<Bu />} />
                        <Route path="content/cell-tg" element={<Tg />} />
                        <Route path="content/cell-pi" element={<Pi />} />
                        <Route path="content/cell-pb" element={<Pb />} />
                        <Route path="content/cell-rm" element={<Rm />} />
                        <Route path="content/cell-cm" element={<Cm />} />
                        <Route path="content/cell-nv" element={<Nv />} />
                        <Route path="content/data" element={<Data />} />
                      </Routes>
                    </div>
                  </div>
                  <div cell-sl="[-ro]" cell-bg='[-c1]' class="column">
                    <div cell-t="[-l]" class="">
                      <button class="btn as-right-close">
                        X</button>
                    </div>
                    <nav class="menu">
                      <div class="list">
                        <Link to="content/data">cell-dt</Link>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router >
      </div >

    );
  }
}

export default App;
