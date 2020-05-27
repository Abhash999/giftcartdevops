package com.iiitb.giftcartdevops.product;

import com.iiitb.giftcartdevops.Category.Category;
import com.iiitb.giftcartdevops.Category.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {

    //testing the commit


    @Autowired
    private ProductService productService;

    @RequestMapping("/products")
    public List<Product> getCompleteProductList(){
        return productService.getCompleteProducts();
    }

  @RequestMapping("/categories/{category_id}/products")
  public List<Product> getAllProducts(@PathVariable Integer category_id) throws Exception {
        List<Product> products = new ArrayList<>();

      products =  productService.getAllProducts(category_id);
      if(products==null)
          throw new Exception("no products in this category");
      else
          return products;
  }

  @RequestMapping("/categories/{category_id}/products/{id}")
  public Optional<Product> getProduct(@PathVariable Integer id){
      return productService.getProduct(id);
  }

  @RequestMapping(method = RequestMethod.POST,value = "/categories/{category_id}/products")
  public void addProduct(@RequestBody Product product,@PathVariable Integer category_id) throws Exception {

      Product product1 = productService.getProductDescription(product.description);
      if(product1==null) {
          product.setCategory(new Category(category_id, "", ""));
          productService.addProduct(product);
      }
      else
      {
          throw new Exception("Product already added");
      }
  }


    @RequestMapping(method = RequestMethod.PUT,value = "/categories/{category_id}/products/{id}")
    public void updateProduct(@RequestBody Product product,@PathVariable Integer category_id,@PathVariable Integer id){
        product.setCategory(new Category(category_id,"",""));
        productService.updateProduct(id,product);
    }


    @RequestMapping(method = RequestMethod.DELETE,value = "/categories/{category_id}/products/{id}")
    public void deleteProduct(@PathVariable Integer id){
        productService.deleteProduct(id);
    }
}
