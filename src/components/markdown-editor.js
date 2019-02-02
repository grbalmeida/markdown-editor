'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditor = ({ value, handleChange }) => (
  <div className='editor'>
    <textarea
      value={value}
      onChange={handleChange}
    />
    <button type='submit'>Renderizar markup</button>
    <div className='view'>
      {value}
    </div>
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkdownEditor
