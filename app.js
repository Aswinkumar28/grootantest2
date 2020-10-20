
 document
    .querySelector("#dont-refresh")
    .addEventListener('submit', event => event.preventDefault());

fetch('data.json')
    .then(res => res.json())    
    .then(jsn => {
        console.log(jsn)
        document.querySelector('#title').textContent = jsn["Title"]
        document.querySelector('#sub-title').textContent = jsn["Sub Title"]
        document.querySelector('#name').value = jsn["Name"]
        document.querySelector('#age').value = jsn["Age"]   
        var countries = ""        
        jsn.Country.forEach(element => {
            countries +=  `<option value=${element}>${element}</option>`
        });        
        document.querySelector('#country').innerHTML = countries   

        document.querySelector('#lang').value = jsn["Languages Known"]
        document.querySelector('#color').value = jsn["Favourite Color"]
        document.querySelector('#email').value = jsn["Email"]
        //document.querySelector('#web').value = jsn["Website Address"]
        document.querySelector('#time').value = jsn["Start Time"]
    })

function store() {
    console.log("Storing....")
    if (typeof(Storage) !== undefined) {
        var storage = window.sessionStorage
        var name = document.querySelector("#name")
        var age = document.querySelector("#age")
        var time = document.querySelector("#time")  
        if (document.querySelector('#male').checked) {
            var gender = document.querySelector('#male').value            
        } else {
            var gender = document.querySelector('#female').value
        }      
        var country = document.querySelector("#country")
        var file = document.querySelector("#photo")
        var color = document.querySelector("#color")
        var mail = document.querySelector("#email")
        var web = document.querySelector("#web")
        var cgpa = document.querySelector("#cgpa")
        storage.setItem("name", name.value)
        storage.setItem("age", age.value)
        storage.setItem("gender", gender.value)
        storage.setItem("mail", mail.value)
        storage.setItem("country", country.value)
        storage.setItem("color", color.value)
        storage.setItem("file", file.value)
        storage.setItem("time", time.value)
        storage.setItem("web", web.value)
        storage.setItem("cgpa",cgpa.value)
        alert(`
                    name: ${name.value},
                    age: ${age.value},
                    gender: ${gender.value},
                    Email: ${mail.value},
                    Country: ${country.value},
                    Favorite Color: ${color.value},
                    Start Time: ${time.value},
                    Website Address: ${web.value},
                    CGPA: ${cgpa.value} 
                    `)
    } else {
        alert("Browser not supported for storage")
    }
}

