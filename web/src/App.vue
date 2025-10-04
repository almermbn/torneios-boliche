<script setup lang="ts"></script>

<template>
	<nav style="display: flex; gap: 12px; padding: 12px; border-bottom: 1px solid #eee">
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/usuarios">Usuários</RouterLink>
		<RouterLink to="/torneios">Torneios</RouterLink>
		<RouterLink to="/torneios/novo">Novo Torneio</RouterLink>
		<RouterLink to="/partidas">Partidas</RouterLink>
	</nav>
	<RouterView />
</template>
