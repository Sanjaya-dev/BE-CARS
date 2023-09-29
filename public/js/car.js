function getAll() {
    const data_cars = document.getElementById('data_car');

    const url = 'http://localhost:8000/dashboard_admin/cars?iam=admin'
    async function fetchData(){
        try {
                const response = await fetch(url,{method: 'GET'})
                const data = await response.json()

                const HTMLElement = data.map(post => {
                    // const postElement = document.createElement('div')
                    // postElement.className = "card"
                    // postElement.style = "width: 18rem;"
                    return `
                    <div class= "card" style="width: 18rem;" key= ${post.id}>
                    <img src=${post.car_photo} class="card-img-top" alt="" width="64px">
                    <div class="card-body">
                        <h5 class="card-title">${post.car_name}</h5>
                        <p class="card-text">
                            Rp ${post.rent_per_day} / hari
                        </p>
                        <p class="card-text">
                            Updated at ${post.updatedAT}
                        </p>
                        <a href="/dashboard_admin/cars/delet/${post.id}?iam=admin" id="delet" class="btn btn-primary">Delet</a>
                        <a href="/dashboard_admin/cars/update_car/${post.id}?iam=admin" class="btn btn-primary">Edit</a>
                    </div>
                    
                    </div>
                    
                    `;
                    // postElement.innerHTML = `
                    // `
                });
                data_cars.innerHTML = HTMLElement.join('')
            
        } catch (error) {
            console.error('Error : ',error)
        }


    }

    fetchData();
}

function getCarCategory(category) {
    const data_cars = document.getElementById('data_car');

    const url = `http://localhost:8000/dashboard_admin/cars/${category}?iam=admin`;
    async function fetchData(){
        try {
                const response = await fetch(url,{method: 'GET'})
                const res = await response.json()
            

            //    res.map(post => {
            //     const postElement = document.createElement('div')
            //     postElement.className = "card"
            //     postElement.style = "width: 18rem;"
            //     postElement.innerHTML = `
            //     <img src=${post.car_photo} class="card-img-top" alt="" width="64px">
            //     <div class="card-body">
            //         <h5 class="card-title">${post.car_name}</h5>
            //         <p class="card-text">
            //             Rp ${post.rent_per_day} / hari
            //         </p>
            //         <p class="card-text">
            //             Updated at ${post.updatedAT}
            //         </p>
            //         <a href="#" class="btn btn-primary">Delet</a>
            //         <a href="#" class="btn btn-primary">Edit</a>
            //     </div>
            //     `
            //     data_cars.appendChild(postElement)
            //    })
                const HTMLElement = res.map(post => {
                    return `
                    <div class= "card" style= "width: 18rem" key= ${post.id}>
                    <img src=${post.car_photo} class="card-img-top" alt="" width="64px">
                    <div class="card-body">
                        <h5 class="card-title">${post.car_name}</h5>
                        <p class="card-text">
                            Rp ${post.rent_per_day} / hari
                        </p>
                        <p class="card-text">
                            Updated at ${post.updatedAT}
                        </p>
                        <a href="#" class="btn btn-primary">Delet</a>
                        <a href="#" class="btn btn-primary">Edit</a>
                    </div>
                    </div>
                    
                    `
                    // const postElement = document.createElement('div')
                    // postElement.className = "card"
                    // postElement.style = "width: 18rem;"
                    // postElement.innerHTML = `
                    
                });
                data_cars.innerHTML = HTMLElement.join('')
                
        } catch (error) {
            console.error('Error : ',error)
        }


    }

    fetchData();
}