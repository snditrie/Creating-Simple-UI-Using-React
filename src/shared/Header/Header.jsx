  import { Component } from "react"
  import { IconSettings2 } from "@tabler/icons-react"
  import HeaderAnimation from "../Animations/HeaderAnimation";

  class Header extends Component {
      render() { 
          return (
            <div>
              {/* <HeaderAnimation /> */}
            
                  <div className="text-center text-bg-primary text-info p-1">
                      <h1>Lets adopt your favourite pet!</h1>
                  
              <div className="col-lg-6 col-12">
              <div className="position-absolute top-0 end-0 p-2">
              <div className="d-flex justify-content-end shadow-sm px-4 py-2 ">
                <button
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="btn btn-link"
                
                >
                
                  <img
                    className="rounded-circle cursor-pointer"
                    width={32}
                    height={32}
                    src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png"
                    alt="avatar"
                  />
                </button>
              
                <ul className="dropdown-menu">
                  <li className="dropdown-item-text">
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Nikola Tesla</h6>
                      <span>nikola.tesla@gmail.com</span>
                    </div>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="me-2">
                        <IconSettings2 size={16} />
                      </i>
                      Sunting Profil
                    </a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            </div>
            </div>
          
          )
      }
  }
  
  export default Header;