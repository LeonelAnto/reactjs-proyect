

const productos = new Promise ((resolve, reject) => {
    
    let misproductos = [
        {
          id: 1,
          nombre: "heart sweet",
          tipo: "collar",
          precio: 6500,
          imagen: "./img/heart-sweet.jfif"
    
      },
      {
          id: 2,
          nombre: "pinky bonbon",
          tipo: "collar",
          precio: 6000,
          imagen: "./img/pinky-bonbon.jfif"
      },
      {
          id: 3,
          nombre: "girlmore",
          tipo: "collar",
          precio: 5000,
          imagen: "./img/girlmore.jfif"
      },
      {
          id: 4,
          nombre: "choker spider",
          tipo: "aritos",
          precio: 4500,
          imagen: "./img/choker-spider.jpeg"
      }
    
    ]
    if (misproductos.length > 3) {
        resolve (misproductos)
    } else {
        reject ("no se han podido obtener los productos")
    }

} )

productos
.then(
    (response) => {
        console.log("obtenidos");
        console.log(response);
    }
)
.catch ((error) => {
    console.error ("Error", error)
})