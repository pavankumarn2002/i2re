import React, { Component } from "react";
export class Bs extends Component {
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
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For Box
                                Shadow
                            </p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-bs
                            </p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-t10(2)</span> = Top Shadow 10px And
                                        Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-b10(2)</span> = Bottom Shadow 10px And
                                        Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-r10(2)</span> = Right Shadow 10px And
                                        Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-l10(2)</span> = Left Shadow 10px And
                                        Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-w10(2)</span> = Top Left Shadow 10px
                                        And Color Two</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-x10(2)</span> = Top Right Shadow 10px
                                        And Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-y10(2)</span> = Bottom Left Shadow
                                        10px And Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-z10(2)</span> = Bottom Right Shadow
                                        10px And Color Two</p>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-c3]' cell-d='[-db-ln-tn-sn]' class="assigning-values">
                            <div class="actual-col">
                                <div class="set">
                                    <div cell-in='[-se-lt]'
                                        class="set bs-values">
                                        <label>cell-bs<span class="star">*</span></label>
                                        <div cell-in='[-sa]' class="">
                                            <div cell-in='[-sb-lr-bo4(5)-r15-bg1-ig2(3)-.bo4(3)-.bg2-.ig3(4)-p10(10)-tc4(5)-ts15(2)]' class=" ">
                                                <select class="" aria-label="Default select example">
                                                    <option op="0" value="">-output-1</option>
                                                    <option op="1" value="-l10(3)">-l10(3)</option>
                                                    <option op="2" value="-w10(4)">-w10(4)</option>
                                                    <option op="3" value="-x10(1)">-x10(1)</option>
                                                    <option op="4" value="-y10(3)">-y10(3)</option>
                                                    <option op="5" value="-z10(4)">-z10(4)</option>
                                                    <option op="6" value="-r10(1)">-r10(1)</option>
                                                    <option op="7" value="-t10(3)">-t10(3)</option>
                                                    <option op="8" value="-b10(4)">-b10(4)</option>
                                                </select>
                                            </div>
                                            <div cell-in='[-ob-c5-bo4(5)-r15-bg4-ig2(3)-.bo4(2)-.bg2-.ig3(4)-p10(10)-ts15(5)-.ts15(1)]'
                                                class=" ">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-do-l20-t20-m20-s20]' class="result">
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Box Shadow</p>
                            <div cell-Q='[-q-ct]' class="append-col"></div>
                            <div cell-c='[-d10]' cell-bg='[-c2]' cell-p='[-p25]' cell-m='[-t45-l45]'
                                class="bs-output">
                                Output-1
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-bs='[]' class=" ">

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
export default Bs;