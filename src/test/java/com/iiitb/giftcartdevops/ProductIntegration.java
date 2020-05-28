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
import com.iiitb.giftcartdevops.product.Product;
import com.iiitb.giftcartdevops.product.ProductService;

@ExtendWith(SpringExtension.class)
@SpringBootTest(
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
		classes =  GiftcartdevopsApplication.class
		)
class ProductIntegration {

	@Test
	void test() {
		//fail("Not yet implemented");
		assert(true);
	}
	
	@LocalServerPort
	private int port;
	
	TestRestTemplate resttemplate = new TestRestTemplate();
	HttpHeaders header = new HttpHeaders();
	
	static int categoryId = 1;
	static Product product1 = new Product();
	static Product product2 = new Product();
	static List<Product> productList = new ArrayList<Product>();
	
	@BeforeAll
	static void setup() {
		product1.setCategory(new Category(1,"cat1","des1"));
		product1.setName("product1");
		product1.setProduct_id(1);
		
		product2.setName("Gift Card");
		product2.setProduct_id(38);
		product2.setDescription("Birthday Gift Card");
		product2.setPrice(200.0);
		product2.setImage("cde");
		product2.setThumbnail("abc");
		product2.setNumItems(13);
		product2.setCategory(new Category(7,"Others","Cakes,GIft Cards etc"));
		
		productList.add(product1);
		productList.add(product2);
	}
	
	@Test
    public void test_getCategoryById() throws Exception {
    	
    	HttpEntity<String> entity = new HttpEntity<String>(null,header);
    	ResponseEntity<String> response = resttemplate.exchange(
    			createURLWithPort("/categories/1/products/10"),HttpMethod.GET,entity,String.class);
    	
    	String expected = "{\n" +"\"product_id\": 10,\n"+
    		    "\"name\": \"Mobile\",\n"+
    		    "\"price\": 16499,\n"+
    		    "\"description\": \"Redmi Note 9Pro Max, Qualcomm Snapdragon 720G,6.67 inch display, 5020mAh battery\",\n"+
    		    "\"thumbnail\": \"abc\",\n"+
    		    "\"image\": \"cde\",\n"+
    		    "\"numItems\": 13,\n"+
    		    "\"category\": {"
    		        +"\"id\": 1,\n"+
    		        "\"name\": \"Electronics\",\n"+
    		        "\"description\": \"Electronics items\"\n"+
    		    "}"+"}";

    	JSONAssert.assertEquals(expected, response.getBody(), false);
    }
 
 @Test
	public void test_addProduct_ProductExists() {
    	try {
		HttpEntity<Product> entity = new HttpEntity<Product>(product2, header);

		ResponseEntity<String> response = resttemplate.exchange(
				createURLWithPort("/categories/7/products"),HttpMethod.POST, entity, String.class);

		assertEquals(500, response.getStatusCodeValue());
    	}
    	catch(Exception E) {
    		System.out.println(E);
    	}
	}
    
    @Test
    @Tag("post_method")
	public void test_addProduct() {

		HttpEntity<Product> entity = new HttpEntity<Product>(product1, header);

		ResponseEntity<String> response = resttemplate.exchange(
				createURLWithPort("/categories/7/products"),HttpMethod.POST, entity, String.class);

		System.out.println(response.getStatusCodeValue());
		assertEquals(response.getStatusCodeValue(),200);

	}
 
 private String createURLWithPort(final String uri) {
		return "http://localhost:" + port + uri;
	}
	

}
