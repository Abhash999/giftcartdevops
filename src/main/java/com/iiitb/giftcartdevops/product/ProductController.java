package com.iiitb.giftcartdevops.product;

import com.iiitb.giftcartdevops.Category.Category;
import com.iiitb.giftcartdevops.Category.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@RestController
public class ProductController {

    //testing the commit


    @Autowired
    private ProductService productService;


    Logger logger = LogManager.getLogger(ProductController.class);

    @RequestMapping("/products")
    public List<Product> getCompleteProductList() throws Exception{
        List<Product> myProduct = productService.getCompleteProducts();
        if(myProduct==null) {
            logger.warn("There are no products available in database");
            throw new Exception("no products exists");
        }
        else{
         logger.info("All products in database fetched.");
            return myProduct;
        }
    }

  @RequestMapping("/categories/{category_id}/products")
  public List<Product> getAllProducts(@PathVariable Integer category_id) throws Exception {
        List<Product> products = new ArrayList<>();

      products =  productService.getAllProducts(category_id);
      if(products==null) {
          logger.warn("products in category : "+ category_id + " is not available");
          throw new Exception("no products in this category");
      }
      else {
          logger.info("products in category : "+ category_id + " retrived");
          return products;
      }
  }

  @RequestMapping("/categories/{category_id}/products/{id}")
  public Optional<Product> getProduct(@PathVariable Integer id){
      return productService.getProduct(id);
  }

  @RequestMapping(method = RequestMethod.POST,value = "/categories/{category_id}/products")
  public void addProduct(@RequestBody Product product,@PathVariable Integer category_id) throws Exception {

      Product product1 = productService.getProductDescription(product.description);
      if(product1==null) {
          logger.warn("product in category : "+ category_id + " successfully added.");
          product.setCategory(new Category(category_id, "", ""));
          productService.addProduct(product);
      }
      else
      {
          logger.info("products in category : "+ category_id + " already exists.");
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
