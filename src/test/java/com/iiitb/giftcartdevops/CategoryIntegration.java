package com.iiitb.giftcartdevops;

import static org.junit.jupiter.api.Assertions.*;

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

import com.iiitb.giftcartdevops.Category.Category;
import com.iiitb.giftcartdevops.customer.Customer;

@ExtendWith(SpringExtension.class)
@SpringBootTest(
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
		classes =  GiftcartdevopsApplication.class
		)
class CategoryIntegration {

	@Test
	void test() {
//		fail("Not yet implemented");
		assert(true);
	}
	
	@LocalServerPort
	private int port;
	
	TestRestTemplate resttemplate = new TestRestTemplate();
	HttpHeaders header = new HttpHeaders();
	
	static Category category1 = new Category();
	static Category category2 = new Category();
	
	static List<Category> categoryList = new ArrayList<Category>();	
	
	@BeforeAll
	static void setup() {
		category1.setId(1);
		category1.setName("Electronics");
		category1.setDescription("Foo");
		
		category2.setId(2);
		category2.setName("Cards");
		category2.setDescription("Bar");
		
		categoryList.add(category1);
		categoryList.add(category2);
		
	}
	
	 @Test
	    public void test_getCategoryById() throws Exception {
	    	
	    	HttpEntity<String> entity = new HttpEntity<String>(null,header);
	    	ResponseEntity<String> response = resttemplate.exchange(
	    			createURLWithPort("/categories/1"),HttpMethod.GET,entity,String.class);
	    	
	    	String expected = "{\n" + 
	    			"    \"id\": 1,\n" + 
	    			"    \"name\": \"Electronics\",\n" + 
	    			"    \"description\": \"Electronics items\"\n" + 
	    			"}";

	    	JSONAssert.assertEquals(expected, response.getBody(), false);
	    }
	 
	 @Test
		public void test_addCategory_CategoryExists() {
	    	try {
			HttpEntity<Category> entity = new HttpEntity<Category>(category1, header);

			ResponseEntity<String> response = resttemplate.exchange(
					createURLWithPort("/categories"),HttpMethod.POST, entity, String.class);

			assertEquals(500, response.getStatusCodeValue());
	    	}
	    	catch(Exception E) {
	    		System.out.println(E);
	    	}
		}
	    
	    @Test
	    @Tag("post_method")
		public void test_addCategory() {

			HttpEntity<Category> entity = new HttpEntity<Category>(category2, header);

			ResponseEntity<String> response = resttemplate.exchange(
					createURLWithPort("/categories"),HttpMethod.POST, entity, String.class);

			System.out.println(response.getStatusCodeValue());
			assertEquals(response.getStatusCodeValue(),201);

		}
	 
	 private String createURLWithPort(final String uri) {
			return "http://localhost:" + port + uri;
		}

}
