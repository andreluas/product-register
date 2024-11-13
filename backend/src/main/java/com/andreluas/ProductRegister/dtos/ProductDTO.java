package com.andreluas.ProductRegister.dtos;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

public class ProductDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private UUID id;

    @Size(min = 2, max = 255, message="Nome do produto deve ter pelo menos 2 dígitos.")
    @NotBlank
    private String name;

    @NotNull
    @DecimalMin(value = "0", inclusive = true, message = "O preço não pode ser negativo.")
    private BigDecimal price;

    @NotBlank
    private Long amount;

    @NotNull
    private UUID categoryId;

    private LocalDateTime createAt;
    private LocalDateTime updatedAt;

    public ProductDTO() {}

    public ProductDTO(UUID id, String name, BigDecimal price, Long amount, UUID categoryId, LocalDateTime createAt, LocalDateTime updatedAt) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.categoryId = categoryId;
        this.createAt = createAt;
        this.updatedAt = updatedAt;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public @Size(min = 2, max = 255, message = "Nome do produto deve ter pelo menos 2 dígitos.") @NotBlank String getName() {
        return name;
    }

    public void setName(@Size(min = 2, max = 255, message = "Nome do produto deve ter pelo menos 2 dígitos.") @NotBlank String name) {
        this.name = name;
    }

    public @NotNull @DecimalMin(value = "0", inclusive = true, message = "O preço não pode ser negativo.") BigDecimal getPrice() {
        return price;
    }

    public void setPrice(@NotNull @DecimalMin(value = "0", inclusive = true, message = "O preço não pode ser negativo.") BigDecimal price) {
        this.price = price;
    }

    public @NotBlank Long getAmount() {
        return amount;
    }

    public void setAmount(@NotBlank Long amount) {
        this.amount = amount;
    }

    public @NotNull UUID getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(@NotNull UUID categoryId) {
        this.categoryId = categoryId;
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
