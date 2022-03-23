let users = [
    {id: 1, nama: "Roni", email: "roni@gmail.com"},
    {id: 2, nama: "Lukaman", email: "lukman@gmail.com"}
]

module.exports={
    index: (req, res)=>{
        if(users.length > 0){
            res.send({
                status: true,
                data: users,
                method: req.method,
                url: req.url
            })
        }else{
            res.send({
                status: false,
                pesan: 'data users masih kosong'
            })
        }
    },

    store: (req, res)=>{
        users.push(req.body)
        res.send({
            status: true,
            message: 'data berhasil di simpan',
            data: users,
            method: req.method,
            url: req.url
        })
    },

    update: (req, res)=>{
        const id = req.params.id
        users.filter(user =>{
            if(user.id == id){
                user.id = id
                user.nama = req.body.nama
                user.email = req.body.email
        
                return user
            }
        })
        res.json({
            status: true,
            message: 'data berhasil di update',
            data: users,
            method: req.method,
            url: req.url
        })
    },

    delete: (req, res)=>{
        const id = req.params.userId
        users = users.filter(user => user.id != id)
        res.send({
            status: true,
            data: users,
            method: req.method,
            url: req.url
        })
    }
}