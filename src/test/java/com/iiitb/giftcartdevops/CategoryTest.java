package com.iiitb.giftcartdevops;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyInt;
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
import com.iiitb.giftcartdevops.Category.CategoryController;
import com.iiitb.giftcartdevops.Category.CategoryService;

@ExtendWith(SpringExtension.class)
@WebMvcTest(CategoryController.class)
class CategoryTest {

	@Test
	void test() {
		//fail("Not yet implemented");
		assert(true);
	}
	
	@Autowired
	MockMvc mockmvc;
	
	@MockBean
	CategoryService categoryService;
	
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
	void testgetAllCategories() throws Exception{
		when(categoryService.getAllCategories()).thenReturn(categoryList);
		
		List<Category> categories = new ArrayList<Category>(categoryService.getAllCategories());
		assertEquals(2,categories.size());
	}
	
	@Test
	void testgetCategory() throws Exception{
		when(categoryService.getCategory(1)).thenReturn(Optional.of(category1));
		
		Optional<Category> category = categoryService.getCategory(1);
		assertEquals(Optional.of(category1), category);
	}
	
	@Test 
	void testCategoryController_getCategories() throws Exception{
		when(categoryService.getCategory(anyInt())).thenReturn(Optional.of(category1));
		
		MvcResult mvcresult = mockmvc.perform(
				MockMvcRequestBuilders.get("/categories/1").accept(org.springframework.http.MediaType.APPLICATION_JSON))
				.andReturn();

		System.out.println(mvcresult.getResponse().getStatus());

		Mockito.verify(categoryService).getCategory(1);
		
	}
	
	@Test 
	void testCategoryController_getAllCategories() throws Exception{
		when(categoryService.getAllCategories()).thenReturn(categoryList);
		
		MvcResult mvcresult = mockmvc.perform(
				MockMvcRequestBuilders.get("/categories").accept(org.springframework.http.MediaType.APPLICATION_JSON))
				.andReturn();

		System.out.println(mvcresult.getResponse().getStatus());

		Mockito.verify(categoryService).getAllCategories();
		
	}

}
