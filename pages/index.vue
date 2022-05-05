<template >
  <div id="index">
    <NavBar />
    <h1>Administra tus contadores</h1>
    <CountersContainer>
      <Counter :name="'Nombre'" :value="2"/>
        <Counter :name="'Nombre'" :value="2"/>
          <Counter :name="'Nombre'" :value="2"/>
            <Counter :name="'Nombre'" :value="2"/>
              <Counter :name="'Nombre'" :value="2"/>
    </CountersContainer>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
body {
  background-color: #120b16;
  color: #f6f5f8;
  font-family: "Open Sans", sans-serif;
  height: 100%;
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
}

h4 {
  font-size: 16px;
  font-weight: 600;
}

p {
  font-size: 14px;
    color: #120b16;
}

#index {
 display: flex;
 flex-direction: column;
 align-items: center;
}
</style>
