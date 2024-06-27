import { Component } from 'react'
import PropTypes from 'prop-types'
import { IconDeviceFloppy } from '@tabler/icons-react'
import { IconRefresh } from '@tabler/icons-react'

class AdoptForm extends Component {
  render() {
    const {
      handleSubmit,
      handleChange,
      handleChangeStatus,
      clearForm,
      form,
      errors,
    } = this.props
    return (
      <form onSubmit={handleSubmit} className='shadow p-4 rounded-2' >
        <div className="mb-3" >
          <label htmlFor="name" className="form-label">Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            type="text"
            className={`form-control ${errors.name && "is-invalid"}`}
            id="name"
            placeholder="Please enter your name"
          />
          {/* validasi */}
          <div
            id="validationServerUsernameFeedback"
            className="invalid-feedback"
          >
            Name is required!
          </div>
        </div>
        {/* Input Deskripsi */}
        <div className="mb-3" >
          <label htmlFor="petname" className="form-label">Pet Name</label>
          <textarea
            value={form.petname}
            onChange={handleChange}
            name="petname"
            className={`form-control ${errors.name && "is-invalid"}`}
            id="petname" rows="3"
            placeholder="Please enter pet name">
          </textarea>
          {/* validasi */}
          <div
            id="validationServerUsernameFeedback"
            className="invalid-feedback"
          >
            Pet name is required!
          </div>
        </div>
        {/* Input Selesai / checklist */}
        <div className="form-check" >
          <input
            onChange={handleChangeStatus}
            name='status'
            checked={form.status}
            className="form-check-input" type="checkbox" value="" id="status" />
          <label className="form-check-label" htmlFor="status">
            Visit to vet
          </label>
        </div>
        {/* Button */}
        <div className="d-flex gap-2 mt-4" >
          <button type="submit" className="btn btn-primary"> <i><IconDeviceFloppy /></i> Submit</button>
          <button type="reset" className="btn btn-secondary" onClick={clearForm}><i><IconRefresh /></i> Reset</button>
        </div>
      </form>
    )
  }
}

export default AdoptForm

AdoptForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeStatus: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}