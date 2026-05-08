function CategoryFilter({
  categories,
  selectedCategory,
  onChange,
}) {
  return (
    <div className="filter-container">
      <select
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Toate categoriile</option>

        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
