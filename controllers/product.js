import { Product } from "../models/products.js";

const allProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    res.json({ success: true, product });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
const addProduct = async (req, res) => {
  try {
    const { name, desc, categories } = req.body;
    const product = await Product.findOne({ name, categories });
    if (product) {
      res.json({ success: false, message: "Product already exists" });
    } else {
       await Product.create({ name, categories, desc });
      res.json({ success: true, message: "Product created successfully" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {id}=req.params;
    const {name,desc,categories,quantity} = req.body;
    const product=await Product.findById(id);
    if(!product){
        res.json({ success: false, message: "Product not found" });
    }
    if(name) product.name=name;
    if(desc) product.desc=desc;
    if(categories) product.categories=categories;
    if(quantity) product.quantity=quantity;

    product.save();
    res.json({ success: true, message: "Product updated successfully "});
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const {id}=req.params;    
    const product=await Product.findByIdAndDelete(id);        
    res.json({ success: true, message: "Product updated successfully "});
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { allProduct, addProduct, updateProduct , deleteProduct};
