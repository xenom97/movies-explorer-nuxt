<template>
  <div class="flex h-screen bg-gray-700">
    <div class="m-auto">
      <form class="w-full max-w-sm shadow px-10 py-20 bg-gray-800">
        <div>
          <div class="form-container">
            <input
              class="form-input focus:outline-none"
              type="text"
              placeholder="Username"
              aria-label="Username"
              v-model="username"
            />
          </div>
          <p class="text-red-500 text-xs py-1">{{ error.name }}</p>
          <div class="form-container">
            <input
              class="form-input focus:outline-none"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              aria-label="Password"
              v-model="password"
            />
            <button
              class="btn-show hover:text-teal-800 focus:outline-none"
              type="button"
              @click="showPasswordHandler"
            >{{showPassword ? 'HIDE' : 'SHOW'}}</button>
          </div>
          <p class="text-red-500 text-xs py-1">{{ error.password }}</p>
        </div>
        <button
          @click.prevent="submitHandler"
          class="w-full text-white bg-teal-500 hover:bg-teal-400 py-2 mt-10 focus:outline-none"
        >Sign In</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped src="./index.css"></style>
