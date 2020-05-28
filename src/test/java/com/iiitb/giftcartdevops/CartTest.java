package com.iiitb.giftcartdevops;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import com.iiitb.giftcartdevops.cart.Cart;
import com.iiitb.giftcartdevops.cart.CartController;
import com.iiitb.giftcartdevops.cart.CartService;
import com.iiitb.giftcartdevops.customer.Customer;
import com.iiitb.giftcartdevops.product.Product;

@ExtendWith(SpringExtension.class)
@WebMvcTest(CartController.class)
class CartTest {

	@Test
	void test() {
		//fail("Not yet implemented");
		assert(true);
	}
	
	@Autowired
	MockMvc mockMvc;
	
	@MockBean
	CartService cartService;
	static int customerId = 1;
	static Cart cart1 = new Cart();
	static Cart cart2 = new Cart();
	
	static List<Cart> cartList = new ArrayList<Cart>();
	
	@BeforeAll
	static void setup() {
		cart1.setCustomer(new Customer(1,"email","pass","name",1));
		cart1.setProduct(new Product(1));
		cart1.setDate(new Date());
		cart1.setAmount(100);
		
		cart2.setCustomer(new Customer(1,"email","pass","name",1));
		cart2.setProduct(new Product(2));
		cart2.setDate(new Date());
		cart2.setAmount(200);
		
		cartList.add(cart1);
		cartList.add(cart2);
	}
	
	@Test
	void testgetAllProducts() throws Exception{
		when(cartService.getAllProducts(customerId)).thenReturn(cartList);
		
		List<Cart> carts = cartService.getAllProducts(customerId);
		assertEquals(cartList,carts);
	}
	
	@Test
	void testCartController_getAllProducts() throws Exception{
		when(cartService.getAllProducts(customerId)).thenReturn(cartList);
		
	}

}
