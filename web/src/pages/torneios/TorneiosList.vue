<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from '@/lib/api';
type Torneio = { id: string; nome: string; descricao: string; dataInicio: string; dataFim: string };
const torneios = ref<Torneio[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
	try {
		const { data } = await api.get<Torneio[]>('/torneios');
		torneios.value = data;
	} catch (e: any) {
		error.value = e?.response?.data?.message ?? 'Erro ao carregar torneios';
	} finally {
		loading.value = false;
	}
});
</script>

<template>
	<main style="padding: 16px">
		<h1>Torneios</h1>
		<RouterLink to="/torneios/novo">+ Novo</RouterLink>
		<p v-if="loading">Carregando…</p>
		<p v-else-if="error" style="color: crimson">{{ error }}</p>
		<table v-else cellpadding="6" style="margin-top: 8px">
			<thead>
				<tr>
					<th>Nome</th>
					<th>Descrição</th>
					<th>Início</th>
					<th>Fim</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="t in torneios" :key="t.id">
					<td>{{ t.nome }}</td>
					<td>{{ t.descricao }}</td>
					<td>{{ new Date(t.dataInicio).toLocaleDateString() }}</td>
					<td>{{ new Date(t.dataFim).toLocaleDateString() }}</td>
				</tr>
			</tbody>
		</table>
	</main>
</template>
