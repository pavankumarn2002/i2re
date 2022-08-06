import React, { Component } from "react";
export class SlNest extends Component {
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
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For Nested
                                Slide Bar
                            </p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-sl
                            </p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                        <p cell-p='[-t5]' cell-f='[-s18-w7-c2-f5]' cell-t='[-c]'>For Nested Slide Bar</p>
                        <div cell-Q='[-q-sb]' class="text-area">
                            <div cell-c='[-ca]' class="text-col">
                                <p><span cell-f='[-c2-s16-w7]'>-aa1:</span> = For Absolute Slide Bar & One
                                    For Index</p>
                                <p><span cell-f='[-c2-s16-w7]'>-lo</span> = For left Bar Left Cell</p>
                                <p><span cell-f='[-c2-s16-w7]'>-ro</span> = For left Bar Right Cell</p>
                                <p><span cell-f='[-c2-s16-w7]'>-m</span> = For Mid Content Cell</p>
                                <p><span cell-f='[-c2-s16-w7]'>-as7(9)</span> = Absolute Slide Left
                                    7x5=35% Right 9x5=45% </p>
                                <p><span cell-f='[-c2-s16-w7]'>-da7(9)</span> = Desktop Absolute Slide
                                    Left 7x5=35% Right 9x5=45% </p>
                                <p><span cell-f='[-c2-s16-w7]'>-la7(9)</span> = Desktop Absolute Slide
                                    Left 7x5=35% Right 9x5=45% </p>
                            </div>
                            <div cell-c='[-ca]' class="text-col">
                                <p><span cell-f='[-c2-s16-w7]'>-ta7(9)</span> = Desktop Absolute Slide
                                    Left 7x5=35% Right 9x5=45% </p>
                                <p><span cell-f='[-c2-s16-w7]'>-sa7(9)</span> = Desktop Absolute Slide
                                    Left 7x5=35% Right 9x5=45% </p>
                                <p><span cell-f='[-c2-s16-w7]'>-fs8(10)</span> = Side Bar Float Left Speed
                                    8x0.2=1.6s Right Speed 10x0.2=2s</p>
                                <p><span cell-f='[-c2-s16-w7]'>-df8(10)</span> = Desktop Side Bar Float
                                    Left Speed 8x0.2=1.6s Right Speed 10x0.2=2s</p>
                                <p><span cell-f='[-c2-s16-w7]'>-lf8(10)</span> = Large Side Bar Float Left
                                    Speed 8x0.2=1.6s Right Speed 10x0.2=2s</p>
                            </div>
                            <div cell-c='[-ca]' class="text-col">
                                <p><span cell-f='[-c2-s16-w7]'>-tf8(10)</span> = Tab Side Bar Float Left
                                    Speed 8x0.2=1.6s Right Speed 10x0.2=2s</p>
                                <p><span cell-f='[-c2-s16-w7]'>-mf8(10)</span> = Mobile Side Bar Float
                                    Left Speed 8x0.2=1.6s Right Speed 10x0.2=2s</p>
                                <p><span cell-f='[-c2-s16-w7]'>-sf8(10)</span> = Small Side Bar Float Left
                                    Speed 8x0.2=1.6s Right Speed 10x0.2=2s</p>
                            </div>
                            <div cell-c='[-c20]' class="text-col">
                                <p cell-p='[-t5]' cell-f='[-s15-w5-c1-f5]' cell-t='[-c]'><span
                                    cell-f='[-s18-w9-c1-f5]'>NOTE :- </span>For Nested Slide Bars &
                                    Multiple Slide Bars Use Same Properties With Different values</p>
                                <p cell-p='[-t5]' cell-f='[-s15-w5-c1-f5]' cell-t='[-c]'><span
                                    cell-f='[-s18-w9-c1-f5]'>Ex :- </span>For First Slide Bar <span
                                        cell-f='[-s18-w9-c1-f5]'>cell-sl=[aa1:-as10(10)]</span> & For
                                    Second Slide bar <span
                                        cell-f='[-s18-w9-c1-f5]'>cell-sl=[aa2:-as7(13)]</span></p>
                                <p cell-p='[-t5]' cell-f='[-s15-w5-c1-f5]' cell-t='[-c]'>Or</p>
                                <p cell-p='[-t5]' cell-f='[-s15-w5-c1-f5]' cell-t='[-c]'><span
                                    cell-f='[-s18-w9-c1-f5]'>Ex :- </span>For First Slide Bar <span
                                        cell-f='[-s18-w9-c1-f5]'>cell-sl=[aa1:-da5(10)-la10(5)]</span> &
                                    For Second Slide Bar <span
                                        cell-f='[-s18-w9-c1-f5]'>cell-sl='[aa1:-da7(13)-la13(7)]</span></p>
                            </div>
                        </div>
                    </div>
                    <div cell-c='[-c20]' class="result">
                        <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Nested Slide Bar</p>
                        <div cell-c='[-c20]' cell-m='[-t45]' class="">
                            <div cell-sl='[-aa:-da10(10)]' class="sl-output">
                                <div cell-Q='[-q-cc]' cell-p='[-p2]' class="">
                                    <button class="btn as-left-open">as-left-open</button>
                                    <button class="btn as-right-open">as-right-open</button>
                                </div>
                                <div cell-Q='[-q]' class="">
                                    <div cell-sl='[-lo]' cell-bg='[-c4]' cell-h='[-wh]' class="column">
                                        <div cell-t='[-r]' class="">
                                            <button class="btn as-left-close">X</button>
                                        </div>
                                    </div>
                                    <div cell-sl='[-m]' cell-Q='[-q-cc]' cell-bg='[-c2]' cell-c='[-co]'
                                        cell-p='[-p25]' cell-h='[-wh]' class="column">
                                        <div cell-c='[-c20]' class="dc">
                                            <div cell-sl='[-aa:-da10(10)]' class="sl-output">
                                                <div cell-Q='[-q-cc]' cell-p='[-p2]' class="">
                                                    <button
                                                        class="btn as-left-open">as-left-open</button>
                                                    <button
                                                        class="btn as-right-open">as-right-open</button>
                                                </div>
                                                <div cell-Q='[-q]' class="">
                                                    <div cell-sl='[-lo]' cell-bg='[-c4]' cell-h='[-h550]'
                                                        class="column">
                                                        <div cell-t='[-r]' class="">
                                                            <button class="btn as-left-close">X</button>
                                                        </div>
                                                    </div>
                                                    <div cell-sl='[-m]' cell-bg='[-c3]' cell-c='[-co]'
                                                        cell-p='[-p25]' cell-h='[-h550]' class="column">
                                                        <div cell-c='[-c20]' class="dc1">
                                                            <div cell-sl='[-aa:-da10(10)]'
                                                                class="sl-output">
                                                                <div cell-Q='[-q-cc]' cell-p='[-p2]'
                                                                    class="">
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
                                                                    <div cell-sl='[-m]' cell-bg='[-c2]'
                                                                        cell-c='[-co]' cell-p='[-p25]'
                                                                        cell-h='[-h450]' class="column">
                                                                        <div cell-c='[-c20]' class="dc2">
                                                                            <div cell-sl='[-aa:-da10(10)]'
                                                                                class="sl-output">
                                                                                <div cell-Q='[-q-cc]'
                                                                                    cell-p='[-p2]'
                                                                                    class="">
                                                                                    <button
                                                                                        class="btn as-left-open">as-left-open</button>
                                                                                    <button
                                                                                        class="btn as-right-open">as-right-open</button>
                                                                                </div>
                                                                                <div cell-Q='[-q]'
                                                                                    class="">
                                                                                    <div cell-sl='[-lo]'
                                                                                        cell-bg='[-c4]'
                                                                                        cell-h='[-h350]'
                                                                                        class="column">
                                                                                        <div cell-t='[-r]'
                                                                                            class="">
                                                                                            <button
                                                                                                class="btn as-left-close">X</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div cell-sl='[-m]'
                                                                                        cell-bg='[-c3]'
                                                                                        cell-c='[-co]'
                                                                                        cell-p='[-p25]'
                                                                                        cell-h='[-h350]'
                                                                                        class="column">
                                                                                        <div cell-c='[-c20]'
                                                                                            class="dc3">
                                                                                            <div cell-sl='[-aa:-da10(10)]'
                                                                                                class="sl-output">
                                                                                                <div cell-Q='[-q-cc]'
                                                                                                    cell-p='[-p2]'
                                                                                                    class="">
                                                                                                    <button
                                                                                                        class="btn as-left-open">as-left-open</button>
                                                                                                    <button
                                                                                                        class="btn as-right-open">as-right-open</button>
                                                                                                </div>
                                                                                                <div cell-Q='[-q]'
                                                                                                    class="">
                                                                                                    <div cell-sl='[-lo]'
                                                                                                        cell-bg='[-c4]'
                                                                                                        cell-h='[-h250]'
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
                                                                                                        cell-p='[-t75]'
                                                                                                        cell-h='[-h250]'
                                                                                                        class="column">
                                                                                                        <p cell-f='[-f1-c4-s25-w7]'
                                                                                                            cell-t='[-c]'>
                                                                                                            Nested
                                                                                                            Slide
                                                                                                            Bar
                                                                                                        </p>
                                                                                                    </div>
                                                                                                    <div cell-sl='[-ro]'
                                                                                                        cell-bg='[-c1]'
                                                                                                        cell-h='[-h250]'
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
                                                                                    <div cell-sl='[-ro]'
                                                                                        cell-bg='[-c1]'
                                                                                        cell-h='[-h350]'
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
                                                    <div cell-sl='[-ro]' cell-bg='[-c1]' cell-h='[-h550]'
                                                        class="column">
                                                        <div cell-t='[-l]' class="">
                                                            <button
                                                                class="btn as-right-close">X</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-sl='[-ro]' cell-bg='[-c1]' cell-h='[-h750]' class="column">
                                        <div cell-t='[-l]' class="">
                                            <button class="btn as-right-close">X</button>
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
                                    <div cell-c='[-c20]' cell-m='[-t45]' class="">
                                        <div cell-sl='[-aa:-da10(10)]' class="sl-output">
                                            <div cell-Q='[-q-cc]' cell-p='[-p2]' class="">
                                                <button class="btn as-left-open">as-left-open</button>
                                                <button class="btn as-right-open">as-right-open</button>
                                            </div>
                                            <div cell-Q='[-q]' class="">
                                                <div cell-sl='[-lo]' cell-bg='[-c4]' cell-h='[-wh]' class="column">
                                                    <div cell-t='[-r]' class="">
                                                        <button class="btn as-left-close">X</button>
                                                    </div>
                                                </div>
                                                <div cell-sl='[-m]' cell-Q='[-q-cc]' cell-bg='[-c2]' cell-c='[-co]'
                                                    cell-p='[-p25]' cell-h='[-wh]' class="column">
                                                    <div cell-c='[-c20]' class="dc">
                                                        <div cell-sl='[-aa:-da10(10)]' class="sl-output">
                                                            <div cell-Q='[-q-cc]' cell-p='[-p2]' class="">
                                                                <button
                                                                    class="btn as-left-open">as-left-open</button>
                                                                <button
                                                                    class="btn as-right-open">as-right-open</button>
                                                            </div>
                                                            <div cell-Q='[-q]' class="">
                                                                <div cell-sl='[-lo]' cell-bg='[-c4]' cell-h='[-h550]'
                                                                    class="column">
                                                                    <div cell-t='[-r]' class="">
                                                                        <button class="btn as-left-close">X</button>
                                                                    </div>
                                                                </div>
                                                                <div cell-sl='[-m]' cell-bg='[-c3]' cell-c='[-co]'
                                                                    cell-p='[-p25]' cell-h='[-h550]' class="column">
                                                                    <div cell-c='[-c20]' class="dc1">
                                                                        <div cell-sl='[-aa:-da10(10)]'
                                                                            class="sl-output">
                                                                            <div cell-Q='[-q-cc]' cell-p='[-p2]'
                                                                                class="">
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
                                                                                <div cell-sl='[-m]' cell-bg='[-c2]'
                                                                                    cell-c='[-co]' cell-p='[-p25]'
                                                                                    cell-h='[-h450]' class="column">
                                                                                    <div cell-c='[-c20]' class="dc2">
                                                                                        <div cell-sl='[-aa:-da10(10)]'
                                                                                            class="sl-output">
                                                                                            <div cell-Q='[-q-cc]'
                                                                                                cell-p='[-p2]'
                                                                                                class="">
                                                                                                <button
                                                                                                    class="btn as-left-open">as-left-open</button>
                                                                                                <button
                                                                                                    class="btn as-right-open">as-right-open</button>
                                                                                            </div>
                                                                                            <div cell-Q='[-q]'
                                                                                                class="">
                                                                                                <div cell-sl='[-lo]'
                                                                                                    cell-bg='[-c4]'
                                                                                                    cell-h='[-h350]'
                                                                                                    class="column">
                                                                                                    <div cell-t='[-r]'
                                                                                                        class="">
                                                                                                        <button
                                                                                                            class="btn as-left-close">X</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div cell-sl='[-m]'
                                                                                                    cell-bg='[-c3]'
                                                                                                    cell-c='[-co]'
                                                                                                    cell-p='[-p25]'
                                                                                                    cell-h='[-h350]'
                                                                                                    class="column">
                                                                                                    <div cell-c='[-c20]'
                                                                                                        class="dc3">
                                                                                                        <div cell-sl='[-aa:-da10(10)]'
                                                                                                            class="sl-output">
                                                                                                            <div cell-Q='[-q-cc]'
                                                                                                                cell-p='[-p2]'
                                                                                                                class="">
                                                                                                                <button
                                                                                                                    class="btn as-left-open">as-left-open</button>
                                                                                                                <button
                                                                                                                    class="btn as-right-open">as-right-open</button>
                                                                                                            </div>
                                                                                                            <div cell-Q='[-q]'
                                                                                                                class="">
                                                                                                                <div cell-sl='[-lo]'
                                                                                                                    cell-bg='[-c4]'
                                                                                                                    cell-h='[-h250]'
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
                                                                                                                    cell-p='[-t75]'
                                                                                                                    cell-h='[-h250]'
                                                                                                                    class="column">
                                                                                                                    <p cell-f='[-f1-c4-s25-w7]'
                                                                                                                        cell-t='[-c]'>
                                                                                                                        Nested
                                                                                                                        Slide
                                                                                                                        Bar
                                                                                                                    </p>
                                                                                                                </div>
                                                                                                                <div cell-sl='[-ro]'
                                                                                                                    cell-bg='[-c1]'
                                                                                                                    cell-h='[-h250]'
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
                                                                                                <div cell-sl='[-ro]'
                                                                                                    cell-bg='[-c1]'
                                                                                                    cell-h='[-h350]'
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
                                                                <div cell-sl='[-ro]' cell-bg='[-c1]' cell-h='[-h550]'
                                                                    class="column">
                                                                    <div cell-t='[-l]' class="">
                                                                        <button
                                                                            class="btn as-right-close">X</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-sl='[-ro]' cell-bg='[-c1]' cell-h='[-h750]' class="column">
                                                    <div cell-t='[-l]' class="">
                                                        <button class="btn as-right-close">X</button>
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
        );
    }
}

export default SlNest;
