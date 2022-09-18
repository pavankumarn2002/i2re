import React, { Component } from "react";
export class Pa extends Component {
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
                                Actions
                            </p>
                            <p cell-p='[-b5]' cell-f='[-s25-w7-c2-f5]' cell-ts='[-br5]' cell-t='[-c]'>cell-pa
                            </p>
                        </div>
                    </div>
                </div>
                <div class="title-content">
                    <div cell-Q='[-q]' class=" ">
                        <div cell-c='[-c20]' cell-f='[-s12-w9]' class="values">
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-pa1:</span> = For Page actions & 1 Act
                                        As Index</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-to</span> = For Toggle Actions</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-sh</span> = For Show & Hide Actions
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ih</span> = For Individual Show & Hide
                                        Actions</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ec1</span> = For Element One Click</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ea1</span> = For Element One Action
                                    </p>
                                    <p><span cell-f='[-c2-s16-w7]'>-su-ec2</span> = For Sub Element One
                                        Click</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-su-ea2</span> = For Sub Element One
                                        Action</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-sp-ec2</span> = For Super Element One
                                        Click</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-sp-ea2</span> = For Super Element One
                                        Action</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ma-ec2</span> = For Macro Element One
                                        Click</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ma-ea2</span> = For Macro Element One
                                        Action</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-mi-ec2</span> = For Micro Element One
                                        Click</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-mi-ea2</span>= For Micro Element One
                                        Action</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-a1</span> = For Element Action One In
                                        Active State</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-su2</span> = For Sub Element Action
                                        Two In Active State</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-sp3</span> = For Super Element Action
                                        Three In Active State</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-ma4</span> = For Macro Element Action
                                        Four In Active State</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p><span cell-f='[-c2-s16-w7]'>-mi5</span> = For Micro Element Action
                                        Five In Active State</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-cn</span> = For ea Display None</p>
                                    <p><span cell-f='[-c2-s16-w7]'>-.cd</span> = On Hover To Display
                                        Content</p>
                                </div>
                            </div>
                            <div cell-Q='[-q-sb]' class="text-area">
                                <div cell-c='[-ca]' class="text-col">
                                    <p cell-p='[-t5-b5]' cell-f='[-s18-w7-c2-f5]' cell-t='[-c]'>For Page Actions</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pa=[-pa1:]</span> For Page Actions</p>

                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pa=[-ec1(1)]</span> For Element Click</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pa=[-ea1(1)]</span> For Element Action</p>

                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p cell-p='[-t5-b5]' cell-f='[-s18-w7-c2-f5]' cell-t='[-c]'>For Page Actions @ Sub Level</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pa=[-su-ec1(1)]</span> For Sub Element Click</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pa=[-su-ea1(1)]</span> For Sub Element Action</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p cell-p='[-t5-b5]' cell-f='[-s18-w7-c2-f5]' cell-t='[-c]'>For Page Actions @ Super Sub Level</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pa=[-sp-ec1(1)]</span> For Super Sub Element Click</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pa=[-sp-ea1(1)]</span> For Super Sub Element Action</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p cell-p='[-t5-b5]' cell-f='[-s18-w7-c2-f5]' cell-t='[-c]'>For Page Actions @ Macro Level</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pa=[-ma-ec1(1)]</span> For Macro Element Click</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pa=[-ma-ea1(1)]</span> For Macro Element Action</p>
                                </div>
                                <div cell-c='[-ca]' class="text-col">
                                    <p cell-p='[-t5-b5]' cell-f='[-s18-w7-c2-f5]' cell-t='[-c]'>For Page Actions @ Micro Level</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pa=[-mi-ec1(1)]</span> For Micro Element Click</p>
                                    <p><span cell-f='[-s16-w7-c2-f5]'>cell-pa=[-mi-ea1(1)]</span> For Micro Element Action</p>
                                </div>
                            </div>
                        </div>
                        <div cell-c='[-c20]' class="result">
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Div Page Actions</p>
                            <div cell-pa="[-pa:-cn-a5-su5-sp5-ma5-mi5]" cell-c="[-c20]" cell-m="[-t45]"
                                cell-p="[-p8]" class="pa-output">
                                <div cell-q="[-q]" class="">
                                    <div cell-c="[-co]" cell-pa="[-ec(1)]" cell-bg="[-c1]" class="">
                                        click-1</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(2)]" cell-bg="[-c3]" class="">
                                        click-2</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(3)]" cell-bg="[-c5]" class="">
                                        click-3</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(4)]" cell-bg="[-c4]" class="">
                                        click-4</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(5)]" cell-bg="[-c2]" class="">
                                        click-5</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(6)]" cell-bg="[-c1]" class="">
                                        click-6</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(7)]" cell-bg="[-c3]" class="">
                                        click-7</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(8)]" cell-bg="[-c5]" class="">
                                        click-8</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(9)]" cell-bg="[-c4]" class="">
                                        click-9</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(10)]" cell-bg="[-c2]" class="">
                                        click-10</div>
                                </div>
                                <div cell-c="[-c20]" cell-p="[-p2]" cell-bg="[-c4]" class="">
                                    Page<div cell-pa="[-ea(10)]" cell-bg="[-c4]" class="">
                                        action-10</div>
                                    <div cell-pa="[-ea(9)]" cell-bg="[-c2]" class="">
                                        action-9</div>
                                    <div cell-pa="[-ea(8)]" cell-bg="[-c1]" class="">
                                        action-8</div>
                                    <div cell-pa="[-ea(7)]" cell-bg="[-c3]" class="">
                                        action-7</div>
                                    <div cell-pa="[-ea(6)]" cell-bg="[-c5]" class="">
                                        action-6</div>
                                    <div cell-pa="[-ea(5)]" cell-bg="[-c4]" class="">
                                        <div cell-p="[-p2]" class="">
                                            <div cell-q="[-q]" class="">
                                                <div cell-c="[-co]" cell-pa="[-su-ec(1)]" cell-bg="[-c1]"
                                                    class="">
                                                    click-1</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(2)]" cell-bg="[-c3]"
                                                    class="">
                                                    click-2</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(3)]" cell-bg="[-c5]"
                                                    class="">
                                                    click-3</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(4)]" cell-bg="[-c4]"
                                                    class="">
                                                    click-4</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(5)]" cell-bg="[-c2]"
                                                    class="">
                                                    click-5</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(6)]" cell-bg="[-c1]"
                                                    class="">
                                                    click-6</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(7)]" cell-bg="[-c3]"
                                                    class="">
                                                    click-7</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(8)]" cell-bg="[-c5]"
                                                    class="">
                                                    click-8</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(9)]" cell-bg="[-c4]"
                                                    class="">
                                                    click-9</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(10)]" cell-bg="[-c2]"
                                                    class="">
                                                    click-10</div>
                                            </div>
                                            <div cell-c="[-c20]" class="">
                                                Sub-Page<div cell-pa="[-su-ea(10)]" cell-bg="[-c4]"
                                                    class="">
                                                    action-10</div>
                                                <div cell-pa="[-su-ea(9)]" cell-bg="[-c2]" class="">
                                                    action-9</div>
                                                <div cell-pa="[-su-ea(8)]" cell-bg="[-c1]" class="">
                                                    action-8</div>
                                                <div cell-pa="[-su-ea(7)]" cell-bg="[-c3]" class="">
                                                    action-7</div>
                                                <div cell-pa="[-su-ea(6)]" cell-bg="[-c5]" class="">
                                                    action-6</div>
                                                <div cell-pa="[-su-ea(5)]" cell-bg="[-c4]" class="">
                                                    <div cell-c="[-c20]" cell-p="[-p2]" class="">
                                                        <div cell-q="[-q]" class="">
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(1)]"
                                                                cell-bg="[-c1]" class="">
                                                                click-1</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(2)]"
                                                                cell-bg="[-c3]" class="">
                                                                click-2</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(3)]"
                                                                cell-bg="[-c5]" class="">
                                                                click-3</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(4)]"
                                                                cell-bg="[-c4]" class="">
                                                                click-4</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(5)]"
                                                                cell-bg="[-c2]" class="">
                                                                click-5</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(6)]"
                                                                cell-bg="[-c1]" class="">
                                                                click-6</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(7)]"
                                                                cell-bg="[-c3]" class="">
                                                                click-7</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(8)]"
                                                                cell-bg="[-c5]" class="">
                                                                click-8</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(9)]"
                                                                cell-bg="[-c4]" class="">
                                                                click-9</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(10)]"
                                                                cell-bg="[-c2]" class="">
                                                                click-10</div>
                                                        </div>
                                                        <div cell-c="[-c20]" class="">
                                                            Sup-Page<div cell-pa="[-sp-ea(10)]"
                                                                cell-bg="[-c4]" class="">
                                                                action-10</div>
                                                            <div cell-pa="[-sp-ea(9)]" cell-bg="[-c2]"
                                                                class="">
                                                                action-9</div>
                                                            <div cell-pa="[-sp-ea(8)]" cell-bg="[-c1]"
                                                                class="">
                                                                action-8</div>
                                                            <div cell-pa="[-sp-ea(7)]" cell-bg="[-c3]"
                                                                class="">
                                                                action-7</div>
                                                            <div cell-pa="[-sp-ea(6)]" cell-bg="[-c5]"
                                                                class="">
                                                                action-6</div>
                                                            <div cell-pa="[-sp-ea(5)]" cell-bg="[-c4]"
                                                                class="">
                                                                <div cell-c="[-c20]" cell-p="[-p2]"
                                                                    class="">
                                                                    <div cell-q="[-q]" class="">
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(1)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            click-1
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(2)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            click-2
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(3)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            click-3
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(4)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            click-4
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(5)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            click-5
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(6)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            click-6
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(7)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            click-7
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(8)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            click-8
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(9)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            click-9
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(10)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            click-10
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c="[-c20]" class="">
                                                                        Macro-Page<div
                                                                            cell-pa="[-ma-ea(10)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            action-10
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(9)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            action-9
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(8)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            action-8
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(7)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            action-7
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(6)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            action-6
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(5)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            <div cell-c="[-c20]"
                                                                                cell-p="[-p2]" class="">
                                                                                <div cell-q="[-q]" class="">
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(1)]"
                                                                                        cell-bg="[-c1]"
                                                                                        class="">
                                                                                        click-1
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(2)]"
                                                                                        cell-bg="[-c3]"
                                                                                        class="">
                                                                                        click-2
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(3)]"
                                                                                        cell-bg="[-c5]"
                                                                                        class="">
                                                                                        click-3
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(4)]"
                                                                                        cell-bg="[-c4]"
                                                                                        class="">
                                                                                        click-4
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(5)]"
                                                                                        cell-bg="[-c2]"
                                                                                        class="">
                                                                                        click-5
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(6)]"
                                                                                        cell-bg="[-c1]"
                                                                                        class="">
                                                                                        click-6
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(7)]"
                                                                                        cell-bg="[-c3]"
                                                                                        class="">
                                                                                        click-7
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(8)]"
                                                                                        cell-bg="[-c5]"
                                                                                        class="">
                                                                                        click-8
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(9)]"
                                                                                        cell-bg="[-c4]"
                                                                                        class="">
                                                                                        click-9
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(10)]"
                                                                                        cell-bg="[-c2]"
                                                                                        class="">
                                                                                        click-10
                                                                                    </div>
                                                                                </div>
                                                                                <div cell-c="[-c20]"
                                                                                    class="">
                                                                                    Micro-Page
                                                                                    <div cell-pa="[-mi-ea(10)]"
                                                                                        cell-bg="[-c4]"
                                                                                        class="">
                                                                                        action-10
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(9)]"
                                                                                        cell-bg="[-c2]"
                                                                                        class="">
                                                                                        action-9
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(8)]"
                                                                                        cell-bg="[-c1]"
                                                                                        class="">
                                                                                        action-8
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(7)]"
                                                                                        cell-bg="[-c3]"
                                                                                        class="">
                                                                                        action-7
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(6)]"
                                                                                        cell-bg="[-c5]"
                                                                                        class="">
                                                                                        action-6
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(5)]"
                                                                                        cell-bg="[-c4]"
                                                                                        class="">
                                                                                        action-5
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(4)]"
                                                                                        cell-bg="[-c2]"
                                                                                        class="">
                                                                                        action-4
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(3)]"
                                                                                        cell-bg="[-c1]"
                                                                                        class="">
                                                                                        action-3
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(2)]"
                                                                                        cell-bg="[-c3]"
                                                                                        class="">
                                                                                        action-2
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(1)]"
                                                                                        cell-bg="[-c5]"
                                                                                        class="">
                                                                                        action-1
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(4)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            action-4
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(3)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            action-3
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(2)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            action-2
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(1)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            action-1
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-pa="[-sp-ea(4)]" cell-bg="[-c2]"
                                                                class="">
                                                                action-4</div>
                                                            <div cell-pa="[-sp-ea(3)]" cell-bg="[-c1]"
                                                                class="">
                                                                action-3</div>
                                                            <div cell-pa="[-sp-ea(2)]" cell-bg="[-c3]"
                                                                class="">
                                                                action-2</div>
                                                            <div cell-pa="[-sp-ea(1)]" cell-bg="[-c5]"
                                                                class="">
                                                                action-1</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-pa="[-su-ea(4)]" cell-bg="[-c2]" class="">
                                                    action-4</div>
                                                <div cell-pa="[-su-ea(3)]" cell-bg="[-c1]" class="">
                                                    action-3</div>
                                                <div cell-pa="[-su-ea(2)]" cell-bg="[-c3]" class="">
                                                    action-2</div>
                                                <div cell-pa="[-su-ea(1)]" cell-bg="[-c5]" class="">
                                                    action-1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-pa="[-ea(4)]" cell-bg="[-c2]" class="">
                                        action-4</div>
                                    <div cell-pa="[-ea(3)]" cell-bg="[-c1]" class="">
                                        action-3</div>
                                    <div cell-pa="[-ea(2)]" cell-bg="[-c3]" class="">
                                        action-2</div>
                                    <div cell-pa="[-ea(1)]" cell-bg="[-c5]" class="">
                                        action-1</div>
                                </div>
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-pa="[-pa:-cn-a5-su5-sp5-ma5-mi5]" cell-c="[-c20]" cell-m="[-t45]"
                                            cell-p="[-p8]" class="pa-output">
                                            <div cell-q="[-q]" class="">
                                                <div cell-c="[-co]" cell-pa="[-ec(1)]" cell-bg="[-c1]" class="">
                                                    click-1</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(2)]" cell-bg="[-c3]" class="">
                                                    click-2</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(3)]" cell-bg="[-c5]" class="">
                                                    click-3</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(4)]" cell-bg="[-c4]" class="">
                                                    click-4</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(5)]" cell-bg="[-c2]" class="">
                                                    click-5</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(6)]" cell-bg="[-c1]" class="">
                                                    click-6</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(7)]" cell-bg="[-c3]" class="">
                                                    click-7</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(8)]" cell-bg="[-c5]" class="">
                                                    click-8</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(9)]" cell-bg="[-c4]" class="">
                                                    click-9</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(10)]" cell-bg="[-c2]" class="">
                                                    click-10</div>
                                            </div>
                                            <div cell-c="[-c20]" cell-p="[-p2]" cell-bg="[-c4]" class="">
                                                Page<div cell-pa="[-ea(10)]" cell-bg="[-c4]" class="">
                                                    action-10</div>
                                                <div cell-pa="[-ea(9)]" cell-bg="[-c2]" class="">
                                                    action-9</div>
                                                <div cell-pa="[-ea(8)]" cell-bg="[-c1]" class="">
                                                    action-8</div>
                                                <div cell-pa="[-ea(7)]" cell-bg="[-c3]" class="">
                                                    action-7</div>
                                                <div cell-pa="[-ea(6)]" cell-bg="[-c5]" class="">
                                                    action-6</div>
                                                <div cell-pa="[-ea(5)]" cell-bg="[-c4]" class="">
                                                    <div cell-p="[-p2]" class="">
                                                        <div cell-q="[-q]" class="">
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(1)]" cell-bg="[-c1]"
                                                                class="">
                                                                click-1</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(2)]" cell-bg="[-c3]"
                                                                class="">
                                                                click-2</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(3)]" cell-bg="[-c5]"
                                                                class="">
                                                                click-3</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(4)]" cell-bg="[-c4]"
                                                                class="">
                                                                click-4</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(5)]" cell-bg="[-c2]"
                                                                class="">
                                                                click-5</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(6)]" cell-bg="[-c1]"
                                                                class="">
                                                                click-6</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(7)]" cell-bg="[-c3]"
                                                                class="">
                                                                click-7</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(8)]" cell-bg="[-c5]"
                                                                class="">
                                                                click-8</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(9)]" cell-bg="[-c4]"
                                                                class="">
                                                                click-9</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(10)]" cell-bg="[-c2]"
                                                                class="">
                                                                click-10</div>
                                                        </div>
                                                        <div cell-c="[-c20]" class="">
                                                            Sub-Page<div cell-pa="[-su-ea(10)]" cell-bg="[-c4]"
                                                                class="">
                                                                action-10</div>
                                                            <div cell-pa="[-su-ea(9)]" cell-bg="[-c2]" class="">
                                                                action-9</div>
                                                            <div cell-pa="[-su-ea(8)]" cell-bg="[-c1]" class="">
                                                                action-8</div>
                                                            <div cell-pa="[-su-ea(7)]" cell-bg="[-c3]" class="">
                                                                action-7</div>
                                                            <div cell-pa="[-su-ea(6)]" cell-bg="[-c5]" class="">
                                                                action-6</div>
                                                            <div cell-pa="[-su-ea(5)]" cell-bg="[-c4]" class="">
                                                                <div cell-c="[-c20]" cell-p="[-p2]" class="">
                                                                    <div cell-q="[-q]" class="">
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(1)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            click-1</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(2)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            click-2</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(3)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            click-3</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(4)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            click-4</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(5)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            click-5</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(6)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            click-6</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(7)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            click-7</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(8)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            click-8</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(9)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            click-9</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(10)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            click-10</div>
                                                                    </div>
                                                                    <div cell-c="[-c20]" class="">
                                                                        Sup-Page<div cell-pa="[-sp-ea(10)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            action-10</div>
                                                                        <div cell-pa="[-sp-ea(9)]" cell-bg="[-c2]"
                                                                            class="">
                                                                            action-9</div>
                                                                        <div cell-pa="[-sp-ea(8)]" cell-bg="[-c1]"
                                                                            class="">
                                                                            action-8</div>
                                                                        <div cell-pa="[-sp-ea(7)]" cell-bg="[-c3]"
                                                                            class="">
                                                                            action-7</div>
                                                                        <div cell-pa="[-sp-ea(6)]" cell-bg="[-c5]"
                                                                            class="">
                                                                            action-6</div>
                                                                        <div cell-pa="[-sp-ea(5)]" cell-bg="[-c4]"
                                                                            class="">
                                                                            <div cell-c="[-c20]" cell-p="[-p2]"
                                                                                class="">
                                                                                <div cell-q="[-q]" class="">
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(1)]"
                                                                                        cell-bg="[-c1]" class="">
                                                                                        click-1
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(2)]"
                                                                                        cell-bg="[-c3]" class="">
                                                                                        click-2
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(3)]"
                                                                                        cell-bg="[-c5]" class="">
                                                                                        click-3
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(4)]"
                                                                                        cell-bg="[-c4]" class="">
                                                                                        click-4
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(5)]"
                                                                                        cell-bg="[-c2]" class="">
                                                                                        click-5
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(6)]"
                                                                                        cell-bg="[-c1]" class="">
                                                                                        click-6
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(7)]"
                                                                                        cell-bg="[-c3]" class="">
                                                                                        click-7
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(8)]"
                                                                                        cell-bg="[-c5]" class="">
                                                                                        click-8
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(9)]"
                                                                                        cell-bg="[-c4]" class="">
                                                                                        click-9
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(10)]"
                                                                                        cell-bg="[-c2]" class="">
                                                                                        click-10
                                                                                    </div>
                                                                                </div>
                                                                                <div cell-c="[-c20]" class="">
                                                                                    Macro-Page<div
                                                                                        cell-pa="[-ma-ea(10)]"
                                                                                        cell-bg="[-c4]" class="">
                                                                                        action-10
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(9)]"
                                                                                        cell-bg="[-c2]" class="">
                                                                                        action-9
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(8)]"
                                                                                        cell-bg="[-c1]" class="">
                                                                                        action-8
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(7)]"
                                                                                        cell-bg="[-c3]" class="">
                                                                                        action-7
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(6)]"
                                                                                        cell-bg="[-c5]" class="">
                                                                                        action-6
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(5)]"
                                                                                        cell-bg="[-c4]" class="">
                                                                                        <div cell-c="[-c20]"
                                                                                            cell-p="[-p2]" class="">
                                                                                            <div cell-q="[-q]" class="">
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(1)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    click-1
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(2)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    click-2
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(3)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    click-3
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(4)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    click-4
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(5)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    click-5
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(6)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    click-6
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(7)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    click-7
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(8)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    click-8
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(9)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    click-9
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(10)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    click-10
                                                                                                </div>
                                                                                            </div>
                                                                                            <div cell-c="[-c20]"
                                                                                                class="">
                                                                                                Micro-Page
                                                                                                <div cell-pa="[-mi-ea(10)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    action-10
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(9)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    action-9
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(8)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    action-8
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(7)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    action-7
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(6)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    action-6
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(5)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    action-5
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(4)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    action-4
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(3)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    action-3
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(2)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    action-2
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(1)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    action-1
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(4)]"
                                                                                        cell-bg="[-c2]" class="">
                                                                                        action-4
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(3)]"
                                                                                        cell-bg="[-c1]" class="">
                                                                                        action-3
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(2)]"
                                                                                        cell-bg="[-c3]" class="">
                                                                                        action-2
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(1)]"
                                                                                        cell-bg="[-c5]" class="">
                                                                                        action-1
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div cell-pa="[-sp-ea(4)]" cell-bg="[-c2]"
                                                                            class="">
                                                                            action-4</div>
                                                                        <div cell-pa="[-sp-ea(3)]" cell-bg="[-c1]"
                                                                            class="">
                                                                            action-3</div>
                                                                        <div cell-pa="[-sp-ea(2)]" cell-bg="[-c3]"
                                                                            class="">
                                                                            action-2</div>
                                                                        <div cell-pa="[-sp-ea(1)]" cell-bg="[-c5]"
                                                                            class="">
                                                                            action-1</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-pa="[-su-ea(4)]" cell-bg="[-c2]" class="">
                                                                action-4</div>
                                                            <div cell-pa="[-su-ea(3)]" cell-bg="[-c1]" class="">
                                                                action-3</div>
                                                            <div cell-pa="[-su-ea(2)]" cell-bg="[-c3]" class="">
                                                                action-2</div>
                                                            <div cell-pa="[-su-ea(1)]" cell-bg="[-c5]" class="">
                                                                action-1</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-pa="[-ea(4)]" cell-bg="[-c2]" class="">
                                                    action-4</div>
                                                <div cell-pa="[-ea(3)]" cell-bg="[-c1]" class="">
                                                    action-3</div>
                                                <div cell-pa="[-ea(2)]" cell-bg="[-c3]" class="">
                                                    action-2</div>
                                                <div cell-pa="[-ea(1)]" cell-bg="[-c5]" class="">
                                                    action-1</div>
                                            </div>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Table Page Actions</p>
                            <div cell-ta="[-ta]" class="">
                                <table cell-pa="[-pa:-to-cn-a5-su5-sp5-ma5-mi5]" cell-bg="[-c4]"
                                    cell-m="[-t45]" class="table">
                                    <tr cell-pa="[-ec(5)]">
                                        <td>
                                            1</td>
                                        <td>
                                            2</td>
                                        <td>
                                            3</td>
                                        <td>
                                            4</td>
                                        <td>
                                            5</td>
                                    </tr>
                                    <tr cell-pa="[-ea(5)]">
                                        <td colspan="5">
                                            <table cell-bg="[-c3]" cell-m="[-t45]"
                                                class="table page-action">
                                                <tr cell-pa="[-su-ec(5)]">
                                                    <td>
                                                        1</td>
                                                    <td>
                                                        2</td>
                                                    <td>
                                                        3</td>
                                                    <td>
                                                        4</td>
                                                    <td>
                                                        5</td>
                                                </tr>
                                                <tr cell-pa="[-su-ea(5)]">
                                                    <td colspan="5">
                                                        <table cell-bg="[-c4]" cell-m="[-t45]"
                                                            class="table page-action">
                                                            <tr cell-pa="[-sp-ec(5)]">
                                                                <td>
                                                                    1</td>
                                                                <td>
                                                                    2</td>
                                                                <td>
                                                                    3</td>
                                                                <td>
                                                                    4</td>
                                                                <td>
                                                                    5</td>
                                                            </tr>
                                                            <tr cell-pa="[-sp-ea(5)]">
                                                                <td colspan="5">
                                                                    <table cell-bg="[-c2]" cell-m="[-t45]"
                                                                        class="table page-action">
                                                                        <tr cell-pa="[-ma-ec(5)]">
                                                                            <td>
                                                                                1</td>
                                                                            <td>
                                                                                2</td>
                                                                            <td>
                                                                                3</td>
                                                                            <td>
                                                                                4</td>
                                                                            <td>
                                                                                5</td>
                                                                        </tr>
                                                                        <tr cell-pa="[-ma-ea(5)]">
                                                                            <td colspan="5">
                                                                                <table cell-bg="[-c1]"
                                                                                    cell-m="[-t45]"
                                                                                    class="table page-action">
                                                                                    <tr
                                                                                        cell-pa="[-mi-ec(5)]">
                                                                                        <td>
                                                                                            1
                                                                                        </td>
                                                                                        <td>
                                                                                            2
                                                                                        </td>
                                                                                        <td>
                                                                                            3
                                                                                        </td>
                                                                                        <td>
                                                                                            4
                                                                                        </td>
                                                                                        <td>
                                                                                            5
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr
                                                                                        cell-pa="[-mi-ea(5)]">
                                                                                        <td colspan="5">
                                                                                            <table
                                                                                                cell-bg="[-c3]"
                                                                                                cell-m="[-t45]"
                                                                                                class="table page-action">
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        content
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        content
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        content
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        content
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        content
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div cell-m='[-t45]' class="code-accord" >
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div >
                                <div class="code-content">
                                    <xmp>
                                        <div cell-ta="[-ta]" class="">
                                            <table cell-pa="[-pa:-to-cn-a5-su5-sp5-ma5-mi5]" cell-bg="[-c4]"
                                                cell-m="[-t45]" class="table">
                                                <tr cell-pa="[-ec(5)]">
                                                    <td>
                                                        1</td>
                                                    <td>
                                                        2</td>
                                                    <td>
                                                        3</td>
                                                    <td>
                                                        4</td>
                                                    <td>
                                                        5</td>
                                                </tr>
                                                <tr cell-pa="[-ea(5)]">
                                                    <td colspan="5">
                                                        <table cell-bg="[-c3]" cell-m="[-t45]"
                                                            class="table page-action">
                                                            <tr cell-pa="[-su-ec(5)]">
                                                                <td>
                                                                    1</td>
                                                                <td>
                                                                    2</td>
                                                                <td>
                                                                    3</td>
                                                                <td>
                                                                    4</td>
                                                                <td>
                                                                    5</td>
                                                            </tr>
                                                            <tr cell-pa="[-su-ea(5)]">
                                                                <td colspan="5">
                                                                    <table cell-bg="[-c4]" cell-m="[-t45]"
                                                                        class="table page-action">
                                                                        <tr cell-pa="[-sp-ec(5)]">
                                                                            <td>
                                                                                1</td>
                                                                            <td>
                                                                                2</td>
                                                                            <td>
                                                                                3</td>
                                                                            <td>
                                                                                4</td>
                                                                            <td>
                                                                                5</td>
                                                                        </tr>
                                                                        <tr cell-pa="[-sp-ea(5)]">
                                                                            <td colspan="5">
                                                                                <table cell-bg="[-c2]" cell-m="[-t45]"
                                                                                    class="table page-action">
                                                                                    <tr cell-pa="[-ma-ec(5)]">
                                                                                        <td>
                                                                                            1</td>
                                                                                        <td>
                                                                                            2</td>
                                                                                        <td>
                                                                                            3</td>
                                                                                        <td>
                                                                                            4</td>
                                                                                        <td>
                                                                                            5</td>
                                                                                    </tr>
                                                                                    <tr cell-pa="[-ma-ea(5)]">
                                                                                        <td colspan="5">
                                                                                            <table cell-bg="[-c1]"
                                                                                                cell-m="[-t45]"
                                                                                                class="table page-action">
                                                                                                <tr
                                                                                                    cell-pa="[-mi-ec(5)]">
                                                                                                    <td>
                                                                                                        1
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        2
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        3
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        4
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        5
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    cell-pa="[-mi-ea(5)]">
                                                                                                    <td colspan="5">
                                                                                                        <table
                                                                                                            cell-bg="[-c3]"
                                                                                                            cell-m="[-t45]"
                                                                                                            class="table page-action">
                                                                                                            <tr>
                                                                                                                <td>
                                                                                                                    content
                                                                                                                </td>
                                                                                                                <td>
                                                                                                                    content
                                                                                                                </td>
                                                                                                                <td>
                                                                                                                    content
                                                                                                                </td>
                                                                                                                <td>
                                                                                                                    content
                                                                                                                </td>
                                                                                                                <td>
                                                                                                                    content
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </xmp>
                                </div>
                            </div>
                            <p cell-f='[-s14-w9-c4]' cell-m='[-t45]'>For Nested Page Actions</p>
                            <div cell-pa="[-pa:-cn-a5-su5-sp5-ma5-mi5]" cell-c="[-c20]" cell-m="[-t45]"
                                cell-p="[-p8]" class="pa-output">
                                <div cell-q="[-q]" class="">
                                    <div cell-c="[-co]" cell-pa="[-ec(1)]" cell-bg="[-c1]" class="">
                                        click-1</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(2)]" cell-bg="[-c3]" class="">
                                        click-2</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(3)]" cell-bg="[-c5]" class="">
                                        click-3</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(4)]" cell-bg="[-c4]" class="">
                                        click-4</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(5)]" cell-bg="[-c2]" class="">
                                        click-5</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(6)]" cell-bg="[-c1]" class="">
                                        click-6</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(7)]" cell-bg="[-c3]" class="">
                                        click-7</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(8)]" cell-bg="[-c5]" class="">
                                        click-8</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(9)]" cell-bg="[-c4]" class="">
                                        click-9</div>
                                    <div cell-c="[-co]" cell-pa="[-ec(10)]" cell-bg="[-c2]" class="">
                                        click-10</div>
                                </div>
                                <div cell-c="[-c20]" cell-p="[-p2]" cell-bg="[-c4]" class="">
                                    Page<div cell-pa="[-ea(10)]" cell-bg="[-c4]" class="">
                                        action-10</div>
                                    <div cell-pa="[-ea(9)]" cell-bg="[-c2]" class="">
                                        action-9</div>
                                    <div cell-pa="[-ea(8)]" cell-bg="[-c1]" class="">
                                        action-8</div>
                                    <div cell-pa="[-ea(7)]" cell-bg="[-c3]" class="">
                                        action-7</div>
                                    <div cell-pa="[-ea(6)]" cell-bg="[-c5]" class="">
                                        action-6</div>
                                    <div cell-pa="[-ea(5)]" cell-bg="[-c4]" class="">
                                        <div cell-p="[-p2]" class="">
                                            <div cell-q="[-q]" class="">
                                                <div cell-c="[-co]" cell-pa="[-su-ec(1)]" cell-bg="[-c1]"
                                                    class="">
                                                    click-1</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(2)]" cell-bg="[-c3]"
                                                    class="">
                                                    click-2</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(3)]" cell-bg="[-c5]"
                                                    class="">
                                                    click-3</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(4)]" cell-bg="[-c4]"
                                                    class="">
                                                    click-4</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(5)]" cell-bg="[-c2]"
                                                    class="">
                                                    click-5</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(6)]" cell-bg="[-c1]"
                                                    class="">
                                                    click-6</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(7)]" cell-bg="[-c3]"
                                                    class="">
                                                    click-7</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(8)]" cell-bg="[-c5]"
                                                    class="">
                                                    click-8</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(9)]" cell-bg="[-c4]"
                                                    class="">
                                                    click-9</div>
                                                <div cell-c="[-co]" cell-pa="[-su-ec(10)]" cell-bg="[-c2]"
                                                    class="">
                                                    click-10</div>
                                            </div>
                                            <div cell-c="[-c20]" class="">
                                                Sub-Page<div cell-pa="[-su-ea(10)]" cell-bg="[-c4]"
                                                    class="">
                                                    action-10</div>
                                                <div cell-pa="[-su-ea(9)]" cell-bg="[-c2]" class="">
                                                    action-9</div>
                                                <div cell-pa="[-su-ea(8)]" cell-bg="[-c1]" class="">
                                                    action-8</div>
                                                <div cell-pa="[-su-ea(7)]" cell-bg="[-c3]" class="">
                                                    action-7</div>
                                                <div cell-pa="[-su-ea(6)]" cell-bg="[-c5]" class="">
                                                    action-6</div>
                                                <div cell-pa="[-su-ea(5)]" cell-bg="[-c4]" class="">
                                                    <div cell-c="[-c20]" cell-p="[-p2]" class="">
                                                        <div cell-q="[-q]" class="">
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(1)]"
                                                                cell-bg="[-c1]" class="">
                                                                click-1</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(2)]"
                                                                cell-bg="[-c3]" class="">
                                                                click-2</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(3)]"
                                                                cell-bg="[-c5]" class="">
                                                                click-3</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(4)]"
                                                                cell-bg="[-c4]" class="">
                                                                click-4</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(5)]"
                                                                cell-bg="[-c2]" class="">
                                                                click-5</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(6)]"
                                                                cell-bg="[-c1]" class="">
                                                                click-6</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(7)]"
                                                                cell-bg="[-c3]" class="">
                                                                click-7</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(8)]"
                                                                cell-bg="[-c5]" class="">
                                                                click-8</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(9)]"
                                                                cell-bg="[-c4]" class="">
                                                                click-9</div>
                                                            <div cell-c="[-co]" cell-pa="[-sp-ec(10)]"
                                                                cell-bg="[-c2]" class="">
                                                                click-10</div>
                                                        </div>
                                                        <div cell-c="[-c20]" class="">
                                                            Sup-Page<div cell-pa="[-sp-ea(10)]"
                                                                cell-bg="[-c4]" class="">
                                                                action-10</div>
                                                            <div cell-pa="[-sp-ea(9)]" cell-bg="[-c2]"
                                                                class="">
                                                                action-9</div>
                                                            <div cell-pa="[-sp-ea(8)]" cell-bg="[-c1]"
                                                                class="">
                                                                action-8</div>
                                                            <div cell-pa="[-sp-ea(7)]" cell-bg="[-c3]"
                                                                class="">
                                                                action-7</div>
                                                            <div cell-pa="[-sp-ea(6)]" cell-bg="[-c5]"
                                                                class="">
                                                                action-6</div>
                                                            <div cell-pa="[-sp-ea(5)]" cell-bg="[-c4]"
                                                                class="">
                                                                <div cell-c="[-c20]" cell-p="[-p2]"
                                                                    class="">
                                                                    <div cell-q="[-q]" class="">
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(1)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            click-1
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(2)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            click-2
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(3)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            click-3
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(4)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            click-4
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(5)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            click-5
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(6)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            click-6
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(7)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            click-7
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(8)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            click-8
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(9)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            click-9
                                                                        </div>
                                                                        <div cell-c="[-co]"
                                                                            cell-pa="[-ma-ec(10)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            click-10
                                                                        </div>
                                                                    </div>
                                                                    <div cell-c="[-c20]" class="">
                                                                        Macro-Page<div
                                                                            cell-pa="[-ma-ea(10)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            action-10
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(9)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            action-9
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(8)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            action-8
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(7)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            action-7
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(6)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            action-6
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(5)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            <div cell-c="[-c20]"
                                                                                cell-p="[-p2]" class="">
                                                                                <div cell-q="[-q]" class="">
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(1)]"
                                                                                        cell-bg="[-c1]"
                                                                                        class="">
                                                                                        click-1
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(2)]"
                                                                                        cell-bg="[-c3]"
                                                                                        class="">
                                                                                        click-2
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(3)]"
                                                                                        cell-bg="[-c5]"
                                                                                        class="">
                                                                                        click-3
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(4)]"
                                                                                        cell-bg="[-c4]"
                                                                                        class="">
                                                                                        click-4
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(5)]"
                                                                                        cell-bg="[-c2]"
                                                                                        class="">
                                                                                        click-5
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(6)]"
                                                                                        cell-bg="[-c1]"
                                                                                        class="">
                                                                                        click-6
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(7)]"
                                                                                        cell-bg="[-c3]"
                                                                                        class="">
                                                                                        click-7
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(8)]"
                                                                                        cell-bg="[-c5]"
                                                                                        class="">
                                                                                        click-8
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(9)]"
                                                                                        cell-bg="[-c4]"
                                                                                        class="">
                                                                                        click-9
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-mi-ec(10)]"
                                                                                        cell-bg="[-c2]"
                                                                                        class="">
                                                                                        click-10
                                                                                    </div>
                                                                                </div>
                                                                                <div cell-c="[-c20]"
                                                                                    class="">
                                                                                    Micro-Page
                                                                                    <div cell-pa="[-mi-ea(10)]"
                                                                                        cell-bg="[-c4]"
                                                                                        class="">
                                                                                        action-10
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(9)]"
                                                                                        cell-bg="[-c2]"
                                                                                        class="">
                                                                                        action-9
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(8)]"
                                                                                        cell-bg="[-c1]"
                                                                                        class="">
                                                                                        action-8
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(7)]"
                                                                                        cell-bg="[-c3]"
                                                                                        class="">
                                                                                        action-7
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(6)]"
                                                                                        cell-bg="[-c5]"
                                                                                        class="">
                                                                                        action-6
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(5)]"
                                                                                        cell-bg="[-c4]"
                                                                                        class="">
                                                                                        <div cell-pa="[-pa:-cn-a5-su5-sp5-ma5-mi5]"
                                                                                            cell-c="[-c20]"
                                                                                            cell-m="[-t45]"
                                                                                            cell-p="[-p8]"
                                                                                            class="pa-output">
                                                                                            <div cell-q="[-q]"
                                                                                                class="">
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-ec(1)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    click-1
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-ec(2)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    click-2
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-ec(3)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    click-3
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-ec(4)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    click-4
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-ec(5)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    click-5
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-ec(6)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    click-6
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-ec(7)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    click-7
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-ec(8)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    click-8
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-ec(9)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    click-9
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-ec(10)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    click-10
                                                                                                </div>
                                                                                            </div>
                                                                                            <div cell-c="[-c20]"
                                                                                                cell-p="[-p2]"
                                                                                                cell-bg="[-c4]"
                                                                                                class="">
                                                                                                Page
                                                                                                <div cell-pa="[-ea(10)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    action-10
                                                                                                </div>
                                                                                                <div cell-pa="[-ea(9)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    action-9
                                                                                                </div>
                                                                                                <div cell-pa="[-ea(8)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    action-8
                                                                                                </div>
                                                                                                <div cell-pa="[-ea(7)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    action-7
                                                                                                </div>
                                                                                                <div cell-pa="[-ea(6)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    action-6
                                                                                                </div>
                                                                                                <div cell-pa="[-ea(5)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    <div cell-p="[-p2]"
                                                                                                        class="">
                                                                                                        <div cell-q="[-q]"
                                                                                                            class="">
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-su-ec(1)]"
                                                                                                                cell-bg="[-c1]"
                                                                                                                class="">
                                                                                                                click-1
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-su-ec(2)]"
                                                                                                                cell-bg="[-c3]"
                                                                                                                class="">
                                                                                                                click-2
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-su-ec(3)]"
                                                                                                                cell-bg="[-c5]"
                                                                                                                class="">
                                                                                                                click-3
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-su-ec(4)]"
                                                                                                                cell-bg="[-c4]"
                                                                                                                class="">
                                                                                                                click-4
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-su-ec(5)]"
                                                                                                                cell-bg="[-c2]"
                                                                                                                class="">
                                                                                                                click-5
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-su-ec(6)]"
                                                                                                                cell-bg="[-c1]"
                                                                                                                class="">
                                                                                                                click-6
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-su-ec(7)]"
                                                                                                                cell-bg="[-c3]"
                                                                                                                class="">
                                                                                                                click-7
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-su-ec(8)]"
                                                                                                                cell-bg="[-c5]"
                                                                                                                class="">
                                                                                                                click-8
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-su-ec(9)]"
                                                                                                                cell-bg="[-c4]"
                                                                                                                class="">
                                                                                                                click-9
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-su-ec(10)]"
                                                                                                                cell-bg="[-c2]"
                                                                                                                class="">
                                                                                                                click-10
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div cell-c="[-c20]"
                                                                                                            class="">
                                                                                                            Sub-Page
                                                                                                            <div cell-pa="[-su-ea(10)]"
                                                                                                                cell-bg="[-c4]"
                                                                                                                class="">
                                                                                                                action-10
                                                                                                            </div>
                                                                                                            <div cell-pa="[-su-ea(9)]"
                                                                                                                cell-bg="[-c2]"
                                                                                                                class="">
                                                                                                                action-9
                                                                                                            </div>
                                                                                                            <div cell-pa="[-su-ea(8)]"
                                                                                                                cell-bg="[-c1]"
                                                                                                                class="">
                                                                                                                action-8
                                                                                                            </div>
                                                                                                            <div cell-pa="[-su-ea(7)]"
                                                                                                                cell-bg="[-c3]"
                                                                                                                class="">
                                                                                                                action-7
                                                                                                            </div>
                                                                                                            <div cell-pa="[-su-ea(6)]"
                                                                                                                cell-bg="[-c5]"
                                                                                                                class="">
                                                                                                                action-6
                                                                                                            </div>
                                                                                                            <div cell-pa="[-su-ea(5)]"
                                                                                                                cell-bg="[-c4]"
                                                                                                                class="">
                                                                                                                <div cell-c="[-c20]"
                                                                                                                    cell-p="[-p2]"
                                                                                                                    class="">
                                                                                                                    <div cell-q="[-q]"
                                                                                                                        class="">
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-sp-ec(1)]"
                                                                                                                            cell-bg="[-c1]"
                                                                                                                            class="">
                                                                                                                            click-1
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-sp-ec(2)]"
                                                                                                                            cell-bg="[-c3]"
                                                                                                                            class="">
                                                                                                                            click-2
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-sp-ec(3)]"
                                                                                                                            cell-bg="[-c5]"
                                                                                                                            class="">
                                                                                                                            click-3
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-sp-ec(4)]"
                                                                                                                            cell-bg="[-c4]"
                                                                                                                            class="">
                                                                                                                            click-4
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-sp-ec(5)]"
                                                                                                                            cell-bg="[-c2]"
                                                                                                                            class="">
                                                                                                                            click-5
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-sp-ec(6)]"
                                                                                                                            cell-bg="[-c1]"
                                                                                                                            class="">
                                                                                                                            click-6
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-sp-ec(7)]"
                                                                                                                            cell-bg="[-c3]"
                                                                                                                            class="">
                                                                                                                            click-7
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-sp-ec(8)]"
                                                                                                                            cell-bg="[-c5]"
                                                                                                                            class="">
                                                                                                                            click-8
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-sp-ec(9)]"
                                                                                                                            cell-bg="[-c4]"
                                                                                                                            class="">
                                                                                                                            click-9
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-sp-ec(10)]"
                                                                                                                            cell-bg="[-c2]"
                                                                                                                            class="">
                                                                                                                            click-10
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div cell-c="[-c20]"
                                                                                                                        class="">
                                                                                                                        Sup-Page
                                                                                                                        <div cell-pa="[-sp-ea(10)]"
                                                                                                                            cell-bg="[-c4]"
                                                                                                                            class="">
                                                                                                                            action-10
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-sp-ea(9)]"
                                                                                                                            cell-bg="[-c2]"
                                                                                                                            class="">
                                                                                                                            action-9
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-sp-ea(8)]"
                                                                                                                            cell-bg="[-c1]"
                                                                                                                            class="">
                                                                                                                            action-8
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-sp-ea(7)]"
                                                                                                                            cell-bg="[-c3]"
                                                                                                                            class="">
                                                                                                                            action-7
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-sp-ea(6)]"
                                                                                                                            cell-bg="[-c5]"
                                                                                                                            class="">
                                                                                                                            action-6
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-sp-ea(5)]"
                                                                                                                            cell-bg="[-c4]"
                                                                                                                            class="">
                                                                                                                            <div cell-c="[-c20]"
                                                                                                                                cell-p="[-p2]"
                                                                                                                                class="">
                                                                                                                                <div cell-q="[-q]"
                                                                                                                                    class="">
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-ma-ec(1)]"
                                                                                                                                        cell-bg="[-c1]"
                                                                                                                                        class="">
                                                                                                                                        click-1
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-ma-ec(2)]"
                                                                                                                                        cell-bg="[-c3]"
                                                                                                                                        class="">
                                                                                                                                        click-2
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-ma-ec(3)]"
                                                                                                                                        cell-bg="[-c5]"
                                                                                                                                        class="">
                                                                                                                                        click-3
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-ma-ec(4)]"
                                                                                                                                        cell-bg="[-c4]"
                                                                                                                                        class="">
                                                                                                                                        click-4
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-ma-ec(5)]"
                                                                                                                                        cell-bg="[-c2]"
                                                                                                                                        class="">
                                                                                                                                        click-5
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-ma-ec(6)]"
                                                                                                                                        cell-bg="[-c1]"
                                                                                                                                        class="">
                                                                                                                                        click-6
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-ma-ec(7)]"
                                                                                                                                        cell-bg="[-c3]"
                                                                                                                                        class="">
                                                                                                                                        click-7
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-ma-ec(8)]"
                                                                                                                                        cell-bg="[-c5]"
                                                                                                                                        class="">
                                                                                                                                        click-8
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-ma-ec(9)]"
                                                                                                                                        cell-bg="[-c4]"
                                                                                                                                        class="">
                                                                                                                                        click-9
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-ma-ec(10)]"
                                                                                                                                        cell-bg="[-c2]"
                                                                                                                                        class="">
                                                                                                                                        click-10
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                                <div cell-c="[-c20]"
                                                                                                                                    class="">
                                                                                                                                    Macro-Page
                                                                                                                                    <div cell-pa="[-ma-ea(10)]"
                                                                                                                                        cell-bg="[-c4]"
                                                                                                                                        class="">
                                                                                                                                        action-10
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-ma-ea(9)]"
                                                                                                                                        cell-bg="[-c2]"
                                                                                                                                        class="">
                                                                                                                                        action-9
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-ma-ea(8)]"
                                                                                                                                        cell-bg="[-c1]"
                                                                                                                                        class="">
                                                                                                                                        action-8
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-ma-ea(7)]"
                                                                                                                                        cell-bg="[-c3]"
                                                                                                                                        class="">
                                                                                                                                        action-7
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-ma-ea(6)]"
                                                                                                                                        cell-bg="[-c5]"
                                                                                                                                        class="">
                                                                                                                                        action-6
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-ma-ea(5)]"
                                                                                                                                        cell-bg="[-c4]"
                                                                                                                                        class="">
                                                                                                                                        <div cell-c="[-c20]"
                                                                                                                                            cell-p="[-p2]"
                                                                                                                                            class="">
                                                                                                                                            <div cell-q="[-q]"
                                                                                                                                                class="">
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-mi-ec(1)]"
                                                                                                                                                    cell-bg="[-c1]"
                                                                                                                                                    class="">
                                                                                                                                                    click-1
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-mi-ec(2)]"
                                                                                                                                                    cell-bg="[-c3]"
                                                                                                                                                    class="">
                                                                                                                                                    click-2
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-mi-ec(3)]"
                                                                                                                                                    cell-bg="[-c5]"
                                                                                                                                                    class="">
                                                                                                                                                    click-3
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-mi-ec(4)]"
                                                                                                                                                    cell-bg="[-c4]"
                                                                                                                                                    class="">
                                                                                                                                                    click-4
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-mi-ec(5)]"
                                                                                                                                                    cell-bg="[-c2]"
                                                                                                                                                    class="">
                                                                                                                                                    click-5
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-mi-ec(6)]"
                                                                                                                                                    cell-bg="[-c1]"
                                                                                                                                                    class="">
                                                                                                                                                    click-6
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-mi-ec(7)]"
                                                                                                                                                    cell-bg="[-c3]"
                                                                                                                                                    class="">
                                                                                                                                                    click-7
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-mi-ec(8)]"
                                                                                                                                                    cell-bg="[-c5]"
                                                                                                                                                    class="">
                                                                                                                                                    click-8
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-mi-ec(9)]"
                                                                                                                                                    cell-bg="[-c4]"
                                                                                                                                                    class="">
                                                                                                                                                    click-9
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-mi-ec(10)]"
                                                                                                                                                    cell-bg="[-c2]"
                                                                                                                                                    class="">
                                                                                                                                                    click-10
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                            <div cell-c="[-c20]"
                                                                                                                                                class="">
                                                                                                                                                Micro-Page
                                                                                                                                                <div cell-pa="[-mi-ea(10)]"
                                                                                                                                                    cell-bg="[-c4]"
                                                                                                                                                    class="">
                                                                                                                                                    action-10
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-mi-ea(9)]"
                                                                                                                                                    cell-bg="[-c2]"
                                                                                                                                                    class="">
                                                                                                                                                    action-9
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-mi-ea(8)]"
                                                                                                                                                    cell-bg="[-c1]"
                                                                                                                                                    class="">
                                                                                                                                                    action-8
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-mi-ea(7)]"
                                                                                                                                                    cell-bg="[-c3]"
                                                                                                                                                    class="">
                                                                                                                                                    action-7
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-mi-ea(6)]"
                                                                                                                                                    cell-bg="[-c5]"
                                                                                                                                                    class="">
                                                                                                                                                    action-6
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-mi-ea(5)]"
                                                                                                                                                    cell-bg="[-c4]"
                                                                                                                                                    class="">
                                                                                                                                                    Content
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-mi-ea(4)]"
                                                                                                                                                    cell-bg="[-c2]"
                                                                                                                                                    class="">
                                                                                                                                                    action-4
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-mi-ea(3)]"
                                                                                                                                                    cell-bg="[-c1]"
                                                                                                                                                    class="">
                                                                                                                                                    action-3
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-mi-ea(2)]"
                                                                                                                                                    cell-bg="[-c3]"
                                                                                                                                                    class="">
                                                                                                                                                    action-2
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-mi-ea(1)]"
                                                                                                                                                    cell-bg="[-c5]"
                                                                                                                                                    class="">
                                                                                                                                                    action-1
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-ma-ea(4)]"
                                                                                                                                        cell-bg="[-c2]"
                                                                                                                                        class="">
                                                                                                                                        action-4
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-ma-ea(3)]"
                                                                                                                                        cell-bg="[-c1]"
                                                                                                                                        class="">
                                                                                                                                        action-3
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-ma-ea(2)]"
                                                                                                                                        cell-bg="[-c3]"
                                                                                                                                        class="">
                                                                                                                                        action-2
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-ma-ea(1)]"
                                                                                                                                        cell-bg="[-c5]"
                                                                                                                                        class="">
                                                                                                                                        action-1
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-sp-ea(4)]"
                                                                                                                            cell-bg="[-c2]"
                                                                                                                            class="">
                                                                                                                            action-4
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-sp-ea(3)]"
                                                                                                                            cell-bg="[-c1]"
                                                                                                                            class="">
                                                                                                                            action-3
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-sp-ea(2)]"
                                                                                                                            cell-bg="[-c3]"
                                                                                                                            class="">
                                                                                                                            action-2
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-sp-ea(1)]"
                                                                                                                            cell-bg="[-c5]"
                                                                                                                            class="">
                                                                                                                            action-1
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div cell-pa="[-su-ea(4)]"
                                                                                                                cell-bg="[-c2]"
                                                                                                                class="">
                                                                                                                action-4
                                                                                                            </div>
                                                                                                            <div cell-pa="[-su-ea(3)]"
                                                                                                                cell-bg="[-c1]"
                                                                                                                class="">
                                                                                                                action-3
                                                                                                            </div>
                                                                                                            <div cell-pa="[-su-ea(2)]"
                                                                                                                cell-bg="[-c3]"
                                                                                                                class="">
                                                                                                                action-2
                                                                                                            </div>
                                                                                                            <div cell-pa="[-su-ea(1)]"
                                                                                                                cell-bg="[-c5]"
                                                                                                                class="">
                                                                                                                action-1
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div cell-pa="[-ea(4)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    action-4
                                                                                                </div>
                                                                                                <div cell-pa="[-ea(3)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    action-3
                                                                                                </div>
                                                                                                <div cell-pa="[-ea(2)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    action-2
                                                                                                </div>
                                                                                                <div cell-pa="[-ea(1)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    action-1
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(4)]"
                                                                                        cell-bg="[-c2]"
                                                                                        class="">
                                                                                        action-4
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(3)]"
                                                                                        cell-bg="[-c1]"
                                                                                        class="">
                                                                                        action-3
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(2)]"
                                                                                        cell-bg="[-c3]"
                                                                                        class="">
                                                                                        action-2
                                                                                    </div>
                                                                                    <div cell-pa="[-mi-ea(1)]"
                                                                                        cell-bg="[-c5]"
                                                                                        class="">
                                                                                        action-1
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(4)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            action-4
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(3)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            action-3
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(2)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            action-2
                                                                        </div>
                                                                        <div cell-pa="[-ma-ea(1)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            action-1
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-pa="[-sp-ea(4)]" cell-bg="[-c2]"
                                                                class="">
                                                                action-4</div>
                                                            <div cell-pa="[-sp-ea(3)]" cell-bg="[-c1]"
                                                                class="">
                                                                action-3</div>
                                                            <div cell-pa="[-sp-ea(2)]" cell-bg="[-c3]"
                                                                class="">
                                                                action-2</div>
                                                            <div cell-pa="[-sp-ea(1)]" cell-bg="[-c5]"
                                                                class="">
                                                                action-1</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-pa="[-su-ea(4)]" cell-bg="[-c2]" class="">
                                                    action-4</div>
                                                <div cell-pa="[-su-ea(3)]" cell-bg="[-c1]" class="">
                                                    action-3</div>
                                                <div cell-pa="[-su-ea(2)]" cell-bg="[-c3]" class="">
                                                    action-2</div>
                                                <div cell-pa="[-su-ea(1)]" cell-bg="[-c5]" class="">
                                                    action-1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div cell-pa="[-ea(4)]" cell-bg="[-c2]" class="">
                                        action-4</div>
                                    <div cell-pa="[-ea(3)]" cell-bg="[-c1]" class="">
                                        action-3</div>
                                    <div cell-pa="[-ea(2)]" cell-bg="[-c3]" class="">
                                        action-2</div>
                                    <div cell-pa="[-ea(1)]" cell-bg="[-c5]" class="">
                                        action-1</div>
                                </div>
                            </div>
                            <div cell-m='[-t45]' class="code-accord">
                                <div class="code-text">
                                    <p cell-f='[-s15-w7-c2-f5]' cell-t='[-dc]'>Get Code</p>
                                </div>
                                <div class="code-content">
                                    <xmp>
                                        <div cell-pa="[-pa:-cn-a5-su5-sp5-ma5-mi5]" cell-c="[-c20]" cell-m="[-t45]"
                                            cell-p="[-p8]" class="pa-output">
                                            <div cell-q="[-q]" class="">
                                                <div cell-c="[-co]" cell-pa="[-ec(1)]" cell-bg="[-c1]" class="">
                                                    click-1</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(2)]" cell-bg="[-c3]" class="">
                                                    click-2</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(3)]" cell-bg="[-c5]" class="">
                                                    click-3</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(4)]" cell-bg="[-c4]" class="">
                                                    click-4</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(5)]" cell-bg="[-c2]" class="">
                                                    click-5</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(6)]" cell-bg="[-c1]" class="">
                                                    click-6</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(7)]" cell-bg="[-c3]" class="">
                                                    click-7</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(8)]" cell-bg="[-c5]" class="">
                                                    click-8</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(9)]" cell-bg="[-c4]" class="">
                                                    click-9</div>
                                                <div cell-c="[-co]" cell-pa="[-ec(10)]" cell-bg="[-c2]" class="">
                                                    click-10</div>
                                            </div>
                                            <div cell-c="[-c20]" cell-p="[-p2]" cell-bg="[-c4]" class="">
                                                Page<div cell-pa="[-ea(10)]" cell-bg="[-c4]" class="">
                                                    action-10</div>
                                                <div cell-pa="[-ea(9)]" cell-bg="[-c2]" class="">
                                                    action-9</div>
                                                <div cell-pa="[-ea(8)]" cell-bg="[-c1]" class="">
                                                    action-8</div>
                                                <div cell-pa="[-ea(7)]" cell-bg="[-c3]" class="">
                                                    action-7</div>
                                                <div cell-pa="[-ea(6)]" cell-bg="[-c5]" class="">
                                                    action-6</div>
                                                <div cell-pa="[-ea(5)]" cell-bg="[-c4]" class="">
                                                    <div cell-p="[-p2]" class="">
                                                        <div cell-q="[-q]" class="">
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(1)]" cell-bg="[-c1]"
                                                                class="">
                                                                click-1</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(2)]" cell-bg="[-c3]"
                                                                class="">
                                                                click-2</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(3)]" cell-bg="[-c5]"
                                                                class="">
                                                                click-3</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(4)]" cell-bg="[-c4]"
                                                                class="">
                                                                click-4</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(5)]" cell-bg="[-c2]"
                                                                class="">
                                                                click-5</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(6)]" cell-bg="[-c1]"
                                                                class="">
                                                                click-6</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(7)]" cell-bg="[-c3]"
                                                                class="">
                                                                click-7</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(8)]" cell-bg="[-c5]"
                                                                class="">
                                                                click-8</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(9)]" cell-bg="[-c4]"
                                                                class="">
                                                                click-9</div>
                                                            <div cell-c="[-co]" cell-pa="[-su-ec(10)]" cell-bg="[-c2]"
                                                                class="">
                                                                click-10</div>
                                                        </div>
                                                        <div cell-c="[-c20]" class="">
                                                            Sub-Page<div cell-pa="[-su-ea(10)]" cell-bg="[-c4]"
                                                                class="">
                                                                action-10</div>
                                                            <div cell-pa="[-su-ea(9)]" cell-bg="[-c2]" class="">
                                                                action-9</div>
                                                            <div cell-pa="[-su-ea(8)]" cell-bg="[-c1]" class="">
                                                                action-8</div>
                                                            <div cell-pa="[-su-ea(7)]" cell-bg="[-c3]" class="">
                                                                action-7</div>
                                                            <div cell-pa="[-su-ea(6)]" cell-bg="[-c5]" class="">
                                                                action-6</div>
                                                            <div cell-pa="[-su-ea(5)]" cell-bg="[-c4]" class="">
                                                                <div cell-c="[-c20]" cell-p="[-p2]" class="">
                                                                    <div cell-q="[-q]" class="">
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(1)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            click-1</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(2)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            click-2</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(3)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            click-3</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(4)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            click-4</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(5)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            click-5</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(6)]"
                                                                            cell-bg="[-c1]" class="">
                                                                            click-6</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(7)]"
                                                                            cell-bg="[-c3]" class="">
                                                                            click-7</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(8)]"
                                                                            cell-bg="[-c5]" class="">
                                                                            click-8</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(9)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            click-9</div>
                                                                        <div cell-c="[-co]" cell-pa="[-sp-ec(10)]"
                                                                            cell-bg="[-c2]" class="">
                                                                            click-10</div>
                                                                    </div>
                                                                    <div cell-c="[-c20]" class="">
                                                                        Sup-Page<div cell-pa="[-sp-ea(10)]"
                                                                            cell-bg="[-c4]" class="">
                                                                            action-10</div>
                                                                        <div cell-pa="[-sp-ea(9)]" cell-bg="[-c2]"
                                                                            class="">
                                                                            action-9</div>
                                                                        <div cell-pa="[-sp-ea(8)]" cell-bg="[-c1]"
                                                                            class="">
                                                                            action-8</div>
                                                                        <div cell-pa="[-sp-ea(7)]" cell-bg="[-c3]"
                                                                            class="">
                                                                            action-7</div>
                                                                        <div cell-pa="[-sp-ea(6)]" cell-bg="[-c5]"
                                                                            class="">
                                                                            action-6</div>
                                                                        <div cell-pa="[-sp-ea(5)]" cell-bg="[-c4]"
                                                                            class="">
                                                                            <div cell-c="[-c20]" cell-p="[-p2]"
                                                                                class="">
                                                                                <div cell-q="[-q]" class="">
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(1)]"
                                                                                        cell-bg="[-c1]" class="">
                                                                                        click-1
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(2)]"
                                                                                        cell-bg="[-c3]" class="">
                                                                                        click-2
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(3)]"
                                                                                        cell-bg="[-c5]" class="">
                                                                                        click-3
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(4)]"
                                                                                        cell-bg="[-c4]" class="">
                                                                                        click-4
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(5)]"
                                                                                        cell-bg="[-c2]" class="">
                                                                                        click-5
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(6)]"
                                                                                        cell-bg="[-c1]" class="">
                                                                                        click-6
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(7)]"
                                                                                        cell-bg="[-c3]" class="">
                                                                                        click-7
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(8)]"
                                                                                        cell-bg="[-c5]" class="">
                                                                                        click-8
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(9)]"
                                                                                        cell-bg="[-c4]" class="">
                                                                                        click-9
                                                                                    </div>
                                                                                    <div cell-c="[-co]"
                                                                                        cell-pa="[-ma-ec(10)]"
                                                                                        cell-bg="[-c2]" class="">
                                                                                        click-10
                                                                                    </div>
                                                                                </div>
                                                                                <div cell-c="[-c20]" class="">
                                                                                    Macro-Page<div
                                                                                        cell-pa="[-ma-ea(10)]"
                                                                                        cell-bg="[-c4]" class="">
                                                                                        action-10
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(9)]"
                                                                                        cell-bg="[-c2]" class="">
                                                                                        action-9
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(8)]"
                                                                                        cell-bg="[-c1]" class="">
                                                                                        action-8
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(7)]"
                                                                                        cell-bg="[-c3]" class="">
                                                                                        action-7
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(6)]"
                                                                                        cell-bg="[-c5]" class="">
                                                                                        action-6
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(5)]"
                                                                                        cell-bg="[-c4]" class="">
                                                                                        <div cell-c="[-c20]"
                                                                                            cell-p="[-p2]" class="">
                                                                                            <div cell-q="[-q]" class="">
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(1)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    click-1
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(2)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    click-2
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(3)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    click-3
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(4)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    click-4
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(5)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    click-5
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(6)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    click-6
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(7)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    click-7
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(8)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    click-8
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(9)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    click-9
                                                                                                </div>
                                                                                                <div cell-c="[-co]"
                                                                                                    cell-pa="[-mi-ec(10)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    click-10
                                                                                                </div>
                                                                                            </div>
                                                                                            <div cell-c="[-c20]"
                                                                                                class="">
                                                                                                Micro-Page
                                                                                                <div cell-pa="[-mi-ea(10)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    action-10
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(9)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    action-9
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(8)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    action-8
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(7)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    action-7
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(6)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    action-6
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(5)]"
                                                                                                    cell-bg="[-c4]"
                                                                                                    class="">
                                                                                                    <div cell-pa="[-pa:-cn-a5-su5-sp5-ma5-mi5]"
                                                                                                        cell-c="[-c20]"
                                                                                                        cell-m="[-t45]"
                                                                                                        cell-p="[-p8]"
                                                                                                        class="pa-output">
                                                                                                        <div cell-q="[-q]"
                                                                                                            class="">
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-ec(1)]"
                                                                                                                cell-bg="[-c1]"
                                                                                                                class="">
                                                                                                                click-1
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-ec(2)]"
                                                                                                                cell-bg="[-c3]"
                                                                                                                class="">
                                                                                                                click-2
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-ec(3)]"
                                                                                                                cell-bg="[-c5]"
                                                                                                                class="">
                                                                                                                click-3
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-ec(4)]"
                                                                                                                cell-bg="[-c4]"
                                                                                                                class="">
                                                                                                                click-4
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-ec(5)]"
                                                                                                                cell-bg="[-c2]"
                                                                                                                class="">
                                                                                                                click-5
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-ec(6)]"
                                                                                                                cell-bg="[-c1]"
                                                                                                                class="">
                                                                                                                click-6
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-ec(7)]"
                                                                                                                cell-bg="[-c3]"
                                                                                                                class="">
                                                                                                                click-7
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-ec(8)]"
                                                                                                                cell-bg="[-c5]"
                                                                                                                class="">
                                                                                                                click-8
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-ec(9)]"
                                                                                                                cell-bg="[-c4]"
                                                                                                                class="">
                                                                                                                click-9
                                                                                                            </div>
                                                                                                            <div cell-c="[-co]"
                                                                                                                cell-pa="[-ec(10)]"
                                                                                                                cell-bg="[-c2]"
                                                                                                                class="">
                                                                                                                click-10
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div cell-c="[-c20]"
                                                                                                            cell-p="[-p2]"
                                                                                                            cell-bg="[-c4]"
                                                                                                            class="">
                                                                                                            Page
                                                                                                            <div cell-pa="[-ea(10)]"
                                                                                                                cell-bg="[-c4]"
                                                                                                                class="">
                                                                                                                action-10
                                                                                                            </div>
                                                                                                            <div cell-pa="[-ea(9)]"
                                                                                                                cell-bg="[-c2]"
                                                                                                                class="">
                                                                                                                action-9
                                                                                                            </div>
                                                                                                            <div cell-pa="[-ea(8)]"
                                                                                                                cell-bg="[-c1]"
                                                                                                                class="">
                                                                                                                action-8
                                                                                                            </div>
                                                                                                            <div cell-pa="[-ea(7)]"
                                                                                                                cell-bg="[-c3]"
                                                                                                                class="">
                                                                                                                action-7
                                                                                                            </div>
                                                                                                            <div cell-pa="[-ea(6)]"
                                                                                                                cell-bg="[-c5]"
                                                                                                                class="">
                                                                                                                action-6
                                                                                                            </div>
                                                                                                            <div cell-pa="[-ea(5)]"
                                                                                                                cell-bg="[-c4]"
                                                                                                                class="">
                                                                                                                <div cell-p="[-p2]"
                                                                                                                    class="">
                                                                                                                    <div cell-q="[-q]"
                                                                                                                        class="">
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-su-ec(1)]"
                                                                                                                            cell-bg="[-c1]"
                                                                                                                            class="">
                                                                                                                            click-1
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-su-ec(2)]"
                                                                                                                            cell-bg="[-c3]"
                                                                                                                            class="">
                                                                                                                            click-2
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-su-ec(3)]"
                                                                                                                            cell-bg="[-c5]"
                                                                                                                            class="">
                                                                                                                            click-3
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-su-ec(4)]"
                                                                                                                            cell-bg="[-c4]"
                                                                                                                            class="">
                                                                                                                            click-4
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-su-ec(5)]"
                                                                                                                            cell-bg="[-c2]"
                                                                                                                            class="">
                                                                                                                            click-5
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-su-ec(6)]"
                                                                                                                            cell-bg="[-c1]"
                                                                                                                            class="">
                                                                                                                            click-6
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-su-ec(7)]"
                                                                                                                            cell-bg="[-c3]"
                                                                                                                            class="">
                                                                                                                            click-7
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-su-ec(8)]"
                                                                                                                            cell-bg="[-c5]"
                                                                                                                            class="">
                                                                                                                            click-8
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-su-ec(9)]"
                                                                                                                            cell-bg="[-c4]"
                                                                                                                            class="">
                                                                                                                            click-9
                                                                                                                        </div>
                                                                                                                        <div cell-c="[-co]"
                                                                                                                            cell-pa="[-su-ec(10)]"
                                                                                                                            cell-bg="[-c2]"
                                                                                                                            class="">
                                                                                                                            click-10
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div cell-c="[-c20]"
                                                                                                                        class="">
                                                                                                                        Sub-Page
                                                                                                                        <div cell-pa="[-su-ea(10)]"
                                                                                                                            cell-bg="[-c4]"
                                                                                                                            class="">
                                                                                                                            action-10
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-su-ea(9)]"
                                                                                                                            cell-bg="[-c2]"
                                                                                                                            class="">
                                                                                                                            action-9
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-su-ea(8)]"
                                                                                                                            cell-bg="[-c1]"
                                                                                                                            class="">
                                                                                                                            action-8
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-su-ea(7)]"
                                                                                                                            cell-bg="[-c3]"
                                                                                                                            class="">
                                                                                                                            action-7
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-su-ea(6)]"
                                                                                                                            cell-bg="[-c5]"
                                                                                                                            class="">
                                                                                                                            action-6
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-su-ea(5)]"
                                                                                                                            cell-bg="[-c4]"
                                                                                                                            class="">
                                                                                                                            <div cell-c="[-c20]"
                                                                                                                                cell-p="[-p2]"
                                                                                                                                class="">
                                                                                                                                <div cell-q="[-q]"
                                                                                                                                    class="">
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-sp-ec(1)]"
                                                                                                                                        cell-bg="[-c1]"
                                                                                                                                        class="">
                                                                                                                                        click-1
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-sp-ec(2)]"
                                                                                                                                        cell-bg="[-c3]"
                                                                                                                                        class="">
                                                                                                                                        click-2
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-sp-ec(3)]"
                                                                                                                                        cell-bg="[-c5]"
                                                                                                                                        class="">
                                                                                                                                        click-3
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-sp-ec(4)]"
                                                                                                                                        cell-bg="[-c4]"
                                                                                                                                        class="">
                                                                                                                                        click-4
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-sp-ec(5)]"
                                                                                                                                        cell-bg="[-c2]"
                                                                                                                                        class="">
                                                                                                                                        click-5
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-sp-ec(6)]"
                                                                                                                                        cell-bg="[-c1]"
                                                                                                                                        class="">
                                                                                                                                        click-6
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-sp-ec(7)]"
                                                                                                                                        cell-bg="[-c3]"
                                                                                                                                        class="">
                                                                                                                                        click-7
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-sp-ec(8)]"
                                                                                                                                        cell-bg="[-c5]"
                                                                                                                                        class="">
                                                                                                                                        click-8
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-sp-ec(9)]"
                                                                                                                                        cell-bg="[-c4]"
                                                                                                                                        class="">
                                                                                                                                        click-9
                                                                                                                                    </div>
                                                                                                                                    <div cell-c="[-co]"
                                                                                                                                        cell-pa="[-sp-ec(10)]"
                                                                                                                                        cell-bg="[-c2]"
                                                                                                                                        class="">
                                                                                                                                        click-10
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                                <div cell-c="[-c20]"
                                                                                                                                    class="">
                                                                                                                                    Sup-Page
                                                                                                                                    <div cell-pa="[-sp-ea(10)]"
                                                                                                                                        cell-bg="[-c4]"
                                                                                                                                        class="">
                                                                                                                                        action-10
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-sp-ea(9)]"
                                                                                                                                        cell-bg="[-c2]"
                                                                                                                                        class="">
                                                                                                                                        action-9
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-sp-ea(8)]"
                                                                                                                                        cell-bg="[-c1]"
                                                                                                                                        class="">
                                                                                                                                        action-8
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-sp-ea(7)]"
                                                                                                                                        cell-bg="[-c3]"
                                                                                                                                        class="">
                                                                                                                                        action-7
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-sp-ea(6)]"
                                                                                                                                        cell-bg="[-c5]"
                                                                                                                                        class="">
                                                                                                                                        action-6
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-sp-ea(5)]"
                                                                                                                                        cell-bg="[-c4]"
                                                                                                                                        class="">
                                                                                                                                        <div cell-c="[-c20]"
                                                                                                                                            cell-p="[-p2]"
                                                                                                                                            class="">
                                                                                                                                            <div cell-q="[-q]"
                                                                                                                                                class="">
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-ma-ec(1)]"
                                                                                                                                                    cell-bg="[-c1]"
                                                                                                                                                    class="">
                                                                                                                                                    click-1
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-ma-ec(2)]"
                                                                                                                                                    cell-bg="[-c3]"
                                                                                                                                                    class="">
                                                                                                                                                    click-2
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-ma-ec(3)]"
                                                                                                                                                    cell-bg="[-c5]"
                                                                                                                                                    class="">
                                                                                                                                                    click-3
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-ma-ec(4)]"
                                                                                                                                                    cell-bg="[-c4]"
                                                                                                                                                    class="">
                                                                                                                                                    click-4
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-ma-ec(5)]"
                                                                                                                                                    cell-bg="[-c2]"
                                                                                                                                                    class="">
                                                                                                                                                    click-5
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-ma-ec(6)]"
                                                                                                                                                    cell-bg="[-c1]"
                                                                                                                                                    class="">
                                                                                                                                                    click-6
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-ma-ec(7)]"
                                                                                                                                                    cell-bg="[-c3]"
                                                                                                                                                    class="">
                                                                                                                                                    click-7
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-ma-ec(8)]"
                                                                                                                                                    cell-bg="[-c5]"
                                                                                                                                                    class="">
                                                                                                                                                    click-8
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-ma-ec(9)]"
                                                                                                                                                    cell-bg="[-c4]"
                                                                                                                                                    class="">
                                                                                                                                                    click-9
                                                                                                                                                </div>
                                                                                                                                                <div cell-c="[-co]"
                                                                                                                                                    cell-pa="[-ma-ec(10)]"
                                                                                                                                                    cell-bg="[-c2]"
                                                                                                                                                    class="">
                                                                                                                                                    click-10
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                            <div cell-c="[-c20]"
                                                                                                                                                class="">
                                                                                                                                                Macro-Page
                                                                                                                                                <div cell-pa="[-ma-ea(10)]"
                                                                                                                                                    cell-bg="[-c4]"
                                                                                                                                                    class="">
                                                                                                                                                    action-10
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-ma-ea(9)]"
                                                                                                                                                    cell-bg="[-c2]"
                                                                                                                                                    class="">
                                                                                                                                                    action-9
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-ma-ea(8)]"
                                                                                                                                                    cell-bg="[-c1]"
                                                                                                                                                    class="">
                                                                                                                                                    action-8
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-ma-ea(7)]"
                                                                                                                                                    cell-bg="[-c3]"
                                                                                                                                                    class="">
                                                                                                                                                    action-7
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-ma-ea(6)]"
                                                                                                                                                    cell-bg="[-c5]"
                                                                                                                                                    class="">
                                                                                                                                                    action-6
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-ma-ea(5)]"
                                                                                                                                                    cell-bg="[-c4]"
                                                                                                                                                    class="">
                                                                                                                                                    <div cell-c="[-c20]"
                                                                                                                                                        cell-p="[-p2]"
                                                                                                                                                        class="">
                                                                                                                                                        <div cell-q="[-q]"
                                                                                                                                                            class="">
                                                                                                                                                            <div cell-c="[-co]"
                                                                                                                                                                cell-pa="[-mi-ec(1)]"
                                                                                                                                                                cell-bg="[-c1]"
                                                                                                                                                                class="">
                                                                                                                                                                click-1
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-c="[-co]"
                                                                                                                                                                cell-pa="[-mi-ec(2)]"
                                                                                                                                                                cell-bg="[-c3]"
                                                                                                                                                                class="">
                                                                                                                                                                click-2
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-c="[-co]"
                                                                                                                                                                cell-pa="[-mi-ec(3)]"
                                                                                                                                                                cell-bg="[-c5]"
                                                                                                                                                                class="">
                                                                                                                                                                click-3
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-c="[-co]"
                                                                                                                                                                cell-pa="[-mi-ec(4)]"
                                                                                                                                                                cell-bg="[-c4]"
                                                                                                                                                                class="">
                                                                                                                                                                click-4
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-c="[-co]"
                                                                                                                                                                cell-pa="[-mi-ec(5)]"
                                                                                                                                                                cell-bg="[-c2]"
                                                                                                                                                                class="">
                                                                                                                                                                click-5
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-c="[-co]"
                                                                                                                                                                cell-pa="[-mi-ec(6)]"
                                                                                                                                                                cell-bg="[-c1]"
                                                                                                                                                                class="">
                                                                                                                                                                click-6
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-c="[-co]"
                                                                                                                                                                cell-pa="[-mi-ec(7)]"
                                                                                                                                                                cell-bg="[-c3]"
                                                                                                                                                                class="">
                                                                                                                                                                click-7
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-c="[-co]"
                                                                                                                                                                cell-pa="[-mi-ec(8)]"
                                                                                                                                                                cell-bg="[-c5]"
                                                                                                                                                                class="">
                                                                                                                                                                click-8
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-c="[-co]"
                                                                                                                                                                cell-pa="[-mi-ec(9)]"
                                                                                                                                                                cell-bg="[-c4]"
                                                                                                                                                                class="">
                                                                                                                                                                click-9
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-c="[-co]"
                                                                                                                                                                cell-pa="[-mi-ec(10)]"
                                                                                                                                                                cell-bg="[-c2]"
                                                                                                                                                                class="">
                                                                                                                                                                click-10
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                        <div cell-c="[-c20]"
                                                                                                                                                            class="">
                                                                                                                                                            Micro-Page
                                                                                                                                                            <div cell-pa="[-mi-ea(10)]"
                                                                                                                                                                cell-bg="[-c4]"
                                                                                                                                                                class="">
                                                                                                                                                                action-10
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-pa="[-mi-ea(9)]"
                                                                                                                                                                cell-bg="[-c2]"
                                                                                                                                                                class="">
                                                                                                                                                                action-9
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-pa="[-mi-ea(8)]"
                                                                                                                                                                cell-bg="[-c1]"
                                                                                                                                                                class="">
                                                                                                                                                                action-8
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-pa="[-mi-ea(7)]"
                                                                                                                                                                cell-bg="[-c3]"
                                                                                                                                                                class="">
                                                                                                                                                                action-7
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-pa="[-mi-ea(6)]"
                                                                                                                                                                cell-bg="[-c5]"
                                                                                                                                                                class="">
                                                                                                                                                                action-6
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-pa="[-mi-ea(5)]"
                                                                                                                                                                cell-bg="[-c4]"
                                                                                                                                                                class="">
                                                                                                                                                                Content
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-pa="[-mi-ea(4)]"
                                                                                                                                                                cell-bg="[-c2]"
                                                                                                                                                                class="">
                                                                                                                                                                action-4
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-pa="[-mi-ea(3)]"
                                                                                                                                                                cell-bg="[-c1]"
                                                                                                                                                                class="">
                                                                                                                                                                action-3
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-pa="[-mi-ea(2)]"
                                                                                                                                                                cell-bg="[-c3]"
                                                                                                                                                                class="">
                                                                                                                                                                action-2
                                                                                                                                                            </div>
                                                                                                                                                            <div cell-pa="[-mi-ea(1)]"
                                                                                                                                                                cell-bg="[-c5]"
                                                                                                                                                                class="">
                                                                                                                                                                action-1
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-ma-ea(4)]"
                                                                                                                                                    cell-bg="[-c2]"
                                                                                                                                                    class="">
                                                                                                                                                    action-4
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-ma-ea(3)]"
                                                                                                                                                    cell-bg="[-c1]"
                                                                                                                                                    class="">
                                                                                                                                                    action-3
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-ma-ea(2)]"
                                                                                                                                                    cell-bg="[-c3]"
                                                                                                                                                    class="">
                                                                                                                                                    action-2
                                                                                                                                                </div>
                                                                                                                                                <div cell-pa="[-ma-ea(1)]"
                                                                                                                                                    cell-bg="[-c5]"
                                                                                                                                                    class="">
                                                                                                                                                    action-1
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-sp-ea(4)]"
                                                                                                                                        cell-bg="[-c2]"
                                                                                                                                        class="">
                                                                                                                                        action-4
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-sp-ea(3)]"
                                                                                                                                        cell-bg="[-c1]"
                                                                                                                                        class="">
                                                                                                                                        action-3
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-sp-ea(2)]"
                                                                                                                                        cell-bg="[-c3]"
                                                                                                                                        class="">
                                                                                                                                        action-2
                                                                                                                                    </div>
                                                                                                                                    <div cell-pa="[-sp-ea(1)]"
                                                                                                                                        cell-bg="[-c5]"
                                                                                                                                        class="">
                                                                                                                                        action-1
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-su-ea(4)]"
                                                                                                                            cell-bg="[-c2]"
                                                                                                                            class="">
                                                                                                                            action-4
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-su-ea(3)]"
                                                                                                                            cell-bg="[-c1]"
                                                                                                                            class="">
                                                                                                                            action-3
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-su-ea(2)]"
                                                                                                                            cell-bg="[-c3]"
                                                                                                                            class="">
                                                                                                                            action-2
                                                                                                                        </div>
                                                                                                                        <div cell-pa="[-su-ea(1)]"
                                                                                                                            cell-bg="[-c5]"
                                                                                                                            class="">
                                                                                                                            action-1
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div cell-pa="[-ea(4)]"
                                                                                                                cell-bg="[-c2]"
                                                                                                                class="">
                                                                                                                action-4
                                                                                                            </div>
                                                                                                            <div cell-pa="[-ea(3)]"
                                                                                                                cell-bg="[-c1]"
                                                                                                                class="">
                                                                                                                action-3
                                                                                                            </div>
                                                                                                            <div cell-pa="[-ea(2)]"
                                                                                                                cell-bg="[-c3]"
                                                                                                                class="">
                                                                                                                action-2
                                                                                                            </div>
                                                                                                            <div cell-pa="[-ea(1)]"
                                                                                                                cell-bg="[-c5]"
                                                                                                                class="">
                                                                                                                action-1
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(4)]"
                                                                                                    cell-bg="[-c2]"
                                                                                                    class="">
                                                                                                    action-4
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(3)]"
                                                                                                    cell-bg="[-c1]"
                                                                                                    class="">
                                                                                                    action-3
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(2)]"
                                                                                                    cell-bg="[-c3]"
                                                                                                    class="">
                                                                                                    action-2
                                                                                                </div>
                                                                                                <div cell-pa="[-mi-ea(1)]"
                                                                                                    cell-bg="[-c5]"
                                                                                                    class="">
                                                                                                    action-1
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(4)]"
                                                                                        cell-bg="[-c2]" class="">
                                                                                        action-4
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(3)]"
                                                                                        cell-bg="[-c1]" class="">
                                                                                        action-3
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(2)]"
                                                                                        cell-bg="[-c3]" class="">
                                                                                        action-2
                                                                                    </div>
                                                                                    <div cell-pa="[-ma-ea(1)]"
                                                                                        cell-bg="[-c5]" class="">
                                                                                        action-1
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div cell-pa="[-sp-ea(4)]" cell-bg="[-c2]"
                                                                            class="">
                                                                            action-4</div>
                                                                        <div cell-pa="[-sp-ea(3)]" cell-bg="[-c1]"
                                                                            class="">
                                                                            action-3</div>
                                                                        <div cell-pa="[-sp-ea(2)]" cell-bg="[-c3]"
                                                                            class="">
                                                                            action-2</div>
                                                                        <div cell-pa="[-sp-ea(1)]" cell-bg="[-c5]"
                                                                            class="">
                                                                            action-1</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div cell-pa="[-su-ea(4)]" cell-bg="[-c2]" class="">
                                                                action-4</div>
                                                            <div cell-pa="[-su-ea(3)]" cell-bg="[-c1]" class="">
                                                                action-3</div>
                                                            <div cell-pa="[-su-ea(2)]" cell-bg="[-c3]" class="">
                                                                action-2</div>
                                                            <div cell-pa="[-su-ea(1)]" cell-bg="[-c5]" class="">
                                                                action-1</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div cell-pa="[-ea(4)]" cell-bg="[-c2]" class="">
                                                    action-4</div>
                                                <div cell-pa="[-ea(3)]" cell-bg="[-c1]" class="">
                                                    action-3</div>
                                                <div cell-pa="[-ea(2)]" cell-bg="[-c3]" class="">
                                                    action-2</div>
                                                <div cell-pa="[-ea(1)]" cell-bg="[-c5]" class="">
                                                    action-1</div>
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
export default Pa;