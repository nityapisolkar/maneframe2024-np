<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import {browser} from '$app/environment';

	// if (browser) {
	// 	let text = document.getElementById("llvm");
	// 	let typewriter = new Typewriter(text, {
	// 		loop: true,
	// 		autoStart: true,
	// 	})
	//
	// 	typewriter.typeString("A Hackathon for Middle and High School Students").pauseFor(2500).deleteAll().typeString("Hosted at MLK Library at SJSU").pauseFor(2500).deleteAll().typeString("April 27, 2024!").pauseFor(2500).deleteAll().start() //could make more dynamic, returns obj
	//
	// }
	import Typewriter from 'svelte-typewriter';

</script>

<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>llvm ref</title>
</head>

<body class="overflow-x-hidden w-screen h-screen bg-gradient-to-b from-black to-indigo-900">

		<div class="z-30 w-screen h-2/5 text-center content-center justify-center relative row-start-1">
			<h1 class="text-7xl font-bold text-center animate-bounce text-white m-20 z-0">MANEFRAME</h1>
			<Typewriter mode="loop" wordInterval="3000" class="">
				<p class="text-3xl font-italic, text-center, animate-pulse text-white m-10" id="llvm">A Hackathon for Middle and High School Students</p>
				<p class=  "text-3xl font-italic, text-center, animate-pulse text-white m-10">April 27, 2024!</p>
				<p class="text-3xl font-italic, text-center, animate-pulse text-white m-10">Hosted at MLK Library at SJSU</p>
			</Typewriter>
		</div>
		<div class="divider text-white divider-accent">
			APPLY!
		</div>
		<div class="w-screen h-1/2 bg-black bg-opacity-20 flex text-center content-center justify-center content-center">

			<div class="text-center w-1/4 m-10">
				<h1 class="text-white text-5xl mt-16 ml-16 mr-16 mb-8 hover:animate-pulse">Show Your Interest!</h1>
				<p class="text-white text-xl text-center justify-center content-center mb-4">ManeFrame will be at MLK Library in San Jose on April 27, 2024.</p>
				<a href="/apply" id="llvmrefernce"><button class="button bg-white text-black text-2xl p-10 m-2 rounded-xl">APPLY</button></a>

			</div>
		</div>
		<!---->
		<div class="divider text-white divider-accent">
		</div>
		<div class="w-screen h-1/2 bg-black bg-opacity-20 flex text-center content-center justify-center content-center">

			<img src="/img.png" alt="logo"/>
		</div>
		<div class="divider text-white divider-accent">

		</div>
		<div class="w-screen h-1/2 bg-black bg-opacity-20 flex text-center content-center justify-center content-center">

			<div class="text-center w-1/4 m-10">
				<h1 class="text-white text-5xl m-16 hover:animate-pulse">Hey!</h1>
				<p class="text-white text-xl text-center justify-center content-center">Do you want to make something cool? Spend some time with friends? Or maybe learn something new? If so, you should come to the ManeFrame hackathon! Whether you're a seasoned programmer or just starting out, we have a place for you!</p>
			</div>
		</div>
		<div class="divider text-white divider-accent">
			FAQ
		</div>
		<div class="w-screen h-1/2 bg-black bg-opacity-20 flex text-center content-center justify-center content-center">

			<div class="text-center w-1/4 m-10">
				<h1 class="text-white text-5xl m-16 hover:animate-pulse">What is a Hackathon?</h1>
				<p class="text-white text-xl text-center justify-center content-center">A Hackathon is an event where you code a project for a certain amount of time and then get it judged. It is meant to be a fun event where you can create anything you want with freedom, and where you can explore the amazing world of computer science.</p>
			</div>
			<div class="text-center w-1/4 m-10">
				<h1 class="text-white text-5xl m-16 hover:animate-pulse">What do I make?</h1>
				<p class="text-white text-xl text-center justify-center content-center">You can make whatever you want! From a simple calculator app to an online chat portal, feel free to make or submit anything. We encourage exploring and trying out new things!</p>
			</div>
			<div class="text-center w-1/4 m-10">
				<h1 class="text-white text-5xl m-16 hover:animate-pulse">Does it cost money?</h1>
				<p class="text-white text-xl text-center justify-center content-center">Nope! Maneframe is absolutely free! We encourage anyone in middle or high school to attend.</p>
			</div>
		</div>
		<div class="divider text-white divider-accent">
			SCHEDULE!
		</div>
		<div class="w-screen h-1/2 bg-black bg-opacity-20 flex text-center content-center justify-center content-center">

			<div class="text-center w-1/4 m-10">
				<h1 class="text-white text-5xl mt-16 ml-16 mr-16 mb-8 hover:animate-pulse">Schedule</h1>
				<div class="text-white text-xl text-center justify-center content-center mb-4">
					<p>9:00 A.M. - Orientation and Hacking Begins!</p>
					<p>12:00 P.M. - Lunch</p>
					<p>12:30 P.M. - Guest Speaker</p>
					<p>4:00 P.M. - Submission Period Ends</p>
					<p>5:00 P.M. - Winner and Award Ceremony</p>
				</div>


			</div>
		</div>


`
<div class="footer border-t-2 border-white h-10 bg-black text-center justify-center"><p class="mt-2 text-white">C Maneframe 2024</p></div>
</body>
</html>