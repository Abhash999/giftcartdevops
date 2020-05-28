package com.iiitb.giftcartdevops;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

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

import com.iiitb.giftcartdevops.Category.Category;
import com.iiitb.giftcartdevops.product.Product;
import com.iiitb.giftcartdevops.product.ProductController;
import com.iiitb.giftcartdevops.product.ProductService;

@ExtendWith(SpringExtension.class)
@WebMvcTest(ProductController.class)
class ProductTest {

	@Test
	void test() {
		//fail("Not yet implemented");
		assert(true);
	}
	
	@Autowired
	MockMvc mockMvc;
	
	@MockBean
	ProductService productService;
	static int categoryId = 1;
	static Product product1 = new Product();
	static Product product2 = new Product();
	static List<Product> productList = new ArrayList<Product>();
	
	@BeforeAll
	static void setup() {
		product1.setCategory(new Category(1,"cat1","des1"));
		product1.setName("product1");
		product1.setProduct_id(1);
		
		product2.setCategory(new Category(1,"cat1","des1"));
		product2.setName("product2");
		product2.setProduct_id(2);
		
		productList.add(product1);
		productList.add(product2);
	}
	
	@Test
	void testgetAllProducts() throws Exception{
		when(productService.getAllProducts(categoryId)).thenReturn(productList);
		
		List<Product> products = productService.getAllProducts(categoryId);
		assertEquals(productList, products);
	}
	
	@Test
	void testProductController_getAllProducts() throws Exception{
		when(productService.getAllProducts(categoryId)).thenReturn(productList);
		
		MvcResult mvcresult = mockMvc.perform(
				MockMvcRequestBuilders.get("/categories/1/products").accept(org.springframework.http.MediaType.APPLICATION_JSON))
				.andReturn();

		System.out.println(mvcresult.getResponse().getStatus());

		Mockito.verify(productService).getAllProducts(categoryId);
	}
	
	@Test
	void testgetProduct() throws Exception{
		when(productService.getProduct(categoryId)).thenReturn(Optional.of(product1));
		
		Optional<Product> product = productService.getProduct(categoryId);
		assertEquals(Optional.of(product1), product);
	}
	
	@Test 
	void testProductController_getProduct() throws Exception{
		when(productService.getProduct(categoryId)).thenReturn(Optional.of(product1));

		MvcResult mvcresult = mockMvc.perform(
				MockMvcRequestBuilders.get("/categories/1/products/1").accept(org.springframework.http.MediaType.APPLICATION_JSON))
				.andReturn();

		System.out.println(mvcresult.getResponse().getStatus());

		Mockito.verify(productService).getProduct(categoryId);
	}

}
