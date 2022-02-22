var db = require('../../config/db')
const uuid = require('uuid').v4

exports.createUser = ({registrationfirstName,registrationemail,encrypted},result) => {
    const id = uuid()
    const sql = `insert into users(id,first_name, email, password) 
                values('${id}','${registrationfirstName}','${registrationemail}','${encrypted}')`
    db.query(sql,(err,res)=>{
        console.log(err)
        if(err){
            result(err,null)
        }else{
            result(null,id)
        }
    })
}

exports.findByEmail = ({email},result) => {
    const sql = `select * from users where email = '${email}'`
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

exports.findById = ({id},result) => {
    const sql = `select * from users where id = '${id}'`
    db.query(sql,(err,res)=>{
        if(err){
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

exports.updateUser = ({
        id,
        firstName,
        lastName,
        email,
        gender,
        dob,
        city,
        about,
        country
    },result) => {
        const sql = `update users set first_name = '${firstName}', last_name= '${lastName}', gender='${gender}',
                    dob='${dob}', city='${city}', country='${country}', about='${about}' where id='${id}'`
        db.query(sql,(err,res)=>{
            if(err){
                result(err,null)
            }
            else{
                result(null,res)
            }
        })
}