import React, { Component } from "react";
export class Fl extends Component {
    componentDidMount() {
        var loadScript = function (src) {
            var tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(tag);
        }
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659196881/i2/jq%28dy-react%29/doc.js");
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659197359/i2/jq%28dy-react%29/index.js");
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659071325/i2/jq%28dy-react%29/cell.js");
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659071576/i2/jq%28dy-react%29/slide.js");
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659071524/i2/jq%28dy-react%29/input.js");
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1663476689/i2/jq%28dy-react%29/tabs.js");
    }
    render() {
        return (
            <div class="content">
                <div class="title-col">
                    <div cell-Q='[-q-ct]' class=" ">
                        <div class="text">
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For
                                Floating
                                Actions</p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-fl &
                                cell-rf</p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <div cell-Q='[-q-sa]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p cell-p='[-b5]' cell-f='[-s18-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>
                                        For
                                        Floating Actions cell-fl</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-fl1:</span>= For Floating Actions &
                                        One
                                        For Index </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-fa</span> = For Floating Area Cell</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-c1</span> = For Content Cell & One For
                                        Index</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-fs10</span> = Float Speed Float Speed
                                        10x0.2=1sec</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p cell-p='[-b5]' cell-f='[-s18-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>
                                        For
                                        Responsive Floating Actions cell-rf</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-fl1:</span>= For Floating Actions &
                                        One
                                        For Index </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-fv</span> = For Float Vertex</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-dl15</span> = Desktop Shows 15
                                        Contents</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ll10</span> =Large Shows 10 Contents
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-tl5</span> = Tab Shows 5 Contents</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ml3</span> = Small Shows 1 Content</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-sl1</span> = Small Shows 1 Content</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-fs10</span> = Float Speed 10x0.2=1sec
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-c20]' class="result">
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Floating Actions</p>
                            <div cell-p='[-p25]' cell-m='[-t45]' class="fl-output">
                                <div cell-fl='[-fl:-a1]' cell-h='[-h550]' class=" ">
                                    <div cell-Q='[-q-sb]' class="">
                                        <button class="btn left-float"><i class="fa fa-angle-left"
                                            aria-hidden="true"></i></button>
                                        <button class="btn right-float"><i class="fa fa-angle-right"
                                            aria-hidden="true"></i></button>
                                    </div>
                                    <div cell-fl='[-fa]' cell-h='[-wh]' cell-bg='[-c2]' class="">
                                        <div cell-fl='[-c]' cell-bg='[-c1]' cell-h='[-wh]' class="">
                                            Float-1
                                        </div>
                                        <div cell-fl='[-c]' cell-bg='[-c2]' cell-h='[-wh]' class="">
                                            Float-2
                                        </div>
                                        <div cell-fl='[-c]' cell-bg='[-c3]' cell-h='[-wh]' class="">
                                            Float-3
                                        </div>
                                        <div cell-fl='[-c]' cell-bg='[-c4]' cell-h='[-wh]' class="">
                                            Float-4
                                        </div>
                                        <div cell-fl='[-c]' cell-bg='[-c5]' cell-h='[-wh]' class="">
                                            Float-5
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-p='[-p25]' cell-m='[-t45]' class="fl-output">
                                            <div cell-fl='[-fl:-a1]' cell-h='[-h550]' class=" ">
                                                <div cell-Q='[-q-sb]' class="">
                                                    <button class="btn left-float"><i class="fa fa-angle-left"
                                                        aria-hidden="true"></i></button>
                                                    <button class="btn right-float"><i class="fa fa-angle-right"
                                                        aria-hidden="true"></i></button>
                                                </div>
                                                <div cell-fl='[-fa]' cell-h='[-wh]' cell-bg='[-c2]' class="">
                                                    <div cell-fl='[-c]' cell-bg='[-c1]' cell-h='[-wh]' class="">
                                                        Float-1
                                                    </div>
                                                    <div cell-fl='[-c]' cell-bg='[-c2]' cell-h='[-wh]' class="">
                                                        Float-2
                                                    </div>
                                                    <div cell-fl='[-c]' cell-bg='[-c3]' cell-h='[-wh]' class="">
                                                        Float-3
                                                    </div>
                                                    <div cell-fl='[-c]' cell-bg='[-c4]' cell-h='[-wh]' class="">
                                                        Float-4
                                                    </div>
                                                    <div cell-fl='[-c]' cell-bg='[-c5]' cell-h='[-wh]' class="">
                                                        Float-5
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Nested Floating Actions</p>
                            <div cell-p='[-p25]' cell-m='[-t45]' class="fl-output">
                                <div cell-fl='[-fl:-a1]' cell-h='[-h550]' class=" ">
                                    <div cell-Q='[-q-sb]' class="">
                                        <button class="btn left-float"><i class="fa fa-angle-left"
                                            aria-hidden="true"></i></button>
                                        <button class="btn right-float"><i class="fa fa-angle-right"
                                            aria-hidden="true"></i></button>
                                    </div>
                                    <div cell-fl='[-fa]' cell-h='[-wh]' cell-bg='[-c2]' class="">
                                        <div cell-fl='[-c]' cell-bg='[-c1]' cell-h='[-wh]' class="">
                                            Float-1
                                            <div cell-p='[-p25]' class="fl-output">
                                                <div cell-fl='[-fl:-a2]' cell-h='[-h450]' class=" ">
                                                    <div cell-Q='[-q-sb]' class="">
                                                        <button class="btn left-float"><i class="fa fa-angle-left"
                                                            aria-hidden="true"></i></button>
                                                        <button class="btn right-float"><i class="fa fa-angle-right"
                                                            aria-hidden="true"></i></button>
                                                    </div>
                                                    <div cell-fl='[-fa]' cell-h='[-wh]' cell-bg='[-c2]' class="">
                                                        <div cell-fl='[-c]' cell-bg='[-c1]' cell-h='[-wh]' class="">
                                                            Float-1
                                                        </div>
                                                        <div cell-fl='[-c]' cell-bg='[-c2]' cell-h='[-wh]' class="">
                                                            Float-2
                                                            <div cell-p='[-p25]' class="fl-output">
                                                                <div cell-fl='[-fl:-a3]' cell-h='[-h350]' class=" ">
                                                                    <div cell-Q='[-q-sb]' class="">
                                                                        <button class="btn left-float"><i
                                                                            class="fa fa-angle-left"
                                                                            aria-hidden="true"></i></button>
                                                                        <button class="btn right-float"><i
                                                                            class="fa fa-angle-right"
                                                                            aria-hidden="true"></i></button>
                                                                    </div>
                                                                    <div cell-fl='[-fa]' cell-h='[-wh]' cell-bg='[-c2]'
                                                                        class="">
                                                                        <div cell-fl='[-c]' cell-bg='[-c1]' cell-h='[-wh]'
                                                                            class="">
                                                                            Float-1
                                                                        </div>
                                                                        <div cell-fl='[-c]' cell-bg='[-c2]' cell-h='[-wh]'
                                                                            class="">
                                                                            Float-2
                                                                        </div>
                                                                        <div cell-fl='[-c]' cell-bg='[-c3]' cell-h='[-wh]'
                                                                            class="">
                                                                            Float-3
                                                                            <div cell-p='[-p25]' class="fl-output">
                                                                                <div cell-fl='[-fl:-a4]' cell-h='[-h250]'
                                                                                    class=" ">
                                                                                    <div cell-Q='[-q-sb]' class="">
                                                                                        <button
                                                                                            class="btn left-float"><i
                                                                                                class="fa fa-angle-left"
                                                                                                aria-hidden="true"></i></button>
                                                                                        <button
                                                                                            class="btn right-float"><i
                                                                                                class="fa fa-angle-right"
                                                                                                aria-hidden="true"></i></button>
                                                                                    </div>
                                                                                    <div cell-fl='[-fa]' cell-h='[-wh]'
                                                                                        cell-bg='[-c2]' class="">
                                                                                        <div cell-fl='[-c]' cell-bg='[-c1]'
                                                                                            cell-h='[-wh]' class="">
                                                                                            Float-1
                                                                                        </div>
                                                                                        <div cell-fl='[-c]' cell-bg='[-c2]'
                                                                                            cell-h='[-wh]' class="">
                                                                                            Float-2
                                                                                        </div>
                                                                                        <div cell-fl='[-c]' cell-bg='[-c3]'
                                                                                            cell-h='[-wh]' class="">
                                                                                            Float-3
                                                                                        </div>
                                                                                        <div cell-fl='[-c]' cell-bg='[-c4]'
                                                                                            cell-h='[-wh]' class="">
                                                                                            Float-4
                                                                                            <div cell-p='[-p25]'
                                                                                                class="fl-output">
                                                                                                <div cell-fl='[-fl:-a5]'
                                                                                                    cell-h='[-h150]'
                                                                                                    class=" ">
                                                                                                    <div cell-Q='[-q-sb]'
                                                                                                        class="">
                                                                                                        <button
                                                                                                            class="btn left-float"><i
                                                                                                                class="fa fa-angle-left"
                                                                                                                aria-hidden="true"></i></button>
                                                                                                        <button
                                                                                                            class="btn right-float"><i
                                                                                                                class="fa fa-angle-right"
                                                                                                                aria-hidden="true"></i></button>
                                                                                                    </div>
                                                                                                    <div cell-fl='[-fa]'
                                                                                                        cell-h='[-h250]'
                                                                                                        cell-bg='[-c2]'
                                                                                                        class="">
                                                                                                        <div cell-fl='[-c]'
                                                                                                            cell-bg='[-c1]'
                                                                                                            cell-h='[-wh]'
                                                                                                            class="">
                                                                                                            Float-1
                                                                                                        </div>
                                                                                                        <div cell-fl='[-c]'
                                                                                                            cell-bg='[-c2]'
                                                                                                            cell-h='[-wh]'
                                                                                                            class="">
                                                                                                            Float-2
                                                                                                        </div>
                                                                                                        <div cell-fl='[-c]'
                                                                                                            cell-bg='[-c3]'
                                                                                                            cell-h='[-wh]'
                                                                                                            class="">
                                                                                                            Float-3
                                                                                                        </div>
                                                                                                        <div cell-fl='[-c]'
                                                                                                            cell-bg='[-c4]'
                                                                                                            cell-h='[-wh]'
                                                                                                            class="">
                                                                                                            Float-4
                                                                                                        </div>
                                                                                                        <div cell-fl='[-c]'
                                                                                                            cell-bg='[-c5]'
                                                                                                            cell-h='[-wh]'
                                                                                                            class="">
                                                                                                            Float-5
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div cell-fl='[-c]' cell-bg='[-c5]'
                                                                                            cell-h='[-wh]' class="">
                                                                                            Float-5
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div cell-fl='[-c]' cell-bg='[-c4]' cell-h='[-wh]'
                                                                            class="">
                                                                            Float-4
                                                                        </div>
                                                                        <div cell-fl='[-c]' cell-bg='[-c5]' cell-h='[-wh]'
                                                                            class="">
                                                                            Float-5
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div cell-fl='[-c]' cell-bg='[-c3]' cell-h='[-wh]' class="">
                                                            Float-3
                                                        </div>
                                                        <div cell-fl='[-c]' cell-bg='[-c4]' cell-h='[-wh]' class="">
                                                            Float-4
                                                        </div>
                                                        <div cell-fl='[-c]' cell-bg='[-c5]' cell-h='[-wh]' class="">
                                                            Float-5
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-fl='[-c]' cell-bg='[-c2]' cell-h='[-wh]' class="">
                                            Float-2
                                        </div>
                                        <div cell-fl='[-c]' cell-bg='[-c3]' cell-h='[-wh]' class="">
                                            Float-3
                                        </div>
                                        <div cell-fl='[-c]' cell-bg='[-c4]' cell-h='[-wh]' class="">
                                            Float-4
                                        </div>
                                        <div cell-fl='[-c]' cell-bg='[-c5]' cell-h='[-wh]' class="">
                                            Float-5
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-p='[-p25]' cell-m='[-t45]' class="fl-output">
                                            <div cell-fl='[-fl:-a1]' cell-h='[-h550]' class=" ">
                                                <div cell-Q='[-q-sb]' class="">
                                                    <button class="btn left-float"><i class="fa fa-angle-left"
                                                        aria-hidden="true"></i></button>
                                                    <button class="btn right-float"><i class="fa fa-angle-right"
                                                        aria-hidden="true"></i></button>
                                                </div>
                                                <div cell-fl='[-fa]' cell-h='[-wh]' cell-bg='[-c2]' class="">
                                                    <div cell-fl='[-c]' cell-bg='[-c1]' cell-h='[-wh]' class="">
                                                        Float-1
                                                        <div cell-p='[-p25]' class="fl-output">
                                                            <div cell-fl='[-fl:-a2]' cell-h='[-h450]' class=" ">
                                                                <div cell-Q='[-q-sb]' class="">
                                                                    <button class="btn left-float"><i class="fa fa-angle-left"
                                                                        aria-hidden="true"></i></button>
                                                                    <button class="btn right-float"><i class="fa fa-angle-right"
                                                                        aria-hidden="true"></i></button>
                                                                </div>
                                                                <div cell-fl='[-fa]' cell-h='[-wh]' cell-bg='[-c2]' class="">
                                                                    <div cell-fl='[-c]' cell-bg='[-c1]' cell-h='[-wh]' class="">
                                                                        Float-1
                                                                    </div>
                                                                    <div cell-fl='[-c]' cell-bg='[-c2]' cell-h='[-wh]' class="">
                                                                        Float-2
                                                                        <div cell-p='[-p25]' class="fl-output">
                                                                            <div cell-fl='[-fl:-a3]' cell-h='[-h350]' class=" ">
                                                                                <div cell-Q='[-q-sb]' class="">
                                                                                    <button class="btn left-float"><i
                                                                                        class="fa fa-angle-left"
                                                                                        aria-hidden="true"></i></button>
                                                                                    <button class="btn right-float"><i
                                                                                        class="fa fa-angle-right"
                                                                                        aria-hidden="true"></i></button>
                                                                                </div>
                                                                                <div cell-fl='[-fa]' cell-h='[-wh]' cell-bg='[-c2]'
                                                                                    class="">
                                                                                    <div cell-fl='[-c]' cell-bg='[-c1]' cell-h='[-wh]'
                                                                                        class="">
                                                                                        Float-1
                                                                                    </div>
                                                                                    <div cell-fl='[-c]' cell-bg='[-c2]' cell-h='[-wh]'
                                                                                        class="">
                                                                                        Float-2
                                                                                    </div>
                                                                                    <div cell-fl='[-c]' cell-bg='[-c3]' cell-h='[-wh]'
                                                                                        class="">
                                                                                        Float-3
                                                                                        <div cell-p='[-p25]' class="fl-output">
                                                                                            <div cell-fl='[-fl:-a4]' cell-h='[-h250]'
                                                                                                class=" ">
                                                                                                <div cell-Q='[-q-sb]' class="">
                                                                                                    <button
                                                                                                        class="btn left-float"><i
                                                                                                            class="fa fa-angle-left"
                                                                                                            aria-hidden="true"></i></button>
                                                                                                    <button
                                                                                                        class="btn right-float"><i
                                                                                                            class="fa fa-angle-right"
                                                                                                            aria-hidden="true"></i></button>
                                                                                                </div>
                                                                                                <div cell-fl='[-fa]' cell-h='[-wh]'
                                                                                                    cell-bg='[-c2]' class="">
                                                                                                    <div cell-fl='[-c]' cell-bg='[-c1]'
                                                                                                        cell-h='[-wh]' class="">
                                                                                                        Float-1
                                                                                                    </div>
                                                                                                    <div cell-fl='[-c]' cell-bg='[-c2]'
                                                                                                        cell-h='[-wh]' class="">
                                                                                                        Float-2
                                                                                                    </div>
                                                                                                    <div cell-fl='[-c]' cell-bg='[-c3]'
                                                                                                        cell-h='[-wh]' class="">
                                                                                                        Float-3
                                                                                                    </div>
                                                                                                    <div cell-fl='[-c]' cell-bg='[-c4]'
                                                                                                        cell-h='[-wh]' class="">
                                                                                                        Float-4
                                                                                                        <div cell-p='[-p25]'
                                                                                                            class="fl-output">
                                                                                                            <div cell-fl='[-fl:-a5]'
                                                                                                                cell-h='[-h150]'
                                                                                                                class=" ">
                                                                                                                <div cell-Q='[-q-sb]'
                                                                                                                    class="">
                                                                                                                    <button
                                                                                                                        class="btn left-float"><i
                                                                                                                            class="fa fa-angle-left"
                                                                                                                            aria-hidden="true"></i></button>
                                                                                                                    <button
                                                                                                                        class="btn right-float"><i
                                                                                                                            class="fa fa-angle-right"
                                                                                                                            aria-hidden="true"></i></button>
                                                                                                                </div>
                                                                                                                <div cell-fl='[-fa]'
                                                                                                                    cell-h='[-h250]'
                                                                                                                    cell-bg='[-c2]'
                                                                                                                    class="">
                                                                                                                    <div cell-fl='[-c]'
                                                                                                                        cell-bg='[-c1]'
                                                                                                                        cell-h='[-wh]'
                                                                                                                        class="">
                                                                                                                        Float-1
                                                                                                                    </div>
                                                                                                                    <div cell-fl='[-c]'
                                                                                                                        cell-bg='[-c2]'
                                                                                                                        cell-h='[-wh]'
                                                                                                                        class="">
                                                                                                                        Float-2
                                                                                                                    </div>
                                                                                                                    <div cell-fl='[-c]'
                                                                                                                        cell-bg='[-c3]'
                                                                                                                        cell-h='[-wh]'
                                                                                                                        class="">
                                                                                                                        Float-3
                                                                                                                    </div>
                                                                                                                    <div cell-fl='[-c]'
                                                                                                                        cell-bg='[-c4]'
                                                                                                                        cell-h='[-wh]'
                                                                                                                        class="">
                                                                                                                        Float-4
                                                                                                                    </div>
                                                                                                                    <div cell-fl='[-c]'
                                                                                                                        cell-bg='[-c5]'
                                                                                                                        cell-h='[-wh]'
                                                                                                                        class="">
                                                                                                                        Float-5
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div cell-fl='[-c]' cell-bg='[-c5]'
                                                                                                        cell-h='[-wh]' class="">
                                                                                                        Float-5
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div cell-fl='[-c]' cell-bg='[-c4]' cell-h='[-wh]'
                                                                                        class="">
                                                                                        Float-4
                                                                                    </div>
                                                                                    <div cell-fl='[-c]' cell-bg='[-c5]' cell-h='[-wh]'
                                                                                        class="">
                                                                                        Float-5
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div cell-fl='[-c]' cell-bg='[-c3]' cell-h='[-wh]' class="">
                                                                        Float-3
                                                                    </div>
                                                                    <div cell-fl='[-c]' cell-bg='[-c4]' cell-h='[-wh]' class="">
                                                                        Float-4
                                                                    </div>
                                                                    <div cell-fl='[-c]' cell-bg='[-c5]' cell-h='[-wh]' class="">
                                                                        Float-5
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-fl='[-c]' cell-bg='[-c2]' cell-h='[-wh]' class="">
                                                        Float-2
                                                    </div>
                                                    <div cell-fl='[-c]' cell-bg='[-c3]' cell-h='[-wh]' class="">
                                                        Float-3
                                                    </div>
                                                    <div cell-fl='[-c]' cell-bg='[-c4]' cell-h='[-wh]' class="">
                                                        Float-4
                                                    </div>
                                                    <div cell-fl='[-c]' cell-bg='[-c5]' cell-h='[-wh]' class="">
                                                        Float-5
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Responsive Floatin Actions</p>
                            <div cell-p='[-p25]' cell-m='[-t45]' class="fl-output">
                                <div cell-rf='[-fl:-dl10-ll7-tl5-ml3-sl1-fs25-fv]' cell-h='[-h550]' cell-p='[-p25]'
                                    cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                    <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                        <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                            aria-hidden="true"></i></button>
                                        <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                            aria-hidden="true"></i></button>
                                    </div>
                                    <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-1
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-2
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-3
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-4
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-5
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-6
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-7
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-8
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-9
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-10
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-11
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-12
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-13
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-14
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-15
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-16
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-17
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-18
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-19
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-20
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-21
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-22
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-23
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-24
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div class="">
                                                Float-25
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                        <button class="btn rf-button">close</button>
                                        <button class="btn rf-button active">1</button>
                                        <button class="btn rf-button">2</button>
                                        <button class="btn rf-button">3</button>
                                        <button class="btn rf-button">4</button>
                                        <button class="btn rf-button">5</button>
                                        <button class="btn rf-button">6</button>
                                        <button class="btn rf-button">7</button>
                                        <button class="btn rf-button">8</button>
                                        <button class="btn rf-button">9</button>
                                        <button class="btn rf-button">10</button>
                                        <button class="btn rf-button">11</button>
                                        <button class="btn rf-button">12</button>
                                        <button class="btn rf-button">13</button>
                                        <button class="btn rf-button">14</button>
                                        <button class="btn rf-button">15</button>
                                        <button class="btn rf-button">16</button>
                                        <button class="btn rf-button">17</button>
                                        <button class="btn rf-button">18</button>
                                        <button class="btn rf-button">19</button>
                                        <button class="btn rf-button">20</button>
                                        <button class="btn rf-button">21</button>
                                        <button class="btn rf-button">22</button>
                                        <button class="btn rf-button">23</button>
                                        <button class="btn rf-button">24</button>
                                        <button class="btn rf-button">25</button>
                                    </div>
                                </div>
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-p='[-p25]' cell-m='[-t45]' class="fl-output">
                                            <div cell-rf='[-fl:-dl10-ll7-tl5-ml3-sl1-fs25-fv]' cell-h='[-h550]' cell-p='[-p25]'
                                                cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                    <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                        aria-hidden="true"></i></button>
                                                    <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                        aria-hidden="true"></i></button>
                                                </div>
                                                <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-1
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-2
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-3
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-4
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-5
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-6
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-7
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-8
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-9
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-10
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-11
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-12
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-13
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-14
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-15
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-16
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-17
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-18
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-19
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-20
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-21
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-22
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-23
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-24
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div class="">
                                                            Float-25
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                    <button class="btn rf-button">close</button>
                                                    <button class="btn rf-button active">1</button>
                                                    <button class="btn rf-button">2</button>
                                                    <button class="btn rf-button">3</button>
                                                    <button class="btn rf-button">4</button>
                                                    <button class="btn rf-button">5</button>
                                                    <button class="btn rf-button">6</button>
                                                    <button class="btn rf-button">7</button>
                                                    <button class="btn rf-button">8</button>
                                                    <button class="btn rf-button">9</button>
                                                    <button class="btn rf-button">10</button>
                                                    <button class="btn rf-button">11</button>
                                                    <button class="btn rf-button">12</button>
                                                    <button class="btn rf-button">13</button>
                                                    <button class="btn rf-button">14</button>
                                                    <button class="btn rf-button">15</button>
                                                    <button class="btn rf-button">16</button>
                                                    <button class="btn rf-button">17</button>
                                                    <button class="btn rf-button">18</button>
                                                    <button class="btn rf-button">19</button>
                                                    <button class="btn rf-button">20</button>
                                                    <button class="btn rf-button">21</button>
                                                    <button class="btn rf-button">22</button>
                                                    <button class="btn rf-button">23</button>
                                                    <button class="btn rf-button">24</button>
                                                    <button class="btn rf-button">25</button>
                                                </div>
                                            </div>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Nested Responsive Floatin Actions</p>
                            <div cell-p='[-p25]' cell-m='[-t45]' class="fl-output">
                                <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h750]' cell-p='[-p25]'
                                    cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                    <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                        <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                            aria-hidden="true"></i></button>
                                        <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                            aria-hidden="true"></i></button>
                                    </div>
                                    <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                        <div cell-rf='[-c]' class="">
                                            <div cell-p='[-p25]' class="fl-output">
                                                <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h450]'
                                                    cell-p='[-p25]' cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                    <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                        <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                            aria-hidden="true"></i></button>
                                                        <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                            aria-hidden="true"></i></button>
                                                    </div>
                                                    <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-1
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-2
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-3
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-4
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-5
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                        <button class="btn rf-button">close</button>
                                                        <button class="btn rf-button active">1</button>
                                                        <button class="btn rf-button">2</button>
                                                        <button class="btn rf-button">3</button>
                                                        <button class="btn rf-button">4</button>
                                                        <button class="btn rf-button">5</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div cell-p='[-p25]' class="fl-output">
                                                <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h450]'
                                                    cell-p='[-p25]' cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                    <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                        <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                            aria-hidden="true"></i></button>
                                                        <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                            aria-hidden="true"></i></button>
                                                    </div>
                                                    <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-1
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-2
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-3
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-4
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-5
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                        <button class="btn rf-button">close</button>
                                                        <button class="btn rf-button active">1</button>
                                                        <button class="btn rf-button">2</button>
                                                        <button class="btn rf-button">3</button>
                                                        <button class="btn rf-button">4</button>
                                                        <button class="btn rf-button">5</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div cell-p='[-p25]' class="fl-output">
                                                <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h450]'
                                                    cell-p='[-p25]' cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                    <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                        <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                            aria-hidden="true"></i></button>
                                                        <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                            aria-hidden="true"></i></button>
                                                    </div>
                                                    <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-1
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-2
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-3
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-4
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-5
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                        <button class="btn rf-button">close</button>
                                                        <button class="btn rf-button active">1</button>
                                                        <button class="btn rf-button">2</button>
                                                        <button class="btn rf-button">3</button>
                                                        <button class="btn rf-button">4</button>
                                                        <button class="btn rf-button">5</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div cell-p='[-p25]' class="fl-output">
                                                <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h450]'
                                                    cell-p='[-p25]' cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                    <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                        <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                            aria-hidden="true"></i></button>
                                                        <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                            aria-hidden="true"></i></button>
                                                    </div>
                                                    <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-1
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-2
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-3
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-4
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-5
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                        <button class="btn rf-button">close</button>
                                                        <button class="btn rf-button active">1</button>
                                                        <button class="btn rf-button">2</button>
                                                        <button class="btn rf-button">3</button>
                                                        <button class="btn rf-button">4</button>
                                                        <button class="btn rf-button">5</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-rf='[-c]' class="">
                                            <div cell-p='[-p25]' class="fl-output">
                                                <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h450]'
                                                    cell-p='[-p25]' cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                    <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                        <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                            aria-hidden="true"></i></button>
                                                        <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                            aria-hidden="true"></i></button>
                                                    </div>
                                                    <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-1
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-2
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-3
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-4
                                                            </div>
                                                        </div>
                                                        <div cell-rf='[-c]' class="">
                                                            <div class="">
                                                                Float-5
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                        <button class="btn rf-button">close</button>
                                                        <button class="btn rf-button active">1</button>
                                                        <button class="btn rf-button">2</button>
                                                        <button class="btn rf-button">3</button>
                                                        <button class="btn rf-button">4</button>
                                                        <button class="btn rf-button">5</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                        <button class="btn rf-button">close</button>
                                        <button class="btn rf-button active">1</button>
                                        <button class="btn rf-button">2</button>
                                        <button class="btn rf-button">3</button>
                                        <button class="btn rf-button">4</button>
                                        <button class="btn rf-button">5</button>
                                    </div>
                                </div>
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-p='[-p25]' cell-m='[-t45]' class="fl-output">
                                            <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h750]' cell-p='[-p25]'
                                                cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                    <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                        aria-hidden="true"></i></button>
                                                    <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                        aria-hidden="true"></i></button>
                                                </div>
                                                <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                    <div cell-rf='[-c]' class="">
                                                        <div cell-p='[-p25]' class="fl-output">
                                                            <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h450]'
                                                                cell-p='[-p25]' cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                                <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                                    <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                                        aria-hidden="true"></i></button>
                                                                    <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                                        aria-hidden="true"></i></button>
                                                                </div>
                                                                <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-1
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-2
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-3
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-4
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-5
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                                    <button class="btn rf-button">close</button>
                                                                    <button class="btn rf-button active">1</button>
                                                                    <button class="btn rf-button">2</button>
                                                                    <button class="btn rf-button">3</button>
                                                                    <button class="btn rf-button">4</button>
                                                                    <button class="btn rf-button">5</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div cell-p='[-p25]' class="fl-output">
                                                            <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h450]'
                                                                cell-p='[-p25]' cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                                <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                                    <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                                        aria-hidden="true"></i></button>
                                                                    <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                                        aria-hidden="true"></i></button>
                                                                </div>
                                                                <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-1
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-2
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-3
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-4
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-5
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                                    <button class="btn rf-button">close</button>
                                                                    <button class="btn rf-button active">1</button>
                                                                    <button class="btn rf-button">2</button>
                                                                    <button class="btn rf-button">3</button>
                                                                    <button class="btn rf-button">4</button>
                                                                    <button class="btn rf-button">5</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div cell-p='[-p25]' class="fl-output">
                                                            <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h450]'
                                                                cell-p='[-p25]' cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                                <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                                    <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                                        aria-hidden="true"></i></button>
                                                                    <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                                        aria-hidden="true"></i></button>
                                                                </div>
                                                                <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-1
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-2
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-3
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-4
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-5
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                                    <button class="btn rf-button">close</button>
                                                                    <button class="btn rf-button active">1</button>
                                                                    <button class="btn rf-button">2</button>
                                                                    <button class="btn rf-button">3</button>
                                                                    <button class="btn rf-button">4</button>
                                                                    <button class="btn rf-button">5</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div cell-p='[-p25]' class="fl-output">
                                                            <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h450]'
                                                                cell-p='[-p25]' cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                                <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                                    <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                                        aria-hidden="true"></i></button>
                                                                    <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                                        aria-hidden="true"></i></button>
                                                                </div>
                                                                <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-1
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-2
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-3
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-4
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-5
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                                    <button class="btn rf-button">close</button>
                                                                    <button class="btn rf-button active">1</button>
                                                                    <button class="btn rf-button">2</button>
                                                                    <button class="btn rf-button">3</button>
                                                                    <button class="btn rf-button">4</button>
                                                                    <button class="btn rf-button">5</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-rf='[-c]' class="">
                                                        <div cell-p='[-p25]' class="fl-output">
                                                            <div cell-rf='[-fl:-dl2-ll2-tl1-ml1-sl1-fs25-fv]' cell-h='[-h450]'
                                                                cell-p='[-p25]' cell-Q='[-q-cb-sb]' cell-bg='[-gv2(4)]' class=" ">
                                                                <div cell-Q='[-q-sb]' cell-w='[-w.100]' class="">
                                                                    <button class="btn rf-left-float"><i class="fa fa-angle-left"
                                                                        aria-hidden="true"></i></button>
                                                                    <button class="btn rf-right-float"><i class="fa fa-angle-right"
                                                                        aria-hidden="true"></i></button>
                                                                </div>
                                                                <div cell-rf='[-fa]' cell-bg='[-c2]' cell-m='[-t75]' class="">
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-1
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-2
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-3
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-4
                                                                        </div>
                                                                    </div>
                                                                    <div cell-rf='[-c]' class="">
                                                                        <div class="">
                                                                            Float-5
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                                    <button class="btn rf-button">close</button>
                                                                    <button class="btn rf-button active">1</button>
                                                                    <button class="btn rf-button">2</button>
                                                                    <button class="btn rf-button">3</button>
                                                                    <button class="btn rf-button">4</button>
                                                                    <button class="btn rf-button">5</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-rf='[-bu]' cell-Q='[-q-cc]' cell-m='[-t75]' class="">
                                                    <button class="btn rf-button">close</button>
                                                    <button class="btn rf-button active">1</button>
                                                    <button class="btn rf-button">2</button>
                                                    <button class="btn rf-button">3</button>
                                                    <button class="btn rf-button">4</button>
                                                    <button class="btn rf-button">5</button>
                                                </div>
                                            </div>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        );
    }
}
export default Fl;