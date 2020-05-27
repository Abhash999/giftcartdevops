package com.iiitb.giftcartdevops.product;

import com.iiitb.giftcartdevops.Category.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;



    public List<Product> getAllProducts(Integer category_id){
        List<Product> products =new ArrayList<>();
         productRepository.findByCategoryId(category_id).forEach(products::add);
         return products;
    }

    public Optional<Product> getProduct(Integer id){
        return productRepository.findById(id);
    }

    public void addProduct(Product product){
        productRepository.save(product);
    }

    public void updateProduct(Integer id, Product product) {
       productRepository.save(product);
    }


    public void deleteProduct(Integer id) {
        productRepository.deleteById(id);
    }


    public List<Product> getCompleteProducts() {
        List<Product> products=new ArrayList<>();
        productRepository.findAll().forEach(products::add);
        return products;
    }

    public Product getProductDescription(String description){
        Product product = productRepository.findProductByDescription(description);
        return product;
    }
}
