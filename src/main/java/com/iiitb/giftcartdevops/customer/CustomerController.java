package com.iiitb.giftcartdevops.customer;

import com.iiitb.giftcartdevops.address.Address;
import com.iiitb.giftcartdevops.product.ProductController;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
//import javax.xml.ws.http.HTTPException;
import java.util.List;
import java.util.Optional;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    Logger logger = LogManager.getLogger(ProductController.class);


    @RequestMapping("/home/{email}/{password}")
    public Customer getCustomerByEmail(@PathVariable  String email,@PathVariable String password) {
        Customer customer = customerService.getCustomerByEmail(email);
        if(customer!=null) {
            if (customer.password.compareTo(password) == 0) {
                logger.info("customer logged in");
                return customer;
            }
            else {
                logger.warn("False login attemped.");

                return null;
            }
        }
        else {
            logger.warn("False login attemped.");
            return null;
        }
    }

    @RequestMapping("/customer")
    public List<Customer> getCustomer() {
        return customerService.getAllCustomer();
    }

    @RequestMapping("/customer/{id}")
    public Optional<Customer> getCustomerbyId(@PathVariable Integer id){
        return customerService.getCustomer(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/customer")
        public ResponseEntity<Customer> addCustomerByID(@RequestBody Customer customer) throws Exception {
            Customer check = customerService.getCustomerByEmail(customer.email);
            if(check==null) {
                
                customerService.addCustomer(customer);
                logger.info("A new customer was successfully created.");
                
                URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(
        				"/{id}").buildAndExpand(customer.getId()).toUri();
                             
                return ResponseEntity.created(location).build();
                //return ResponseEntity.noContent().build();
                
            }
            else
            {
                logger.warn("user already exists");
                throw new Exception("Username exists");
            }
        }

    @RequestMapping(method = RequestMethod.PUT, value = "/customer/{id}")
    public void updateCustomerByID(@RequestBody Customer customer, @PathVariable Integer id) throws Exception {
        Optional<Customer> check = customerService.getCustomer(id);
        if(check==null) {
            logger.warn("no customer with id : "+id+" exists.");
            throw new Exception("Username does not exist");
        }
        else
        {
            logger.info("customer details succesfully updated.");
            customerService.updateCustomer(id,customer);
        }

    }


    @RequestMapping(method = RequestMethod.DELETE, value = "/customer/{id}")
    public void deleteCustomerByID(@PathVariable Integer id) throws Exception {
        Optional<Customer> check = customerService.getCustomer(id);
        if(check == null)
        {
            logger.warn("attempt to delete non existent customer");
            throw new Exception("User does not exist");
        }
        else {
            logger.info("Customer deleted.");
            customerService.deleteCustomer(id);
        }
    }
}
