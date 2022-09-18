import React, { Component } from "react";
export class Ss extends Component {
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
                                Smooth Scroll
                            </p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>
                                cell-ss
                            </p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <p cell-t='[-c]' cell-f='[-c2-s18-w7]'>For cell-ss=[-ss:] ( Smooth Scroll )</p>
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-ss:</span> = For Smooth Scroll
                                        Actions </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-vb</span> = For Vertical Buttons
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-hb</span> = For Horizontal Buttons
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-bl</span> = Buttons To Left
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-br</span> = Buttons To Right
                                    </p>
                                </div>

                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s18-w7]'>cell-ss=[-ss:]</span> =For Smooth
                                        Scroll
                                        Actions </p>
                                    <p><span cell-f='[-c2-s18-w7]'>cell-ss=[-ca]</span> = For Control
                                        Area
                                    </p>
                                    <p><span cell-f='[-c2-s18-w7]'>cell-ss=[-sb]</span> = For Scroll
                                        Block
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-do-l20-t20-m20-s20]' class="result">
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Smooth Scroll</p>
                            <div cell-ss='[-ss:-vb-br]' cell-bg='[-c4]'>
                                <div cell-ss='[-ca]' cell-m='[-l75]' class="control-area"></div>
                                <div cell-ss='[-sb]' cell-bg='[-c3]' cell-h='[-wh]'></div>
                                <div cell-ss='[-sb]' cell-bg='[-c2]' cell-h='[-wh]'></div>
                                <div cell-ss='[-sb]' cell-bg='[-c3]' cell-h='[-wh]'></div>
                                <div cell-ss='[-sb]' cell-bg='[-c5]' cell-h='[-wh]'></div>
                                <div cell-ss='[-sb]' cell-bg='[-c2]' cell-h='[-wh]'></div>
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-ss='[-ss:-vb-br]' cell-bg='[-c4]'>
                                            <div cell-ss='[-ca]' cell-m='[-l75]' class=" "></div>
                                            <div cell-ss='[-sb]' cell-bg='[-c3]' cell-h='[-wh]'></div>
                                            <div cell-ss='[-sb]' cell-bg='[-c2]' cell-h='[-wh]'></div>
                                            <div cell-ss='[-sb]' cell-bg='[-c3]' cell-h='[-wh]'></div>
                                            <div cell-ss='[-sb]' cell-bg='[-c5]' cell-h='[-wh]'></div>
                                            <div cell-ss='[-sb]' cell-bg='[-c2]' cell-h='[-wh]'></div>
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
export default Ss;