<template>
  <nav class="navbar navbar-dark bg-dark">
      <div class="container">
          <span class="navbar-brand">Tweet simulator</span>

          <button
            class="btn btn-success px-4"
            @click="openCloseForm"
            >
              New Tweet
          </button>
      </div>
  </nav>
</template>

<script>
export default {
    props: {
        showForm: Boolean,
        openCloseForm: Function,
    }
}
</script>

<style>

</style>