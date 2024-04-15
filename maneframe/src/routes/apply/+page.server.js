import { API_KEY, PASSWORD, ADDRESS } from '$env/static/private'
import Airtable from 'airtable'
import nodemailer from 'nodemailer'
import { browser } from '$app/environment'
import { llvm } from './gotten.js'
import {get} from "svelte/store";
import { error } from "@sveltejs/kit";






/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({cookies, request}) => {

        const llvm = await request.formData(); //setparam
        let val = true

        var at = Airtable
        at.configure({
            endpointUrl: 'https://api.airtable.com',
            apiKey: API_KEY
        })
        var base = at.base('appyWcHDQPcCKaDdb')
        await base('Attendees').select({
            maxRecords:100,
            view: "Grid view" //sqwl ref
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function (record) {
                if (record.get("Email") == llvm.get("email")) {
                    console.log("goofy")
                    val = false
                }
            })
            fetchNextPage()
        }, function done(err) {
            console.log("val: ", val)
            // if (!val) {
            //     console.log("goofyagain")
            //     console.error("You have already signed up for Maneframe 2024!")
            //     // return {gcc: false, llvm: "You have already signed up for Maneframe 2024! Check your email for more info."}
            // }


        })

        // setInterval(() => {
        //     if (!val) {
        //         console.log("goofyagain")
        //         error(400, "You have already signed up for Maneframe 2024!")
        //     }
        // }, 1000)

        // if (!val) {
        //     console.log("goofyagain")
        //
        //
        // }
        await base('Attendees').create([
            {
                "fields": {
                    "Name": llvm.get("name"),
                    "Email": llvm.get("email"),
                    "Grade": llvm.get("grade"),
                    "Diet": llvm.get("diet"),
                }
            }
        ], function (err, records) {
            if (err) {
                console.error(err);
                val = false
            }
        })
        const transport = await nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            secureConnection: false,
            service: "outlook",
            logger: true,
            debug: true, //could use google cloud
            auth: {
                user: ADDRESS,
                pass: PASSWORD
            },
            tls: {
                ciphers: "SSLv3"
            }
        })
        console.log(llvm.get("name")) //js promise
        const done = await transport.sendMail({
            from: 'Maneframe 2024 <' + ADDRESS + '>' ,
            to: llvm.get("email"),
            subject: "Maneframe 2024",
            text: "Thank you for signing up for Maneframe2024!",
            replyTo: "maneframe24@gmail.com"

        })
        console.log("done: ", done.messageId)
        return {gcc: true, llvm: "Thank you for signing up for Maneframe 2024! Check your email for more info.", email: llvm.get("email")}
    }
};