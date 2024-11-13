package com.andreluas.ProductRegister.services;

import com.andreluas.ProductRegister.dtos.CategoryDTO;
import com.andreluas.ProductRegister.mappers.CategoryMapper;
import com.andreluas.ProductRegister.models.Category;
import com.andreluas.ProductRegister.repositories.CategoryRepository;
import com.andreluas.ProductRegister.services.exceptions.ResourceAlreadyExistsException;
import com.andreluas.ProductRegister.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository repository;

    @Autowired
    private CategoryMapper mapper;

    @Transactional(readOnly = true)
    public List<CategoryDTO> findAllCategories() {
        List<Category> list = repository.findAll();
        return mapper.entityListToDtoList(list);
    }

    @Transactional(readOnly = true)
    public CategoryDTO findCategoryByName(String name) {
        Optional<Category> op = repository.findByName(name);
        Category entity = op.orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrada: " + name));
        return mapper.entityToDto(entity);
    }

    @Transactional(readOnly = true)
    public CategoryDTO findCategoryById(UUID id) {
        Optional<Category> op = repository.findById(id);
        Category entity = op.orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrada: " + id));
        return mapper.entityToDto(entity);
    }

    public CategoryDTO createCategory(CategoryDTO dto) {
        repository.findByName(dto.getName())
                .ifPresent(category -> {
                    throw new ResourceAlreadyExistsException("Categoria com o nome '" + dto.getName() + "' já existe.");
                });
        Category entity = mapper.dtoToEntity(dto);
        repository.save(entity);
        return mapper.entityToDto(entity);
    }

    @Transactional
    public CategoryDTO updateCategory(UUID id, CategoryDTO dto) {
        Optional<Category> op = repository.findById(id);
        Category entity = op.orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrada: " + id));
        entity.setName(dto.getName());
        entity = repository.save(entity);
        return mapper.entityToDto(entity);
    }

    @Transactional
    public void deleteCategory(UUID id) {
        Optional<Category> op = repository.findById(id);
        Category entity = op.orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrada: " + id));
        repository.delete(entity);
    }

}
