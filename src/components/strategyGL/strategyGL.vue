<template>
	<div class="strategyGL">
		<userinfo></userinfo>
		<myStrategy></myStrategy>
	</div>
</template>

<script>
	import userinfo from './userinfo.vue';
	import myStrategy from './myStrategy.vue';
	export default {
	  name: 'strategyGL',
	  template: ['<userinfo/>','<myStrategy/>'],
	  components: { userinfo ,myStrategy},
	}
</script>
<style>
</style>