<template>
    <div><h3>Products Admin</h3></div>

    <div class="container">
        <form @submit.prevent="AddProduct">
        <div class="row">
            <div class="col m4">
                <label>name:</label>
                <input type="text" v-model="name">
            </div>      
            <div class="col m4">
                <label>brand:</label>
                <select v-model="brand">
                    <option value="" selected>Select Brand</option>
                    <option value="1">Samsung </option>
                    <option value="2">LG</option>
                    <option value="3">Sony</option>
                    <option value="4">Panasonic</option>
                    <option value="5">Philips</option>
                    <option value="6">Sharp</option>
                </select>
            </div>    
            <div class="col m4">
                <label>category:</label>
                <select v-model="category">
                    <option value="" selected>Select category</option>
                    <option value="1">Television  </option>
                    <option value="2">Refrigerator</option>
                    <option value="3">Air Conditioner</option>
                    <option value="4">Washing Machine</option>
                    <option value="5">Microwave</option>
                    <option value="6">Dish Washer</option>
                </select>
            </div>   
            <div class="col m4">
                <label>price:</label>
                <input type="text" v-model="price">
            </div>         
            <div class="col m8">
                <label>picture:</label>
                <input type="text" v-model="picture">
            </div> 
            <div class="col m12">
                <label>description:</label>
                <textarea v-model="description" rows="20" cols="50">Write description here</textarea>
            </div>      
            <div class="col m12">
                <button type="submit">Add Product</button>
            </div>                                      
        </div>
        </form>
    </div>

    <div class="container">
        <div class="row">
            <div class="col m12">
                <table class="table bordered striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>description</th>
                            <th>brand_id</th>
                            <th>category_id</th>
                            <th>price</th>
                            <th>picture</th>
                            <th>created_at</th>
                            <th>updated_at</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for='product in products' v-bind:key='product'>
                            <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                            <td>{{product.description}}</td>
                            <td>{{product.brand}}</td>
                            <td>{{product.category}}</td>
                            <td>{{product.price}}</td>
                            <td>{{product.picture}}</td>
                            <td>{{product.created_at}}</td>
                            <td>{{product.updated_at}}</td>
                            <td><a href="#!">Edit</a></td>
                            <td><a href="#!">Delete</a></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


</template>

<script>
    import M from "materialize-css";

    export default {
    name: "Admin",
    data() {
        return {
            name: '',
            description: '',
            brand: '',
            category: '',
            price: 0,  
            picture: '',
            select_instances: [],
            products: []
        }
    },
    mounted() 
    {
        var elems = document.querySelectorAll('select');
        var select_instances = M.FormSelect.init(elems, null);
    },
    methods: {
        AddProduct()
        {
            var data = {
                id: this.id,
                name: this.name,
                description: this.description,
                brand: this.brand,
                category: this.category,
                price: this.price,  
                picture: this.picture,

            };

            console.log(data);
            this.products.push(data);
            this.name = '';
            this.description = '';
            this.brand = '';
            this.category = '';
            this.price = 0;  
            this.picture = '';

        }
    }, 
    };
</script>