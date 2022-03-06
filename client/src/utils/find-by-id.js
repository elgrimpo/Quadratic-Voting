

export const findById = (category, id) => {
   return category.find((item) => item._id === id)
}