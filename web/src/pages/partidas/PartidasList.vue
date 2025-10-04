<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from '@/lib/api';
type RefLabel = { id: string; nome: string } | string;
type Partida = { id: string; id_usuario: RefLabel; id_torneio: RefLabel; handicap: number; data: string };

const partidas = ref<Partida[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

function label(v: RefLabel) {
	return typeof v === 'string' ? v : `${v.nome} (${v.id})`;
}

onMounted(async () => {
	try {
		const { data } = await api.get<Partida[]>('/partidas');
		partidas.value = data;
	} catch (e: any) {
		error.value = e?.response?.data?.message ?? 'Erro ao carregar partidas';
	} finally {
		loading.value = false;
	}
});
</script>

<template>
	<main style="padding: 16px">
		<h1>Partidas</h1>
		<p v-if="loading">Carregando…</p>
		<p v-else-if="error" style="color: crimson">{{ error }}</p>
		<table v-else border="1" cellpadding="6">
			<thead>
				<tr>
					<th>Usuário</th>
					<th>Torneio</th>
					<th>Handicap</th>
					<th>Data</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="p in partidas" :key="p.id">
					<td>{{ label(p.id_usuario) }}</td>
					<td>{{ label(p.id_torneio) }}</td>
					<td>{{ p.handicap }}</td>
					<td>{{ new Date(p.data).toLocaleDateString() }}</td>
				</tr>
			</tbody>
		</table>
	</main>
</template>
