import React, { Component } from "react";
import '../App.css';
export class Data extends Component {
    componentDidMount() {
        var loadScript = function (src) {
            var tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(tag);
        }

        //Api Url && External Json Array
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659196881/i2/jq%28dy-react%29/doc.js");
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659197359/i2/jq%28dy-react%29/index.js");
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659071325/i2/jq%28dy-react%29/cell.js");
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659071576/i2/jq%28dy-react%29/slide.js");
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659071524/i2/jq%28dy-react%29/input.js");
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659071619/i2/jq%28dy-react%29/tabs.js");
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659759161/data%28react%29.js");
    }
    render() {
        return (
            <div class="content">
                <div class="title-col">
                    <div cell-Q='[-q-ct]' class=" ">
                        <div class="text">
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>CRUD Operations</p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-dt
                            </p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <p cell-p='[-t5-b2]' cell-f='[-s18-w7-c2-f5]' cell-t='[-c]'>
                            </p>
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-da-la-t10-m20]' class="text-col">
                                    <p><span cell-f='[-c2-s20-w7]'>For Data Binding With Loop</span></p>
                                    <p><span cell-f='[-c2-s16-w7]'>Declare variable in js file of assets/js folder</span></p>
                                    <p><span cell-f='[-c2-s16-w7]'>Declare url in index.html for api calls</span></p>
                                    <p>attribute for parent element<span cell-f='[-c2-s16-w7]'>cell-dt</span>=[-dt0:-u1-lp0]</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ge:</span>Is For get call</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-po:</span>Is For post call</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-pu:</span>Is For put call</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-pa:</span>Is For patch call</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-de:</span>Is For delete call</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-u1</span>Is For url Index To Get Content</p>

                                    <p><span cell-f='[-c2-s16-w7]'>-lp0</span>Is For First Stage Loop Of An Nested Array (if the
                                        content is @ first level of an nested array then lp0)</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lp1</span>Is For Second Stage Loop Of An Nested Array (if the
                                        content is @ second level of an nested array then lp1)</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lp2</span>Is For Third Stage Loop Of An Nested Array (if the
                                        content is @ third level of an nested array then lp2)</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lp3</span>Is For Fourth Stage Loop Of An Nested Array (if the
                                        content is @ fourth level of an nested array then lp3)</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lp5</span>Is For Fifth Stage Loop Of An Nested Array (if the
                                        content is @ fifth level of an nested array then lp4)</p>

                                    <p>attribute for parent element<span cell-f='[-c2-s16-w7]'>cell-dt</span>=[-dt0:-u1-lp0]</p>
                                    <p>attribute for child element<span cell-f='[-c2-s16-w7]'>nest_0</span>="key"</p>
                                    <p>attribute for sub-child element<span cell-f='[-c2-s16-w7]'>nest_1</span>="nest_0[i].key name"
                                    </p>
                                    <p>attribute for sup-child element<span cell-f='[-c2-s16-w7]'>nest_2</span>="nest_1[j].key name"
                                    </p>
                                    <p>attribute for macro-child element<span cell-f='[-c2-s16-w7]'>nest_3</span>="nest_2[k].key name"
                                    </p>
                                    <p>attribute for micro-child element<span cell-f='[-c2-s16-w7]'>nest_4</span>="nest_3[l].key name"
                                    </p>

                                    <p>attribute for micro-child element<span cell-f='[-c2-s16-w7]'>append</span> to append required
                                        data</p>
                                    <p>class name for child element of append attribute element<span
                                        cell-f='[-c2-s16-w7]'>data-block</span></p>

                                    <p>attribute for child element to get value<span cell-f='[-c2-s16-w7]'>cell-dt</span>=[-v1] &
                                        Class Name <span cell-f='[-c2-s16-w7]'>data-col</span> then inner text as <span
                                            cell-f='[-c2-s16-w7]'>nest_3[l].key name of value</span></p>
                                    <p><span cell-f='[-c2-s16-w7]'>-v1</span>For Vale Index</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-v2</span>For Vale Index ..........</p>
                                </div>
                            </div>
                            <p><span cell-f='[-c1-s25-w7]'>Note :-</span></p>
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-da-la-t10-m20]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>If the data was not defined the cond attribute will help in getting
                                        values</span></p>
                                    <p><span cell-f='[-c2-s16-w7]'>Observe Example-2 (Json Un Defined Data) </span></p>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-do-l20-t20-m20-s20]' class="result">
                            <div class="content" cell-p='[-p15]'>
                                <div cell-m='[-t45]' class="col-details">
                                    <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]'>
                                        <div cell-f='[-s25-c4-w9]' class="" innerText="inner"></div>
                                    </div>
                                </div>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]'>
                                    <div cell-f='[-s25-w9-c2]' cell-vr='[-hb]'> $that$ = $a$ , $was$ = $c=d$ And $that$ = $b$
                                    </div>
                                </div>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]'>
                                    <div cell-f='[-s25-w9-c2]'> <span cell-f='[-s35-w9-c4]' cell-vr='[-hb]'>$that$</span> = <span cell-f='[-s35-w9-c4]'
                                        cell-vr='[-hb]'>$a$</span> , <span cell-f='[-s35-w9-c4]' cell-vr='[-hb]'>$was$</span> = <span
                                            cell-f='[-s35-w9-c4]' cell-vr='[-hb]'>$c$</span> And <span cell-f='[-s35-w9-c4]' cell-vr='[-hb]'>$that$</span> =
                                        <span cell-f='[-s35-w9-c4]' cell-vr='[-hb]'>$b$</span>
                                    </div>
                                </div>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]'>
                                    <button vc-click="d=!d;text=d?'about':'contact'" vc="className=d?'red':'blue'">about</button>
                                    <div cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=d?'blue':'red'"> $that$ = $a$ , $was$ = $c=d$ And
                                        $that$ =
                                        $b$
                                    </div>
                                </div>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]'>
                                    <button vc-click="e=!e;text=e?'about':'contact'" vc="className=e?'red':'blue'">about</button>
                                    <div >
                                        <span cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=e?'blue':'red'"> $that$</span>
                                        <span cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=e?'red':'blue'"> = </span>
                                        <span cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=e?'blue':'red'">  $a$ </span>
                                        <span cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=e?'red':'blue'"> ,</span>
                                        <span cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=e?'blue':'red'"> $was$</span>
                                        <span cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=e?'red':'blue'">  = </span>
                                        <span cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=e?'blue':'red'"> $c = d$ </span>
                                        <span cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=e?'red':'blue'"> And </span>
                                        <span cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=e?'blue':'red'"> $that$</span>
                                        <span cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=e?'red':'blue'"> = </span>
                                        <span cell-f='[-s25-w9]' cell-vr='[-hb]' vc="className=e?'blue':'red'"> $b$ </span>
                                    </div>
                                </div>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]'>
                                    <button vc-click="g=!g;text=g?'about':'contact'">about</button>
                                    <div class="" innerText="text=g?'about':'contact'"></div>
                                </div>
                                <h2>Two Way Binding</h2>
                                <div cell-cm='[-bo5(4)-bg5-ra10-pa15]' class="tway">
                                    <input cell-tw='[-tw0:]' />
                                    <div cell-tw='[-tb0:]' class=""></div>
                                </div>
                                <div cell-cm='[-bo5(4)-bg5-ra10-pa15]' class="tway">
                                    <input cell-tw='[-tw1:]' />
                                    <div cell-tw='[-tb1:]' class=""></div>

                                    <input cell-tw='[-tw2:]' />
                                    <div cell-tw='[-tb2:]' class=""></div>
                                </div>
                                <h2>Two Way Binding With Variable</h2>
                                <div cell-cm='[-bo5(4)-bg5-ra10-pa15]' class="tway">
                                    <input tway="tex" />
                                    <div class="" innerHtml="tex"></div>
                                    <input tway="tex1" />
                                    <div class="" innerHtml="tex1"></div>
                                </div>
                                <h2>Two Way Binding With Filter search</h2>
                                <div cell-cm='[-bo5(4)-bg5-ra10-pa15]' class="tway">
                                    <h4>Filter search For Array Of String Values</h4>
                                    <input type="text" name="city" list="cityname" filter="namesArr" filType="arr" />
                                    <div class="" filData="namesArr"></div>
                                    <div class="" filErr='namesArr'></div>
                                    <h4>Filter search For Array Of Objects</h4>
                                    <input type="text" name="city" list="cityname" filter="fullName" filType="element.lastName" />
                                    <div class="" filData="fullName"></div>
                                    <div class="" filErr='fullName'></div>
                                </div>
                                <h2>If Condition With Nested Looping</h2>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-if='[-if:]'>
                                    <div class="" cond_0="a==b">
                                        <p>This Is Nested If0</p>
                                        <div class="" cond_1="a < 1 && b < 1">
                                            <p>This Is Nested If1</p>
                                            <div class="" cond_2="a < 5 && b < 5">
                                                <p>This Is Nested If2</p>
                                                <div class="" cond_3="(a+b)%2==0">
                                                    <p>This Is Nested If3</p>
                                                    <div class="" cond_4="a==4">
                                                        <p>This Is Nested If4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" else_0="else">Else-0</div>
                                    <div class="" else_1="else">Else-1</div>
                                    <div class="" else_2="else">Else-2</div>
                                    <div class="" else_3="else">Else-3</div>
                                    <div class="" else_4="else">Else-4</div>
                                </div>
                                <h2>If Condition With Nested Looping</h2>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-if='[-if:]'>
                                    <div class="" cond_0="a==b">
                                        <p>This Is Nested If0</p>
                                        <div class="" cond_1="a > 1 && b > 1">
                                            <p>This Is Nested If1</p>
                                            <div class="" cond_2="a > 5 && b > 5">
                                                <p>This Is Nested If2</p>
                                                <div class="" cond_3="(a+b)%2==0">
                                                    <p>This Is Nested If3</p>
                                                    <div class="" cond_4="a!=4">
                                                        <p>This Is Nested If4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" else_0="else">Else-0</div>
                                    <div class="" else_1="else">Else-1</div>
                                    <div class="" else_2="else">Else-2</div>
                                    <div class="" else_3="else">Else-3</div>
                                    <div class="" else_4="else">Else-4</div>
                                </div>
                                <h2>If Condition With Nested Looping</h2>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-if='[-if:]'>
                                    <div class="" cond_0="a==b">
                                        <p>This Is Nested If0</p>
                                        <div class="" cond_1="a > 1 && b > 1">
                                            <p>This Is Nested If1</p>
                                            <div class="" cond_2="a < 5 && b < 5">
                                                <p>This Is Nested If2</p>
                                                <div class="" cond_3="(a+b)%2!=0">
                                                    <p>This Is Nested If3</p>
                                                    <div class="" cond_4="a!=4">
                                                        <p>This Is Nested If4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" else_0="else">Else-0</div>
                                    <div class="" else_1="else">Else-1</div>
                                    <div class="" else_2="else">Else-2</div>
                                    <div class="" else_3="else">Else-3</div>
                                    <div class="" else_4="else">Else-4</div>
                                </div>
                                <h2>If Condition With Nested Looping</h2>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-if='[-if:]'>
                                    <div class="" cond_0="a==b">
                                        <p>This Is Nested If0</p>
                                        <div class="" cond_1="a > 1 && b > 1">
                                            <p>This Is Nested If1</p>
                                            <div class="" cond_2="a < 5 && b < 5">
                                                <p>This Is Nested If2</p>
                                                <div class="" cond_3="(a+b)%2==0">
                                                    <p>This Is Nested If3</p>
                                                    <div class="" cond_4="a!=4">
                                                        <p>This Is Nested If4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" else_0="else">Else-0</div>
                                    <div class="" else_1="else">Else-1</div>
                                    <div class="" else_2="else">Else-2</div>
                                    <div class="" else_3="else">Else-3</div>
                                    <div class="" else_4="else">Else-4</div>
                                </div>
                                <h2>If Condition With Nested Looping</h2>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-if='[-if:]'>
                                    <div class="" cond_0="a==b">
                                        <p>This Is Nested If0</p>
                                        <div class="" cond_1="a > 1 && b > 1">
                                            <p>This Is Nested If1</p>
                                            <div class="" cond_2="a < 5 && b < 5">
                                                <p>This Is Nested If2</p>
                                                <div class="" cond_3="(a+b)%2==0">
                                                    <p>This Is Nested If3</p>
                                                    <div class="" cond_4="a==4">
                                                        <p>This Is Nested If4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" else_0="else">Else-0</div>
                                    <div class="" else_1="else">Else-1</div>
                                    <div class="" else_2="else">Else-2</div>
                                    <div class="" else_3="else">Else-3</div>
                                    <div class="" else_4="else">Else-4</div>
                                </div>
                                <h2>If Condition With Nested Looping On Click</h2>
                                <button class="btn cond-btn" cell-if='[-ce0:]'>Click</button>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-if='[-ca:]'>
                                    <div class="" cond_0="a==b">
                                        <p>This Is Nested If0</p>
                                        <div class="" cond_1="a < 1 && b < 1">
                                            <p>This Is Nested If1</p>
                                            <div class="" cond_2="a < 5 && b < 5">
                                                <p>This Is Nested If2</p>
                                                <div class="" cond_3="(a+b)%2==0">
                                                    <p>This Is Nested If3</p>
                                                    <div class="" cond_4="a==4">
                                                        <p>This Is Nested If4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" else_0="else">Else-0</div>
                                    <div class="" else_1="else">Else-1</div>
                                    <div class="" else_2="else">Else-2</div>
                                    <div class="" else_3="else">Else-3</div>
                                    <div class="" else_4="else">Else-4</div>
                                </div>
                                <h2>If Condition With Nested Looping</h2>
                                <button class="btn cond-btn" cell-if='[-ce1:]'>Click</button>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-if='[-ca1:]'>
                                    <div class="" cond_0="a==b">
                                        <p>This Is Nested If0</p>
                                        <div class="" cond_1="a > 1 && b > 1">
                                            <p>This Is Nested If1</p>
                                            <div class="" cond_2="a > 5 && b > 5">
                                                <p>This Is Nested If2</p>
                                                <div class="" cond_3="(a+b)%2==0">
                                                    <p>This Is Nested If3</p>
                                                    <div class="" cond_4="a!=4">
                                                        <p>This Is Nested If4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" else_0="else">Else-0</div>
                                    <div class="" else_1="else">Else-1</div>
                                    <div class="" else_2="else">Else-2</div>
                                    <div class="" else_3="else">Else-3</div>
                                    <div class="" else_4="else">Else-4</div>
                                </div>
                                <h2>If Condition With Nested Looping</h2>
                                <button class="btn cond-btn" cell-if='[-ce2:]'>Click</button>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-if='[-ca:]'>
                                    <div class="" cond_0="a==b">
                                        <p>This Is Nested If0</p>
                                        <div class="" cond_1="a > 1 && b > 1">
                                            <p>This Is Nested If1</p>
                                            <div class="" cond_2="a < 5 && b < 5">
                                                <p>This Is Nested If2</p>
                                                <div class="" cond_3="(a+b)%2!=0">
                                                    <p>This Is Nested If3</p>
                                                    <div class="" cond_4="a!=4">
                                                        <p>This Is Nested If4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" else_0="else">Else-0</div>
                                    <div class="" else_1="else">Else-1</div>
                                    <div class="" else_2="else">Else-2</div>
                                    <div class="" else_3="else">Else-3</div>
                                    <div class="" else_4="else">Else-4</div>
                                </div>
                                <h2>If Condition With Nested Looping</h2>
                                <button class="btn cond-btn" cell-if='[-ce3:]'>Click</button>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-if='[-ca:]'>
                                    <div class="" cond_0="a==b">
                                        <p>This Is Nested If0</p>
                                        <div class="" cond_1="a > 1 && b > 1">
                                            <p>This Is Nested If1</p>
                                            <div class="" cond_2="a < 5 && b < 5">
                                                <p>This Is Nested If2</p>
                                                <div class="" cond_3="(a+b)%2==0">
                                                    <p>This Is Nested If3</p>
                                                    <div class="" cond_4="a!=4">
                                                        <p>This Is Nested If4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" else_0="else">Else-0</div>
                                    <div class="" else_1="else">Else-1</div>
                                    <div class="" else_2="else">Else-2</div>
                                    <div class="" else_3="else">Else-3</div>
                                    <div class="" else_4="else">Else-4</div>
                                </div>
                                <h2>If Condition With Nested Looping</h2>
                                <button class="btn cond-btn" cell-if='[-ce4:]'>Click</button>
                                <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-if='[-ca:]'>
                                    <div class="" cond_0="a==b">
                                        <p>This Is Nested If0</p>
                                        <div class="" cond_1="a > 1 && b > 1">
                                            <p>This Is Nested If1</p>
                                            <div class="" cond_2="a < 5 && b < 5">
                                                <p>This Is Nested If2</p>
                                                <div class="" cond_3="(a+b)%2==0">
                                                    <p>This Is Nested If3</p>
                                                    <div class="" cond_4="a==4">
                                                        <p>This Is Nested If4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" else_0="else">Else-0</div>
                                    <div class="" else_1="else">Else-1</div>
                                    <div class="" else_2="else">Else-2</div>
                                    <div class="" else_3="else">Else-3</div>
                                    <div class="" else_4="else">Else-4</div>
                                </div>
                                <div class="" cell-p="[-p25]">
                                    <p cell-f="[-s35-f3-c2-w9]" cell-t="[-c]"><u>CRUD Operations</u></p>
                                    <h1><u>Deep Nested Looping</u></h1>
                                    <h2>Json Data Rendering With Looping</h2>
                                    <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]' cell-dt='[-ge:-u2-lp3]'>
                                        <div cell-dt='[-n0]' nest_0="key">
                                            <div cell-dt='[-n1]' nest_1="nest_0[i].fieldset">
                                                <div cell-dt='[-n2]' nest_2="nest_1[j].fieldset">
                                                    <div cell-dt='[-n3]' nest_3="nest_2[k].field" append="append">
                                                        <div cell-cm='[-bo4(5)-bg4-ra10-pa15-mb5]' class="data-block">
                                                            <div>Names</div>
                                                            <div cell-dt='[-v1]' class="data-col">nest_3[l].label.plain</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]' cell-dt='[-ge:-u2-lp3]'>
                                                        <div cell-dt='[-n0]' nest_0="key">
                                                            <div cell-dt='[-n1]' nest_1="nest_0[i].fieldset">
                                                                <div cell-dt='[-n2]' nest_2="nest_1[j].fieldset">
                                                                    <div cell-dt='[-n3]' nest_3="nest_2[k].field" append="append">
                                                                        <div cell-cm='[-bo4(5)-bg4-ra10-pa15-mb5]' class="data-block">
                                                                            <div>Names</div>
                                                                            <div cell-dt='[-v1]' class="data-col">nest_3[l].label.plain</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                    <h2>Json Un Defined Data ( having same key name but different values like array and object )
                                        Rendering
                                        With
                                        Looping
                                    </h2>
                                    <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]' cell-dt='[-ge:-u2-lp2]'>
                                        <div cell-dt='[-n0]' nest_0="key">
                                            <div cell-dt='[-n1]' nest_1="nest_0[i].fieldset">
                                                <div cell-dt='[-n2]'
                                                    cond="nest_1[j].fieldset!=undefined && nest_1[j].fieldset.fieldset!=undefined"
                                                    nest_2="nest_1[j].fieldset.fieldset.field" append="append">
                                                    <div cell-cm='[-bo4(5)-bg4-ra10-pa15-mb5]' class="data-block">
                                                        <div>Names</div>
                                                        <div cell-dt='[-v1]' class="data-col">nest_2[k].choices.choice.label.plain
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]' cell-dt='[-ge:-u2-lp2]'>
                                                        <div cell-dt='[-n0]' nest_0="key">
                                                            <div cell-dt='[-n1]' nest_1="nest_0[i].fieldset">
                                                                <div cell-dt='[-n2]'
                                                                    cond="nest_1[j].fieldset!=undefined && nest_1[j].fieldset.fieldset!=undefined"
                                                                    nest_2="nest_1[j].fieldset.fieldset.field" append="append">
                                                                    <div cell-cm='[-bo4(5)-bg4-ra10-pa15-mb5]' class="data-block">
                                                                        <div>Names</div>
                                                                        <div cell-dt='[-v1]' class="data-col">nest_2[k].choices.choice.label.plain
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                    <h2>Json Data Rendering With Looping</h2>
                                    <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]' cell-dt='[-ge:-u3-lp0]'>
                                        <div cell-dt='[-n0]' nest_0="key" append="append">
                                            <div cell-cm='[-bo4(5)-bg4-ra10-pa15-mb5]' class="data-block">
                                                <p>Data Block Repeating</p>
                                                <div cell-dt='[-v1]' class="data-col">nest_0[i].id</div>
                                                <div cell-dt='[-v2]' class="data-col">nest_0[i].userId</div>
                                                <div cell-dt='[-v3]' class="data-col">nest_0[i].name</div>
                                                <div cell-dt='[-v4]' class="data-col">nest_0[i].accountNo</div>
                                                <div cell-dt='[-v5]' class="data-col">nest_0[i].location</div>
                                                <div cell-dt='[-v6]' class="data-col">nest_0[i].deposit</div>
                                                <div cell-dt='[-v7]' class="data-col">nest_0[i].balance</div>
                                                <div cell-dt='[-v8]' class="data-col">nest_0[i].date</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]' cell-dt='[-ge:-u3-lp0]'>
                                                        <div cell-dt='[-n0]' nest_0="key" append="append">
                                                            <div cell-cm='[-bo4(5)-bg4-ra10-pa15-mb5]' class="data-block">
                                                                <p>Data Block Repeating</p>
                                                                <div cell-dt='[-v1]' class="data-col">nest_0[i].id</div>
                                                                <div cell-dt='[-v2]' class="data-col">nest_0[i].userId</div>
                                                                <div cell-dt='[-v3]' class="data-col">nest_0[i].name</div>
                                                                <div cell-dt='[-v4]' class="data-col">nest_0[i].accountNo</div>
                                                                <div cell-dt='[-v5]' class="data-col">nest_0[i].location</div>
                                                                <div cell-dt='[-v6]' class="data-col">nest_0[i].deposit</div>
                                                                <div cell-dt='[-v7]' class="data-col">nest_0[i].balance</div>
                                                                <div cell-dt='[-v8]' class="data-col">nest_0[i].date</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                    <h2>Json Data Rendering With Looping</h2>
                                    <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]' cell-dt='[-ge:-u2-lp3]'>
                                        <div cell-dt='[-n0]' nest_0="key">
                                            <div cell-dt='[-n1]' nest_1="nest_0[i].fieldset">
                                                <div cell-dt='[-n2]' nest_2="nest_1[j].fieldset">
                                                    <div cell-dt='[-n3]' nest_3="nest_2[k].field" append="append">
                                                        <div cell-cm='[-bo4(5)-bg4-ra10-pa15-mb5]' class="data-block">
                                                            <div>Names</div>
                                                            <div cell-dt='[-v1]' class="data-col">nest_3[l].label.plain</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <div class="" cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-m='[-mt15]' cell-dt='[-ge:-u2-lp3]'>
                                                        <div cell-dt='[-n0]' nest_0="key">
                                                            <div cell-dt='[-n1]' nest_1="nest_0[i].fieldset">
                                                                <div cell-dt='[-n2]' nest_2="nest_1[j].fieldset">
                                                                    <div cell-dt='[-n3]' nest_3="nest_2[k].field" append="append">
                                                                        <div cell-cm='[-bo4(5)-bg4-ra10-pa15-mb5]' class="data-block">
                                                                            <div>Names</div>
                                                                            <div cell-dt='[-v1]' class="data-col">nest_3[l].label.plain</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                    <p cell-f="[-s35-c2-f3-w9]" cell-ts="[-z10(2)]">For Url Three</p>
                                    <p cell-f="[-s25-c4-f2-w9]">Create</p>
                                    <div cell-dt='[-po:-u3]'>
                                        <form cell-p="[-b25]">
                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' class="" cell-bs="[-z15(4)]">
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="userId">User Id:</label>
                                                    <input type="text" id="userId" name="userId" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="name">Name:</label>
                                                    <input type="text" id="name" name="name" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="accountNo">Account No:</label>
                                                    <input type="text" id="accountNo" name="accountNo" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="location">Location:</label>
                                                    <input type="text" id="location" name="location" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="deposit">Deposit:</label>
                                                    <input type="number" id="deposit" name="deposit" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="balance">Balance:</label>
                                                    <input type="number" id="balance" name="balance" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="date">Date:</label>
                                                    <input type="date" id="date" name=" date" />
                                                </div>
                                            </div>
                                        </form>
                                        <button class="post" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                            cell-m="[-m25]">Submit</button>
                                    </div>
                                    <p cell-f="[-s20-c1-w9-f3]">To Watch The Updates After Submit<a
                                        href="https://api-generator.retool.com/10fGrt/data" cell-f="[-s25-c2-w9-f3]">Click Here</a>
                                    </p>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <div cell-dt='[-po:-u3]'>
                                                        <form cell-p="[-b25]">
                                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' class="" cell-bs="[-z15(4)]">
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="userId">User Id:</label>
                                                                    <input type="text" id="userId" name="userId" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="name">Name:</label>
                                                                    <input type="text" id="name" name="name" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="accountNo">Account No:</label>
                                                                    <input type="text" id="accountNo" name="accountNo" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="location">Location:</label>
                                                                    <input type="text" id="location" name="location" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="deposit">Deposit:</label>
                                                                    <input type="number" id="deposit" name="deposit" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="balance">Balance:</label>
                                                                    <input type="number" id="balance" name="balance" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="date">Date:</label>
                                                                    <input type="date" id="date" name=" date" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <button class="post" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                                            cell-m="[-m25]">Submit</button>
                                                    </div>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                    <p cell-f="[-s25-c4-f2-w9]">Update</p>
                                    <div cell-dt='[-pu:-u3-id16]'>
                                        <form cell-p="[-b25]">
                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-bs="[-z15(4)]" class="">
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="userId">User Id:</label>
                                                    <input type="text" id="userId" name="userId" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="name">Name:</label>
                                                    <input type="text" id="name" name="name" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="accountNo">Account No:</label>
                                                    <input type="text" id="accountNo" name="accountNo" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="location">Location:</label>
                                                    <input type="text" id="location" name="location" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="deposit">Deposit:</label>
                                                    <input type="number" id="deposit" name="deposit" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="balance">Balance:</label>
                                                    <input type="number" id="balance" name="balance" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="date">Date:</label>
                                                    <input type="date" id="date" name=" date" />
                                                </div>
                                            </div>
                                        </form>
                                        <button class="put" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                            cell-m="[-m25]">Submit</button>
                                    </div>
                                    <p cell-f="[-s20-c1-w9-f3]">To Watch The Updates After Submit<a
                                        href="https://api-generator.retool.com/10fGrt/data" cell-f="[-s25-c2-w9-f3]">Click Here</a>
                                    </p>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <div cell-dt='[-pu:-u3-id16]'>
                                                        <form cell-p="[-b25]">
                                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-bs="[-z15(4)]" class="">
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="userId">User Id:</label>
                                                                    <input type="text" id="userId" name="userId" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="name">Name:</label>
                                                                    <input type="text" id="name" name="name" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="accountNo">Account No:</label>
                                                                    <input type="text" id="accountNo" name="accountNo" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="location">Location:</label>
                                                                    <input type="text" id="location" name="location" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="deposit">Deposit:</label>
                                                                    <input type="number" id="deposit" name="deposit" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="balance">Balance:</label>
                                                                    <input type="number" id="balance" name="balance" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="date">Date:</label>
                                                                    <input type="date" id="date" name=" date" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <button class="put" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                                            cell-m="[-m25]">Submit</button>
                                                    </div>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                    <p cell-f="[-s25-c4-f2-w9]">Edit</p>
                                    <div cell-dt='[-pa:-u3-id16]'>
                                        <form cell-p="[-b25]">
                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-bs="[-z15(4)]" class="">
                                                <div cell-Q='[-q-pa]' class="" cell-c="[-c7]">
                                                    <label for="name">Name:</label>
                                                    <input type="text" id="name" name="name" />
                                                </div>
                                            </div>
                                        </form>
                                        <button class="patch" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                            cell-m="[-m25]">Submit</button>
                                    </div>
                                    <p cell-f="[-s20-c1-w9-f3]">To Watch The Updates After Submit<a
                                        href="https://api-generator.retool.com/10fGrt/data" cell-f="[-s25-c2-w9-f3]">Click Here</a>
                                    </p>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <div cell-dt='[-pa:-u3-id16]'>
                                                        <form cell-p="[-b25]">
                                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-bs="[-z15(4)]" class="">
                                                                <div cell-Q='[-q-pa]' class="" cell-c="[-c7]">
                                                                    <label for="name">Name:</label>
                                                                    <input type="text" id="name" name="name" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <button class="patch" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                                            cell-m="[-m25]">Submit</button>
                                                    </div>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                    <p cell-f="[-s25-c4-f2-w9]">Delete</p>
                                    <button cell-dt="[-de:-u3-id16]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                    <button cell-dt="[-de:-u3-id17]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                    <button cell-dt="[-de:-u3-id18]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                    <p cell-f="[-s20-c1-w9-f3]">To Watch The Updates After Submit<a
                                        href="https://api-generator.retool.com/10fGrt/data" cell-f="[-s25-c2-w9-f3]">Click Here</a>
                                    </p>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <button cell-dt="[-de:-u3-id16]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                                    <button cell-dt="[-de:-u3-id17]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                                    <button cell-dt="[-de:-u3-id18]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div cell-p="[-p25]">
                                    <p cell-f="[-s35-c2-f3-w9]" cell-ts="[-z10(2)]">For Url One</p>
                                    <div cell-dt='[-po:-u1]'>
                                        <p cell-f="[-s25-c4-f2-w9]">Create</p>
                                        <form cell-p="[-b25]">
                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' class="" cell-bs="[-z15(4)]">
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="age">Age :</label>
                                                    <input type="text" id="age" name="age" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="name">Name:</label>
                                                    <input type="text" id="name" name="name" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="productCode">Product Code:</label>
                                                    <input type="text" id="productCode" name="productCode" />
                                                </div>
                                            </div>
                                        </form>
                                        <button class="post" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                            cell-m="[-m25]">Submit</button>
                                    </div>
                                    <p cell-f="[-s20-c1-w9-f3]">To Watch The Updates After Submit<a
                                        href="https://retoolapi.dev/A2TKRX/data" cell-f="[-s25-c2-w9-f3]">Click Here</a></p>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <div cell-dt='[-po:-u1]'>
                                                        <p cell-f="[-s25-c4-f2-w9]">Create</p>
                                                        <form cell-p="[-b25]">
                                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' class="" cell-bs="[-z15(4)]">
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="age">Age :</label>
                                                                    <input type="text" id="age" name="age" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="name">Name:</label>
                                                                    <input type="text" id="name" name="name" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="productCode">Product Code:</label>
                                                                    <input type="text" id="productCode" name="productCode" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <button class="post" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                                            cell-m="[-m25]">Submit</button>
                                                    </div>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                    <p cell-f="[-s25-c4-f2-w9]">Update</p>
                                    <div cell-dt='[-pu:-u1-id5]'>
                                        <form cell-p="[-b25]">
                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' class="" cell-bs="[-z15(4)]">
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="age">Age :</label>
                                                    <input type="text" id="age" name="age" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="name">Name:</label>
                                                    <input type="text" id="name" name="name" />
                                                </div>
                                                <div cell-Q='[-q-pa]' class="">
                                                    <label for="productCode">Product Code:</label>
                                                    <input type="text" id="productCode" name="productCode" />
                                                </div>
                                            </div>
                                        </form>
                                        <button class="put" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                            cell-m="[-m25]">Submit</button>
                                    </div>
                                    <p cell-f="[-s20-c1-w9-f3]">To Watch The Updates After Submit<a
                                        href="https://retoolapi.dev/A2TKRX/data" cell-f="[-s25-c2-w9-f3]">Click Here</a></p>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <div cell-dt='[-pu:-u1-id5]'>
                                                        <form cell-p="[-b25]">
                                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' class="" cell-bs="[-z15(4)]">
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="age">Age :</label>
                                                                    <input type="text" id="age" name="age" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="name">Name:</label>
                                                                    <input type="text" id="name" name="name" />
                                                                </div>
                                                                <div cell-Q='[-q-pa]' class="">
                                                                    <label for="productCode">Product Code:</label>
                                                                    <input type="text" id="productCode" name="productCode" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <button class="put" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                                            cell-m="[-m25]">Submit</button>
                                                    </div>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                    <p cell-f="[-s25-c4-f2-w9]">Edit</p>
                                    <div cell-dt='[-pa:-u1-id5]'>
                                        <form cell-p="[-b25]">
                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-bs="[-z15(4)]" class="">
                                                <div cell-Q='[-q-pa]' class="" cell-c="[-c7]">
                                                    <label for="name">Name:</label>
                                                    <input type="text" id="name" name="name" />
                                                </div>
                                            </div>
                                        </form>
                                        <button class="patch" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                            cell-m="[-m25]">Submit</button>
                                    </div>
                                    <p cell-f="[-s20-c1-w9-f3]">To Watch The Updates After Submit<a
                                        href="https://retoolapi.dev/A2TKRX/data" cell-f="[-s25-c2-w9-f3]">Click Here</a></p>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <div cell-dt='[-pa:-u1-id5]'>
                                                        <form cell-p="[-b25]">
                                                            <div cell-Q='[-q]' cell-cm='[-bo5(4)-bg5-ra10-pa15]' cell-bs="[-z15(4)]" class="">
                                                                <div cell-Q='[-q-pa]' class="" cell-c="[-c7]">
                                                                    <label for="name">Name:</label>
                                                                    <input type="text" id="name" name="name" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <button class="patch" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]" cell-p="[-p7]"
                                                            cell-m="[-m25]">Submit</button>
                                                    </div>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                    <p cell-f="[-s25-c4-f2-w9]">Delete</p>
                                    <button cell-dt="[-de:-u1-id5]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                    <button cell-dt="[-de:-u1-id6]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                    <button cell-dt="[-de:-u1-id7]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                    <p cell-f="[-s20-c1-w9-f3]">To Watch The Updates After Submit<a
                                        href="https://retoolapi.dev/A2TKRX/data" cell-f="[-s25-c2-w9-f3]">Click Here</a></p>
                                    <div cell-m='[-t15]' class="code-accord">
                                        <div class="code-text">
                                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                        </div>
                                        <div class="code-content">
                                            <pre class="pre">
                                                <xmp>
                                                    <button cell-dt="[-de:-u1-id5]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                                    <button cell-dt="[-de:-u1-id6]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                                    <button cell-dt="[-de:-u1-id7]" cell-f="[-f2-c3-s14-w9] " cell-bg='[-c2]' cell-bs="[-z10(2)]"
                                                        cell-p="[-p7]" cell-m="[-m25]">Delete</button>
                                                </xmp>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Data;