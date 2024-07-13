import React from 'react';
import './ReviewSection.css';
import StarIcon from '@mui/icons-material/Star';

const ReviewSection = () => {
  return (
    <div className="review-section">
      <h3>5.0 · 7 reviews</h3>
      <div className="review-ratings">
        <div className="rating-item">
          <p>Cleanliness</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '100%' }}></div></div>
          <p>5.0</p>
        </div>
        <div className="rating-item">
          <p>Communication</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '100%' }}></div></div>
          <p>5.0</p>
        </div>
        <div className="rating-item">
          <p>Check-in</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '100%' }}></div></div>
          <p>5.0</p>
        </div>
        <div className="rating-item">
          <p>Accuracy</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '100%' }}></div></div>
          <p>5.0</p>
        </div>
        <div className="rating-item">
          <p>Location</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '98%' }}></div></div>
          <p>4.9</p>
        </div>
        <div className="rating-item">
          <p>Value</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '94%' }}></div></div>
          <p>4.7</p>
        </div>
      </div>

      <div className="reviews-container">
        <div className="reviews-left">
          <div className="review">
            <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" alt="Reviewer 1" className="reviewer-image" />
            <div className="review-text">
              <p><strong>Jose</strong> · December 2021</p>
              <p>Host was very attentive.</p>
            </div>
          </div>
          <div className="review">
            <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" alt="Reviewer 2" className="reviewer-image" />
            <div className="review-text">
              <p><strong>Shayna</strong> · December 2021</p>
              <p>Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool murphy bed...</p>
              <button className="show-more-button">Show more</button>
            </div>
          </div>
          <div className="review">
            <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" alt="Reviewer 3" className="reviewer-image" />
            <div className="review-text">
              <p><strong>Vladko</strong> · November 2020</p>
              <p>This is an amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality at an affordable price.</p>
            </div>
          </div>
        </div>
        <div className="reviews-right">
          <div className="review">
            <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" alt="Reviewer 4" className="reviewer-image" />
            <div className="review-text">
              <p><strong>Luke</strong> · December 2021</p>
              <p>Nice place to stay!</p>
            </div>
          </div>
          <div className="review">
            <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" alt="Reviewer 5" className="reviewer-image" />
            <div className="review-text">
              <p><strong>Josh</strong> · November 2021</p>
              <p>Well designed and fun space, neighborhood has lots of energy and amenities.</p>
            </div>
          </div>
          <div className="review">
            <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" alt="Reviewer 6" className="reviewer-image" />
            <div className="review-text">
              <p><strong>Jennifer</strong> · January 2022</p>
              <p>A centric place, near a sub station and a supermarket with everything you need...</p>
              <button className="show-more-button">Show more</button>
            </div>
          </div>
        </div>
      </div>
      <button className="show-all-reviews-button">Show all 12 reviews</button>
    </div>
  );
};

export default ReviewSection;
