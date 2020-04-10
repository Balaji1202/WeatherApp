<template>
	<div>
		<button @click="emitClicked" class="btn">Know the weather around me!</button>
	</div>
</template>

<script>
export default {
	methods: {
		emitClicked() {
			this.$emit('clicked');
		}
	}
}
</script>

<style scoped>
	.btn {
		border: 1px solid white;
		background: none;
		padding: 10px 20px;
		font-size: 20px;
		font-family: 'Courier New', Courier, monospace;
		outline: none;
		cursor: pointer;
		transition: 0.5s;
		overflow: hidden;
		border-radius: 5%;
		width: 230px;
		background-color: #4C4973;
	}
	.btn:hover {
		background-color: white;
		color: #4C4973
	}
	.btn:active {
		background-color: black;
	}
</style>