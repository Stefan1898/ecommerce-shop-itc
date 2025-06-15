export const fetchProducts = async () => {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) throw new Error("Eroare la încărcarea produselor");
    return await response.json();
  } catch (error) {
    console.error("Eroare la fetchProducts:", error);
    return [];
  }
};