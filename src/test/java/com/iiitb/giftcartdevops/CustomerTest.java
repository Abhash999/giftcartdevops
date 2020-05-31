package com.iiitb.giftcartdevops;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;

import java.awt.PageAttributes.MediaType;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.iiitb.giftcartdevops.customer.Customer;
import com.iiitb.giftcartdevops.customer.CustomerController;
import com.iiitb.giftcartdevops.customer.CustomerService;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = CustomerController.class)
class CustomerTest {

	// @Test
//	void test() {
//		//fail("Not yet implemented");
//		assertTrue(true);
//	}

	@Autowired
	MockMvc mockMvc;

	@MockBean
	CustomerService customerService;

	private String email = "Abhisehk@gmail.com";
	static Customer true_customer1 = new Customer();

	static Customer true_customer2 = new Customer();

	static List<Customer> customerList = new ArrayList<Customer>();

	@BeforeAll
	static void contextLoads() throws Exception {
		true_customer1.setEmail("Abhishek@gmail.com");
		true_customer1.setId(1);
		true_customer1.setFullname("Abhishek Acharaya");
		true_customer1.setPassword("123");

		true_customer2.setEmail("Shreyansh@gmail.com");
		true_customer2.setId(2);
		true_customer2.setFullname("Shreyansh Jain");
		true_customer2.setPassword("123");
		
		customerList.add(true_customer1);
		customerList.add(true_customer2);
	}

	@Test
	public void testGetUserByEmailcustomer() {
		
		when(customerService.getCustomerByEmail(email)).thenReturn(true_customer1);

		Customer customer;
		
		customer = customerService.getCustomerByEmail(email);
		System.out.println(customer.getFullname());
		assertEquals(true_customer1.getFullname(), customer.getFullname());
	}
	
	@Test
	public void testGetAllCustomer() {
		
		when(customerService.getAllCustomer()).thenReturn(customerList);
		
		List <Customer> customers = new ArrayList<Customer>(customerService.getAllCustomer());
		assertEquals(customers.size(),2);
	}

	@Test
	void customerControllerTest_Login() throws Exception {
		when(customerService.getCustomerByEmail(email)).thenReturn(true_customer1);
		
		MvcResult mvcresult = mockMvc.perform(MockMvcRequestBuilders.get("/home/Abhishek@gmail.com/123")
				.accept(org.springframework.http.MediaType.APPLICATION_JSON)).andReturn();

		System.out.println(mvcresult.getResponse().getStatus());

		Mockito.verify(customerService).getCustomerByEmail("Abhishek@gmail.com");
	}

	@Test
	void customerControllerTest_getAllCustomer() throws Exception {
		when(customerService.getAllCustomer()).thenReturn(customerList);
		
		MvcResult mvcresult = mockMvc.perform(
				MockMvcRequestBuilders.get("/customer").accept(org.springframework.http.MediaType.APPLICATION_JSON))
				.andReturn();

		System.out.println(mvcresult.getResponse().getStatus());

		Mockito.verify(customerService).getAllCustomer();
	}
	
	@Test
	void customerControllerTest_getCustomerbyId() throws Exception {
		when(customerService.getCustomer(anyInt())).thenReturn(Optional.of(true_customer1));
		
		MvcResult mvcresult = mockMvc.perform(
				MockMvcRequestBuilders.get("/customer/1").accept(org.springframework.http.MediaType.APPLICATION_JSON))
				.andReturn();

		System.out.println(mvcresult.getResponse().getStatus());

		Mockito.verify(customerService).getCustomer(1);
		//String id = JsonPath.read(mvcresult.getResponse().getContentAsString(), "$.id");
	}
	
//	@Test
//	void customerControllerTest_addCustomerbyId() throws Exception {
//		 CustomerService myList = mock(CustomerService.class);
//		doNothing().when(myList).addCustomer(true_customer1);
//		
//		MvcResult mvcresult = mockMvc.perform(
//		MockMvcRequestBuilders.post("/customer").contentType(org.springframework.http.MediaType.APPLICATION_JSON
//				).content(CustomerService.convertObjectToJsonBytes(true_customer1)).accept(org.springframework.http.MediaType.APPLICATION_JSON))
//				.andReturn();
//
//		System.out.println(mvcresult.getResponse().getStatus());
//
//		ArgumentCaptor<Customer> dtoCaptor = ArgumentCaptor.forClass(Customer.class);
//        verify(customerService, times(1)).addCustomer(dtoCaptor.capture());
//        verifyNoMoreInteractions(customerService);
//		Mockito.verify(customerService).addCustomer(true_customer1);
//		//String id = JsonPath.read(mvcresult.getResponse().getContentAsString(), "$.id");
//	}

}
