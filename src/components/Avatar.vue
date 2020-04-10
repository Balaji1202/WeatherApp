<template>
	<div
		class="avatar">
		<b-avatar href="https://www.linkedin.com/in/balaji-saravanan/" target="_blank" variant="info" class="align-baseline" size="10rem"></b-avatar>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
	.avatar {
		position: absolute;
		top: 15%;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, -50%)
	}
	@media (max-width: 640px) 
	{
			.avatar {
				position: absolute;
				top: 15%;
				left: 50%;
				margin-right: -50%;
				max-width: 30%;
				max-height: 30%;
			}
	}
</style>