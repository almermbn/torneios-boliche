import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{ path: '/', component: () => import('@/pages/Home.vue') },
	{ path: '/usuarios', component: () => import('@/pages/usuarios/UsuariosList.vue') },
	{ path: '/torneios', component: () => import('@/pages/torneios/TorneiosList.vue') },
	{ path: '/torneios/novo', component: () => import('@/pages/torneios/TorneioNovo.vue') },
	{ path: '/partidas', component: () => import('@/pages/partidas/PartidasList.vue') },
	{ path: '/:pathMatch(.*)*', redirect: '/' },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
