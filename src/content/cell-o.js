import React, { Component } from "react";
export class O extends Component {
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
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For Over
                                Flow
                            </p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-o</p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-o</span> = Over Flow Auto </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-x</span> = Over Flow X-Axis vissible
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-y</span> = Over Flow Y-Axis vissible
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-h</span> = Over Flow Hidden</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-do</span> = Desktop Over Flow Auto
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-dx</span> = Desktop Over Flow X-Axis
                                        vissible</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-dy</span> = Desktop Over Flow Y-Axis
                                        vissible</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-dh</span> = Desktop Over Flow Hidden
                                    </p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-lo</span> = Large Over Flow Auto </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lx</span> = Large Over Flow X-Axis
                                        vissible</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ly</span> = Large Over Flow Y-Axis
                                        vissible</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lh</span> = Large Over Flow Hidden</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-to</span> = Tab Over Flow Auto </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-tx</span> = Tab Over Flow X-Axis
                                        vissible</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ty</span> = Tab Over Flow Y-Axis
                                        vissible</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-th</span> = Tab Over Flow Hidden</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-mo</span> = Mobile Over Flow Auto </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-mx</span> = Mobile Over Flow X-Axis
                                        vissible</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-my</span> = Mobile Over Flow Y-Axis
                                        vissible</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-mh</span> = Mobile Over Flow Hidden
                                    </p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-so</span> = Small Over Flow Auto </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-sx</span> = Small Over Flow X-Axis
                                        vissible</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-sy</span> = Small Over Flow Y-Axis
                                        vissible</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-sh</span> = Small Over Flow Hidden</p>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-c3]' cell-d='[-db-ln-tn-mn-sn]' class="assigning-values">
                            <div class="actual-col">
                                <div cell-in='[-se-lt]'
                                    class="set over-values">
                                    <label>cell-o<span class="star">*</span></label>
                                    <div cell-in='[-sa]' class="">
                                        <div cell-in='[-sb-lr-bo4(5)-r15-bg1-ig2(3)-.bo4(3)-.bg2-.ig3(4)-p10(10)-tc4(5)-ts15(2)]' class=" ">
                                            <select class="" aria-label="Default select example">
                                                <option op="0" value="">-output-1</option>
                                                <option op="1" value="-o">-o</option>
                                                <option op="2" value="-x">-x</option>
                                                <option op="3" value="-y">-y</option>
                                                <option op="4" value="-h">-h</option>
                                                <option op="5" value="-nw">-nw</option>
                                            </select>
                                        </div>
                                        <div cell-in='[-ob-c5-bo4(5)-r15-bg4-ig2(3)-.bo4(2)-.bg2-.ig3(4)-p10(10)-ts15(5)-.ts15(1)]'
                                            class=" ">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-do-l20-t20-m20-s20]' cell-h='[-h550]' class="result">
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Over Flow</p>
                            <div cell-Q='[-q-ct]' class="append-col"></div>
                            <div cell-o='[]' cell-h='[-h150]' cell-c='[-c4]' cell-m='[-t45]'
                                class="over-output">
                                <div cell-h='[-h250]' cell-bg='[-c2]' class="width-col">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>
                            <div cell-m='[-t145]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-o='[]' class=" ">

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
export default O;