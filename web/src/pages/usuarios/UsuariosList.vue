<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from '@/lib/api';
type Usuario = { id: string; nome: string };
const usuarios = ref<Usuario[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
	try {
		const { data } = await api.get<Usuario[]>('/usuarios');
		usuarios.value = data;
	} catch (e: any) {
		error.value = e?.response?.data?.message ?? 'Erro ao carregar usuários';
	} finally {
		loading.value = false;
	}
});
</script>

<template>
	<main style="padding: 16px">
		<h1>Usuários</h1>
		<p v-if="loading">Carregando…</p>
		<p v-else-if="error" style="color: crimson">{{ error }}</p>
		<ul v-else>
			<li v-for="u in usuarios" :key="u.id">{{ u.nome }} ({{ u.id }})</li>
		</ul>
	</main>
</template>
