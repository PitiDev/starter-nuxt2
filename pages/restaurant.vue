<template>
    <div>
        <h2>Manage Restaurant</h2>
        <br>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field v-model="search" append-icon="mdi-magnify" label="ຄົ້ນຫາ" single-line hide-details outlined
                    dense></v-text-field>
            </v-col>
            <v-col cols="12" md="8" class="text-right">
                <v-btn rounded elevation="0" color="primary">Add Restaurant</v-btn>
            </v-col>
        </v-row>
        <br>
        <v-data-table :headers="headers" :items="dataRes" :search="search">
            <template v-slot:item="row">

            </template>
        </v-data-table>

    </div>
</template>
<script>
export default {
    data() {
        return {
            search: '',
            headers: [
                {
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Table',
                    align: 'start',
                    sortable: false,
                    value: 'table',
                },
                {
                    text: 'Menu',
                    align: 'start',
                    sortable: false,
                    value: 'menu',
                },
                {
                    text: 'Package',
                    align: 'start',
                    sortable: false,
                    value: 'phone',
                },
                {
                    text: 'Action',
                    align: 'start',
                    sortable: false,
                    value: 'action',
                },
            ]
        }
    }
}
</script>