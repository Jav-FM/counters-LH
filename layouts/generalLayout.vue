<template>
  <div id="layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
body {
  margin: 0px;
}
h1 {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
}

h2 {
  font-size: 32px;
  font-weight: 700;
}

h3 {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

h4 {
  font-size: 16px;
  font-weight: 600;
}

p {
  font-size: 14px;
  color: #120b16;
}
#layout {
  color: #f6f5f8;
  font-family: "Open Sans", sans-serif;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  background-color: #120b16;
}
</style>
