<template>
	<div class="footer">
		<div class="footer-text">
			<p>Hi!</p>
			<h3>
				<p>Wanna say something, or grab a cup of coffee, or discuss on any projects,</p>
				<p>Connect with me on</p>
				<a href="https://www.instagram.com/balaji_twoby12" target="_blank"><img src="images/instagram.webp" width="45px" height="45px" alt="instagram"></a>
				<a href="https://twitter.com/balaji_twoby12" target="_blank"><img src="images/twitter.png" width="45px" height="45px" alt="twitter"></a>
				<a href="https://www.linkedin.com/in/balaji-saravanan/" target="_blank"><img src="images/linkedin.png" width="50px" height="50px" alt="linkedin"></a>
				<a href="mailto:balajilitsv@gmail.com" target="_blank"><img src="images/mail.png" width="40px" height="50px" alt="mail"></a>
			</h3>
				<h1>
					-Balaji SV
				</h1>
		</div>
		<div class="avatar-combo">
			<div class="avatar avatar1"></div>
		</div>
	</div>
</template>

<style scoped>
	.footer {
		display: flex;
		justify-content: center;
		margin: 100px 0 0 150px;
	}
	.footer-text {
		text-align: center;
		font-weight: bold;
		font-size: 20px;
		font-family: 'Courier New', Courier, monospace;
	}
	.avatar {
    width: 150px;
    height: 150px;
    background-size: cover;
    background-position: top center;
    border-radius: 70%;
	}
	.avatar1 {
    background-image: url('./../../assets/goalAvatar.png');
	}
</style>