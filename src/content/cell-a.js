import React, { Component } from "react";
export class A extends Component {
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
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For Accordion </p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-a</p>
                        </div>
                    </div >
                </div >
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-ac1:</span> = For Accordion Actions & One Is For Index </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-cn</span> = Display Content None</p >
                                    <p><span cell-f='[-c2-s16-w7]'>-.cd</span> = Hover To Display Content</p >
                                    <p><span cell-f='[-c2-s16-w7]'>-a2</span> = Active Accordion Two</p >
                                </div >
                            </div >
                            <p cell-p='[-t5]' cell-f='[-s15-w7-c2-f5]' cell-t='[-c]' > For Accordion Clicks</p >
                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-c]' > cell - a=[-l]</p >
                            <p cell-p='[-t5]' cell-f='[-s15-w7-c2-f5]' cell-t='[-c]' > For Accordion Contents </p >
                            <p cell-f='[-s15-w7-c2-f5]' cell-t='[-c]' > cell-a=[-c]</p >
                        </div >
                        <div cell-c='[-c20]' class="result" >
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]' > For Accordion Actions</p >
                            <div cell-m='[-t45]' cell-a='[-ac: -cn - a4]' class="" >
                                <div cell-a='[-aa]' class="" >
                                    <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" > Text - col</div >
                                    <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >content</div >
                                </div >
                                <div cell-a='[-aa]' class="" >
                                    <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >Text - col</div >
                                    <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >Content </div >
                                </div >
                                <div cell-a='[-aa]' class="" >
                                    <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >Text - col </div >
                                    <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" > Content</div >
                                </div >
                                <div cell-a='[-aa]' class="" >
                                    <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >Text - col </div >
                                    <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" > Content </div >
                                </div >
                                <div cell-a='[-aa]' class="" >
                                    <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" > Text - col</div >
                                    <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" > Content</div >
                                </div >
                            </div >
                            <div cell-m='[-t45]' class="code-accord" >
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div >
                                <div class="code-content">
                                    <xmp>
                                        <div cell-p='[-t45]' cell-a='[-ac:-cn-a4]' class="">
                                            <div cell-a='[-aa]' class="">
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="">Text-col</div>
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class=""> content</div>
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >Text - col</div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >Content</div >
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >Text - col</div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >Content</div >
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >Text - col </div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >Content</div >
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >Text - col</div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >Content </div >
                                            </div >
                                        </div >
                                    </xmp >
                                </div >
                            </div >
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]' > For Nested Accordion Actions</p >
                            <div cell-m='[-t45]' cell-a='[-ac: -cn - a4]' class="" >
                                <div cell-a='[-aa]' class="" >
                                    <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                        Text - col
                                    </div >
                                    <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                        content
                                    </div >
                                </div >
                                <div cell-a='[-aa]' class="" >
                                    <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                        Text - col
                                    </div >
                                    <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                        Content
                                    </div >
                                </div >
                                <div cell-a='[-aa]' class="" >
                                    <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                        Text - col
                                    </div >
                                    <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                        Content
                                    </div >
                                </div >
                                <div cell-a='[-aa]' class="" >
                                    <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                        Text - col
                                    </div >
                                    <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                        Content
                                    </div >
                                </div >
                                <div cell-a='[-aa]' class="" >
                                    <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                        Text - col
                                    </div >
                                    <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                        <div cell-p='[-t45]' cell-a='[-ac: -cn - a4]' class="" >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                    Text - col
                                                </div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                    content
                                                </div >
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                    Text - col
                                                </div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                    Content
                                                </div >
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                    Text - col
                                                </div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                    Content
                                                </div >
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                    Text - col
                                                </div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                    Content
                                                </div >
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                    Text - col
                                                </div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                    Content
                                                </div >
                                            </div >
                                        </div >
                                    </div >
                                </div >
                            </div >
                            <div cell-m='[-t45]' class="code-accord" >
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div >
                                <div class="code-content">
                                    <xmp>
                                        <div cell-p='[-t45]' cell-a='[-ac:-cn-a4]' class="">
                                            <div cell-a='[-aa]' class="">
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="">
                                                    Text-col
                                                </div>
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="">
                                                    content
                                                </div>
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                    Text - col
                                                </div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                    Content
                                                </div >
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                    Text - col
                                                </div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                    Content
                                                </div >
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                    Text - col
                                                </div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                    Content
                                                </div >
                                            </div >
                                            <div cell-a='[-aa]' class="" >
                                                <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                    Text - col
                                                </div >
                                                <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                    <div cell-p='[-t45]' cell-a='[-ac: -cn - a4]' class="" >
                                                        <div cell-a='[-aa]' class="" >
                                                            <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                                Text - col
                                                            </div >
                                                            <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                                content
                                                            </div >
                                                        </div >
                                                        <div cell-a='[-aa]' class="" >
                                                            <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                                Text - col
                                                            </div >
                                                            <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                                Content
                                                            </div >
                                                        </div >
                                                        <div cell-a='[-aa]' class="" >
                                                            <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                                Text - col
                                                            </div >
                                                            <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                                Content
                                                            </div >
                                                        </div >
                                                        <div cell-a='[-aa]' class="" >
                                                            <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                                Text - col
                                                            </div >
                                                            <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                                Content
                                                            </div >
                                                        </div >
                                                        <div cell-a='[-aa]' class="" >
                                                            <div cell-a='[-l]' cell-p='[-p25]' cell-bg='[-c4]' class="" >
                                                                Text - col
                                                            </div >
                                                            <div cell-a='[-c]' cell-p='[-p25]' cell-bg='[-c1]' class="" >
                                                                Content
                                                            </div >
                                                        </div >
                                                    </div >
                                                </div >
                                            </div >
                                        </div >
                                    </xmp >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        );
    }
}

export default A;