package com.andreluas.ProductRegister.mappers;

import com.andreluas.ProductRegister.dtos.ProductDTO;
import com.andreluas.ProductRegister.models.Category;
import com.andreluas.ProductRegister.models.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface ProductMapper {

    @Mapping(target = "category", ignore = true)
    Product dtoToEntity(ProductDTO productDTO);

    @Mapping(target = "categoryId", source = "category.id")
    ProductDTO entityToDto(Product product);

    List<ProductDTO> entityListToDtoList(List<Product> products);

}
