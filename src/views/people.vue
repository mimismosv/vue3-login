<template>
    <div><h3>People</h3></div>
    <div class="row">
        <div class="col m12">
          <table class="striped centered">
            <thead>
                <th class="center">id</th>
                <th class="center">Name</th>
                <th class="center">Latitude</th>
                <th class="center">Longitude</th>
                <th class="center">State Name</th>
                <th class="center">State Code</th>
                <th class="center">Country Code</th>
                <th class="center">Timezone</th>
            </thead>
            <tbody>
                <tr v-for="citie in cities" v-bind:key="citie">
                    <td>{{citie.id}}</td>
                    <td>{{citie.name}}</td>
                    <td>{{citie.latitude}}</td>
                    <td>{{citie.longitude}}</td>
                    <td>{{citie.state_name}}</td>
                    <td>{{citie.state_code}}</td>
                    <td>{{citie.country_code}}</td>
                    <td>{{citie.timezone}}</td>
                </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
    export default 
    {
        name: 'People'
    }
</script>