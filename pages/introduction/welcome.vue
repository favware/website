<template>
	<section class="body-font">
		<div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
			<div class="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
				<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">About me</h1>

				<p class="mb-8 leading-relaxed">Greetings, My name is Jeroen Claassens (a.k.a. Favna) and I manage Favware</p>
				<p class="mb-8 leading-relaxed">
					Currently {{ age }} years old I am a developer hailing from The Netherlands. I have been a tech enthusiast for as long as I can
					remember. While attending high school my first choice of optional subjects was Informatics and this quickly showed to be my
					calling. After I graduated from high school I had no seconds thoughts about my next step - Software Engineering at a university.
					The university of choice ended up being The Hague University of Applied Sciences. After 5 years attending this university I
					obtained my Bachelor of IT in the summer of 2019. At the time of writing I am working for CGI Inc. in The Netherlands as a
					Frontend Software Engineer.
				</p>
				<p class="mb-8 leading-relaxed">
					In my free time I have delved into a whole slew of small projects and some of these are used very actively! Notable mentions are
					my Discord bot "Ribbon" built with NodeJS and a whole slew of NodeJS based libraries. Some of these libraries have their
					groundwork in JavaScript, however since learning TypeScript I have converted them to this language as these days I have a strong
					preference for TypeScript and its static type checking. I have also learned C# as I have been delving into the Unity3D Game Engine
					for the Game Design minor I have followed as part of my Software Engineering major.
				</p>
				<p class="mb-8 leading-relaxed">
					I still have a very broad future ahead of me and I expect that CGI will help me achieve many of my dreams. That said, however,
					playing games has always been my biggest hobby and now that I have had a taste of creating games I really feel like it would be a
					perfect match for me. However, I have also grown a passion for the frontend side of software engineering which is why I feel right
					at home where I found my first job after graduation.
				</p>

				<div class="flex flex-wrap justify-center">
					<button-link href="mailto:support@favware.tech" text="Send an e-mail" class="ml-2" />
					<button-link href="https://join.favware.tech" text="Join my Discord server" />
				</div>
				<div class="flex flex-wrap justify-center mt-2">
					<button-link href="https://github.com/kyranet" text="GitHub" />
					<button-link href="https://twitter.com/kyranet_" text="Twitter" class="ml-2" />
					<button-link href="https://twitter.com/kyranet_" text="Twitter" class="ml-2" />
					<button-link href="https://redirect.favware.tech/github" text="Find me on GitHub" class="ml-2" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
function calculateAge(birthday: Date) {
	const ageDifMs = Date.now() - birthday.getTime();
	const ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const age = calculateAge(new Date('1995-02-21'));
</script>
