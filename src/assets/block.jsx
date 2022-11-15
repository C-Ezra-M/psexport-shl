import React from "react"
import { default as hljs } from "highlight.js"

const ScrollBlock = (props) => {
  const dir = props.dir.trim() ?? 'Both'
  return (
    <div className={`scrollBlock${dir}Wrapper`}>
      <div className={"scrollBlock" + dir}>
        {props.children}
      </div>
    </div>
  )
}

class HljsBlock extends React.PureComponent {
  constructor(props) {
    super(props)
    this.preNode = React.createRef()
  }

  componentDidUpdate(prevProps) {
    this.preNode.current.innerHTML = hljs.highlight(
      this.preNode.current.innerText,
      {language: this.props.langName}
    ).value
  }

  render() {
    return (
      <pre
        id="output"
        ref={this.preNode}>
        {this.props.children}
      </pre>
    )
  }
}

const HljsBlockScroll = (props) => (
  <ScrollBlock dir={props.dir}>
    <HljsBlock langName={props.langName}>
      {props.children}
    </HljsBlock>
  </ScrollBlock>
)

export default {
  ScrollBlock,
  HljsBlock,
  HljsBlockScroll,
}