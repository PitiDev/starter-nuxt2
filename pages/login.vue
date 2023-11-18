<template>
  <v-container fill-height>
    <v-overlay class="overlay" :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-row justify="center" align="center">
      <v-col lg="8" xs="12" md="12">
        <v-card flat class="rounded-lg">
          <v-row>
            <v-col lg="4" class="red lighten-1 d-none d-sm-flex">
              <v-container class="rounded-lg" fill-height>
                <v-row justify="center" align="center">
                  <v-col cols="12">
                    <v-card class="rounded-lg red lighten-2" flat>
                      <v-card-title class="justify-center display-1 white--text">KhaiSauy</v-card-title>
                      <v-card-text class="white--text">
                        Welcome To Admin Portal, Please enter your credentials
                        to continue.
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
            <v-col lg="8" xs="12" md="12">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card flat class="rounded-lg">

                  <v-card-title class="text-capitalize justify-center display-1 font-weight-bold primary--text">sign in to
                    account</v-card-title>
                  <v-card-text class="text-center">or use your user_name account</v-card-text>
                  <v-card-text>
                    <v-row justify="center" align="center">
                      <v-col lg="8" xs="12" md="12">
                        <v-text-field v-model="form.username" :rules="[(v) => !!v || 'Username is required']"
                          label="Username" outlined flat clearable></v-text-field>
                        <v-text-field v-model="form.password" :rules="[(v) => !!v || 'Password is required']"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            " :type="showPassword ? 'text' : 'password'" label="Password" placeholder="*********" solo
                          class="input-login mt-2" @click:append="showPassword = !showPassword" flat
                          outlined></v-text-field>
                        <div class="d-flex align-center">
                          <v-spacer />
                          <nuxt-link to="/forget_password">forget password?</nuxt-link>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>

                  <v-card-actions class="justify-center">
                    <v-btn @click="login()" large depressed dark color="primary" class="px-12 text-capitalize">
                      <v-icon left>fal fa-sign-in</v-icon>sign in
                    </v-btn>
                  </v-card-actions>
                  <br>
                </v-card>
              </v-form>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { authenticated } from "~/utils/auth";
import { login } from "~/controllers/user";
import { head } from "~/utils/head";
export default {
  middleware: "auth",
  head: head("Login"),
  mixins: [login],
  layout: "blank",
  data() {
    return {
      showPassword: false,
      valid: false,
      overlay: false,
      form: {
        username: "admin_user",
        password: "admin_password",
      },
    }
  },
  methods: {
    async login() {
      try {
        console.log('xx: ', this.$refs.form.validate());
        if (this.$refs.form.validate() == true) {
          this.overlay = true;
          const { data } = await this.$axios.post("/login", this.form);
          console.log('login: ', data);
          if (data.status) {
            this.overlay = false;
            await this.$toast.success("Successfully", {
              icon: "fa-check-circle",
            });
            await authenticated(this, data.data, "local");
          } else if (data.code === 404) {
            this.overlay = false;
            this.user_nameErrors = data.data;
            this.passwordErrors = data.message;
            this.$toast.global.my_error(`${data.message}`);
          } else if (data.code === 403) {
            this.overlay = false;
            this.passwordErrors = data.message;
            this.$toast.global.my_error(`${data.message}`);
          } else {
            this.$toast.global.my_error(`${data.message}`);
          }
        }
      } catch (error) {
        this.overlay = false;
        await this.$toast.global.my_error(error);
        console.log("error ===>", error);
      }
    },
  },
};
</script>

<style></style>
