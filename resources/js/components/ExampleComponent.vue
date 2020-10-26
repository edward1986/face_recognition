<template>
    <div class="container">

        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <form ref="form" @submit.prevent='onSubmit' method="post" enctype="multipart/form-data">
                            Product name:
                            <br/>
                            <input type="text" placeholder="Name" name="name"/>
                            <br/>
                            description:
                            <br/>
                            <input type="text" placeholder="description" name="description"/>
                            <br/>
                            price:
                            <br/>
                            <input type="number" placeholder="price" name="price"/>

                            <br/>
                            <br/>
                            Product photos (can attach more than one):
                            <br/>
                            <input type="file" name="photos[]" multiple/>
                            <br/><br/>
                            <input type="submit" value="Upload"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <div style="" v-for="item in items">
            {{item.name}}
            <div v-for="image in item.item_image_colors">{{image.color}},</div>
            <img style="height:150px;" v-for="img in item.item_images" :src="img.path" alt="">
            </div>
        </div>
    </template>

<script>
    export default {
        data(){
            return{
                items:[]
            }
        },
    mounted() {
            axios.get('/api/items').then((response)=>{
                this.items = response.data
            });
    },
    methods:{
            onSubmit(){
                var vm = this
                    var formdata = new FormData(vm.$refs.form);
                axios.post('/api/items', formdata).then(function(response){
                    console.log(response.data)
                })
            }
    }
    }
    </script>
