<template>
    <div>
        <h2>Manage User</h2>
        <br>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field v-model="search" append-icon="mdi-magnify" label="ຄົ້ນຫາ" single-line hide-details outlined
                    dense></v-text-field>
            </v-col>
            <v-col cols="12" md="8" class="text-right">
                <v-btn rounded elevation="0" color="primary">Add User</v-btn>
            </v-col>
        </v-row>
        <br>
        <!-- <v-data-table :headers="headers" :items="dataRes" :search="search">
            <template v-slot:item="row">

            </template>
        </v-data-table> -->

        <v-data-table :search="search" :headers="headers" :items="data.data" :loading="loading"
            :server-items-length="data.limit" :options.sync="pagination" @update:options="updateOptions">
            <template v-slot:item="row">
                <tr>
                    <td>{{ row.index + 1 }}</td>
                    <td>{{ row.item.first_name }}</td>
                    <td>{{ row.item.username }}</td>
                    <td>{{ row.item.email }}</td>
                    <td>{{ row.item.phone }}</td>
                    <td></td>
                </tr>
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
                    text: 'First Name',
                    align: 'start',
                    sortable: false,
                    value: 'first_name',
                },
                {
                    text: 'Username',
                    align: 'start',
                    sortable: false,
                    value: 'username',
                },
                {
                    text: 'Email',
                    align: 'start',
                    sortable: false,
                    value: 'email',
                },
                {
                    text: 'Phone',
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
            ],
            data: {
                page: null,
                limit: null,
                total: null,
                data: [],
            },
            loading: false,
            pagination: {},
        }
    },
    mounted() {
        this.getAllUser('?page=1&limit=50&order=DESC');
    },
    methods: {
        async getAllUser(Options) {
            console.log('newOptions: ', Options);
            let res = await this.$axios.$get(`/admin/users${Options}`);
            console.log('res: ', res);
            this.data = res.data;
        },
        updateOptions(newOptions) {
            console.log('newOptions: ', newOptions);
            this.pagination = { ...newOptions };
            console.log('pagination: ', this.pagination);

            let dataFill = `?page=${newOptions.page}&limit=50&order=DESC`;
            this.getAllUser(dataFill);
        },
    }
}
</script>