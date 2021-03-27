<template>
  <v-container class="backdrop" fluid>
    <!-- Toolbar -->
    <v-toolbar flat>
      <v-toolbar-title>Item Out</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <v-text-field
        class="mx-4"
        v-model="search"
        label="Search"
        append-icon="mdi-magnify"
        single-line
        outlined
        dense
        hide-details
      ></v-text-field>
      <v-btn color="accent" dark @click="createItem">Create</v-btn>
    </v-toolbar>

    <!-- Data Tabel -->

    <v-row class="my-n1">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small color="error" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <!-- Right Navigation Drawer -->
    <v-navigation-drawer v-model="drawerRight" clipped right app width="380">
      <v-container>
        <v-toolbar flat>
          <v-toolbar-title class="ml-n4">{{ formTitle }}</v-toolbar-title>
        </v-toolbar>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              label="Name"
              outlined
              single-line
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Type"
              outlined
              single-line
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Brand"
              outlined
              single-line
              dense
            ></v-text-field>
          </v-col>
           <v-col cols="12">
            <v-text-field
              label="Size"
              outlined
              single-line
              dense
            ></v-text-field>
          </v-col>
           <v-col cols="12">
            <v-text-field
              label="Stock"
              outlined
              single-line
              dense
            ></v-text-field>
          </v-col>
           <v-col cols="12">
            <v-text-field
              label="Unit"
              outlined
              single-line
              dense
            ></v-text-field>
          </v-col>
           <v-col cols="12">
            <v-text-field
              label="Location"
              outlined
              single-line
              dense
            ></v-text-field>
          </v-col>
          <!-- <v-col>
            <v-switch
              id="switch"
              :label="itemGroups.is_active ? 'Active' : 'Inactive'"
              v-model="itemGroups.is_active"
            ></v-switch>
          </v-col> -->
        </v-row>
      </v-container>
      <template v-slot:append>
        <div class="d-flex pa-2">
          <v-btn v-if="isEdit" color="error" @click="deleteItem(itemGroup)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="mr-2" outlined color="accent" @click="cancel">
            Cancel
          </v-btn>
          <v-btn primary color="accent" width="100" @click="save">
            Save
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      drawerRight: false,
      isEdit: false,
      selectedUom: null,
      itemGroup: {},
      search: "",
      headers: [
        {
          text: "NO",
          align: "start",
          value: "no",
          groupable: false,
          sortable: false,
        },
        {
          text: "Name",
          align: "start",
          value: "name",
        },

        {
          text: "Type",
          value: "Type",
          align: "start",
        },
        {
          text: "Brand",
          value: "brand",
        },
        {
          text: "Size",
          value: "size",
          align: "start",
        },

        {
          text: "Stock",
          value: "stock",
          align: "start",
        },
        {
          text: "Unit",
          value: "unit",
          align: "start",
        },

        {
          text: "Location",
          value: "location",
          align: "start",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["itemGroups", "uoms"]),
    formTitle() {
      return this.isEdit === false ? "New Item Group" : "Edit Item Group";
    },
  },
  created() {
    this.getItemGroup();
    this.getUom();
  },
  methods: {
    ...mapActions([
      "getItemGroup",
      "createItemGroup",
      "editItemGroup",
      "deleteItemGroup",
      "showDialog",
      "getUom",
    ]),
    createItem() {
      this.drawerRight = true;
      this.isEdit = false;

      // this.$v.$reset();
      this.itemGroup = {};
    },
    editItem(itemGroup) {
      this.drawerRight = true;
      this.isEdit = true;
      this.itemGroup = Object.assign({}, itemGroup);
    },
    cancel() {
      this.drawerRight = false;
      this.isEdit = false;
      this.itemGroup = {};
    },
    deleteItem(itemGroup) {
      this.showDialog({
        title: "Delete UoM",
        text: "Confirm delete this data?",
      }).then((confirm) => {
        if (confirm) {
          this.deleteItemGroup(itemGroup);
          this.drawerRight = false;
          this.isEdit = false;
        }
      });
    },
    save() {
      this.isEdit
        ? this.editItemGroup(this.itemGroup)
        : this.createItemGroup(this.itemGroup);

      this.itemGroup = {};
      this.drawerRight = false;
      this.isEdit = false;
    },
  },
};
</script>
