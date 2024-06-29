import { Component } from "react"
import Lists from "./components/Lists"
import Loading from "../../shared/Animations/LoadingAnimation"

class Pets extends Component { 
    state = {
        isLoading: true,
        error: null,
        selectedCategory: '',
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            })
        }, 2000)
    }

    handleCategoryChange = (event) => {
        this.setState({
            selectedCategory: event.target.value
        })
    }

    render() { 
        const { isLoading, error, selectedCategory } = this.state
        return (
            <div className='container-fluid pt-4 px-4 position-relative'>
                <div className="text-center text-bg-primary text-info p-1">
                    <h1>Available Pets for Adoption</h1>
                </div>
                <div>
                    <label htmlFor="category-select" className="fs-4 px-2 my-2 text-bg-info rounded-2">Choose a category:</label>
                    <select id="category-select"
                        className="form-select px-3 cursor-pointer text-bg-secondary"
                        onChange={this.handleCategoryChange}
                        value={selectedCategory}
                    >
                        <option value="" className="cursor-pointer">All</option>
                        <option value="Dog" className="cursor-pointer">Dog</option>
                        <option value="Cat" className="cursor-pointer">Cat</option>
                        <option value="Fish" className="cursor-pointer">Fish</option>
                        <option value="Bird" className="cursor-pointer">Bird</option>
                        <option value="Rabbit" className="cursor-pointer">Rabbit</option>
                    </select>
                </div>
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <Lists 
                        selectedCategory={selectedCategory}
                    />
                )}
            </div>
        )
    }
}
 
export default Pets;