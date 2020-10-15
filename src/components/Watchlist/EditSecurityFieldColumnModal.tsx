import { useState } from 'react'

import CloseIcon from 'src/icons/close'

const EditSecurityFieldColumnModal = ({ closeModal, title }) => {
  const [state, setState] = useState({
    col1: false,
    col2: false,
    col3: false,
    col4: false,
  })

  const col1Handler = () => {
    setState({ col1: !state.col1 })
  }
  const col2Handler = () => {
    setState({ col2: !state.col2 })
  }
  const col3Handler = () => {
    setState({ col3: !state.col3 })
  }
  const col4Handler = () => {
    setState({ col4: !state.col4 })
  }

  return (
    <div className="text-white" style={{ width: '240px' }}>
      <div
        className="h-16 px-5 flex justify-between items-center rounded-tl-lg rounded-tr-lg"
        style={{ backgroundColor: '#202837' }}
      >
        <div className="flex items-center">
          <p className="pr-4 text-lg font-semibold">{title}</p>
        </div>
        <span className="cursor-pointer" onClick={closeModal}>
          <CloseIcon />
        </span>
      </div>

      <div
        style={{ backgroundColor: '#2D3748' }}
        className="rounded-bl-lg rounded-br-lg px-5 pb-2 pt-4"
      >
        <label className="checkbox-container">
          Col 1{' '}
          <input
            type="checkbox"
            name="col1"
            checked={state.col1}
            onChange={col1Handler}
          />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Col 2{' '}
          <input
            type="checkbox"
            name="col2"
            checked={state.col2}
            onChange={col2Handler}
          />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Col 3{' '}
          <input
            type="checkbox"
            name="col3"
            checked={state.col3}
            onChange={col3Handler}
          />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Col 4{' '}
          <input
            type="checkbox"
            name="col4"
            checked={state.col4}
            onChange={col4Handler}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  )
}

export default EditSecurityFieldColumnModal
