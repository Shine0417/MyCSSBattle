import ReactPrismEditor from "react-prism-editor";

const TextEditor = ({ code, setCode }) => {
  // 'default', 'coy', 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow', 'twilight'
  return (
    <div>
      <div className="board_top">
        This is Your Editor, Code Here
      </div>
      <div className="form-floating textEditor">
        <ReactPrismEditor
          language='jsx'
          theme='okaidia'
          code={code}
          lineNumber={true}
          clipboard={true}
          changeCode={content => {
            setCode(content)
          }}
        />
      </div>
    </div>
  )
}

export default TextEditor;