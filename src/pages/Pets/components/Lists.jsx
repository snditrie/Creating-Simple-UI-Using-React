import { IconBookmarks, IconShoppingCart } from '@tabler/icons-react'
import { Component } from 'react'
import Animals from './Animals'

const data = [
      {
        "id": 1,
        "name": "Max",
        "category": "Dog",
        "description": "Max is a friendly and energetic Labrador Retriever, perfect for families with children.",
        "image": "https://plus.unsplash.com/premium_photo-1686090449483-89a9b794e7cf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "id": 2,
        "name": "Whiskers",
        "category": "Cat",
        "description": "Whiskers is a calm and affectionate Persian cat, loves to be pampered and brushed.",
        "image": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "id": 3,
        "name": "Bubbles",
        "category": "Fish",
        "description": "Bubbles is a vibrant goldfish that brightens up any room. Easy to care for and great for beginners.",
        "image": "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?q=80&w=2806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "id": 4,
        "name": "Pecky",
        "category": "Bird",
        "description": "Pecky is a chirpy parakeet who loves to sing and interact with people. Perfect for bird enthusiasts.",
        "image": "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "id": 5,
        "name": "Hoppy",
        "category": "Rabbit",
        "description": "Hoppy is a playful and cute bunny with a love for cuddles and carrots.",
        "image": "https://images.unsplash.com/photo-1591382386627-349b692688ff?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
]

class Lists extends Component {
  state = {
    pets: data,
    savedCount: 0,
  }

  handleChangeSavedCount = (number) => {
    this.setState({
      savedCount: this.state.savedCount + number
    })
  }

  render() {
    const { pets } = this.state
    const { selectedCategory } = this.props
    const filteredPets = selectedCategory ? pets.filter(pet => pet.category === selectedCategory) : pets

    return (
      <section>
        <div className="container shadow-sm p-4 my-4 rounded-2 pt-0">
            <div className="d-flex justify-content-end column-gap-2">
              <h4 className="text-end my-1 px-1">
                <IconBookmarks />
                <span className="badge text-bg-secondary rounded-pill">
                  {this.state.savedCount}
                </span>
              </h4>
            </div>
          <div className="row gap-5 justify-content-start">
            {filteredPets.map((pet) => (
                <div className="col col-3" key={pet.id}>
                <Animals
                  image={pet.image}
                  name={pet.name}
                  category={pet.category}
                  description={pet.description}
                  changeSavedCount={this.handleChangeSavedCount}
                />
              </div>
            ))}
            
          </div>
        </div>
      </section>
    )
  }
}

export default Lists
// export { data }