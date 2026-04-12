<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
}

.col-12 {
  flex: 0 0 100%;
  padding: 0 0.5rem;
}

.full-height {
  height: 100%;
}

@media (min-width: 768px) {
  .col-md-3 {
    flex: 0 0 25%;
  }
  
  .col-md-4 {
    flex: 0 0 33.333333%;
  }
  
  .col-md-6 {
    flex: 0 0 50%;
  }
  
  .col-md-8 {
    flex: 0 0 66.666667%;
  }
}

@media (min-width: 1024px) {
  .col-lg-3 {
    flex: 0 0 25%;
  }
  
  .col-lg-4 {
    flex: 0 0 33.333333%;
  }
  
  .col-lg-6 {
    flex: 0 0 50%;
  }
}

.text-center {
  text-align: center;
}

.text-white {
  color: white;
}

.rounded-borders {
  border-radius: 8px;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.q-gutter-lg > * {
  margin: 0.5rem;
}

.q-mb-md {
  margin-bottom: 1rem;
}

.q-mr-md {
  margin-right: 1rem;
}

.full-width {
  width: 100%;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Loading states */
.q-loading {
  opacity: 0.8;
}
</style>