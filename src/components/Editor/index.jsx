import React, { useEffect, useRef } from "react"
import EditorJS from "@editorjs/editorjs"
import { EDITOR_JS_TOOLS } from "./tools"

export default function Editor({ defaultValue }) {
    const ejInstance = useRef()

    function initEditor() {
        const editor = new EditorJS({
            holder: 'editorjs',
            data: defaultValue,
            tools: EDITOR_JS_TOOLS,
            onReady: () => {
                ejInstance.current = editor
            },
            autofocus: true,
            onChange: async () => {
                let content = await editor.saver.save()

                console.log(content)
            },
        })
    }

    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor()
        }

        return () => {
            ejInstance?.current?.destroy()
            ejInstance.current = null
        }
    }, [])

    return (
        <div id='editorjs'></div>
    )
}