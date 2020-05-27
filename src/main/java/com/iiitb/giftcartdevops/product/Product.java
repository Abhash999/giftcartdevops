package com.iiitb.giftcartdevops.product;

import com.iiitb.giftcartdevops.Category.Category;

import javax.persistence.*;

@Entity
public class Product {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer product_id;
    String name;
    Double price;
    String description;
    String thumbnail;
    String image;
    Integer numItems;

    @ManyToOne
    private Category category;

    public Product() {

    }

    public Product(Integer product_id, String s, String s1, String s2, String s3, String s4, String s5) {
        this.product_id = product_id;

    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getNumItems() {
        return numItems;
    }

    public void setNumItems(Integer numItems) {
        this.numItems = numItems;
    }

    public Product(Integer category_id) {
       this.category=new Category(category_id,"","");
    }

    public Integer getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Integer product_id) {
        this.product_id = product_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
