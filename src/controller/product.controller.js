import db from "../db/index.js";

export class ProductController{
    async createProduct(req, res) {
        try {
            const { name, price } = req.body;
            const result = await db.query('INSERT INTO product (name, price) VALUES ($1) RETURNING *', [name, price]);
            return res.status(201).json({
                statusCode: 201,
                message: 'success',
                data: result?.rows[0]
            })
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
        
    }

    async getAllProduct(req, res){
        try {
            const result = await db.query('SELECT * FROM product');
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: result?.rows
            })
        } catch (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
    }

    async getProductByID(req, res){
        try {
            const result = await db.query('SELECT * FROM product WHERE id = $1', [req.params.id]);
            if(!result.rows[0]){
                return res.status(401).json({
                    error: 'Product not found'
            })
        }
        return res.status(200).json({
            statusCode: 200,
            message: 'success',
            data: result?.rows[0]
        });
        } catch (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
        
    }

    async updateProductById(req, res){
        try {
            const result = await db.query('UPDATE product SET name = $1 WHERE id = $2 RETURNING *', [req.body.name, req.params.id]);
            if(!result){
                return res.status(400).json({
                    error: 'Error on updating product'
                });
            }
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: result?.rows[0]
            })
        } catch (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
    }

    async deleteProductById(req, res){
        try {
            const result = await db.query('DELETE FROM product WHERE id = $1 RETURNING *', [req.params.id]);
            if (!result?.rows[0]) {
                return res.status(500).json({
                    error: 'Error on deleting product'
                });
            }
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: {}
            });
        } catch (error) {
            return res.status(500).json({
              error: error.message,
            });
        }
    }
}