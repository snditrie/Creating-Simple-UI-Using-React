import { Component } from 'react'
import Loading from '../../shared/Animations/LoadingAnimation'
import AdoptForm from './components/AdoptForm'
import AdoptList from './components/AdoptList'

class Adoption extends Component {
  state = {
    form: {
      id: '',
      name: '',
      petname: '',
      status: false
    },
    todos: [],
    errors: {
      name: "",
      petname: "",
    },
    isLoading: false,
    message: "",
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      }
    })
  }

  handleChangeStatus = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        status: event.target.checked
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let errors = {}
    if (this.state.form.name === "") {
      errors.name = "Name is required"
    }
    if (this.state.form.petname === "") {
      errors.petname = "Pet name is required"
    }
    this.setState({
      errors: errors,
    })
    if (Object.keys(errors).length > 0) return

    const todos = this.state.todos
    this.setState({ isLoading: true })
    setTimeout(() => {
      if (this.state.form.id) {
        const index = todos.findIndex((todo) => todo.id === this.state.form.id)
        const todo = {
          ...this.state.form,
        }
        todos.splice(index, 1, todo)
        this.setState({
          todos: todos,
          message: "Update succeeded!",
        })
      } else {
        const todo = {
          ...this.state.form,
          id: new Date().getMilliseconds().toString()
        }
        todos.push(todo)
        this.setState({
          todos: todos,
          message: "Order succeeded!",
        })
      }
      this.clearForm()
      this.setState({ isLoading: false })
    }, 2000)
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.setState({
        todos: [
          {
            id: new Date().getMilliseconds().toString(),
            name: 'Xavier',
            petname: 'Hoppy',
            status: true
          }
        ]
      })
      this.setState({ isLoading: false })
    }, 3000)
  }

  handleDelete = (id) => {
    if (!confirm(`Are you sure to delete this order ${id}? `)) return
    const todos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({
      todos: todos
    })
  }

  clearForm = () => {
    this.setState({
      form: {
        id: '',
        name: '',
        petname: '',
        status: false
      },
    },
      () => {
        setTimeout(() => {
          this.setState({ message: "" })
        }, 2000)
      })
  }

  handleSelectedTodoForEdit = (todo) => {
    this.setState({ form: todo })
  }

  render() {
    console.log("🚀 ~ Todo ~ todos:", this.state.todos)
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    }

    return (
      <div className='container-fluid pt-4 px-4 position-relative' >
        <div className={`${this.state.message && "show"} toast position-absolute top-0 end-0 me-4 mt-4 align-items-center text-bg-primary border-0`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              {this.state.message}
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
        <div className="text-center text-bg-primary text-info p-1">
            <h1>Lets Adopt!</h1>
        </div>
        <AdoptForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleChangeStatus={this.handleChangeStatus}
          clearForm={this.clearForm}
          form={this.state.form}
          errors={this.state.errors}
        />

        {
          this.state.isLoading
          &&
          <Loading />
          ||
          <AdoptList
            handleSelectedTodoForEdit={this.handleSelectedTodoForEdit}
            handleDelete={this.handleDelete}
            todos={this.state.todos}
          />
        }
        
      </div>
    )
  }
}

export default Adoption