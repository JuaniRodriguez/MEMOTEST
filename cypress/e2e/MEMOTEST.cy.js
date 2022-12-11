const URL="192.168.0.38:8080";


before(()=> {
    cy.visit(URL);
})

/**it("testea que cambien titulos al iniciar",()=> {
    let botonJugar=cy.get('button');
    botonJugar.click();
    cy.get("#bienvenida").should("have.text","Juegue!");
    cy.get("button").should("have.text","Ronda 1")
});
*/


describe("Testeando Memotest",()=> {


    /*it("chequea titulos al iniciar",()=> {
        cy.get("button").click();
        cy.get("#bienvenida").should("have.text","Juegue!");
        cy.get("button").should("have.text","Ronda 1")
    });*/

 /*   it("testea que los cuadros sean aleatorios",()=> {
        cy.get("button").click();
        cy.get(".col").filter("#cuadro").then((cuadros)=> {
            let firstColorsArray=[];
            cuadros.each(function(i,cuadro) {
                cuadro.click();
                firstColorsArray.push(cuadro.style.backgroundColor)               
            })
            cy.log(firstColorsArray);
            cy.visit(URL);
            cy.get("button").click();
      

            cy.get(".col").filter("#cuadro").then((cuadros)=> {
                let secondColorsArray=[];
                cuadros.each(function(i,cuadro) {
                    cuadro.click();
                    secondColorsArray.push(cuadro.style.backgroundColor)               
                })
                cy.log(secondColorsArray);
        
                cy.wrap(firstColorsArray).should("not.deep.equal",secondColorsArray)
             })
        })
    }) */
        

 /* it("testea funcionalidad",()=> {
      
        cy.get("button").click();
        cy.get(".col").filter("#cuadro").then((cuadros)=> {
            let colors=[];
            cuadros.each(function(i,cuadro) {
                cuadro.click();
                colors.push([cuadro.style.backgroundColor,i]);
                cuadro.removeAttribute("style");
                
                
            })
            colors.sort();
            cy.log(colors);
            //cy.get(".col").filter("#cuadro").eq(colors[0][1]).click();
            //cy.get(".col").filter("#cuadro").eq(colors[4][1]).click();
            cy.wait(400);
            colors.forEach((color)=> {
                    //cy.get("button").should("have.text","Ronda 1")
                    cy.wait(400);
                    cy.get(".col").filter("#cuadro").eq(color[1]).click();    
                    
                
            })
            
            cy.get("button").should("have.text","Jugar");    
            
        })
    })    */
    
});


