package com.iiitb.giftcartdevops.Category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;



    public List<Category> getAllCategories(){
        List<Category> categories =new ArrayList<>();
         categoryRepository.findAll().forEach(categories::add);
         return categories;
    }

    public Optional<Category> getCategory(Integer id){
        return categoryRepository.findById(id);
    }

    public void addCategory(Category category){
        categoryRepository.save(category);
    }

    public void updateCategory(Integer id, Category category) {
       categoryRepository.save(category);
    }

    public void deleteCategory(Integer id) {
        categoryRepository.deleteById(id);
    }

    public Category getCategoryByName(String name) {
        return categoryRepository.findByName(name);
    }
}
