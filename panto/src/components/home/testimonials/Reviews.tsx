import Review from "./Review";
import mirror_room from "@assets/testimonials/mirror-room.png";
import yellow_chair from "@assets/testimonials/yello-big-chair.png";
import oval_chair from "@assets/testimonials/oval-chair.png";

const reviews = [
  {
    name: "Bang Upin",
    review:
      "Terima kasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    image: yellow_chair,
    rating: 4,
  },
  {
    name: "Ibuk Sukijan",
    review:
      "Walaupun baru, aku sekarang berasa tinggal di apartemen karena barang-barangnya terlihat mewah",
    image: oval_chair,
    rating: 3,
  },
  {
    name: "Mypok Ina",
    review: "Sangat terjangkau untuk saya yang tidak terlalu budget besar",
    image: mirror_room,
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 sm:flex-row sm:flex-wrap sm:justify-center">
      {reviews.map((review, index) => (
        <Review
          key={index}
          name={review.name}
          review={review.review}
          image={review.image}
          rating={review.rating}
        />
      ))}
    </div>
  );
};

export default Reviews;
