<script>
    import {browser} from "$app/environment"
    let ids = ["name", "email", "grade", "llvm"]
    export let data;
    console.log(data.llvm)
    if (browser) {
        setInterval(() => {
            let butto = document.getElementById("submit")
            let total = true
            for (let i = 0; i < ids.length; i++) {
                let id = ids[i]
                let element = document.getElementById(id)
                if (element.value === "") {

                    butto.disabled = true
                    butto.style.backgroundColor = "black"
                    total = false
                }
            }
            if (total) {
                butto.disabled = false
                butto.style.backgroundColor = "white"
            }
        }, 20)


    } //very bad for performance
    /** @type {import('./$types').ActionData} */
    export let form;
    if (form?.gcc) {
        if (browser) {
            window.location.href = "/"
            alert(form?.llvm)
            window.localStorage.setItem("email", form?.email)
        }

    }
</script>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apply</title>
</head>
<body class="overflow-x-hidden w-screen h-screen bg-gradient-to-b from-black to-indigo-900">
<div class="z-30 w-screen h-2/5 text-center content-center justify-center relative row-start-1">
    <h1 class="text-7xl font-bold text-center animate-pulse text-white m-20 z-0">Apply</h1>
    <div class="flex content-center justify-center items-center">
        <div class="card w-96 glass shadow-xl">
            <div class="card-body">
                <h2 class="font-bold text-2xl text-white">Sign Up!</h2>
                <form method="POST">
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="text-xs text-white">What's your full name?</span>
                        </div>
                        <input type="text" placeholder="Name" class="input input-bordered" name="name" id="name">
                    </label>
                    <br>
                    <br>
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="text-xs text-white">What's your email?</span>
                        </div>
                        <input type="text" placeholder="We promise no spam!" class="input input-bordered" name="email" id="email">
                    </label>
                    <br>
                    <br>
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="text-xs text-white">What grade are you in?</span>
                        </div>
                        <input type="text" placeholder="e.g. 10th, 11th" class="input input-bordered" name="grade" id="grade">
                    </label>
                    <br>
                    <br>
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="text-xs text-white">Any Dietary Restrictions?</span>
                        </div>
                        <input type="text" placeholder="e.g. vegan" class="input input-bordered" name="diet" id="llvm">
                    </label>
                <br>
                <br>
                <div class="card-actions justify-center">
                    <button class="btn btn-black" id="submit">SUBMIT!</button>
                </div>
                </form>
            </div>
        </div>
    </div>

</div>
</body>
</html>