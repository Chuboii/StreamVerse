import StarRating from 'react-native-star-rating-widget';
import {useState} from "react"
const StarRatingTemplate = () => {
  const [rating, setRating] = useState(0);
 
  return (
      <StarRating
        rating={rating}
        onChange={setRating}
      />
  );
};

export default StarRatingTemplate