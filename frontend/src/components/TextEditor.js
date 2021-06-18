import ReactPrismEditor from "react-prism-editor";

const TextEditor = ({ code, setCode }) => {
  // 'default', 'coy', 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow', 'twilight'
  return (
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
        id="asd"
      />
      {/* <textarea class="form-control eh" placeholder="Leave a comment here" id="floatingTextarea2" onChange={onChange}></textarea> */}
      {/* <label for="floatingTextarea2">Comments</label> */}
    </div>
  )
}

export default TextEditor;