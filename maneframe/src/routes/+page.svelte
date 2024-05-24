<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import {browser} from '$app/environment';


	import Typewriter from 'svelte-typewriter';

</script>

<html lang="en">


<body class="overflow-x-hidden w-screen h-screen bg-gradient-to-b from-black to-indigo-900 resize-none">
		<div class="w-screen mt-16 mb-20">
			<img src="/img.png" alt="logo" class="m-auto object-scale-down" width="300"/>
		</div>
		<div class="w-screen h-2/5 text-center items-center content-center justify-center pb-32 mb-20">
			<h1 class="text-5xl sm:text-9xl font-bold animate-bounce-small sm:text-center text-white pt-12 mb-10 sm:m-20 sm:mt-32">ManeFrame</h1>
			<Typewriter mode="loop" wordInterval="3000" class="">
				<p class="text-2xl sm:text-5xl font-italic, text-center, animate-pulse text-white m-10" id="llvm">A Hackathon for Middle and High School Students</p>
				<p class="text-2xl sm:text-5xl font-italic, text-center, animate-pulse text-white m-10">June 15, 2024 @ MLK Library, San Jose State University</p>
			</Typewriter>
		</div>
		<!-- <div class="divider text-white divider-accent sm:text-4xl">
		</div> -->
		<div class="w-screen h-1/2 flex text-center content-center justify-center">

			<div class="text-center w-3/4 sm:w-1/2 sm:m-12">
				<h1 class="text-white text-2xl lg:text-3xl xl:text-5xl xl:mt-16 lg:ml-16 lg:mr-16 lg:mt-2 mt-8 font-bold mb-8 hover:animate-pulse">Hey!</h1>
				<p class="text-white text-xl lg:text-2xl 2xl:text3xl text-center justify-center content-center mb-4">Do you want to make something cool? Spend some time with friends? Or maybe learn something new? If so, you should come to the ManeFrame hackathon! Whether you're a seasoned programmer or just starting out, we have a place for you!</p>
			</div>
		</div>
		<div class="divider text-white divider-accent sm:text-4xl">
		</div>
		<div class="w-screen h-1/2 flex text-center content-center justify-center">

			<div class="text-center w-3/4 sm:w-1/2 sm:m-12">
				<h1 class="text-white text-2xl lg:text-3xl xl:text-5xl xl:mt-16 lg:ml-16 lg:mr-16 lg:mt-2 mt-8 font-bold mb-8 hover:animate-pulse">Guest Speakers</h1>
				<div class="grid grid-cols-2 flex">
					<div class="justify-center content-center">
						<h1 class="text-2xl mb-10 underline decoration-dashed">Viraj Kadakia</h1>
						<img src="viraj.jpeg" alt="Viraj Kadakia" width="200" class="m-auto"/>
					</div>
					<div class="justify-center content-center">
						<h1 class="text-2xl mb-10 underline decoration-dashed">Sagar Joshi</h1>
						<img src="sagar.jpeg" alt="Sagar Joshi" width="200" class="m-auto"/>
					</div>
				</div>
			</div>
		</div>
		<div class="divider text-white divider-accent sm:text-4xl sm:mt-8">
		</div>
		<div class="w-screen h-1/2 flex text-center content-center justify-center content-center">
			<div class="text-center w-3/4 sm:w-1/2 sm:m-12">
				<h1 class="text-white text-2xl lg:text-3xl xl:text-5xl xl:mt-16 lg:ml-16 lg:mr-16 lg:mt-2 mt-8 font-bold mb-8 hover:animate-pulse">Join Us!</h1>
				<p class="text-white text-md sm:text-xl text-center justify-center content-center mb-4">ManeFrame will be at the Dr. Martin Luther King Jr. Library in San Jose on June 15, 2024.</p>
				<a href="/apply" id="llvmrefernce"><button class="button bg-white text-black text-xl md:text-2xl p-4 md:p-2 2xl:p-10 md:m-2 rounded-xl">APPLY</button></a>

			</div>
		</div>
		<!---->
		<div class="divider text-white divider-accent sm:text-4xl sm:mt-8">
		</div>
		<div class="w-screen flex text-center content-center justify-center">
			<div class="text-center w-3/4 sm:w-1/2 sm:m-8">
				<h1 class="text-white text-2xl lg:text-3xl xl:text-5xl xl:mt-16 lg:ml-16 lg:mr-16 lg:mt-2 mt-8 font-bold hover:animate-pulse">Frequently Asked Questions</h1>
			</div>
		</div>
		<div class="w-screen h-1/2 sm:flex text-center content-center justify-center">
			<div class="text-center sm:w-1/4 m-10">
				<h1 class="text-white text-xl lg:text-2xl xl:text-5xl xl:mt-16 lg:ml-16 lg:mr-16 lg:mt-2  mt-8 font-bold mb-8 hover:animate-pulse">What is a Hackathon?</h1>
				<p class="text-white text-md lg:text-xl text-center justify-center content-center mb-4">A Hackathon is an event where you code a project for a certain amount of time and then get it judged. It is meant to be a fun event where you can create anything you want with freedom, and where you can explore the amazing world of computer science.</p>
			</div>
			<div class="text-center sm:w-1/4 m-10">
				<h1 class="text-white text-xl lg:text-2xl xl:text-5xl xl:mt-16 lg:ml-16 lg:mr-16 lg:mt-2  mt-8 font-bold mb-8 hover:animate-pulse">What do I make?</h1>
				<p class="text-white text-md lg:text-xl text-center justify-center content-center mb-4">You can make whatever you want! From a simple calculator app to an online chat portal, feel free to make or submit anything. We encourage exploring and trying out new things!</p>
			</div>
			<div class="text-center sm:w-1/4 m-10">
				<h1 class="text-white text-xl lg:text-2xl xl:text-5xl xl:mt-16 lg:ml-16 lg:mr-16 lg:mt-2 mt-8 font-bold mb-8 hover:animate-pulse">Does it cost money?</h1>
				<p class="text-white text-md lg:text-xl text-center justify-center content-center mb-4">Nope! Maneframe is absolutely free! We encourage anyone in middle or high school to attend.</p>
			</div>
		</div>
		<div class="divider text-white divider-accent sm:text-4xl">
		</div>
		<div class="w-screen h-1/2 flex text-center content-center justify-center content-center">

			<div class="text-center">
				<h1 class="text-white text-2xl lg:text-3xl xl:text-5xl xl:mt-16 lg:ml-16 lg:mr-16 mt-2 font-bold mb-8 hover:animate-pulse">Schedule</h1>
				<div class="text-white text-sm lg:text-md text-center justify-center content-center mb-4">

					<table class="table-auto border-2 border-accent border-separate">
						<tr>
							<th class="border border-accent">Time</th>
							<th class="border border-accent">Event</th>
						</tr>
						<tr>
							<td>9:30 - 10:00 A.M.</td>
							<td>Doors Open!</td>
						</tr>
						<tr>
							<td>10:00 - 10:15 A.M.</td>
							<td>Hacking Begins!!</td>
						</tr>
						<tr>
							<td>9:30 A.M.</td>
							<td>Breakfast</td>
						</tr>
						<tr>
							<td>10:15 - 10:30 A.M.</td>
							<td>Team Mixer</td>
						</tr>
						<tr>
							<td>10:30 - 11:30 A.M.</td>
							<td>Workshops</td>
						</tr>
						<tr>
							<td>12:00 - 12:30 P.M.</td>
							<td>Lunch</td>
						</tr>
						<tr>
							<td>1:30 - 2:30 P.M.</td>
							<td>Panelists</td>
						</tr>
						<tr>
							<td>3:30 P.M.</td>
							<td>Project Deadline</td>
						</tr>
						<tr>
							<td>3:30 - 4:30 P.M.</td>
							<td>Demos</td>
						</tr>
						<tr>
							<td>4:30 - 4:45 P.M.</td>
							<td>Judging/Voting</td>
						</tr>
						<tr>
							<td>4:45 - 5:00 P.M.</td>
							<td>Winner and Award Ceremony</td>
						</tr>
					</table>

				</div>


			</div>
		</div>


`
<div class="footer border-t-2 border-white h-10 text-center bg-black justify-center"><p class="mt-2 text-white">© Maneframe 2024</p></div>
</body>
</html>