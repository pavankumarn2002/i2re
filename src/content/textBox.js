import React, { Component } from "react";
export class TextBox extends Component {
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
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For Text
                                Box
                            </p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-in
                            </p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-tx</span> = For Text Area Actions
                                    </p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-lt</span> = Set Label To Top </p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-lb</span> = Set Label To Bottom
                                    </p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-ll</span> = Set Label To Left </p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-lr</span> = Set Label To Right </p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-r10</span> = Border Radius
                                        10x1px=10px</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-w20</span> = Width 20X1%=20%</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-h25</span> = height 25x1px=25px</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-bg2</span> = Background Color Two
                                    </p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-.bg3</span> = On Hover Background
                                        Color Three</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-bo1(2)</span>= Border One px and
                                        color Two</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-bt1(2)</span> = Border-top One px
                                        and color Two</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-bl2(4)</span> = Border-Left Two px
                                        and color Two</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-bb2(4)</span> = Border-Bottom Two
                                        px and color Two</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-br2(4)</span> = Border-Right Two px
                                        and color Two</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-.bo1(2)</span> = On Hover Border
                                        One px and color Two</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-.bt1(2)</span> = On Hover
                                        Border-top One px and color Two</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-.bl2(4)</span> = On Hover
                                        Border-Left Two px and color Two</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-.bb2(4)</span> = On Hover
                                        Border-Bottom Two px and color Two</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-.br2(4)</span> = On Hover
                                        Border-Right Two px and color Two</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-.ts10(2)</span> = Text Size 10px
                                        Color Two</p>
                                </div>
                            </div>
                            <div cell-c='[-cz-cc]' class="text-col">
                                <p><span cell-f='[-s16-w7-c2-f5]'>cell-in=[-tx]</span> = For Text Area
                                    Actions</p>
                            </div>
                        </div>
                        <div cell-c='[-d5-s20]' cell-d='[-db-ln-tn-sn]' class="assigning-values">
                            <div class="actual-col">
                                <div class="set">
                                    <input type="text" class="in-values"
                                        placeholder="cell-in val For Output 1" />
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-d15-s20]' class="result">
                            <p cell-f='[-s14-w9-c4]' cell-p='[-t4-b4]'>For Textarea Actions</p>
                            <div cell-Q='[-q-ct]' class="append-col"></div>
                            <div cell-in='[-tx-ll-bg4-.bg5-b4(5)-.b4(2)-r15-ts25(4)]' class="in-output">
                                <label>Text Area</label>
                                <textarea class="" rows="5"></textarea>
                            </div>
                            <div cell-p='[-t4-b4]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-in='[-tx-ll-bg4-.bg5-b4(5)-.b4(2)-r15-ts25(4)]'
                                            class=" ">
                                            <label>Text Area</label>
                                            <textarea class="" rows="5"></textarea>
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
export default TextBox;