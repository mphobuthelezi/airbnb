import React from 'react';
import './Inspiration.css';

const Inspiration = () => {
  return (
    <div className="inspiration-container">
      {/* Section 1: Cards Section */}
      <div className="cards-section">
        <h2>Inspiration for your next trip</h2>
        <div className="cards-row">
          <div className="city-card sandton-city">
            <img src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__" alt="Sandton City Hotel" />
            <div className="card-info">
              <h3>Sandton City Hotel</h3>
              <p>53 km away</p>
            </div>
          </div>
          <div className="city-card joburg-city">
            <img src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__" alt="Joburg City Hotel" />
            <div className="card-info">
              <h3>Joburg City Hotel</h3>
              <p>168 km away</p>
            </div>
          </div>
          <div className="city-card woodmead">
            <img src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__" alt="Woodmead Hotel" />
            <div className="card-info">
              <h3>Woodmead Hotel</h3>
              <p>30 miles away</p>
            </div>
          </div>
          <div className="city-card hyde-park">
            <img src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__" alt="Hyde Park Hotel" />
            <div className="card-info">
              <h1>Hyde Park Hotel</h1>
              <p>34 km away</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Discover Airbnb Experiences */}
      <div className="discover-experiences">
        <h2>Discover Airbnb Experiences</h2>
        <div className="experiences-row">
          <div className="experience-image trip">
            <img src="https://s3-alpha-sig.figma.com/img/3679/a298/196b41cd98272a64e19b9681beb746f0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=USUFt7RFGCxZFzXT7ak8kw8iybjikbgLauotqnRCfOdbgGJnAeY8QOK-mV-4DWVV1K9pGt0JZLm~EOdlzeOKdj~T1yymUoFt4I-umCNVfPgDXJHqIO6LC19-9nxFx260ATiTtFNUr1x6-ySktziWnQRF~9di6GfHF7aLhibnBMhvH7DWO0bkbkKnKIHJROUOFe0g7UuAvkmrO5CL4fgHuveSyJ-SK3bbWvq2fEIA7kRPDuXPmrTeH7Brv0HcW5N0v5xe~17nT~Ux6TwZRp8hlwJ06LPx6woPEf0vWgsEPY1xwtsdbhCPqQZAWdsACjGoiwC68uvevcwiu9Dh3zi6lg__" alt="Things to do on your trip" />
            <div className="experience-info">
              <h3>Things to do on your trip</h3>
              <button>Experiences</button>
            </div>
          </div>
          <div className="experience-image home">
            <img src="https://tse1.mm.bing.net/th?id=OIP.KM7fmephhc7LgjwZ6Fap3wHaE8&pid=Api&P=0&h=220" alt="Things to do from home" />
            <div className="experience-info">
              <h3>Things to do from home</h3>
              <button>Online Experiences</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Shop Airbnb Gift Cards */}
      <div className="gift-cards-section">
        <div className="gift-cards-content">
          <div className="left-content">
            <p>Shop Airbnb gift cards</p>
            <button>Learn more</button>
          </div>
          <img src="https://s3-alpha-sig.figma.com/img/43b8/8762/e0a70df6eb554b492d0b7d2633a1ecb1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oUj~mgbRJOAn-Y~cSQ5nAaD4BFQ~xUFzEIk~GNI7amFNHrqSW~9wCrrflUQjhdiYQwvejAQp4JdjYWoyRAYVaZXBvbwkPLyFq-YUr-3aKUnhoLvkFm077TKbuaHEg2KL0HwuSege8outJs84E9IOX-4LmRoejCA-Kgt3OrXKqvaHG6M550gll5fUCkqL5AwK517tZa8Fr0hMCHmwd8Z-2EG3C~mRHIY6sQt-MH0zNdBawO9zk-HPY81G~Ynd60rk6DXsmmtEJ7qivgr8M80gteiB0RVuVrBzAcEOuShjx-tUYfC5Yi~eZsrvgf-xULQNorSkGaUL0oDHLMFOtD03AQ__" alt="Airbnb gift cards" className="gift-cards-image"/>
        </div>
      </div>

      {/* Section 4: Questions about Hosting */}
      <div className="hosting-section">
        <img src="https://s3-alpha-sig.figma.com/img/5ed8/a779/efd4d7b308f8c6bdd6b801b638cc68d2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OAAISHTvKj1vizWZn3NY2t6m715640Crb7-s-BgY0jWiJN1v9hv2JYuPJ2kD~vteCtk4Z7nZEHA7cz5DU0SlITCs9oT5fr1Qpf-DZspn5lgcoVK0w3jZGXlk34VZ5U134VAw3IFI9vUz-IMGLyU3gtXz-aez549Uf4gbOFR~Tjg4I0MHrGdidN1NPA53KQq23pBxDTXWMuCbA7RBj~wkefE9SgGP89-nfPM-BPqfxPpTjE9jDJC7h83RKL1769sdd3yo67QdwsJPlfmdO8FIQYftXDX1HRCe6Zp-2vLnQ3tqBvAnvbW2PuU~DNZUgrDgZ8fVnWBzSFtBcZYkIuN0uw__" alt="Questions about hosting?" />
        <div className="hosting-content">
          <h4>Questions about hosting?</h4>
          <button>Ask a Superhost</button>
        </div>
      </div>

      {/* Section 5: Pre-footer */}
      <div className="pre-footer">
        <h2>Inspiration for future getaways</h2>
        <div className="getaways-links">
          <a href="#">Destinations for arts & culture</a>
          <a href="#">Destinations for outdoor adventure</a>
          <a href="#">Mountain cabins</a>
          <a href="#">Beach destinations</a>
          <a href="#">Popular destinations</a>
          <a href="#">Unique Stays</a>
        </div>
        <div className="destinations">
          <div>
            <h3>Phoenix</h3>
            <p>Arizona</p>
          </div>
          <div>
            <h3>Hot Springs</h3>
            <p>Arkansas</p>
          </div>
          <div>
            <h3>Los Angeles</h3>
            <p>California</p>
          </div>
          <div>
            <h3>San Diego</h3>
            <p>California</p>
          </div>
          <div>
            <h3>San Francisco</h3>
            <p>California</p>
          </div>
          <div>
            <h3>Barcelona</h3>
            <p>Catalonia</p>
          </div>
          <div>
            <h3>Prague</h3>
            <p>Czechia</p>
          </div>
          <div>
            <h3>Washington</h3>
            <p>District of Columbia</p>
          </div>
          <div>
            <h3>Keswick</h3>
            <p>England</p>
          </div>
          <div>
            <h3>London</h3>
            <p>England</p>
          </div>
          <div>
            <h3>Scarborough</h3>
            <p>England</p>
          </div>
          <div>
            <h3><a href="#">Show more</a></h3>
          </div>
        </div>
      </div>

      {/* Section 6: Footer */}
      <div className="footer">
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety information</a></li>
            <li><a href="#">Cancellation options</a></li>
            <li><a href="#">Our COVID-19 Response</a></li>
            <li><a href="#">Supporting people with disabilities</a></li>
            <li><a href="#">Report a neighborhood concern</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Airbnb.org: disaster relief housing</a></li>
            <li><a href="#">Support: Afghan refugees</a></li>
            <li><a href="#">Celebrating diversity & belonging</a></li>
            <li><a href="#">Combating discrimination</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Hosting</h4>
          <ul>
            <li><a href="#">Try hosting</a></li>
            <li><a href="#">AirCover: protection for Hosts</a></li>
            <li><a href="#">Explore hosting resources</a></li>
            <li><a href="#">Visit our community forum</a></li>
            <li><a href="#">How to host responsibly</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Learn about new features</a></li>
            <li><a href="#">Letter from our founders</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Airbnb Luxe</a></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Inspiration;
