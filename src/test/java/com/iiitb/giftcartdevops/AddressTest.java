package com.iiitb.giftcartdevops;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.iiitb.giftcartdevops.address.Address;
import com.iiitb.giftcartdevops.address.AddressController;
import com.iiitb.giftcartdevops.address.AddressService;
import com.iiitb.giftcartdevops.customer.Customer;

@ExtendWith(SpringExtension.class)
@WebMvcTest(AddressController.class)
class AddressTest {

	@Test
	void test() {
		//fail("Not yet implemented");
		assert(true);
	}
	
	@Autowired
	MockMvc mockMvc;
	
	@MockBean
	AddressService addressService;
	
	static int customerId = 1;
	static Address address1 = new Address();
	static Address address2 = new Address();
	
	static List<Address> addressList = new ArrayList<Address>();
	
	@BeforeAll
	static void setup() {
		address1.setId(1);
		address1.setStreet1("street11");
		address1.setStreet2("street21");
		address1.setCity("city1");
		address1.setState("state1");
		address1.setCountry("country1");
		address1.setCustomer(new Customer(1,"email1","pass1","fullname1",1));
		address1.setPincode(1);
		
		address2.setId(2);
		address2.setStreet1("street12");
		address2.setStreet2("street22");
		address2.setCity("city2");
		address2.setState("state2");
		address2.setCountry("country2");
		address2.setCustomer(new Customer(2,"email2","pass2","fullname2",2));
		address2.setPincode(2);
		
		addressList.add(address1);
		addressList.add(address2);
	}
	
	@Test
	void testgetAllAddress() throws Exception{
		when(addressService.getAllAddress(customerId)).thenReturn(addressList);
		
		List<Address> adresses = addressService.getAllAddress(customerId);
		assertEquals(addressList, adresses);
	}
	
	@Test
	void testgetAddress() throws Exception{
		when(addressService.getAddress(customerId)).thenReturn(Optional.of(address1));
		
		Optional<Address> address = addressService.getAddress(customerId);
		assertEquals(Optional.of(address1), address);
	}
	
	@Test
	void testAddressController_getAllAddress() throws Exception{
		when(addressService.getAllAddress(customerId)).thenReturn(addressList);
		
		MvcResult mvcresult = mockMvc.perform(
				MockMvcRequestBuilders.get("/customer/1/address").accept(org.springframework.http.MediaType.APPLICATION_JSON))
				.andReturn();

		System.out.println(mvcresult.getResponse().getStatus());

		Mockito.verify(addressService).getAllAddress(customerId);
	}
	
	//@Test
	

}
