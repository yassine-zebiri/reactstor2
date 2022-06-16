import { API } from "../../redux/API";

export async function get_prod(){
    return await API.post('/index.php',{
        TOKEN:"produicts"
    })
}
export async function get_rows(){
    
    return await API.post('/index.php',{
        TOKEN:"rows"
    })
}
export async function Add_row_Api(name,type,classes){
    return await API.post('/admin.php',{
        TOKEN:"ADD_ROW",
        name:name,
        type:type,
        classes:classes

    })
}
export async function Add_produict_Api(title,price,pic,row_id){
    return await API.post('/admin.php',{
        TOKEN:"ADD_produict",
        title:title,
        price:price,
        pic:pic,
        row_id:row_id
    })
}

export async function get_categories(){
    return await API.post('/index.php',{
        TOKEN:"categories"
    })
}
export async function Add_Gategorie_Api(name){
    return await API.post('/admin.php',{
        TOKEN:"ADD_cateogrie",
        name:name
    })
}