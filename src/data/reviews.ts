export interface UserReview {
  rating: number;
  title: string;
  text: string;
  images: { small_image_url?: string; medium_image_url?: string; large_image_url?: string }[] | string[];
  asin: string;
  parent_asin: string;
  user_id: string;
  timestamp: number;
  verified_purchase: boolean;
  helpful_vote: number;
}

export const reviews: UserReview[] = [
  {
    rating: 5.0,
    title: "Such a lovely scent but not overpowering.",
    text: "This spray is really nice. It smells really good, goes on really fine, and does the trick. I will say it feels like you need a lot of it though to get the texture I want. I have a lot of hair, medium thickness. I am comparing to other brands with yucky chemicals so I'm gonna stick with this. Try it!",
    images: [],
    asin: "B00YQ6X8EO",
    parent_asin: "B00YQ6X8EO",
    user_id: "AGKHLEW2SOWHNMFQIJGBECAF7INQ",
    timestamp: 1588687728923,
    helpful_vote: 0,
    verified_purchase: true
  },
  {
    rating: 5.0,
    title: "Restored my vintage leather bags!",
    text: "Amazing conditioning. My vintage Prodapt & Rakesh leather tote bags and Chelsea boots look absolutely brand new. Easy application, zero greasy residue, and has a very clean natural scent. Definitely worth buying the 4-pack.",
    images: [],
    asin: "B01CUPMQZE",
    parent_asin: "B01CUPMQZE",
    user_id: "AL21SOWHNM98IJGBECAF7INQ77",
    timestamp: 1612345678000,
    helpful_vote: 4,
    verified_purchase: true
  },
  {
    rating: 4.8,
    title: "Best hair oil ever, silky smooth",
    text: "This argan oil is incredibly lightweight. Keeps my hair frizz-free and shiny without looking heavy. Smells amazing too! Highly recommend for dry hair.",
    images: [],
    asin: "B00140G8OC",
    parent_asin: "B00140G8OC",
    user_id: "AHR12SOWHNMFQIJGBECAF9988",
    timestamp: 1599988888000,
    helpful_vote: 12,
    verified_purchase: true
  },
  {
    rating: 5.0,
    title: "So refreshing and hydration is out of this world",
    text: "Absolutely love this mist spray. It hydrates instantly and acts as a beautiful makeup setting spray. Very soothing scent. Will buy again!",
    images: [],
    asin: "B07Y5X8888",
    parent_asin: "B07Y5X8888",
    user_id: "AE62SOWHNMFQIJGBECAF75533",
    timestamp: 1621234567000,
    helpful_vote: 3,
    verified_purchase: true
  }
];

export function getReviewsForProduct(parent_asin: string): UserReview[] {
  return reviews.filter(r => r.parent_asin === parent_asin);
}
