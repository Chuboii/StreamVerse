import StarRating from 'react-native-star-rating-widget';
import { useState } from "react"

type Prop = {
  style: object;
}
const StarRatingTemplate = ({ style = {} }: Prop) => {
  const [rating, setRating] = useState(0);

  return (
    <StarRating
      style={style}
      rating={rating}
      onChange={setRating}
    />
  );
};

export default StarRatingTemplate