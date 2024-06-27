import { Component } from "react"
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react"

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-primary py-4 text-white">
        <div className="container">
          <div className="text-center">
            <h4>Created by Sheila</h4>
          </div>
        </div>
      </footer>
    )
  }
}

