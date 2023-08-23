import Editor from "./components/Editor";

export default function App() {
	const DEFAULT_DATA = {
		"time": new Date().getTime(),
		"blocks": [
			{
				"type": "header",
				"data": {
					"text": "This is my awesome editor!",
					"level": 1
				}
			},
		]
	}

	return (
		<>
			<Editor defaultValue={DEFAULT_DATA} />
		</>
	)
}
