const API_URL = "http://localhost:5000/api";

export async function fetchCategories() {
  const response = await fetch(`${API_URL}/categories`);

  if (!response.ok) {
    throw new Error("Eroare la incarcarea categoriilor");
  }

  return response.json();
}

export async function fetchProducts(categoryId = "") {
  let url = `${API_URL}/products`;

  if (categoryId) {
    url += `?category_id=${categoryId}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Eroare la incarcarea produselor");
  }

  return response.json();
}
