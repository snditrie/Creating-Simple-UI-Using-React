import { IconBookmarks, IconShoppingCart } from '@tabler/icons-react'
import { Component } from 'react'
import Animals from './Animals'

class Lists extends Component {
  state = {
    savedCount: 0,
  }

  // number dari mana? dari childnya nanti
  handleChangeSavedCount = (number) => {
    this.setState({
      savedCount: this.state.savedCount + number
    })
  }

  render() {
    return (
      <section>
        <div className="container shadow-sm p-4 my-4 rounded-2">
          <div className="d-flex justify-content-between">
            <h2 className="my-2">List Animal To Adopt</h2>
            <div className="d-flex justify-content-end column-gap-2">
              <p className="text-end my-2">
                <IconBookmarks />
                <span className="badge text-bg-secondary rounded-pill">
                  {this.state.savedCount}
                </span>
              </p>
            </div>
          </div>
          <div className="row row-cols-lg-1 gap-3">
            <div className="col">
              <Animals
                image="https://plus.unsplash.com/premium_photo-1686090449483-89a9b794e7cf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Max"
                category="Dog"
                description="Max is a friendly and energetic Labrador Retriever, perfect for families with children."
                changeSavedCount={this.handleChangeSavedCount}
              />
            </div>
            <div className="col">
              {/* Product */}
              <Animals
                image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Whiskers"
                category="Cat"
                description="Whiskers is a calm and affectionate Persian cat, loves to be pampered and brushed."
                changeSavedCount={this.handleChangeSavedCount}
              />
            </div>
            <div className="col">
              {/* Product */}
              <Animals
                image="https://images.unsplash.com/photo-1534043464124-3be32fe000c9?q=80&w=2806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Bubbles"
                category="Fish"
                description="Bubbles is a vibrant goldfish that brightens up any room. Easy to care for and great for beginners."
                changeSavedCount={this.handleChangeSavedCount}
              />
            </div>
            <div className="col">
              {/* Product */}
              <Animals
                image="https://images.unsplash.com/photo-1606567595334-d39972c85dbe?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Pecky"
                category= "Bird"
                description= "Pecky is a chirpy parakeet who loves to sing and interact with people. Perfect for bird enthusiasts."
                changeSavedCount={this.handleChangeSavedCount}
              />
            </div>
            <div className="col">
              {/* Product */}
              <Animals
                image="https://images.unsplash.com/photo-1591382386627-349b692688ff?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Hoppy"
                category= "Rabbit"
                description= "Hoppy is a playful and cute bunny with a love for cuddles and carrots."
                changeSavedCount={this.handleChangeSavedCount}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Lists