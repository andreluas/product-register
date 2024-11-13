import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("http://localhost:8080/api/v1/categories");
        if (!response.ok) throw new Error("Erro ao carregar as categorias");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
        alert("Ocorreu um erro ao carregar as categorias.");
      }
    }

    fetchCategories();
  }, []);

  const handleCancel = () => {
    navigate("/");
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!name || !price || !amount || !categoryId) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price: parseFloat(price),
          amount: parseInt(amount, 10), 
          categoryId,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar o produto");
      }

      navigate("/produtos");
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSave}>
      <p>
        <label htmlFor="name">Nome do produto</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </p>
      <p>
        <label htmlFor="price">Preço</label>
        <input
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </p>
      <p>
        <label htmlFor="amount">Quantidade</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </p>
      <p>
        <label htmlFor="categoryId">Categoria</label>
        <select
          id="categoryId"
          name="categoryId"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">Selecione uma categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={handleCancel}>
          Cancelar
        </button>
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
}
