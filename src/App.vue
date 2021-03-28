<template>
  <v-app>
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app clipped>
      <!-- items -->
      <v-list nav dense>
        <v-list-item-group v-model="item" color="primary">
          <div v-for="item in items" :key="item.title">
            <!-- If Menu contains Sub Menu -->
            <v-list-group v-if="item.items" :prepend-icon="item.icon">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="subItem in item.items"
                :key="subItem.title"
                :to="subItem.link"
              >
                <v-list-item-icon>
                  <v-icon v-text="subItem.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <!-- If Menu don't contains Sub Menu -->
            <v-list-item v-else :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <!-- Data Master -->
      <v-list nav dense>
        <v-subheader>DATA MASTER</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <div v-for="item in masters" :key="item.title">
            <!-- If Menu contains Sub Menu -->
            <v-list-group v-if="item.items" :prepend-icon="item.icon">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="subItem in item.items"
                :key="subItem.title"
                :to="subItem.link"
              >
                <v-list-item-icon>
                  <v-icon v-text="subItem.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <!-- If Menu don't contains Sub Menu -->
            <v-list-item v-else :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>

      <!-- transaction -->
      <v-list nav dense>
        <v-subheader>TRANSACTION</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <div v-for="item in transactions" :key="item.title">
            <!-- If Menu contains Sub Menu -->
            <v-list-group v-if="item.items" :prepend-icon="item.icon">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="subItem in item.items"
                :key="subItem.title"
                :to="subItem.link"
              >
                <v-list-item-icon>
                  <v-icon v-text="subItem.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <!-- If Menu don't contains Sub Menu -->
            <v-list-item v-else :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <!-- User -->
      <v-list nav dense>
        <v-subheader>SETTINGS</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <div v-for="item in users" :key="item.title">
            <!-- If Menu contains Sub Menu -->
            <v-list-group v-if="item.items" :prepend-icon="item.icon">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="subItem in item.items"
                :key="subItem.title"
                :to="subItem.link"
              >
                <v-list-item-icon>
                  <v-icon v-text="subItem.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <!-- If Menu don't contains Sub Menu -->
            <v-list-item v-else :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn outlined block color="accent">
            <v-icon class="mr-2">mdi-exit-to-app</v-icon>Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Application Bar -->
    <v-app-bar app color="teal lighten-2" dark clipped-left clipped-right>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="min-width:150px">Inventory</v-toolbar-title>
      <v-spacer />
      <div style="width:320px">
        <v-text-field
          flat
          dense
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down"
        />
      </div>
      <v-btn class="ml-1" icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Content -->
    <v-main>
      <v-container class="fill-height pa-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- Utils -->
    <Loading />
    <Snackbar />
    <Dialog />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    item: null,
    items: [
      {
        title: "Dashboard",
        icon: "mdi-view-dashboard",
        link: "/dashboard",
      },
    ],
    masters: [
      {
        title: "Supplier",
        icon: "mdi-account-group",
        link: "/supplier",
      },
      {
        title: "Items",
        icon: "mdi-folder",
        items: [
          { title: "Unit Item", icon: "mdi-file", link: "/unit_item" },
          { title: "Type Item", icon: "mdi-file", link: "/type_item" },
          { title: "Data Item", icon: "mdi-file", link: "/data_item" },
        ],
      },
    ],
    transactions: [
      {
        title: "Transactions",
        icon: "mdi-view-dashboard",
        items: [
          { title: "Items In", icon: "mdi-download", link: "/stock_in" },
          { title: "Items Out", icon: "mdi-upload", link: "/stock_out" },
        ],
      },
      {
        title: "Report",
        icon: "mdi-printer",
        link: "/report",
      },
    ],
    users: [
      {
        title: "User Management",
        icon: "mdi-account-plus",
        link:"/user"
      },
    ],
  }),
};
</script>

<style></style>
