import React, { Component } from "react";
export class T extends Component {
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
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For Text
                                Alignments</p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-t</p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-c</span> = Text Center</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-l</span> = Text Left</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-r</span> = Text Right</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-dc</span> = Desktop Text Center</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lr</span> = Large Text Right</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-tl</span> = Tab Text Left</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-mc</span> = Mobile Text Center</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-sr</span> = Small Text Right</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-f</span> = Text Fits To Content</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ps10</span> = Para Start @ 10% From
                                        Left
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-u</span> = Text Upper Case</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lo</span> = Text Lower Case</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-u1</span> = First Letter For Word
                                        Upper
                                        Case</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-s10(15)</span>=Letter-Space 10px
                                        Word-Space 10px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ds10(15)</span>=Desktop Letter-Space
                                        10px
                                        Word-Space 10px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ls10(15)</span>=Large Letter-Space
                                        10px
                                        Word-Space 10px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ts10(15)</span>=Tab Letter-Space 10px
                                        Word-Space 10px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ms10(15)</span>=Mobile Letter-Space
                                        10px
                                        Word-Space 10px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ss10(15)</span>=Small Letter-Space
                                        10px
                                        Word-Space 10px</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-wn</span> = White Space Normal</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-dwn</span> = Desktop White Space
                                        Normal
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-lh10</span> = Line Height 10x1px=10px
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-dlh20</span> = Desktop Line Height
                                        20x1px=10px</p>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-c3]' cell-d='[-db-ln-tn-sn]' class="assigning-values">
                            <div class="actual-col">
                                <div cell-in='[-se-lt]'
                                    class="set text-values">
                                    <label>cell-t<span class="star">*</span></label>
                                    <div cell-in='[-sa]' class="">
                                        <div cell-in='[-sb-lr-bo4(5)-r15-bg1-ig2(3)-.bo4(3)-.bg2-.ig3(4)-p10(10)-tc4(5)-ts15(2)]' class=" ">
                                            <select class="" aria-label="Default select example">
                                                <option op="0" value="">-Main</option>
                                                <option op="1" value="-c">-c</option>
                                                <option op="2" value="-l">-l</option>
                                                <option op="3" value="-r">-r</option>
                                            </select>
                                        </div>
                                        <div cell-in='[-ob-c5-bo4(5)-r15-bg4-ig2(3)-.bo4(2)-.bg2-.ig3(4)-p10(10)-ts15(5)-.ts15(1)]'
                                            class=" ">

                                        </div>
                                    </div>
                                </div>
                                <div cell-in='[-se-lt]'
                                    class="set text-values">
                                    <label>cell-t<span class="star">*</span></label>
                                    <div cell-in='[-sa]' class="">
                                        <div cell-in='[-sb-lr-bo4(5)-r15-bg1-ig2(3)-.bo4(3)-.bg2-.ig3(4)-p10(10)-tc4(5)-ts15(2)]' class=" ">
                                            <select class="" aria-label="Default select example">
                                                <option op="0" value="">-output-1</option>
                                                <option op="1" value="-c">-c</option>
                                                <option op="2" value="-l">-l</option>
                                                <option op="3" value="-r">-r</option>
                                                <option op="4" value="-s10(0)">-s10(0)</option>
                                                <option op="5" value="-s0(50)">-s0(50)</option>
                                                <option op="6" value="-ps40">-ps40</option>
                                            </select>
                                        </div>
                                        <div cell-in='[-ob-c5-bo4(5)-r15-bg4-ig2(3)-.bo4(2)-.bg2-.ig3(4)-p10(10)-ts15(5)-.ts15(1)]'
                                            class=" ">

                                        </div>
                                    </div>
                                </div>
                                <div cell-in='[-se-lt-bo4(5)-r15-bg1-ig2(3)-.bo4(3)-.bg2-.ig3(4)-p10(10)-tc4(5)-ts15(2)]'
                                    class="set text-values">
                                    <div cell-in='[-sa]' class="">
                                        <div cell-in='[-sb-lr-bo4(5)-r15-bg1-ig2(3)-.bo4(3)-.bg2-.ig3(4)-p10(10)-tc4(5)-ts15(2)]' class=" ">
                                            <select class="" aria-label="Default select example">
                                                <option op="0" value="">-output-1</option>
                                                <option op="1" value="-c">-c</option>
                                                <option op="2" value="-l">-l</option>
                                                <option op="3" value="-r">-r</option>
                                                <option op="4" value="-s10(0)">-s10(0)</option>
                                                <option op="5" value="-s0(25)">-s0(25)</option>
                                                <option op="6" value="-ps10">-ps40</option>
                                            </select>
                                        </div>
                                        <div cell-in='[-ob-c5-bo4(5)-r15-bg4-ig2(3)-.bo4(2)-.bg2-.ig3(4)-p10(10)-ts15(5)-.ts15(1)]'
                                            class=" ">

                                        </div>
                                    </div>
                                </div>
                                <div cell-in='[-se-lt]'
                                    class="set text-values">
                                    <div cell-in='[-sa]' class="">
                                        <div cell-in='[-sb-lr-bo4(5)-r15-bg1-ig2(3)-.bo4(3)-.bg2-.ig3(4)-p10(10)-tc4(5)-ts15(2)]' class=" ">
                                            <select class="" aria-label="Default select example">
                                                <option op="0" value="">-output-1</option>
                                                <option op="1" value="-c">-c</option>
                                                <option op="2" value="-l">-l</option>
                                                <option op="3" value="-r">-r</option>
                                                <option op="4" value="-s10(0)">-s10(0)</option>
                                                <option op="5" value="-s0(25)">-s0(25)</option>
                                                <option op="6" value="-f">-f</option>
                                                <option op="7" value="-ps10">-ps40</option>
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
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Text Alignments</p>
                            <div cell-Q='[-q-ct]' class="append-col"></div>
                            <div cell-c='[-d10]' cell-bg='[-c2]' cell-m='[-t45]' cell-p='[-p2]'
                                class="text-output">
                                Main Column
                                <p cell-f='[-c4-s25]' cell-p='[-t5]' cell-m='[-t45]' class="text-output">
                                    Output-1</p>
                                <p cell-f='[-c4-s25]' cell-p='[-t5]' cell-m='[-t45]' class="text-output">Text
                                    Alignment Output-2
                                </p>
                                <p cell-f='[-c4-s25]' cell-p='[-t5-b5]' cell-m='[-t45]' class="text-output">
                                    Text Alignment
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-t='[]' class=" ">
                                            <p cell-t='[]' class=" "></p>
                                            <p cell-t='[]' class=" "></p>
                                            <p cell-t='[]' class=" "></p>
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
export default T;