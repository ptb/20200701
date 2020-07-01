/** @jsx h @jsxFrag Fragment */

import PropTypes from "prop-types"
import {
  createElement as h,
  memo
} from "react"

import { Lipsum } from "../components/Lipsum.jsx"

const IndexPage = ({
  "as": Element = "div"
}) =>
  (
    <Element>
      <Lipsum />
    </Element>
  )

IndexPage.displayName = "IndexPage"

IndexPage.propTypes = {
  "as": PropTypes.elementType
}

const IndexPageMemo = memo (IndexPage)

export { IndexPageMemo as default }
