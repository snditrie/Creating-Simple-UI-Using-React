import { IconTrash } from '@tabler/icons-react'
import { IconEdit } from '@tabler/icons-react'
import { Component } from 'react'
import PropTypes from 'prop-types'

class AdoptList extends Component {
  render() {
    const {
      handleSelectedTodoForEdit,
      handleDelete,
      todos,
    } = this.props
    return (
      <div className='shadow p-4 rounded-2 mt-4' >
        <h3>List Adoption</h3>
        <div className="table-responsive">
          <table className="table">
            <thead className='text-center'>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Pet Name</th>
                <th scope="col">Visit</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className='text-center align-middle'>
              {
                todos.map((todo, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1} {todo.id}</th>
                      <td>{todo.name}</td>
                      <td>{todo.petname}</td>
                      <td>
                        <span className={`badge text-white ${todo.status ? 'text-bg-success' : 'text-bg-warning'}`}>
                          {todo.status ? 'Visit to vet' : 'Home service'}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 d-flex justify-content-center">
                          <button
                            onClick={() => { handleSelectedTodoForEdit(todo) }}
                            className="btn btn-primary"
                          >
                            <IconEdit size={22} />
                          </button>
                          <button
                            onClick={() => { handleDelete(todo.id) }}

                            className="btn btn-danger text-white"
                          >
                            <IconTrash size={22} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default AdoptList

AdoptList.propTypes = {
  handleSelectedTodoForEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}