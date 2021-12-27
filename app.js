document.querySelector('.search').addEventListener('keyup', show);
// const find = document.querySelector('.search').value;


Search = document.querySelector('.search');



function show() {

    fetch(`https://nepalstockapi.herokuapp.com/companyprice.php?symbol=${Search.value}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let output = "";
            data.forEach(function(api) {
                output +=
                    `
                    <div class="row">
                 
                    <div class= "col-md-3">
                    <div class="card">
          
                    <img src="https://th.bing.com/th/id/R.f026ae2bf4f015dcc45edc88dcf598a4?rik=oobTRpZTzMxshg&pid=ImgRaw&r=0" height="200px" width:"200px">
                    <h5>your results of ${Search.value} </h5>
                    <hr style="color:red;">
                    <li style="text-decoration:none; list-style:none;">maxprice:${api.maxprice}</li>
                    <hr>
                    <li style="text-decoration:none; list-style:none;">difference:${api.amount}</li>
                    <hr>
                    <li style="text-decoration:none; list-style:none;">tradecompany:${api.tradecompany}</li>
              
                    </div>
       
        `;
                document.querySelector('.here').innerHTML = output;
            });

        
        })
    }


//     if (Search.value === "") {
//         document.querySelector('.message').innerHTML = "write your company name";
//         document.querySelector('.message').style.color = "red";

//     } 
    

// }
