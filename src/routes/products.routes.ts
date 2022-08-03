import { Router } from "express";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

const productRouter =  Router()


productRouter.get("/",async(req,res)=>{
    let products = await Product.find({relations: {category:true,lines:true}})
    const returnedProducts =  products?.map((product=> console.log(product)))
    res.json({data: products})
})
productRouter.post('/', async (req,res)=>{
    const {name , description , price ,popular,categoryId} = req.body
    const product = Product.create({
        name ,
         description ,
          price ,
          popular,
          categoryId
    })
    await product.save()
    res.json({msg: "product is created"})
})
// productRouter.post('/', async(req, res)=>{
//     try{
//         const {title , body ,userId} =req.body;
//         const id = req.params;
//         const category = await Category.findOne({where:{id:categoryId}})
//         if (!category) return res.status(404)
//         .json({ message: "User not found, please enter a valid user" });
//         const post = Post.create({
//             title,
//             body,
//             user
//         })
//         await post.save()
//         res.json({msg: "great"})

//     } catch (error) {
//         res.json({msg: "post error" }); 

//     }
//     })
productRouter.delete('/:id', async(req,res)=>{
    const id = +req.params.id;
    const products = await Product.delete(id);
    res.json({data:products});
});

export default productRouter