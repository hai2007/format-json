import { Component } from 'nefbl'
import { toJSON } from '@hai2007/algorithm/json.js'

import OpenWebEditor from 'open-web-editor'
import xhtml from '@hai2007/browser/xhtml'

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    $mounted() {

        let target = new OpenWebEditor({
            el: document.getElementById('target'),
            color: {
                background: "#eeeeee", /*编辑器背景*/
                text: "#170", /*文本颜色*/
                number: "#888484", /*行号颜色*/
                edit: "#eaeaf1", /*编辑行背景色*/
                cursor: "#ff0000", /*光标颜色*/
                select: "#6c6cf1", /*选择背景*/
            },
            content: "",
            shader: ["javascript", {
                "text": "#000000",/*文本颜色*/
                "annotation": "#ff0000",/*注释颜色*/
                "insign": "#555555",/*符号颜色*/
                "key": "#ff0000",/*关键字颜色*/
                "string": "#ac4c1e",/*字符串颜色*/
                "funName": "#1e50b3",/*函数名称颜色*/
                "execName": "#1e83b1"/*执行方法颜色*/
            }],
            readonly: true
        })

        new OpenWebEditor({
            el: document.getElementById('source'),
            color: {
                background: "#ffffff", /*编辑器背景*/
                text: "#170", /*文本颜色*/
                number: "#888484", /*行号颜色*/
                edit: "#eaeaf1", /*编辑行背景色*/
                cursor: "#ff0000", /*光标颜色*/
                select: "#6c6cf1", /*选择背景*/
            },
            content: ` 
 
 
 
 
`,
            shader: ["javascript", {
                "text": "#000000",/*文本颜色*/
                "annotation": "#6a9955",/*注释颜色*/
                "insign": "#555555",/*符号颜色*/
                "key": "#ff0000",/*关键字颜色*/
                "string": "#ac4c1e",/*字符串颜色*/
                "funName": "#1e50b3",/*函数名称颜色*/
                "execName": "#1e83b1"/*执行方法颜色*/
            }]
        }).updated(function () {

            try {
                target.valueOf(JSON.stringify(toJSON(this.valueOf()), null, 2))
            } catch (e) {
                target.valueOf("/*\n【发生了错误】\n" + e + "\n*/")
            }

            // 使得光标回到录入编辑器界面
            document.getElementById('source').click()

        })

        // 添加复制按钮
        let btnNode = xhtml.prepend(document.getElementById('target'), '<span class="copy-btn" title="复制到剪切板">复制<span></span></span>')

        xhtml.bind(btnNode, 'click', () => {
            target.copy(() => {
                alert('复制成功')
            }, error => {
                console.log(error);
                alert('复制失败')
            })
        })

        xhtml.setStyles(btnNode, {
            position: "absolute",
            right: "10px",
            top: "6px",
            border: "none",
            outline: 0,
            transition: "0.2s",
            "font-size": "12px",
            cursor: "pointer",
            "z-index": 1,
            "line-height": '20px',
            "background-color": "#f8f8f8",
            "padding": "5px 10px"
        })

    }

}
