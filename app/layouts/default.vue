<template>
  <v-app>
    <v-img src="./background.png" cover height="100vh">
      <v-sheet
        class="fill-height text-center align-content-center pa-2"
        color="transparent"
      >
        <v-container>
          <slot />
        </v-container>
      </v-sheet>
    </v-img>
  </v-app>
</template>
