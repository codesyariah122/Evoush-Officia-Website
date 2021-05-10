<template>
  <p>{{ product.name }}: {{ product.price.formatted_with_symbol }}</p>
</template>

<script>
export default {
  props: ["product"],
};
</script>
