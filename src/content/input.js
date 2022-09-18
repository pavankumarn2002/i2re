import React, { Component } from "react";
export class Input extends Component {
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
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For Input
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
                                    <p><span cell-f='[-c2-s16-w7]'>-ip</span> = For Input Actions </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lt</span> = Set Label To Top </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lb</span> = Set Label To Bottom </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ll</span> = Set Label To Left </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lr</span> = Set Label To Right </p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-r10</span> = Border Radius 10x1px=10px
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-w20</span> = Width 20X1%=20%</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-h25</span> = height 25x1px=25px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-bg2</span> = Background Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.bg3</span> = On Hover Background
                                        Color Three</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-bo1(2)</span>= Border One px and color
                                        Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-bt1(2)</span> = Border-top One px and
                                        color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-bl2(4)</span> = Border-Left Two px and
                                        color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-bb2(4)</span> = Border-Bottom Two px
                                        and color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-br2(4)</span> = Border-Right Two px
                                        and color Two</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-.bo1(2)</span> = On Hover Border One
                                        px and color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.bt1(2)</span> = On Hover Border-top
                                        One px and color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.bl2(4)</span> = On Hover Border-Left
                                        Two px and color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.bb2(4)</span> = On Hover
                                        Border-Bottom Two px and color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.br2(4)</span> = On Hover Border-Right
                                        Two px and color Two</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-.ts10(2)</span> = Text Size 10px Color
                                        Two</p>
                                </div>
                            </div>
                            <div cell-c='[-ca-cc]' class="text-col">
                                <p><span cell-f='[-s16-w7-c2-f5]'>cell-in=[-ip]</span> For Input Actions
                                </p>
                            </div>
                        </div>
                        <div cell-c='[-c20]' class="result">
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Input Actions</p>
                            <div cell-in='[-ip-ll-bg2-.bg3-bo4(5)-.bo4(2)-ts25(4)-r15]' class=" ">
                                <label>Input</label>
                                <input type="text" placeholder="output-1" />
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-in='[-ip-ll-bg2-.bg3-bo4(5)-.bo4(2)-ts25(4)-r15]' class=" ">
                                            <label>Input</label>
                                            <input type="text" placeholder=" " />
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
export default Input;