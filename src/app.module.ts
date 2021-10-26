import { Module } from 'nefbl'

// 页面
import AppComponent from './App/index'

@Module({
    declarations: [
        AppComponent
    ],
    imports: [],
    exports: [],
    bootstrap: AppComponent
})
export default class {

}
