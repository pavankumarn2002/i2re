import React, { Component } from "react";
export class Tb extends Component {
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
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For Tab
                            </p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-tb
                            </p>
                        </div>
                    </div >
                </div >
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-d10-l10-t10-s20]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-hz1:</span> = Fot Horizontal Tab
                                        Actions & One For Index
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-vr1:</span> = Fot Vertical Tab Actions
                                        & One For Index
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-bg3</span> = Back Ground Color Three
                                        For Tab Items</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.bg2</span> = Tab Items On Hover Back
                                        Ground Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-bo5(2)</span> = Tab Items Full Border
                                        5px With Color Two</p>
                                </div>
                                <div cell-c='[-d10-l10-t10-s20]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-.bo5(5)</span> = On Hover Tab Items
                                        Full Border 5px With Color Five</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-bl5(2)</span> = Tab Items Left Border
                                        5px With Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.bl5(5)</span> = On Hover Tab Items
                                        Left Border 5px With Color Five</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-br5(2)</span> = Tab Items Right Border
                                        5px With Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.br5(5)</span> = On Hover Tab Items
                                        Right Border 5px With Color Five</p>
                                </div>
                                <div cell-c='[-d10-l10-t10-s20]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-bt5(2)</span> = Tab Items Top Border
                                        5px With Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ph15(10)</span> = Tab Items Padding
                                        Left 15px Padding Right 10px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-pv10(15)</span> = Tab Items Padding
                                        Top 10px Padding Bottom 15px</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-p25</span> = Tab Items Padding 25px
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.bt5(5)</span> = On Hover Tab Items
                                        Top Border 5px With Color Five</p>
                                </div>
                                <div cell-c='[-d10-l10-t10-s20]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-bb5(2)</span> = Tab Items Bttom Border
                                        5px With Color Two</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.bb5(5)</span> = On Hover Tab Items
                                        Bottom Border 5px With Color Five</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-cn</span> = Tab Conmtent Display None
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.cd</span> = On Hover To Display Tab
                                        Content</p>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-c20]' class="result">
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Horizontal Responsive Tab</p>
                            <div cell-m='[-t45]' cell-tb='[-hz:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]'
                                cell-c='[-c20]' cell-bg='[-c5]' class="tab-output">
                                <div cell-tb='[-ta]' cell-Q='[-q]' class="">
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-0
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <i class="fa fa-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-1
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <i class="fa fa-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-2
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <img src="../dist/Img/home.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co' class="">
                                                <div class="size-col">
                                                    tab-3
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <img src="../dist/Img/file.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class="">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-4
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <img src="../dist/Img/desk.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-5
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <img src="../dist/Img/flow.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-6
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <img src="../dist/Img/schedule.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-7
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <i class="fa fa-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-8
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <i class="fa fa-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-9
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <i class="fa fa-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-nr]' cell-c='[-co]'
                                        class="nun">
                                        normal
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-0
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-1
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-2
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-3
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-4
                                    </div>
                                    <div cell-tb='[-c]' cell-c='-c20]'
                                        class=" ">
                                        content-5
                                    </div>
                                    <div cell-tb='[-c]' cell-c='-c20]'
                                        class=" ">
                                        content-6
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-7
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-8
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-9
                                    </div>
                                </div>
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-m='[-t45]' cell-tb='[-hz:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]'
                                            cell-c='[-c20]' cell-bg='[-c5]' class="tab-output">
                                            <div cell-tb='[-ta]' cell-Q='[-q]' class="">
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-0
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-1
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-2
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/home.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co' class="">
                                                            <div class="size-col">
                                                                tab-3
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/file.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class="">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-4
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/desk.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-5
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/flow.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-6
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/schedule.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-7
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-8
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-9
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-nr]' cell-c='[-co]'
                                                    class="nun">
                                                    normal
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-0
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-1
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-2
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-3
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-4
                                                </div>
                                                <div cell-tb='[-c]' cell-c='-c20]'
                                                    class=" ">
                                                    content-5
                                                </div>
                                                <div cell-tb='[-c]' cell-c='-c20]'
                                                    class=" ">
                                                    content-6
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-7
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-8
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-9
                                                </div>
                                            </div>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Nested Horizontal Responsive Tab
                            </p>
                            <div cell-m='[-t45]' cell-tb='[-hz:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]'
                                cell-c='[-c20]' cell-bg='[-c5]' class="tab-output">
                                <div cell-tb='[-ta]' cell-Q='[-q]' class="">
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-0
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <i class="fa fa-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-1
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <i class="fa fa-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-2
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <img src="../dist/Img/home.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co' class="">
                                                <div class="size-col">
                                                    tab-3
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <img src="../dist/Img/file.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class="">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-4
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <img src="../dist/Img/desk.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-5
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <img src="../dist/Img/flow.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-6
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <img src="../dist/Img/schedule.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-7
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <i class="fa fa-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-8
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <i class="fa fa-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                        <div cell-Q='[-q]' class=" ">
                                            <div cell-c='[-co]' class="">
                                                <div class="size-col">
                                                    tab-9
                                                </div>
                                            </div>
                                            <div cell-c='[-ca]' class="">
                                                <div class="img-col">
                                                    <i class="fa fa-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-tb='[-nr]' cell-c='[-co]'
                                        class="nun">
                                        normal
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-0
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-1
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-2
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-3
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-4
                                    </div>
                                    <div cell-tb='[-c]' cell-c='-c20]'
                                        class=" ">
                                        content-5
                                    </div>
                                    <div cell-tb='[-c]' cell-c='-c20]'
                                        class=" ">
                                        content-6
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-7
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        content-8
                                    </div>
                                    <div cell-tb='[-c]' cell-c='[-c20]'
                                        class=" ">
                                        <div cell-m='[-t45]' cell-tb='[-hz:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]'
                                            cell-c='[-c20]' cell-bg='[-c5]' class="tab-output">
                                            <div cell-tb='[-ta]' cell-Q='[-q]' class="">
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-0
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-1
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-2
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/home.png" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co' class="">
                                                            <div class="size-col">
                                                                tab-3
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/file.png" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class="">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-4
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/desk.png" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-5
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/flow.png" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-6
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/schedule.png" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-7
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-8
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-9
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-nr]' cell-c='[-co]'
                                                    class="nun">
                                                    normal
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-0
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-1
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-2
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-3
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-4
                                                </div>
                                                <div cell-tb='[-c]' cell-c='-c20]'
                                                    class=" ">
                                                    content-5
                                                </div>
                                                <div cell-tb='[-c]' cell-c='-c20]'
                                                    class=" ">
                                                    content-6
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-7
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-8
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-9
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div cell-m='[-t45]' class="code-accord" >
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div >
                                <div class="code-content">
                                    <xmp>
                                        <div cell-m='[-t45]' cell-tb='[-hz:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]'
                                            cell-c='[-c20]' cell-bg='[-c5]' class="tab-output">
                                            <div cell-tb='[-ta]' cell-Q='[-q]' class="">
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-0
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-1
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-2
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/home.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co' class="">
                                                            <div class="size-col">
                                                                tab-3
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/file.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class="">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-4
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/desk.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-5
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/flow.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-6
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <img src="../dist/Img/schedule.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-7
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-8
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                    <div cell-Q='[-q]' class=" ">
                                                        <div cell-c='[-co]' class="">
                                                            <div class="size-col">
                                                                tab-9
                                                            </div>
                                                        </div>
                                                        <div cell-c='[-ca]' class="">
                                                            <div class="img-col">
                                                                <i class="fa fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-tb='[-nr]' cell-c='[-co]'
                                                    class="nun">
                                                    normal
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-0
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-1
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-2
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-3
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-4
                                                </div>
                                                <div cell-tb='[-c]' cell-c='-c20]'
                                                    class=" ">
                                                    content-5
                                                </div>
                                                <div cell-tb='[-c]' cell-c='-c20]'
                                                    class=" ">
                                                    content-6
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-7
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    content-8
                                                </div>
                                                <div cell-tb='[-c]' cell-c='[-c20]'
                                                    class=" ">
                                                    <div cell-m='[-t45]' cell-tb='[-hz:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]'
                                                        cell-c='[-c20]' cell-bg='[-c5]' class="tab-output">
                                                        <div cell-tb='[-ta]' cell-Q='[-q]' class="">
                                                            <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                                <div cell-Q='[-q]' class=" ">
                                                                    <div cell-c='[-co]' class="">
                                                                        <div class="size-col">
                                                                            tab-0
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c='[-ca]' class="">
                                                                        <div class="img-col">
                                                                            <i class="fa fa-angle-right"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                                <div cell-Q='[-q]' class=" ">
                                                                    <div cell-c='[-co]' class="">
                                                                        <div class="size-col">
                                                                            tab-1
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c='[-ca]' class="">
                                                                        <div class="img-col">
                                                                            <i class="fa fa-angle-right"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                                <div cell-Q='[-q]' class=" ">
                                                                    <div cell-c='[-co]' class="">
                                                                        <div class="size-col">
                                                                            tab-2
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c='[-ca]' class="">
                                                                        <div class="img-col">
                                                                            <img src="../dist/Img/home.png" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                                <div cell-Q='[-q]' class=" ">
                                                                    <div cell-c='[-co' class="">
                                                                        <div class="size-col">
                                                                            tab-3
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c='[-ca]' class="">
                                                                        <div class="img-col">
                                                                            <img src="../dist/Img/file.png" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class="">
                                                                <div cell-Q='[-q]' class=" ">
                                                                    <div cell-c='[-co]' class="">
                                                                        <div class="size-col">
                                                                            tab-4
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c='[-ca]' class="">
                                                                        <div class="img-col">
                                                                            <img src="../dist/Img/desk.png" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                                <div cell-Q='[-q]' class=" ">
                                                                    <div cell-c='[-co]' class="">
                                                                        <div class="size-col">
                                                                            tab-5
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c='[-ca]' class="">
                                                                        <div class="img-col">
                                                                            <img src="../dist/Img/flow.png" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                                <div cell-Q='[-q]' class=" ">
                                                                    <div cell-c='[-co]' class="">
                                                                        <div class="size-col">
                                                                            tab-6
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c='[-ca]' class="">
                                                                        <div class="img-col">
                                                                            <img src="../dist/Img/schedule.png" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                                <div cell-Q='[-q]' class=" ">
                                                                    <div cell-c='[-co]' class="">
                                                                        <div class="size-col">
                                                                            tab-7
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c='[-ca]' class="">
                                                                        <div class="img-col">
                                                                            <i class="fa fa-angle-right"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                                <div cell-Q='[-q]' class=" ">
                                                                    <div cell-c='[-co]' class="">
                                                                        <div class="size-col">
                                                                            tab-8
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c='[-ca]' class="">
                                                                        <div class="img-col">
                                                                            <i class="fa fa-angle-right"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-tb='[-l]' cell-c='[-do-l4-t5-m10-s20]' class=" ">
                                                                <div cell-Q='[-q]' class=" ">
                                                                    <div cell-c='[-co]' class="">
                                                                        <div class="size-col">
                                                                            tab-9
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c='[-ca]' class="">
                                                                        <div class="img-col">
                                                                            <i class="fa fa-angle-right"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-tb='[-nr]' cell-c='[-co]'
                                                                class="nun">
                                                                normal
                                                            </div>
                                                            <div cell-tb='[-c]' cell-c='[-c20]'
                                                                class=" ">
                                                                content-0
                                                            </div>
                                                            <div cell-tb='[-c]' cell-c='[-c20]'
                                                                class=" ">
                                                                content-1
                                                            </div>
                                                            <div cell-tb='[-c]' cell-c='[-c20]'
                                                                class=" ">
                                                                content-2
                                                            </div>
                                                            <div cell-tb='[-c]' cell-c='[-c20]'
                                                                class=" ">
                                                                content-3
                                                            </div>
                                                            <div cell-tb='[-c]' cell-c='[-c20]'
                                                                class=" ">
                                                                content-4
                                                            </div>
                                                            <div cell-tb='[-c]' cell-c='-c20]'
                                                                class=" ">
                                                                content-5
                                                            </div>
                                                            <div cell-tb='[-c]' cell-c='-c20]'
                                                                class=" ">
                                                                content-6
                                                            </div>
                                                            <div cell-tb='[-c]' cell-c='[-c20]'
                                                                class=" ">
                                                                content-7
                                                            </div>
                                                            <div cell-tb='[-c]' cell-c='[-c20]'
                                                                class=" ">
                                                                content-8
                                                            </div>
                                                            <div cell-tb='[-c]' cell-c='[-c20]'
                                                                class=" ">
                                                                content-9
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                            <p cell-f='[-s14-w9-c4]' cell-m=' [-t45]'>For Vertical Responsive Tab</p>
                            <div cell-m='[-t45]' cell-bg='[-c5]' cell-sl='[-ra:-dr5(0)-lr5(0)-tr7(0)-mr15(0)-sr20(0)]'
                                cell-tb='[-vr:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]' class=" ">
                                <button class="rs-left-open">Open</button>
                                <div cell-h='[-h500]' cell-tb='[-ta]' cell-Q='[-q]' class="">
                                    <div cell-sl='[-lo]' class="">
                                        <div cell-bg='[-c3]' class="text-right">
                                            <button cell-bg='[-c3]' cell-b='[-bn]' class="p-0 rs-left-close">X</button>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-0
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-1
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-2
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-3
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-4
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-5
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-6
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-7
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-8
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-9
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-nr]' class="nun">
                                            normal
                                        </div>
                                    </div>
                                    <div cell-sl='[-m]' cell-c='[-do-lo-to-so]' cell-bg='[-c5]' class="">
                                        <div cell-tb='[-c]' class=" ">
                                            content-0
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-1
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-2
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-3
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-4
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-5
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-6
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-7
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-8
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-9
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
                                        <div cell-bg='[-c5]' cell-sl='[-ra:-dr5(0)-lr5(0)-tr7(0)-mr15(0)-sr20(0)]'
                                            cell-tb='[-vr:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]' class=" ">
                                            <button class="rs-left-open">Open</button>
                                            <div cell-h='[-h500]' cell-tb='[-ta]' cell-Q='[-q]' class="">
                                                <div cell-sl='[-lo]' class="">
                                                    <div cell-bg='[-c3]' class="text-right">
                                                        <button cell-bg='[-c3]' cell-b='[-bn]' class="p-0 rs-left-close">X</button>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-0
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-1
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-2
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-3
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-4
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-5
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-6
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-7
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-8
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-9
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-nr]' class="nun">
                                                        normal
                                                    </div>
                                                </div>
                                                <div cell-sl='[-m]' cell-c='[-do-lo-to-so]' cell-bg='[-c5]' class="">
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-0
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-1
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-2
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-3
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-4
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-5
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-6
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-7
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-8
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-9
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Nested Vertical Responsive Tab</p>
                            <div cell-m='[-t45]' cell-c='[-c20]' class="text-col">
                                <p cell-p='[-t5]' cell-f='[-s15-w5-c1-f5]' cell-t='[-c]'><span cell-f='[-s18-w9-c1-f5]'>NOTE :-</span>For Nested Vertical Tabs
                                    Slide Bar Index Has To Be Changed With Respect To Tab Index</p >
                                <p cell-p='[-t5]' cell-f='[-s15-w5-c1-f5]' cell-t='[-c]'><span
                                    cell-f='[-s18-w9-c1-f5]'>Ex :-
                                </span>For Slide Bar <span cell-f='[-s18-w9-c1-f5]'>-rs1:</span> & Vertical Tab
                                    <span cell-f='[-s18-w9-c1-f5]'>-vr1:</span> , Slide Bar <span
                                        cell-f='[-s18-w9-c1-f5]'>-rs2:</span> & Vertical Tab <span
                                            cell-f='[-s18-w9-c1-f5]'>-vr2:</span>
                                </p>
                                <p cell-p='[-t5]' cell-f='[-s15-w5-c1-f5]' cell-t='[-c]'><span
                                    cell-f='[-s18-w9-c1-f5]'>Ex :-
                                </span>For Slide Bar <span cell-f='[-s18-w9-c1-f5]'>-rs4:</span> & Vertical Tab
                                    <span cell-f='[-s18-w9-c1-f5]'>-vr1:</span> , Slide Bar <span
                                        cell-f='[-s18-w9-c1-f5]'>-rs5:</span> & Vertical Tab <span
                                            cell-f='[-s18-w9-c1-f5]'>-vr2:</span>
                                </p>
                            </div >
                            <div cell-m='[-t45]' cell-bg='[-c5]' cell-sl='[-ra:-dr5(0)-lr5(0)-tr7(0)-mr15(0)-sr20(0)]'
                                cell-tb='[-vr:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]' class=" ">
                                <button class="rs-left-open">Open</button>
                                <div cell-h='[-h500]' cell-tb='[-ta]' cell-Q='[-q]' class="">
                                    <div cell-sl='[-lo]' class="">
                                        <div cell-bg='[-c3]' class="text-right">
                                            <button cell-bg='[-c3]' cell-b='[-bn]' class="p-0 rs-left-close">X</button>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-0
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-1
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-2
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-3
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-4
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-5
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-6
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-7
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-8
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-l]' class=" ">
                                            <div cell-Q='[-q]' class=" ">
                                                <div cell-c='[-co]' class="">
                                                    <div class="size-col">
                                                        tab-9
                                                    </div>
                                                </div>
                                                <div cell-c='[-ca]' class="">
                                                    <div class="img-col">
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div cell-tb='[-nr]' class="nun">
                                            normal
                                        </div>
                                    </div>
                                    <div cell-sl='[-m]' cell-c='[-do-lo-to-so]' cell-bg='[-c5]' class="">
                                        <div cell-tb='[-c]' class=" ">
                                            content-0
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-1
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-2
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-3
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-4
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-5
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-6
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-7
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            content-8
                                        </div>
                                        <div cell-tb='[-c]' class=" ">
                                            <div cell-bg='[-c5]' cell-sl='[-ra:-dr5(0)-lr5(0)-tr7(0)-mr15(0)-sr20(0)]'
                                                cell-tb='[-vr:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]'
                                                class=" ">
                                                <button class="rs-left-open">Open</button>
                                                <div cell-h='[-h500]' cell-tb='[-ta]' cell-Q='[-q]' class="">
                                                    <div cell-sl='[-lo]' class="">
                                                        <div cell-bg='[-c3]' class="text-right">
                                                            <button cell-bg='[-c3]' cell-b='[-bn]'
                                                                class="p-0 rs-left-close">X</button>
                                                        </div>
                                                        <div cell-tb='[-l]' class=" ">
                                                            <div cell-Q='[-q]' class=" ">
                                                                <div cell-c='[-co]' class="">
                                                                    <div class="size-col">
                                                                        tab-0
                                                                    </div>
                                                                </div>
                                                                <div cell-c='[-ca]' class="">
                                                                    <div class="img-col">
                                                                        <i class="fa fa-angle-right"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div cell-tb='[-l]' class=" ">
                                                            <div cell-Q='[-q]' class=" ">
                                                                <div cell-c='[-co]' class="">
                                                                    <div class="size-col">
                                                                        tab-1
                                                                    </div>
                                                                </div>
                                                                <div cell-c='[-ca]' class="">
                                                                    <div class="img-col">
                                                                        <i class="fa fa-angle-right"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div cell-tb='[-l]' class=" ">
                                                            <div cell-Q='[-q]' class=" ">
                                                                <div cell-c='[-co]' class="">
                                                                    <div class="size-col">
                                                                        tab-2
                                                                    </div>
                                                                </div>
                                                                <div cell-c='[-ca]' class="">
                                                                    <div class="img-col">
                                                                        <i class="fa fa-angle-right"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div cell-tb='[-l]' class=" ">
                                                            <div cell-Q='[-q]' class=" ">
                                                                <div cell-c='[-co]' class="">
                                                                    <div class="size-col">
                                                                        tab-3
                                                                    </div>
                                                                </div>
                                                                <div cell-c='[-ca]' class="">
                                                                    <div class="img-col">
                                                                        <i class="fa fa-angle-right"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div cell-tb='[-l]' class=" ">
                                                            <div cell-Q='[-q]' class=" ">
                                                                <div cell-c='[-co]' class="">
                                                                    <div class="size-col">
                                                                        tab-4
                                                                    </div>
                                                                </div>
                                                                <div cell-c='[-ca]' class="">
                                                                    <div class="img-col">
                                                                        <i class="fa fa-angle-right"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div cell-tb='[-l]' class=" ">
                                                            <div cell-Q='[-q]' class=" ">
                                                                <div cell-c='[-co]' class="">
                                                                    <div class="size-col">
                                                                        tab-5
                                                                    </div>
                                                                </div>
                                                                <div cell-c='[-ca]' class="">
                                                                    <div class="img-col">
                                                                        <i class="fa fa-angle-right"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div cell-tb='[-l]' class=" ">
                                                            <div cell-Q='[-q]' class=" ">
                                                                <div cell-c='[-co]' class="">
                                                                    <div class="size-col">
                                                                        tab-6
                                                                    </div>
                                                                </div>
                                                                <div cell-c='[-ca]' class="">
                                                                    <div class="img-col">
                                                                        <i class="fa fa-angle-right"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div cell-tb='[-l]' class=" ">
                                                            <div cell-Q='[-q]' class=" ">
                                                                <div cell-c='[-co]' class="">
                                                                    <div class="size-col">
                                                                        tab-7
                                                                    </div>
                                                                </div>
                                                                <div cell-c='[-ca]' class="">
                                                                    <div class="img-col">
                                                                        <i class="fa fa-angle-right"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div cell-tb='[-l]' class=" ">
                                                            <div cell-Q='[-q]' class=" ">
                                                                <div cell-c='[-co]' class="">
                                                                    <div class="size-col">
                                                                        tab-8
                                                                    </div>
                                                                </div>
                                                                <div cell-c='[-ca]' class="">
                                                                    <div class="img-col">
                                                                        <i class="fa fa-angle-right"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div cell-tb='[-l]' class=" ">
                                                            <div cell-Q='[-q]' class=" ">
                                                                <div cell-c='[-co]' class="">
                                                                    <div class="size-col">
                                                                        tab-9
                                                                    </div>
                                                                </div>
                                                                <div cell-c='[-ca]' class="">
                                                                    <div class="img-col">
                                                                        <i class="fa fa-angle-right"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div cell-tb='[-nr]' class="nun">
                                                            normal
                                                        </div>
                                                    </div>
                                                    <div cell-sl='[-m]' cell-c='[-do-lo-to-so]' cell-bg='[-c5]'
                                                        class="">
                                                        <div cell-tb='[-c]' class=" ">
                                                            content-0
                                                        </div>
                                                        <div cell-tb='[-c]' class=" ">
                                                            content-1
                                                        </div>
                                                        <div cell-tb='[-c]' class=" ">
                                                            content-2
                                                        </div>
                                                        <div cell-tb='[-c]' class=" ">
                                                            content-3
                                                        </div>
                                                        <div cell-tb='[-c]' class=" ">
                                                            content-4
                                                        </div>
                                                        <div cell-tb='[-c]' class=" ">
                                                            content-5
                                                        </div>
                                                        <div cell-tb='[-c]' class=" ">
                                                            content-6
                                                        </div>
                                                        <div cell-tb='[-c]' class=" ">
                                                            content-7
                                                        </div>
                                                        <div cell-tb='[-c]' class=" ">
                                                            content-8
                                                        </div>
                                                        <div cell-tb='[-c]' class=" ">
                                                            content-9
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div cell-m='[-t45]' class="code-accord" >
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div >
                                <div class="code-content">
                                    <xmp>
                                        <div cell-m='[-t45]' cell-bg='[-c5]' cell-sl='[-ra:-dr5(0)-lr5(0)-tr7(0)-mr15(0)-sr20(0)]'
                                            cell-tb='[-vr:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]' class=" ">
                                            <button class="rs-left-open">Open</button>
                                            <div cell-h='[-h500]' cell-tb='[-ta]' cell-Q='[-q]' class="">
                                                <div cell-sl='[-lo]' class="">
                                                    <div cell-bg='[-c3]' class="text-right">
                                                        <button cell-bg='[-c3]' cell-b='[-bn]' class="p-0 rs-left-close">X</button>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-0
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-1
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-2
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-3
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-4
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-5
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-6
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-7
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-8
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-l]' class=" ">
                                                        <div cell-Q='[-q]' class=" ">
                                                            <div cell-c='[-co]' class="">
                                                                <div class="size-col">
                                                                    tab-9
                                                                </div>
                                                            </div>
                                                            <div cell-c='[-ca]' class="">
                                                                <div class="img-col">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div cell-tb='[-nr]' class="nun">
                                                        normal
                                                    </div>
                                                </div>
                                                <div cell-sl='[-m]' cell-c='[-do-lo-to-so]' cell-bg='[-c5]' class="">
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-0
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-1
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-2
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-3
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-4
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-5
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-6
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-7
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        content-8
                                                    </div>
                                                    <div cell-tb='[-c]' class=" ">
                                                        <div cell-bg='[-c5]' cell-sl='[-ra:-dr5(0)-lr5(0)-tr7(0)-mr15(0)-sr20(0)]'
                                                            cell-tb='[-vr:-bg3-.bg1-bb5(1)-.bb5(2)-ts17(2)-.ts17(5)-p5-cn-.cd-a9]'
                                                            class=" ">
                                                            <button class="rs-left-open">Open</button>
                                                            <div cell-h='[-h500]' cell-tb='[-ta]' cell-Q='[-q]' class="">
                                                                <div cell-sl='[-lo]' class="">
                                                                    <div cell-bg='[-c3]' class="text-right">
                                                                        <button cell-bg='[-c3]' cell-b='[-bn]'
                                                                            class="p-0 rs-left-close">X</button>
                                                                    </div>
                                                                    <div cell-tb='[-l]' class=" ">
                                                                        <div cell-Q='[-q]' class=" ">
                                                                            <div cell-c='[-co]' class="">
                                                                                <div class="size-col">
                                                                                    tab-0
                                                                                </div>
                                                                            </div>
                                                                            <div cell-c='[-ca]' class="">
                                                                                <div class="img-col">
                                                                                    <i class="fa fa-angle-right"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div cell-tb='[-l]' class=" ">
                                                                        <div cell-Q='[-q]' class=" ">
                                                                            <div cell-c='[-co]' class="">
                                                                                <div class="size-col">
                                                                                    tab-1
                                                                                </div>
                                                                            </div>
                                                                            <div cell-c='[-ca]' class="">
                                                                                <div class="img-col">
                                                                                    <i class="fa fa-angle-right"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div cell-tb='[-l]' class=" ">
                                                                        <div cell-Q='[-q]' class=" ">
                                                                            <div cell-c='[-co]' class="">
                                                                                <div class="size-col">
                                                                                    tab-2
                                                                                </div>
                                                                            </div>
                                                                            <div cell-c='[-ca]' class="">
                                                                                <div class="img-col">
                                                                                    <i class="fa fa-angle-right"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div cell-tb='[-l]' class=" ">
                                                                        <div cell-Q='[-q]' class=" ">
                                                                            <div cell-c='[-co]' class="">
                                                                                <div class="size-col">
                                                                                    tab-3
                                                                                </div>
                                                                            </div>
                                                                            <div cell-c='[-ca]' class="">
                                                                                <div class="img-col">
                                                                                    <i class="fa fa-angle-right"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div cell-tb='[-l]' class=" ">
                                                                        <div cell-Q='[-q]' class=" ">
                                                                            <div cell-c='[-co]' class="">
                                                                                <div class="size-col">
                                                                                    tab-4
                                                                                </div>
                                                                            </div>
                                                                            <div cell-c='[-ca]' class="">
                                                                                <div class="img-col">
                                                                                    <i class="fa fa-angle-right"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div cell-tb='[-l]' class=" ">
                                                                        <div cell-Q='[-q]' class=" ">
                                                                            <div cell-c='[-co]' class="">
                                                                                <div class="size-col">
                                                                                    tab-5
                                                                                </div>
                                                                            </div>
                                                                            <div cell-c='[-ca]' class="">
                                                                                <div class="img-col">
                                                                                    <i class="fa fa-angle-right"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div cell-tb='[-l]' class=" ">
                                                                        <div cell-Q='[-q]' class=" ">
                                                                            <div cell-c='[-co]' class="">
                                                                                <div class="size-col">
                                                                                    tab-6
                                                                                </div>
                                                                            </div>
                                                                            <div cell-c='[-ca]' class="">
                                                                                <div class="img-col">
                                                                                    <i class="fa fa-angle-right"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div cell-tb='[-l]' class=" ">
                                                                        <div cell-Q='[-q]' class=" ">
                                                                            <div cell-c='[-co]' class="">
                                                                                <div class="size-col">
                                                                                    tab-7
                                                                                </div>
                                                                            </div>
                                                                            <div cell-c='[-ca]' class="">
                                                                                <div class="img-col">
                                                                                    <i class="fa fa-angle-right"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div cell-tb='[-l]' class=" ">
                                                                        <div cell-Q='[-q]' class=" ">
                                                                            <div cell-c='[-co]' class="">
                                                                                <div class="size-col">
                                                                                    tab-8
                                                                                </div>
                                                                            </div>
                                                                            <div cell-c='[-ca]' class="">
                                                                                <div class="img-col">
                                                                                    <i class="fa fa-angle-right"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div cell-tb='[-l]' class=" ">
                                                                        <div cell-Q='[-q]' class=" ">
                                                                            <div cell-c='[-co]' class="">
                                                                                <div class="size-col">
                                                                                    tab-9
                                                                                </div>
                                                                            </div>
                                                                            <div cell-c='[-ca]' class="">
                                                                                <div class="img-col">
                                                                                    <i class="fa fa-angle-right"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div cell-tb='[-nr]' class="nun">
                                                                        normal
                                                                    </div>
                                                                </div>
                                                                <div cell-sl='[-m]' cell-c='[-do-lo-to-so]' cell-bg='[-c5]'
                                                                    class="">
                                                                    <div cell-tb='[-c]' class=" ">
                                                                        content-0
                                                                    </div>
                                                                    <div cell-tb='[-c]' class=" ">
                                                                        content-1
                                                                    </div>
                                                                    <div cell-tb='[-c]' class=" ">
                                                                        content-2
                                                                    </div>
                                                                    <div cell-tb='[-c]' class=" ">
                                                                        content-3
                                                                    </div>
                                                                    <div cell-tb='[-c]' class=" ">
                                                                        content-4
                                                                    </div>
                                                                    <div cell-tb='[-c]' class=" ">
                                                                        content-5
                                                                    </div>
                                                                    <div cell-tb='[-c]' class=" ">
                                                                        content-6
                                                                    </div>
                                                                    <div cell-tb='[-c]' class=" ">
                                                                        content-7
                                                                    </div>
                                                                    <div cell-tb='[-c]' class=" ">
                                                                        content-8
                                                                    </div>
                                                                    <div cell-tb='[-c]' class=" ">
                                                                        content-9
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
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Tb;
