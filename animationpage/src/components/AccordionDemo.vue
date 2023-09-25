<template>
  <div class="container">

    <div class="content">
    <button @click="toggleAllItems">Toggle All</button>
    <div v-for="(item, index) in items" :key="index">
      <button @click="toggleItem(index)">Toggle</button>
      <div
          :id="'item-'+index"
          class="item"
          :class="{ 'expanded': expandedItems[index] }"

      >
        Item {{ index + 1 }}
      </div>
    </div>
      <div class="mask" id="mask"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import anime from "animejs";

const items = ["Item 1", "Item 2", "Item 3", "Item 4"]; // 你的项目数据
const expandedItems = ref([false,true,false,true,false]);
const itemRefs = ref([]); // 存储项目元素的引用数组

const mask= document.getElementById("mask");
const content= document.querySelector(".content");

if (mask && content) {
  content.addEventListener("scroll", () => {
    const scrollTop = content.scrollTop;
    if (mask.style) {
      mask.style.top = `${scrollTop}px`; // 根据滚动位置调整遮罩的位置
    }
  });
}







const toggleItem = (index) => {
  expandedItems[index] = !expandedItems[index];
  let el=document.getElementById('item-'+index);

  // const itemElement = itemRefs.value[index];
  console.log(el)
  if (expandedItems[index]) {
    // 展开动画
    anime({
      targets: el,
      height: "50px",
      opacity: 1,
      duration: 300,
      easing: "easeOutQuad",
    });
  } else {
    // 收起动画
    anime({
      targets: el,
      height: 0,
      opacity: 0,
      duration: 300,
      easing: "easeOutQuad",
    });
  }
};

const toggleAllItems = () => {
  // 切换所有项目的展开/收起状态
  const shouldExpandAll = expandedItems.value.some((expanded) => !expanded);
  expandedItems.value = items.map(() => shouldExpandAll);

  // 执行展开/收起动画
  items.forEach((_, index) => {
    const itemElement = itemRefs.value[index];
    if (shouldExpandAll) {
      // 展开动画
      anime({
        targets: itemElement,
        height: "auto",
        opacity: 1,
        duration: 300,
        easing: "easeOutQuad",
      });
    } else {
      // 收起动画
      anime({
        targets: itemElement,
        height: 0,
        opacity: 0,
        duration: 300,
        easing: "easeOutQuad",
      });
    }
  });
};

// 在组件渲染后获取项目元素的引用
onMounted(() => {
  itemRefs.value = items.map((_, index) => {
    return document.querySelector(`#item_${index}`);
  });
});
</script>

<style scoped>
.item {
  overflow: hidden;
  height: 0;
  opacity: 0;
  transition: height 0.3s ease-out, opacity 0.3s ease-out;
}

.expanded {
  height: auto;
  opacity: 1;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: rgba(0, 0, 0, 0.7); /* 半透明黑色遮罩 */
  opacity: 0; /* 初始时遮罩不可见 */
  z-index: 1;
  pointer-events: none;
}

.container {
  position: relative;
  width: 100%;
  height: 60px; /* 或适当的高度 */
  overflow: hidden; /* 隐藏内容溢出部分 */
}

.container{
  background: #fff; /* 内容容器的背景色 */
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  //height: auto; /* 自动高度，根据内容高度自适应 */
}
</style>
