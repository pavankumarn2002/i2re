import React, { Component } from "react";
export class Pc extends Component {
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
                            <p cell-p='[-t5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>For Page
                                To page
                                Content Transfer(Ajax-Layout)
                            </p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-pc
                            </p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca-cc]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-pcPage</span> = Is An Array With Page Paths In Layout Page According To pc Index</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-pc1(1):-re</span> = Page One &
                                        Receives Content One From <span
                                            cell-f='[-c2-s16-w7]'>-pc1(1):-se</span> </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-pc1(1):-se</span> = Page One & Sends Content One To <span cell-f='[-c2-s16-w7]'>-pc1(1):-re</span> </p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pc=[-pc1(1):-re]</span> For
                                        Receiving Content</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pc=[-pa1(1):-se]</span> For Sending Content</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Pc;