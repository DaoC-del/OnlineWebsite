<template>
  <input :value="testData" @input="updateValue" />
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  // 自定义属性名称，例如 xxx
  qwe: String,
});

const emit = defineEmits(['update:qqqq']);
const testData=ref(props.qwe);

const updateValue = (event) => {
  // 更新 xxx 的值，并通过 $emit 触发自定义事件 inputChange
  emit('update:qqqq', event.target.value);
}
</script>
