import PropTypes from "prop-types"
import { Component } from "react"
import {
  IconAccessible,
  IconApps,
  IconAsset,
  IconChevronDown,
  IconDoorExit,
  IconHome2,
  IconListDetails,
  IconReceipt,
  IconUser,
  IconUsers,
  Paw,
} from "@tabler/icons-react"
import Dashboard from "../../pages/Dashboard/Dashboard"
import Home from "../../pages/Home/Home"
import Adaption from "../../pages/Adoption/Adoption"
import Pets from "../../pages/Pets/Pets"


export default class Sidebar extends Component {
  render() {
    const { navigateTo } = this.props
    return (
      <div
        className={"bg-primary text-white p-4 shadow"}
        style={{ width: 300, minHeight: "100dvh" }}
      >
        <div className="font-logo text-center mb-5">
          <h2 className="fs-2">
            <i>
              <b>Chiky's</b> Shop
            </i>
          </h2>
          <h2 className="fs-6 my-4 font-primary fw-bold">Backoffice V1.0.0</h2>
        </div>
        <nav>
          <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
            <p onClick={() => navigateTo(<Dashboard />)}
              className="fw-bold cursor-pointer">Dashboard</p>
            <li
              className="cursor-pointer text-white"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="true"
            >
              <i className="me-3">
                <IconApps />
              </i>
              <span>Master</span>
              <i className="ms-3">
                <IconChevronDown />
              </i>
            </li>
            <div className="collapse" id="dashboard-collapse">
              <ul className="text-white cursor-pointer d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
                <li
                  onClick={() => navigateTo(<Home />)}
                  className="cursor-pointer"
                >
                  <i className="me-3">
                    <IconHome2 />
                  </i>
                  <span>Home</span>
                </li>
                <li
                  onClick={() => navigateTo(<Adaption />)}
                  className="cursor-pointer"
                >
                  <i className="me-3">
                    <IconListDetails />
                  </i>
                  <span>Adoption</span>
                </li>
                <li
                  onClick={() => navigateTo(<Pets />)}
                  className="cursor-pointer">
                  <i className="me-3">
                    <Paw />
                  </i>
                  <span>Pets</span>
                </li>
              </ul>
            </div>
            {/* <p className="fw-bold mt-4">Transaction</p>
            <li className="cursor-pointer text-white">
              <i className="me-3">
                <IconReceipt />
              </i>
              <span>Transaction</span>
            </li>
            <p className="fw-bold mt-4">Settings</p>
            <li
              onClick={() => navigateTo(<Register />)}
              className="cursor-pointer text-white">
              <i className="me-3">
                <IconUser />
              </i>
              <span>User</span>
            </li>
            <hr />
            <li
              className="cursor-pointer text-white">
              <i className="me-3">
                <IconDoorExit />
              </i>
              <span>Logout</span>
            </li> */}
          </ul>
        </nav>
      </div>
    )
  }
}

Sidebar.propTypes = {
  navigateTo: PropTypes.func,
}