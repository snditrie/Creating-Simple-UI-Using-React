import { Component } from "react"
import person from "../../../assets/images/person.svg"

export default class Testimony extends Component {
  render() {
    return (
      <section className="py-4" id="testimony">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Testimony</h2>
          <div className="row row-cols-1 row-cols-md-4 justify-content-center g-4">
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <img
                  src={person}
                  className="card-img-top rounded-4 bg-primary"
                  alt="budi"
                />
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>
                      Adopting a puppy from this pet shop was a fantastic experience. The staff was knowledgeable and helped me find the perfect match. My new dog, Max, has brought so much joy into my life!
                    </p>
                    <footer className="blockquote-footer">Eudora</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <img
                  src={person}
                  className="card-img-top rounded-4 bg-primary"
                  alt="budi"
                />
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>
                      The pet shop made adopting a rabbit very easy. They even followed up with me to ensure everything was going well. My kids love our new rabbit, Thumper!
                    </p>
                    <footer className="blockquote-footer">Nana</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <img
                  src={person}
                  className="card-img-top rounded-4 bg-primary"
                  alt="budi"
                />
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>
                      Great experience adopting a bird from this pet shop. The staff was very supportive and gave me lots of tips on how to care for my new parrot, Polly.
                    </p>
                    <footer className="blockquote-footer">Luoyi</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <img
                  src={person}
                  className="card-img-top rounded-4 bg-primary"
                  alt="budi"
                />
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>
                      I was nervous about adopting a pet, but the staff at this shop made me feel comfortable and confident. We adopted a fish tank with a few goldfish, and the kids are absolutely thrilled.
                    </p>
                    <footer className="blockquote-footer">Kadita</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


