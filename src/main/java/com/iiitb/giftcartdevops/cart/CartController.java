package com.iiitb.giftcartdevops.cart;


//import com.project.giftkart.customer.Customer;
import com.iiitb.giftcartdevops.customer.Customer;
import com.iiitb.giftcartdevops.product.Product;
import com.iiitb.giftcartdevops.product.ProductController;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    Logger logger = LogManager.getLogger(ProductController.class);


    @RequestMapping("/customer/{customer_id}/cart")
    public List<Cart> getProducts(@PathVariable Integer customer_id) {
        return cartService.getAllProducts(customer_id);
    }


    @RequestMapping(method = RequestMethod.POST, value = "/customer/{customer_id}/products/{product_id}/cart")
        public void addProductByID(@RequestBody Cart cart, @PathVariable  Integer customer_id,@PathVariable Integer product_id)
        {

            cart.setCustomer(new Customer(customer_id,"","","",0));
            cart.setProduct(new Product(product_id,"","","","","",""));
            //CartId cartId = new CartId(customer_id,product_id);
            //cart.setId(cartId);
            cartService.addProduct(cart);
            logger.info("product was added to cart.");

        }

    /*@RequestMapping(method = RequestMethod.PUT, value = "/customer/{customer_id}/address/{id}")
    public void updateAddressByID(@RequestBody Cart cart, @PathVariable Integer id, @PathVariable Integer customer_id)
    {
        cart.setCustomer(new Customer(customer_id,"","","",0));
        cartService.updatAddress(cart);
    }


    @RequestMapping(method = RequestMethod.DELETE, value = "/customer/{customer_id}/address/{id}")
    public void deleteAddressByID(@PathVariable Integer id)
    {
        cartService.deleteAddress(id);
    }*/
}
