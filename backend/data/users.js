import bcrypt from 'bcryptjs'

const users=[
    {
       name:'Admin User',
       email:'admin@test.com' ,
       password:bcrypt.hashSync('admin', 10),
       isAdmin:true
    },
    {
        name:'Nikhil User',
        email:'nikhil@test.com' ,
        password:bcrypt.hashSync('nikhil', 10)
     },
     {
        name:'Dan User',
        email:'dan@test.com' ,
        password:bcrypt.hashSync('dan', 10)
     }
]


export default users