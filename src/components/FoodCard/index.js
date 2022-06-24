export function FoodCard({ food }) {
  //   console.log(food);
  return (
    <div>
      <p>{food.name}</p>
      {/* <p>{food.calories}</p> */}
      <img src={food.image} width={100} alt="food" />
    </div>
  );
}
