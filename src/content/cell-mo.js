import React, { Component } from "react";
export class Mo extends Component {
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
        loadScript("https://res.cloudinary.com/veraion9/raw/upload/v1659071619/i2/jq%28dy-react%29/tabs.js");
    }
    render() {
        return (
            <div class="content">
                <div class="title-col">
                    <div cell-Q='[-q-ct]' class=" ">
                        <div class="text">
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For Modal
                                Actions
                            </p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-mo
                            </p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-mo1</span> = For Modal Actions And One
                                        For Index</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-c</span> = Modal Content Cell</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-op1</span> = For Open Button Cell And
                                        One For Index</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-cl1</span> = ForClose Button Cell And
                                        One For Index</p>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-c20]' class="result">
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Modal Actions</p>
                            <button cell-m='[-t45]' cell-f='[-c2-s25-f1-w9]' cell-mo='[-op0]'
                                class="btn mo-open">open</button>
                            <div cell-mo='[-mo]' class="mo-output">
                                <div cell-mo='[-c]' cell-p='[-p75]' class="">
                                    <div cell-t='[-r]' class="">
                                        <button cell-f='[-c2-s25-f1-w9]' cell-mo='[-cl]' class="btn mo-close">X</button>
                                    </div>
                                    <div cell-h='[-h450]' cell-bg='[-c1]' class="">
                                        <div cell-h='[-h450]' cell-c='[-c20]' class="">
                                            <div cell-h='[-h450]'
                                                cell-sl='[-aa:-da10(10)-la7(13)-ta13(7)-ma10(10)-sa20(0)]'
                                                class="as-output">
                                                <div cell-Q='[-q-cc]' cell-p='[-p2]' class="p-5">
                                                    <button class="btn as-left-open">as-left-open</button>
                                                    <button class="btn as-right-open">as-right-open</button>
                                                </div>
                                                <div cell-Q='[-q]' class="">
                                                    <div cell-sl='[-lo]' cell-bg='[-c4]' cell-h='[-h450]' class="column">
                                                        <div cell-t='[-r]' class="">
                                                            <button class="btn as-left-close">X</button>
                                                        </div>
                                                    </div>
                                                    <div cell-sl='[-m]' cell-bg='[-c5]' cell-c='[-co]' cell-h='[-h450]'
                                                        class="column">
                                                        <p cell-f='[-c4-s25-f1]' cell-t='[-c]'>Model</p>
                                                    </div>
                                                    <div cell-sl='[-ro]' cell-bg='[-c1]' cell-h='[-h450]' class="column">
                                                        <div cell-t='[-l]' class="">
                                                            <button class="btn as-right-close">X</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                        <button cell-f='[-c2-s25-f1-w9]' cell-mo='[-op0]' class="btn mo-open">open</button>
                                        <div cell-mo='[-mo]' class="mo-output">
                                            <div cell-mo='[-c]' cell-p='[-p75]' class="">
                                                <div cell-t='[-r]' class="">
                                                    <button cell-f='[-c2-s25-f1-w9]' cell-mo='[-cl1]'
                                                        class="btn mo-close">X</button>
                                                </div>
                                                <div cell-h='[-h450]' cell-bg='[-c1]' class="">
                                                    <div cell-h='[-h450]' cell-c='[-c20]' class="">
                                                        <div cell-h='[-h450]'
                                                            cell-sl='[-aa:-da10(10)-la7(13)-ta13(7)-ma10(10)-sa20(0)]'
                                                            class="as-output">
                                                            <div cell-Q='[-q-cc]' cell-p='[-p2]' class="p-5">
                                                                <button class="btn as-left-open">as-left-open</button>
                                                                <button class="btn as-right-open">as-right-open</button>
                                                            </div>
                                                            <div cell-Q='[-q]' class="">
                                                                <div cell-sl='[-lo]' cell-bg='[-c4]' cell-h='[-h450]'
                                                                    class="column">
                                                                    <div cell-t='[-r]' class="">
                                                                        <button class="btn as-left-close">X</button>
                                                                    </div>
                                                                </div>
                                                                <div cell-sl='[-m]' cell-bg='[-c5]' cell-c='[-co]'
                                                                    cell-h='[-h450]' class="column">
                                                                    <p cell-f='[-c4-s25-f1]' cell-t='[-c]'>
                                                                        Model</p>
                                                                </div>
                                                                <div cell-sl='[-ro]' cell-bg='[-c1]' cell-h='[-h450]'
                                                                    class="column">
                                                                    <div cell-t='[-l]' class="">
                                                                        <button class="btn as-right-close">X</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Nested Modal Modal Actions</p>
                            <button cell-f='[-c2-s25-f1-w9]' cell-mo='[-op1]' class="btn mo-open">open</button>
                            <div cell-mo='[-mo]' class="mo-output">
                                <div cell-mo='[-c]' cell-p='[-p75]' class="">
                                    <div cell-t='[-r]' class="">
                                        <button cell-f='[-c2-s25-f1-w9]' cell-mo='[-cl]' class="btn mo-close">X</button>
                                    </div>
                                    <div cell-h='[-h450]' cell-bg='[-c1]' class="">
                                        <div cell-h='[-h450]' cell-c='[-c20]' class="">
                                            <div cell-h='[-h450]'
                                                cell-sl='[-aa:-da10(10)-la7(13)-ta13(7)-ma10(10)-sa20(0)]'
                                                class="as-output">
                                                <div cell-Q='[-q-cc]' cell-p='[-p2]' class="p-5">
                                                    <button class="btn as-left-open">as-left-open</button>
                                                    <button class="btn as-right-open">as-right-open</button>
                                                </div>
                                                <div cell-Q='[-q]' class="">
                                                    <div cell-sl='[-lo]' cell-bg='[-c4]' cell-h='[-h450]' class="column">
                                                        <div cell-t='[-r]' class="">
                                                            <button class="btn as-left-close">X</button>
                                                        </div>
                                                    </div>
                                                    <div cell-sl='[-m]' cell-t='[-c]' cell-bg='[-c5]' cell-c='[-co]'
                                                        cell-h='[-h450]' class="column">
                                                        <button cell-f='[-c2-s25-f1-w9]' cell-mo='[-op2]' cell-m='[-t75]'
                                                            class="btn mo-open">open</button>
                                                        <div cell-mo='[-mo]' class="mo-output">
                                                            <div cell-mo='[-c]' cell-p='[-p75]' class="">
                                                                <div cell-t='[-r]' class="">
                                                                    <button cell-f='[-c2-s25-f1-w9]' cell-mo='[-cl]'
                                                                        class="btn mo-close">X</button>
                                                                </div>
                                                                <div cell-h='[-h450]' cell-bg='[-c1]' class="">
                                                                    <div cell-h='[-h450]' cell-c='[-c20]' class="">
                                                                        <div cell-h='[-h450]'
                                                                            cell-sl='[-aa:-da10(10)-la7(13)-ta13(7)-ma10(10)-sa20(0)]'
                                                                            class="as-output">
                                                                            <div cell-Q='[-q-cc]' cell-p='[-p2]'
                                                                                class="p-5">
                                                                                <button
                                                                                    class="btn as-left-open">as-left-open</button>
                                                                                <button
                                                                                    class="btn as-right-open">as-right-open</button>
                                                                            </div>
                                                                            <div cell-Q='[-q]' class="">
                                                                                <div cell-sl='[-lo]' cell-bg='[-c4]'
                                                                                    cell-h='[-h450]' class="column">
                                                                                    <div cell-t='[-r]' class="">
                                                                                        <button
                                                                                            class="btn as-left-close">X</button>
                                                                                    </div>
                                                                                </div>
                                                                                <div cell-sl='[-m]' cell-bg='[-c5]'
                                                                                    cell-c='[-co]' cell-h='[-h450]'
                                                                                    class="column">
                                                                                    <p cell-f='[-c4-s25-f1]' cell-t='[-c]'
                                                                                        cell-m='[-t75]'>
                                                                                        Nested Model</p>
                                                                                </div>
                                                                                <div cell-sl='[-ro]' cell-bg='[-c1]'
                                                                                    cell-h='[-h450]' class="column">
                                                                                    <div cell-t='[-l]' class="">
                                                                                        <button
                                                                                            class="btn as-right-close">X</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-sl='[-ro]' cell-bg='[-c1]' cell-h='[-h450]' class="column">
                                                        <div cell-t='[-l]' class="">
                                                            <button class="btn as-right-close">X</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                        <button cell-f='[-c2-s25-f1-w9]' cell-mo='[-op0]' class="btn mo-open">open</button>
                                        <div cell-mo='[-mo]' class="mo-output">
                                            <div cell-mo='[-c]' cell-p='[-p75]' class="">
                                                <div cell-t='[-r]' class="">
                                                    <button cell-f='[-c2-s25-f1-w9]' cell-mo='[-cl]'
                                                        class="btn mo-close">X</button>
                                                </div>
                                                <div cell-h='[-h450]' cell-bg='[-c1]' class="">
                                                    <div cell-h='[-h450]' cell-c='[-c20]' class="">
                                                        <div cell-h='[-h450]'
                                                            cell-sl='[-aa:-da10(10)-la7(13)-ta13(7)-ma10(10)-sa20(0)]'
                                                            class="as-output">
                                                            <div cell-Q='[-q-cc]' cell-p='[-p2]' class="p-5">
                                                                <button class="btn as-left-open">as-left-open</button>
                                                                <button class="btn as-right-open">as-right-open</button>
                                                            </div>
                                                            <div cell-Q='[-q]' class="">
                                                                <div cell-sl='[-lo]' cell-bg='[-c4]' cell-h='[-h450]'
                                                                    class="column">
                                                                    <div cell-t='[-r]' class="">
                                                                        <button class="btn as-left-close">X</button>
                                                                    </div>
                                                                </div>
                                                                <div cell-sl='[-m]' cell-t='[-c]' cell-bg='[-c5]' cell-c='[-co]'
                                                                    cell-h='[-h450]' class="column">
                                                                    <button cell-f='[-c2-s25-f1-w9]' cell-mo='[-op1]'
                                                                        cell-m='[-t75]' class="btn mo-open">open</button>
                                                                    <div cell-mo='[-mo]' class="mo-output">
                                                                        <div cell-mo='[-c]' cell-p='[-p75]' class="">
                                                                            <div cell-t='[-r]' class="">
                                                                                <button cell-f='[-c2-s25-f1-w9]'
                                                                                    cell-mo='[-cl]'
                                                                                    class="btn mo-close">X</button>
                                                                            </div>
                                                                            <div cell-h='[-h450]' cell-bg='[-c1]' class="">
                                                                                <div cell-h='[-h450]' cell-c='[-c20]'
                                                                                    class="">
                                                                                    <div cell-h='[-h450]'
                                                                                        cell-sl='[-aa:-da10(10)-la7(13)-ta13(7)-ma10(10)-sa20(0)]'
                                                                                        class="as-output">
                                                                                        <div cell-Q='[-q-cc]' cell-p='[-p2]'
                                                                                            class="p-5">
                                                                                            <button
                                                                                                class="btn as-left-open">as-left-open</button>
                                                                                            <button
                                                                                                class="btn as-right-open">as-right-open</button>
                                                                                        </div>
                                                                                        <div cell-Q='[-q]' class="">
                                                                                            <div cell-sl='[-lo]'
                                                                                                cell-bg='[-c4]'
                                                                                                cell-h='[-h450]'
                                                                                                class="column">
                                                                                                <div cell-t='[-r]'
                                                                                                    class="">
                                                                                                    <button
                                                                                                        class="btn as-left-close">X</button>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div cell-sl='[-m]'
                                                                                                cell-bg='[-c5]'
                                                                                                cell-c='[-co]'
                                                                                                cell-h='[-h450]'
                                                                                                class="column">
                                                                                                <p cell-f='[-c4-s25-f1]'
                                                                                                    cell-t='[-c]'
                                                                                                    cell-m='[-t75]'>
                                                                                                    Nested
                                                                                                    Model
                                                                                                </p>
                                                                                            </div>
                                                                                            <div cell-sl='[-ro]'
                                                                                                cell-bg='[-c1]'
                                                                                                cell-h='[-h450]'
                                                                                                class="column">
                                                                                                <div cell-t='[-l]'
                                                                                                    class="">
                                                                                                    <button
                                                                                                        class="btn as-right-close">X</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div cell-sl='[-ro]' cell-bg='[-c1]' cell-h='[-h450]'
                                                                    class="column">
                                                                    <div cell-t='[-l]' class="">
                                                                        <button class="btn as-right-close">X</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Mo;