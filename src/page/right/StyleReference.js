import React from 'react'
import { ArrowRight } from 'react-feather'
import { getStyleById } from 'utils/style'
import StyleItem from './items/StyleItem'
import './style-reference.scss'

const StyleReference = ({styleItems, styles, nodeStyles, type, onShowStyleDetail}) => {
  const styleReference = getStyleById(styles, nodeStyles, type)
  const styleType = type==='stoke' ? 'FILL' : type.toUpperCase()

  function handleReferenceClick () {
    if (styleReference.remote) {
      return
    }
    onShowStyleDetail && onShowStyleDetail(styleType, nodeStyles[type])
  }

  return  styleReference &&
    <span
      className="title-reference"
      onClick={handleReferenceClick}
    >
      <StyleItem
        styles={styleItems}
        styleName={styleReference.name}
        styleType={type.toUpperCase()}
        isHoverable={false}
      />
      {
        !styleReference.remote &&
        <ArrowRight size={14}/>
      }
    </span>
}

export default StyleReference
