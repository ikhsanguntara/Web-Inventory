<template>
  <v-container class="backdrop" fluid>
    <!-- Toolbar -->
    <v-toolbar flat>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-toolbar-title>Stock Item</v-toolbar-title>
    </v-toolbar>
    <!-- Data Tabel -->

    <v-row class="my-n1">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="itemGroups"
          :search="search"
          item-key="name"
          sort-by="name"
          group-by="category"
          class="elevation-1"
          show-group-by
        >
          <!-- <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small color="error" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template> -->
        </v-data-table>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>
