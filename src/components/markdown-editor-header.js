'use stric'

import React, { PropTypes } from 'react'

const Header = ({ onSave }) => (
  <header className='editor-header'>
    <button className='save-message' onClick={onSave}>Salvar</button>
  </header>
)

Header.propTypes = {
  onSave: PropTypes.func.isRequired
}

export default Header
