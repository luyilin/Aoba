<style lang="scss" scoped>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .line {
      background-color: var(--purple);
      width: 4px;
      height: 35px;
      margin: 3px;
      border-radius: 2px;
      display: inline-block;
      animation: scaleLine 1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.28) both;
    }
    .line:nth-child(1) {
      animation-delay: 0.1s;
    }
    .line:nth-child(2) {
      animation-delay: 0.2s;
    }
    .line:nth-child(3) {
      animation-delay: 0.3s;
    }
    .line:nth-child(4) {
      animation-delay: 0.4s;
    }
    .line:nth-child(5) {
      animation-delay: 0.5s;
    }
    @keyframes scaleLine {
      0, 100% {
        transform: scaleY(1)
      }
      50% {
        transform: scaleY(0.4)
      }
    }
  }
</style>

<template>
  <div class="loading">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>
