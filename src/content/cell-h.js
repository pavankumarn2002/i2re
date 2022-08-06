import React, { Component } from "react";
export class H extends Component {
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
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>Column
                                Heights
                            </p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-h</p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-h15</span> = column Height 15X1=10px
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-d45</span> = Desktop column Height
                                        45X1=45px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-l100</span> = Large column Height
                                        100X1=100px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-t200</span> = Tab column Height
                                        200X1=200px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-m300</span> = Mobile column Height
                                        300X1=300px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-s155</span> = Small columnHeight
                                        155X1=155px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-wh</span> = Windows Height</p>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-c3]' cell-d='[-db-ln-tn-sn]' class="assigning-values">
                            <div class="actual-col">
                                <div cell-in='[-se-lt]'
                                    class="set height-values">
                                    <label>cell-h<span class="star">*</span></label>
                                    <div cell-in='[-sa]' class="">
                                        <div cell-in='[-sb-lr-bo4(5)-r15-bg1-ig2(3)-.bo4(3)-.bg2-.ig3(4)-p10(10)-tc4(5)-ts15(2)]' class=" ">
                                            <select class="" aria-label="Default select example">
                                                <option op="0" value="">-output-1</option>
                                                <option op="1" value="-h50">-h50</option>
                                                <option op="2" value="-h100">-h100</option>
                                                <option op="3" value="-d50">-d50</option>
                                                <option op="4" value="-l100">-l100</option>
                                                <option op="5" value="-m150">-m150</option>
                                                <option op="6" value="-s150">-m150</option>
                                                <option op="7" value="-m150">-wh</option>
                                            </select>
                                        </div>
                                        <div cell-in='[-ob-c5-bo4(5)-r15-bg4-ig2(3)-.bo4(2)-.bg2-.ig3(4)-p10(10)-ts15(5)-.ts15(1)]'
                                            class=" ">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-do-l20-t20-m20-s20]' class="result">
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>Column Heights</p>
                            <div cell-Q='[-q-ct]' class="append-col"></div>
                            <div cell-c='[-c11]' cell-h='[]' cell-m='[-t45]' cell-bg='[-c2]' cell-p='[-p2]'
                                class="height-output">
                                Output-1
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-c='[-c11]' cell-h='[]' class=" ">
                                            output 1
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
export default H;