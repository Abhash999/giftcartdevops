package com.iiitb.giftcartdevops;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.iiitb.giftcartdevops.customer.Customer;
import com.iiitb.giftcartdevops.customer.CustomerService;

@ExtendWith(SpringExtension.class)
@SpringBootTest(
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
		classes =  GiftcartdevopsApplication.class
		)
class CustomerIntegration {

	@Test
	void test() {
		//fail("Not yet implemented");	
		assert(true);
	}
	
	@LocalServerPort
	private int port;
	
	TestRestTemplate resttemplate = new TestRestTemplate();
	HttpHeaders header = new HttpHeaders();
	
	private String email = "Abhisehk@gmail.com";
	static Customer true_customer1 = new Customer();

	static Customer true_customer2 = new Customer();

	static List<Customer> customerList = new ArrayList<Customer>();

	@BeforeAll
	static void setup() throws Exception {
		true_customer1.setEmail("Abhishek@gmail.com");
		true_customer1.setId(1);
		true_customer1.setFullname("Abhishek Acharaya");
		true_customer1.setPassword("123");

		true_customer2.setEmail("Ayush@gmail.com");
		//true_customer2.setId(5);
		true_customer2.setFullname("Ayush Jain");
		true_customer2.setPassword("123");
		
		customerList.add(true_customer1);
		customerList.add(true_customer2);
	}
	//private CustomerService customerService;
	 
    @Test
    public void test_getCustomerById() throws Exception {
    	
    	HttpEntity<String> entity = new HttpEntity<String>(null,header);
    	ResponseEntity<String> response = resttemplate.exchange(
    			createURLWithPort("/customer/1"),HttpMethod.GET,entity,String.class);
    	
    	String expected = "{id:1, email:\"Abhishek@gmail.com\", fullname:\"Abhishek Acharaya\", password:\"123\", mobile:877023123}";

    	JSONAssert.assertEquals(expected, response.getBody(), false);
    }
    
    @Test
    public void test_getCustomerByEmail() throws Exception {
    	
    	HttpEntity<String> entity = new HttpEntity<String>(null,header);
    	ResponseEntity<String> response = resttemplate.exchange(
    			createURLWithPort("/home/Abhishek@gmail.com/123"),HttpMethod.GET,entity,String.class);
    	
    	String expected = "{id:1, email:\"Abhishek@gmail.com\", fullname:\"Abhishek Acharaya\", password:\"123\", mobile:877023123}";

    	JSONAssert.assertEquals(expected, response.getBody(), false);
    }
        
    @Test
	public void test_addCustomer_UsernameExists() {
    	try {
		HttpEntity<Customer> entity = new HttpEntity<Customer>(true_customer1, header);

		ResponseEntity<String> response = resttemplate.exchange(
				createURLWithPort("/customer"),HttpMethod.POST, entity, String.class);

		assertEquals(500, response.getStatusCodeValue());
    	}
    	catch(Exception E) {
    		System.out.println(E);
    	}
	}
    
    @Test
    @Tag("post_method")
	public void test_addCustomer() {

		HttpEntity<Customer> entity = new HttpEntity<Customer>(true_customer2, header);

		ResponseEntity<String> response = resttemplate.exchange(
				createURLWithPort("/customer"),HttpMethod.POST, entity, String.class);

		System.out.println(response.getStatusCodeValue());
		assertEquals(response.getStatusCodeValue(),201);

	}
    
//    @AfterEach
//    public void cleanup(TestInfo info) throws Exception{
//    	if(!info.getTags().contains("post_method"))
//    		return;
//    	
//    	HttpEntity<String> entity = new HttpEntity<String>(null,header);
//    	ResponseEntity<Customer> response = resttemplate.exchange(
//    			createURLWithPort("/home/Ayush@gmail.com/123"),HttpMethod.GET,entity,Customer.class);
//    	Customer customer = new Customer();
//    	customer = //customerService.getCustomerByEmail(true_customer2.getEmail());
//    	System.out.println(customer.getEmail());
//    	customerService.deleteCustomer(customer.getId());
//    	System.out.println("\n"+customer.getId()+"\n");
//    	    	
//    }

    private String createURLWithPort(final String uri) {
		return "http://localhost:" + port + uri;
	}


}
