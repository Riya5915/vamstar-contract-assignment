//Publication Date 
console.log(document.querySelector("#block-views-block-view-noticia-pbh-block-5 span.col-sm-6.lbl-licitacao").textContent);
// output: PUBLICATION DATE: 30/10/2020

//Bidding Date
var list = document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 span.col-sm-6.lbl-licitacao");
console.log(document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 span.col-sm-6.lbl-licitacao")[list.length-1].textContent);
// output: BID DATE: 10/30/2020

//printing the object
console.log("Object: "+(document.querySelector("#block-views-block-view-noticia-pbh-block-5 p").textContent));
// output: Object: Price Registration for a period of 12 months, for purchase of galvanized staple.

//printing All links related to this particular tender 
console.log("Links: "+(document.querySelector("#block-views-block-view-noticia-pbh-block-5 table div h2 a").href));
// output: Links: https://prefeitura.pbh.gov.br/taxonomy/term/4597 

// alternative approach
// function links() {
//     var input = []; // initialise an empty array
//     var temp = '';
//     do {
//         temp = document.querySelector("#block-views-block-view-noticia-pbh-block-5 table a").href;
//         if (temp === "" || temp === null) {
//             break;
//         } else {
//             input.push(temp);  // the array will dynamically grow
//         }
//         console.log("done");
//     } while (temp !== undefined);

//     for(let i = 0; i< input.length; i++){
//         console.log(input[i]);
//     }

// }