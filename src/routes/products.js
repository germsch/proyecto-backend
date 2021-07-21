const router = require('express').Router()
const Product = require('../schemas/Products')


router.get('/', function (req, res) {
    
let query = {}
    

if (req.query.brand) {
    query.brand = req.query.brand
}

if (req.query.price_min) {
    query["$and"] = [
        {
            price : {

                "$gte" : req.query.price_min
            }
        },
        {
            price : {
                "$lte" : req.query.price_max
            }
        }
    ]
}


let result = Product.find(query)

// result.then(results => {
//         res.send(results)
//     }).catch(err => {
//         console.log(err)
//         res.send({message : 'error'})
//     })
// })




if (req.query.order) {
     result.sort({ [req.query.order] : req.query.dir === 'asc' ? 1 : -1 })
}

if (req.query.start) {
     result.skip(Number(req.query.start))
}

result.limit(50)


result.then(results => {
      res.send(results)
  }).catch(err => {
      console.log(err)
      res.send({message : 'error'})
  })

 })

router.get('/:id', function (req, res) {

     Product
         .findById(req.params.id)
         .then(function (product) {
             product.views_count = product.views_count+1

             product.save().then(product => {
                 res.send(product)
             })
         })

         .catch(function (err) {
             console.log(err)
             res.send({message : 'error'})
         })
})



module.exports = router