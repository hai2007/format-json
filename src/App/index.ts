import { Component } from 'nefbl'
import { toJSON } from '@hai2007/algorithm/json.js'

import OpenWebEditor from 'open-web-editor'

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
            content: `/*请直接在此编辑或者粘贴你需要格式化的json字符串即可，
支持非严格模式，例如：

{
    key:'value'
}

由任何问题，直接提issue： https://github.com/hai2007/format-json/issues

本项目基于：
【编辑器】https://github.com/hai2007/Open-Web-Editor
【算法支持】https://github.com/hai2007/algorithm.js
*/
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

    }

}
