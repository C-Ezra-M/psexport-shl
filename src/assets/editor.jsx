import React from "react"
import PSExport from "./pscf.js"
import { default as hljs } from "highlight.js"
import { default as Blocks } from "./block"

{
  const { name } = PSExport()

  hljs.registerLanguage(name, PSExport)
}

class PSExportFormatEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
    // The above is required because otherwise, `this` will be undefined
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div className="PSExportFormatEditor">
        <div className="input">
          <h3>Input</h3>
          <textarea
            id="input"
            onChange={this.handleChange}
            defaultValue={this.state.value}>
          </textarea>
        </div>
        <div className="output">
          <h3>Output</h3>
          <div id="outWrapper">
            <Blocks.HljsBlockScroll langName="psexport" dir="Both">
              {this.state.value}
            </Blocks.HljsBlockScroll>
          </div>
        </div>
      </div>
    )
  }
}

hljs.debugMode()

export default PSExportFormatEditor