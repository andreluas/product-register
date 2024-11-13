package com.andreluas.ProductRegister.services;

import com.andreluas.ProductRegister.dtos.ProductDTO;
import com.andreluas.ProductRegister.mappers.ProductMapper;
import com.andreluas.ProductRegister.models.Category;
import com.andreluas.ProductRegister.models.Product;
import com.andreluas.ProductRegister.repositories.CategoryRepository;
import com.andreluas.ProductRegister.repositories.ProductRepository;
import com.andreluas.ProductRegister.services.exceptions.ResourceAlreadyExistsException;
import com.andreluas.ProductRegister.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProductMapper productMapper;

    @Transactional(readOnly = true)
    public List<ProductDTO> findAllProducts() {
        List<Product> productList = productRepository.findAll();
        return productMapper.entityListToDtoList(productList);
    }

    @Transactional(readOnly = true)
    public ProductDTO findProductById(UUID id) {
        Optional<Product> op = productRepository.findById(id);
        Product entity = op.orElseThrow(() -> new ResourceNotFoundException("Produto não encontrado"));
        return productMapper.entityToDto(entity);
    }

    @Transactional(readOnly = true)
    public ProductDTO findProductByName(String name) {
        Optional<Product> op = productRepository.findByName(name);
        Product entity = op.orElseThrow(() -> new ResourceNotFoundException("Produto não encontrado: " + name));
        return productMapper.entityToDto(entity);
    }

    public ProductDTO createProduct(ProductDTO dto) {
        productRepository.findByName(dto.getName()).ifPresent(product -> {
            throw new ResourceAlreadyExistsException("Produto com o nome '" + dto.getName() + "' já existe.");
        });

        Optional<Category> op = categoryRepository.findById(dto.getCategoryId());
        Category categoryExists = op.orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrada."));

        Product product = productMapper.dtoToEntity(dto);
        product.setCategory(categoryExists);
        product = productRepository.save(product);
        return productMapper.entityToDto(product);
    }

    @Transactional
    public ProductDTO updateProduct(UUID id, ProductDTO dto) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Produto não encontrado para atualização: " + id));

        if (dto.getName() != null) {
            product.setName(dto.getName());
        }

        if (dto.getPrice() != null) {
            product.setPrice(dto.getPrice());
        }

        if (dto.getAmount() != null) {
            product.setAmount(dto.getAmount());
        }

        if (dto.getCategoryId() != null) {
            Category category = categoryRepository.findById(dto.getCategoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrada para o ID: " + dto.getCategoryId()));
            product.setCategory(category);
        }

        product = productRepository.save(product);
        return productMapper.entityToDto(product);
    }

    @Transactional
    public void deleteProduct(UUID id) {
        Optional<Product> op = productRepository.findById(id);
        Product product = op.orElseThrow(() -> new ResourceNotFoundException("Produto não encontrado."));
        productRepository.delete(product);
    }
}
