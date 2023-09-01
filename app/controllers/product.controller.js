exports.getAllProduct = (req, res)=>{
    res.json({
        status: 'success',
        message: 'get all product'
    })
}

exports.createProduct = (req, res)=>{
    res.json({
        status: 'success',
        message: 'create product'
    })
}

exports.getProduct = (req, res)=>{
    res.json({
        status: 'success',
        message: `get product have ${req.params.id}`
    })
}

exports.updateProduct = (req, res)=>{
    res.json({
        status: 'success',
        message: 'update product'
    })
}

exports.deleteProduct = (req, res)=>{
    res.json({
        status: 'success',
        message: `delete product have ${req.params.id}`
    })
}