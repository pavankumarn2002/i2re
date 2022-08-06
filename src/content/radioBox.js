import React, { Component } from "react";
export class RadioBox extends Component {
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
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For Radio
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
                            <p cell-t='[-c]' cell-f='[-c2-s18-w7]'>For cell-in=[-rd1:] ( Radio Box )</p>
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-rd1:</span> = For Radio Box
                                        Actions & Oner For Radio Box Group Index
                                    </p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-ra</span> = For Radio Area
                                        Actions
                                    </p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-lt</span> = Set Label To Top
                                    </p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-lb</span> = Set Label To Bottom
                                    </p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-ll</span> = Set Label To Left
                                    </p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-lr</span> = Set Label To Right
                                    </p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-wo25</span> = For Outer
                                        Width</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-wi25</span> = For Inner
                                        Width</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-ro25</span> = For Outer
                                        Radius</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-ri25</span> = For Inner
                                        Radius</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-gi5</span> = For Inner
                                        Back
                                        Ground Color Five</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-.gi2</span> = On Hover Inner
                                        Width Back Ground ColorTow</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-go5</span> = For Outer
                                        Back
                                        Ground Color Five</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-.go2</span> = On Hover Outer
                                        Width Back Ground ColorTow</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-bo5(5)</span> = For Outer
                                        Border 5px Color Five</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-.bo5(2)</span> = On Hover Outer
                                        Border 5px Color Five</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-bi5(5)</span> = For Inner

                                        Border 5px Color Five</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-.bi5(2)</span> = On Hover Inner
                                        Border 5px Color Five</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>-a</span> = For Active Radio Box
                                    </p>
                                </div>
                            </div>
                            <div cell-c='[-ca-cc]' cell-m='[-t45]' class="text-col">
                                <p><span cell-f='[-s16-w7-c2-f5]'>cell-in=[-rd1:]</span> For Radio Box
                                    Actions
                                </p>
                                <p><span cell-f='[-s16-w7-c2-f5]'>cell-in=[-ra]</span> For Radio Area
                                    Actions
                                </p>
                            </div>
                        </div>
                        <div cell-c='[-c20]' class="result">
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Round Radio Button Actions</p>
                            <div cell-in='[-rd1:-ll-ro50-ri50-wo95-wi25-gi5-.gi2-go3-.go5-bi4(2)-bo4(2)-.bi4(4)-.bo5(4)-ts25(4)-a]'
                                cell-c='[-ca]' cell-m='[-t45]' class="radio-box">
                                <label>Radio</label>
                                <div cell-in='[-ra]' class=" ">
                                    <input class="radio" />
                                </div>
                            </div>
                            <div cell-in='[-rd1:-ll-ro50-ri50-wo95-wi25-gi5-.gi2-go3-.go5-bi4(2)-bo4(2)-.bi4(4)-.bo5(4)-ts25(4)]'
                                cell-c='[-ca]' cell-m='[-t45]' class="radio-box">
                                <label>Radio</label>
                                <div cell-in='[-ra]' class=" ">
                                    <input class="radio" />
                                </div>
                            </div>
                            <div cell-m='[-t45]' cell-p='[-t4-b4]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-in='[-rd1:-ll-ro50-ri50-wo95-wi25-gi5-.gi2-go3-.go5-bi4(2)-bo4(2)-.bi4(4)-.bo5(4)-ts25(4)-a]'
                                            cell-c='[-ca]' cell-m='[-t45]' class="radio-box">
                                            <label>Radio</label>
                                            <div cell-in='[-ra]' class=" ">
                                                <input class="radio" />
                                            </div>
                                        </div>
                                        <div cell-in='[-rd1:-ll-ro50-ri50-wo95-wi25-gi5-.gi2-go3-.go5-bi4(2)-bo4(2)-.bi4(4)-.bo5(4)-ts25(4)]'
                                            cell-c='[-ca]' cell-m='[-t45]' class="radio-box">
                                            <label>Radio</label>
                                            <div cell-in='[-ra]' class=" ">
                                                <input class="radio" />
                                            </div>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Square Radio Button Actions</p>
                            <div cell-in='[-rd2:-ro15-ri35-ll-wo95-wi25-gi5-.gi2-go3-.go5-bi4(2)-bo4(2)-.bi4(4)-.bo5(4)-ts25(4)-a]'
                                cell-c='[-ca]' cell-m='[-t45]' class="radio-box">
                                <label>Radio</label>
                                <div cell-in='[-ra]' class=" ">
                                    <input class="radio" />
                                </div>
                            </div>
                            <div cell-in='[-rd2:-ro15-ri35-ll-wo95-wi25-gi5-.gi2-go3-.go5-bi4(2)-bo4(2)-.bi4(4)-.bo5(4)-ts25(4)]'
                                cell-c='[-ca]' cell-m='[-t45]' class="radio-box">
                                <label>Radio</label>
                                <div cell-in='[-ra]' class=" ">
                                    <input class="radio" />
                                </div>
                            </div>
                            <div cell-m='[-t45]' cell-p='[-t4-b4]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-in='[-rd2:-ro15-ri35-ll-wo95-wi25-gi5-.gi2-go3-.go5-bi4(2)-bo4(2)-.bi4(4)-.bo5(4)-ts25(4)-a]'
                                            cell-c='[-ca]' cell-m='[-t45]' class="radio-box">
                                            <label>Radio</label>
                                            <div cell-in='[-ra]' class=" ">
                                                <input class="radio" />
                                            </div>
                                        </div>
                                        <div cell-in='[-rd2:-ro15-ri35-ll-wo95-wi25-gi5-.gi2-go3-.go5-bi4(2)-bo4(2)-.bi4(4)-.bo5(4)-ts25(4)]'
                                            cell-c='[-ca]' cell-m='[-t45]' class="radio-box">
                                            <label>Radio</label>
                                            <div cell-in='[-ra]' class=" ">
                                                <input class="radio" />
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
export default RadioBox;