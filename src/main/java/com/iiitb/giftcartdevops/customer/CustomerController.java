package com.iiitb.giftcartdevops.customer;

import com.iiitb.giftcartdevops.address.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.http.HTTPException;
import java.util.List;
import java.util.Optional;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping("/home/{email}/{password}")
    public Customer getCustomerByEmail(@PathVariable  String email,@PathVariable String password) {
        Customer customer = customerService.getCustomerByEmail(email);
        if(customer!=null) {
            if (customer.password.compareTo(password) == 0)
                return customer;
            else
                return null;
        }
        else
            return null;
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
        public void addCustomerByID(@RequestBody Customer customer) throws Exception {
            Customer check = customerService.getCustomerByEmail(customer.email);
            if(check==null) {
                customerService.addCustomer(customer);
            }
            else
            {
                throw new Exception("Username exists");
            }
        }

    @RequestMapping(method = RequestMethod.PUT, value = "/customer/{id}")
    public void updateCustomerByID(@RequestBody Customer customer, @PathVariable Integer id) throws Exception {
        Optional<Customer> check = customerService.getCustomer(id);
        if(check==null) {
            throw new Exception("Username does not exist");
        }
        else
        {
            customerService.updateCustomer(id,customer);
        }

    }


    @RequestMapping(method = RequestMethod.DELETE, value = "/customer/{id}")
    public void deleteCustomerByID(@PathVariable Integer id) throws Exception {
        Optional<Customer> check = customerService.getCustomer(id);
        if(check == null)
        {
            throw new Exception("User does not exist");
        }
        else
        customerService.deleteCustomer(id);
    }
}
