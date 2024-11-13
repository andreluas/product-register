package com.andreluas.ProductRegister.mappers;

import com.andreluas.ProductRegister.dtos.CategoryDTO;
import com.andreluas.ProductRegister.models.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface CategoryMapper {

    Category dtoToEntity(CategoryDTO categoryDTO);

    @Mapping(target = "products", source = "products")
    CategoryDTO entityToDto(Category category);

    List<CategoryDTO> entityListToDtoList(List<Category> categories);
}
