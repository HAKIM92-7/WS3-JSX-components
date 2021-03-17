import React from 'react'

 export const Cards = () => {

    let persons =[

        { firstname : "Maher" ,
         lastname :"Moussi" , 
         address : "Medina Jedida" ,
         image : "person.png"
        } ,
        
        { firstname : "Hakim" ,
         lastname :"Barouni" , 
         address : "Medina Jedida" ,
         image : "person.png"
        
        },
        { firstname : "Mehdi" ,
         lastname :"El Ouefi" , 
         address : "Mdjez El Beb" ,
         image : "person.png"
        } , 
        
        { firstname : "Taher" ,
         lastname :"Chaanaane" , 
         address : "Bizerte" ,
         image : "person.png"
        }
        
        ]



    return (

        <div id="cards">

            
             { persons.map(el => (
                <div class="card" style={{width: "18rem"}}>
                <img src={el.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{el.firstname} {el.lastname}</h5>
                  <p class="card-text">{el.address}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>


             ))




             }




        </div>
    )
}

export const Paragraphe =()=> {


return (


<h1> Bonjour le Monde !!</h1>


)






}