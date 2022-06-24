import { useState } from 'react';
import { Divider, Input } from 'antd';

export function AddFoodForm({ allFoods, setAllFoods }) {
  //   console.log(allfoods);
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAllFoods([...allFoods, form]);
    setForm({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  }

  return (
    <>
      <form>
        <Divider>Add Food Entry</Divider>
        <label htmlFor="input-name">Name:</label>
        <Input
          name="name"
          value={form.name}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="input-image">Image:</label>
        <Input
          name="image"
          value={form.image}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="input-calories">Calories:</label>
        <Input
          name="calories"
          value={form.calories}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="input-servings">Servings:</label>
        <Input
          name="servings"
          value={form.servings}
          type="text"
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </>
  );
}
