export default function getRolePermissionData() {

   return [

        {
            id:1,
            name:"Admin",
            permission:[
                
            ]
  
        },

        {
            id:2,
            name:"Super Admin",
            permission:[
                {
                    id:5,
                    name:'view_account'
                },
                {
                    id:6,
                    name:'delete_account'
                },
                {
                    id:7,
                    name:'create_account'
                }
            ]
  
        },
        
        {
            id:2,
            name:"Manager",
            permission:[
                {
                    id:1,
                    name:'create_product'
                },
                {
                    id:2,
                    name:'delete_product'
                },        {
                    id:3,
                    name:'update_product'
                }
                ,        {
                    id:4,
                    name:'view_product'
                }
            ]
  
        },
    ];
}