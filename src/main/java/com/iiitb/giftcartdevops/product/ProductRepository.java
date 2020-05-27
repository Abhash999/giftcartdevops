package com.iiitb.giftcartdevops.product;

import com.iiitb.giftcartdevops.Category.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends CrudRepository<Product,Integer> {

    public List<Product>findByCategoryId(Integer id);
    public Product findProductByDescription(String description);
}
