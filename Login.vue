<template>
  <div class="form-demo">
    <div class="p-d-flex p-jc-center">
      <div class="card">
        <h5 class="p-text-center">Přihlásit se</h5>
        <form @submit.prevent="handleSubmit(v$.$invalid)" class="p-fluid">
          <div class="p-field">
            <div class="p-float-label">
              <InputText
                id="username"
                v-model="v$.username.$model"
                :class="{ 'p-invalid': v$.username.$invalid && submitted }"
              />
              <label
                for="username"
                :class="{ 'p-error': v$.username.$invalid && submitted }"
                >Username*</label
              >
            </div>
            <small v-if="v$.username.$invalid && submitted" class="p-error">{{
              v$.username.required.$message.replace("Value", "username")
            }}</small>
          </div>
          <div class="p-field">
            <div class="p-float-label">
              <Password
                id="password"
                v-model="v$.password.$model"
                :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                toggleMask
              >
                <template #header>
                  <h6>Pick a password</h6>
                </template>
                <template #footer="sp">
                  {{ sp.level }}
                  <Divider />
                  <p class="p-mt-2">Suggestions</p>
                  <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                  </ul>
                </template>
              </Password>
              <label
                for="password"
                :class="{ 'p-error': v$.password.$invalid && submitted }"
                >Password*</label
              >
            </div>
            <small v-if="v$.password.$invalid && submitted" class="p-error">{{
              v$.password.required.$message.replace("Value", "Password")
            }}</small>
          </div>
          <Button type="submit" label="Submit" class="p-mt-2" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useAuthStore } from "@/store/Auth.js";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import Divider from "primevue/divider";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();

const authStore = useAuthStore();
const { login, resolve } = authStore;
const { token } = storeToRefs(authStore);

const state = reactive({
  username: "",
  password: "",
});

const rules = {
  username: { required },
  password: { required },
};

const submitted = ref(false);
const v$ = useVuelidate(rules, state);

const handleSubmit = async (isInvalid) => {
  submitted.value = true;
  if (isInvalid !== true) {
    await login(state);
    if (!!token.value) {
      await resolve(token);
      router.push("crm");
    }
  }
};
</script>

<style lang="scss" scoped>
.form-demo {
  margin: 100px auto;
  min-width: 450px;
  max-width: 450px;
}

.p-field {
  margin-bottom: 1.5rem;
}
</style>
