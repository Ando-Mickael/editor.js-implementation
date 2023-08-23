import Checklist from "@editorjs/checklist"
import Header from "@editorjs/header"
import InlineCode from "@editorjs/inline-code"
import Delimiter from "@editorjs/delimiter"
import Embed from "@editorjs/embed"
import Marker from "@editorjs/marker"
import List from "@editorjs/list"
import Quote from "@editorjs/quote"
import Warning from "@editorjs/warning"
import Table from "@editorjs/table"
import CodeTool from "@editorjs/code"
import Underline from "@editorjs/underline"

export const EDITOR_JS_TOOLS = {
    // hidden
    embed: Embed,

    // inline tools
    inlineCode: InlineCode,
    marker: Marker,
    underline: Underline,

    // block
    header: {
        class: Header,
        shortcut: 'CTRL+SHIFT+H'
    },

    delimiter: Delimiter,

    checklist: {
        class: Checklist,
        inlineToolbar: true,
        shortcut: 'CTRL+SHIFT+L'
    },
    list: {
        class: List,
        inlineToolbar: true,
        config: {
            defaultStyle: 'unordered'
        }
    },

    quote: Quote,

    warning: Warning,

    table: {
        class: Table,
        inlineToolbar: true,
        config: {
            rows: 2,
            cols: 3,
        },
    },

    code: CodeTool,

}