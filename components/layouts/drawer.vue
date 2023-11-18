<template>
  <v-navigation-drawer color="transparent" :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" fixed app>
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>User</v-list-item-title>
          <v-list-item-subtitle>xxx@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-menu open-on-hover offset-y :position-y="70" transition="slide-y-transition" bottom rounded>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon small>fa fa-caret-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="/administrator/change_password">
                <v-list-item-title>change password</v-list-item-title>
              </v-list-item>
              <v-list-item @click="logout">
                <v-list-item-title>logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item-action>
      </v-list-item>
    </template>
    <!-- <v-divider></v-divider> -->
    <v-list class="mt-10">
      <template v-for="(item, i) in menus">
        <!--group with subitems-->
        <v-list-group v-if="item.items" :key="item.name" :group="item.group" :prepend-icon="item.icon"
          :class="checkURL(item.href)" no-action>
          <template v-slot:activator>
            <v-list-item-title>item.title</v-list-item-title>
          </template>

          <template v-for="(subItem, i) in item.items">
            <!--sub group-->
            <v-list-item v-if="subItem.items" :key="subItem.name">
              <v-list-item-avatar>
                <v-icon size="70">{{ subItem.icon }}</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ $t(subItem.title) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!--child item-->
            <v-list-item v-else :key="i" :to="subItem.href ? subItem.href : null" :disabled="subItem.disabled"
              :target="subItem.target" ripple :class="checkURL(item.href)">
              <v-list-item-avatar>
                <v-icon size="70">{{ subItem.icon }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ $t(subItem.title) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-group>

        <div v-else-if="item.header" :key="item.name + item.header">
          <v-subheader v-if="!miniVariant" :key="i">
            {{ item.header }}
          </v-subheader>
        </div>
        <v-divider class="my-0" inset v-else-if="item.divider" :key="i"></v-divider>
        <!--top-level link-->
        <v-list-item v-else :to="item.href ? item.href : null" ripple="ripple" :disabled="item.disabled"
          :target="item.target" rel="noopener" :key="item.name + item.href" :class="checkURL(item.href)">
          <v-list-item-action>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-icon small v-bind="attrs" v-on="on">{{ item.icon }}</v-icon>
              </template>
              <span>{{ $t(item.title) }}</span>
            </v-tooltip>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import menu from "~/api/dashboard";
export default {
  props: ["miniVariant", "clipped"],
  data() {
    return {
      drawer: true,
      menus: [
        {
          title: "home",
          group: "apps",
          icon: "far fa-home",
          name: "home",
          href: "/",
          policy: [404, 1, 2, 3]
        },
        {
          title: "ຮ້ານອາຫານ",
          group: "apps",
          icon: "mdi mdi-food-fork-drink",
          name: "admin",
          href: "/restaurant",
          policy: [404]
        },
        {
          title: "ຈັດການຜູ້ໃຊ້",
          group: "apps",
          icon: "fal fa-user-shield",
          name: "admin",
          href: "/users/manage_user",
          policy: [404]
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      window.location = "/";
    },
    checkURL(item) {
      if (item === this.$route.path) {
        return "btn-active-link";
      }
    },
  },
};
</script>
