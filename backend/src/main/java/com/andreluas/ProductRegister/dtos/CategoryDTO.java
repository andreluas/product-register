package com.andreluas.ProductRegister.dtos;

import com.andreluas.ProductRegister.models.Product;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class CategoryDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private UUID id;

    @NotBlank(message = "Nome da categoria não pode ser vazio.")
    @Size(min = 2, max = 255, message = "Nome da categoria deve ter entre 2 e 255 caracteres.")
    private String name;

    private List<Product> products;
    private LocalDateTime createAt;
    private LocalDateTime updatedAt;

    public CategoryDTO() {}

    public CategoryDTO(UUID id, String name, LocalDateTime createAt, LocalDateTime updatedAt) {
        this.id = id;
        this.name = name;
        this.createAt = createAt;
        this.updatedAt = updatedAt;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome da categoria não pode ser vazio.") @Size(min = 2, max = 255, message = "Nome da categoria deve ter entre 2 e 255 caracteres.") String getName() {
        return name;
    }

    public void setName(@NotBlank(message = "Nome da categoria não pode ser vazio.") @Size(min = 2, max = 255, message = "Nome da categoria deve ter entre 2 e 255 caracteres.") String name) {
        this.name = name;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public LocalDateTime getCreateAt() {
        return createAt;
    }

    public void setCreateAt(LocalDateTime createAt) {
        this.createAt = createAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}
