import db from "../db/index.js";

export class CategoryController{
    async createCategory(req, res) {
        try {
            const { name, description } = req.body;
            const result = await db.query('INSERT INTO category (name, description) VALUES ($1) RETURNING *', [name, description]);
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

    async getAllCategory(req, res){
        try {
            const result = await db.query('SELECT * FROM category');
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

    async getCategoryById(req, res){
        try {
            const result = await db.query('SELECT * FROM category WHERE id = $1', [req.params.id]);
            if(!result.rows[0]){
                return res.status(401).json({
                    error: 'Guruh not found'
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

    async updateCategoryById(req, res){
        try {
            const result = await db.query('UPDATE category SET name = $1 WHERE id = $2 RETURNING *', [req.body.name, req.params.id]);
            if(!result){
                return res.status(400).json({
                    error: 'Error on updating category'
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

    async deleteCategoryById(req, res){
        try {
            const result = await db.query('DELETE FROM category WHERE id = $1 RETURNING *', [req.params.id]);
            if (!result?.rows[0]) {
                return res.status(500).json({
                    error: 'Error on deleting category'
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