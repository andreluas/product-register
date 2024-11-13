import React, { useState } from "react";
import classes from "./Form.module.css";
import { useNavigate } from "react-router-dom";

export default function CategoryForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v1/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar a categoria");
      }

      navigate("/categorias");
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSave}>
      <p>
        <label htmlFor="name">Nome da categoria</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
