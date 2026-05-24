// TASK 15: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. 
// To find the Kenya NHIF Rate using THIS LINK:  https://apps.wingubox.com/best-paye-tax-calculator-for-kenya
// Write a normal program but use functions if you feel comfortable.

// calculate gross salary
document.getElementById("tax_form").addEventListener("submit",function(event){
    event.preventDefault()

    let basic_salary =  Number(document.getElementById("basic_salary").value)
    let benefits = Number(document.getElementById("benefits").value)

    function calculate_gross(basic,benefits){
        return basic + benefits
    }

    let my_gross = calculate_gross(basic_salary,benefits)
    document.getElementById("gross").innerHTML = my_gross.toFixed(2)

    let nhif = ""
    nhif = calculate_nhif(my_gross)
    document.getElementById("nhif").innerHTML = nhif.toFixed(2)
    
    function calculate_nhif(gross){
            if (my_gross <= 5999){
                nhif = 150
            }else if(my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }else if(my_gross >= 6000 && my_gross <= 7999){
                nhif = 1700
            }else if( my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }else if( my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }else if( my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }else if( my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }else if( my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }else if( my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }else if( my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }        
            else if( my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }        
            else if( my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }        
            else if( my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }        
            else if( my_gross >= 6000 && my_gross <= 7999){
                nhif = 300
            }        
            else{
                nhif = 1700
            }

            return nhif
    }
    

    function find_nssf(my_gross){
    if (my_gross >= 18000){
        nssf = my_gross * 0.06
    }        
    else{
        nssf = 0
    }        
    
    return nssf
    }

    let nssf_contribution = find_nssf(my_gross)
    document.getElementById("nssf").innerHTML = nssf_contribution.toFixed(2)
    console.log("NSSF: " + nssf_contribution)

    function find_nhdf(my_gross){
        nhdf = my_gross * 0.015
        
        return nhdf
    }

    let nhdf_contribution = ""
    nhdf_contribution = find_nhdf(my_gross)
    document.getElementById("nhdf").innerHTML = nhdf_contribution.toFixed(2)
    console.log("NHDF: " + nhdf_contribution)


    function find_taxable_income(my_gross,nssf,nhdf,nhif){
        taxable_income = my_gross - (nssf + nhdf +nhif)
        
        return taxable_income
    }

    let taxable_income = ""
    taxable_income = find_taxable_income(my_gross,nssf_contribution,nhdf_contribution,nhif)
    document.getElementById("taxable_income").innerHTML = taxable_income.toFixed(2)
    console.log("Taxable income: " + taxable_income)
    
    let paye = ""
    paye = find_paye(taxable_income)
    document.getElementById("paye").innerHTML = paye.toFixed(2)
    console.log("PAYE: " + paye)

    function find_paye(paye){
        if(taxable_income <= 24000){
            tax = taxable_income * 0.1
        }        
        else if( taxable_income > 24000 && taxable_income <= 32333){
            tax = (taxable_income - 24000) * 0.25 + 2400
        }        
        else if( taxable_income > 32333 && taxable_income <= 500000){
            tax = (taxable_income - 32333) * 0.3 + 2400 + 2083.25
        }        
        else if( taxable_income > 500000 && taxable_income <= 800000){
            tax = (taxable_income - 500000) * 0.325 + 2400 + 2083.25 + 140300.1
        }        
        else{
            tax = (taxable_income - 800000) * 0.35 + 2400 + 2083.25 + 140300.1 + 97500
        }        
        
        return tax
    }

    let net_salary = ""
    net_salary = find_net_salary(taxable_income,tax)
    document.getElementById("net_salary").innerHTML = net_salary.toFixed(2)


    
    console.log("Net salary: " + net_salary)


    

    function find_net_salary(taxable_income,tax){
        net_salary = taxable_income - tax
        
        return net_salary
    }
    


})




// let basic_salary = Number(prompt("Enter basic salary: "))
// let benefits = Number((prompt("Enter benefit: ")))

// gross_salary=calc_gross(basic_salary,benefits)
// console.log(`Gross salary is ${gross_salary}.`)

// function calc_gross(basic, benefits){
//     return basic + benefits
// }

// // calculate nhif
// let nhif_contribution = find_nhif(gross_salary)
// console.log(`NHIF contribution is ${nhif_contribution}.`)

// function find_nhif(my_gross){
//     if (my_gross <= 5999){
//         nhif = 150
//     }        
//     else if(my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }
//     else if(my_gross >= 6000 && my_gross <= 7999){
//         nhif = 1700
//     }        
//     else if( my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }        
//     else if( my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }        
//     else if( my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }        
//     else if( my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }        
//     else if( my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }        
//     else if( my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }        
//     else if( my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }        
//     else if( my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }        
//     else if( my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }        
//     else if( my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }        
//     else if( my_gross >= 6000 && my_gross <= 7999){
//         nhif = 300
//     }        
//     else{
//         nhif = 1700
//     }
        
//     return nhif
// }

// // TASK 16: Using Python or PHP or Java or Ruby or JavaScript
// // Continue with the program above, then use  the gross salary to find the NSSF. 
// // To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 
// // Write a normal program but use functions if you feel comfortable.

// // calculate nssf
// nssf_contribution = find_nssf(gross_salary)
// console.log(`NSSF contribution is ${nssf_contribution}.`)

// function find_nssf(my_gross){
//     if (my_gross >= 18000){
//         nssf = my_gross * 0.06
//     }        
//     else{
//         nssf = 0
//     }        
    
//     return nssf
// }

// // Task 17: Using Python or PHP or Java or Ruby or JavaScript
// // Continue with the same program and calculate an individual’s NHDF using:
// // i.e NHDF = gross_salary *  0.015
// // Write a normal program but use functions if you feel comfortable.
// nhdf_contribution = find_nhdf(gross_salary)
// console.log(`NHDF contribution is ${nhdf_contribution}.`)

// function find_nhdf(my_gross){
//     nhdf = my_gross * 0.015
     
//     return nhdf
// }

// // Task 18: Using Python or PHP or Java or Ruby or JavaScript
// // Calculate the taxable income.
// // i.e taxable_income = gross salary - (NSSF + NHDF + NHIF) 
// // Write a normal program but use functions if you feel comfortable.
// taxable_income = find_taxable_income(gross_salary,nssf_contribution,nhdf_contribution,nhif_contribution)
// console.log(`Taxable income is ${taxable_income}.`)

// function find_taxable_income(my_gross,nssf,nhdf,nhif){
//     taxable_income = my_gross - (nssf + nhdf +nhif)
    
//     return taxable_income
// }

// // TASK 19: Using Python or PHP or Java or Ruby or JavaScript
// // Continue with the same program and find the person's PAYEE using the taxable income above.
// // Find the Kenya PAYEE Tax Rate using THIS LINK
// // Write a normal program but use functions if you feel comfortable.
// tax = find_paye(taxable_income)
// console.log(`Tax is ${tax}.`)


// function find_paye(taxable_income){
//     if(taxable_income <= 24000){
//         tax = taxable_income * 0.1
//     }        
//     else if( taxable_income > 24000 && taxable_income <= 32333){
//         tax = (taxable_income - 24000) * 0.25 + 2400
//     }        
//     else if( taxable_income > 32333 && taxable_income <= 500000){
//         tax = (taxable_income - 32333) * 0.3 + 2400 + 2083.25
//     }        
//     else if( taxable_income > 500000 && taxable_income <= 800000){
//         tax = (taxable_income - 500000) * 0.325 + 2400 + 2083.25 + 140300.1
//     }        
//     else{
//         tax = (taxable_income - 800000) * 0.35 + 2400 + 2083.25 + 140300.1 + 97500
//     }        
    
//     return tax
// }
    
// // Task 20: Using Python or PHP or Java or Ruby or JavaScript
// // Continue with the same program and calculate an individual’s Net Salary using:
// // net_salary = gross_salary - (nhif + nhdf +  nssf + payee)
// net_salary = find_net_salary(taxable_income,tax)
// console.log(`Net salary is ${net_salary}.`)

// function find_net_salary(taxable_income,tax){
//     net_salary = taxable_income - tax
    
//     return net_salary
// }
    


