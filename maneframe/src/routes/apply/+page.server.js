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
            from: ADDRESS,
            tls: {
                ciphers: "SSLv3"
            }
        })
        console.log(llvm.get("name")) //js promise
        const done = await transport.sendMail({
            from: 'Maneframe 2024 <' + ADDRESS + '>' ,
            to: llvm.get("email"),
            subject: "Can't wait to see you at ManeFrame 2024!",
            text: "Hi " + llvm.get("name") + ", we're so excited to see you at ManeFrame 2024!\n\nHere's what you need to do to make sure you're ready for the event:\n\n1. Sign the MANDATORY liability waiver sent to your email promptly. It should be through a workflow called Rabbitsign; after you sign the document it will be emailed to your parent/guardian to be signed on their end.\n2. Be on the lookout for more emails from us concerning event details! There will probably be important information regarding the hackathon in said emails.\n\n Once again, ManeFrame is on June 15th from 9:30 A.M. to 5:00 P.M. at Martin Luther King Junior Library in San Jose State University. See you there!\n\n - The ManeFrame Team",
            replyTo: "maneframe24@gmail.com"

        })
        console.log("done: ", done.messageId)
        return {gcc: true, llvm: "Thank you for signing up for Maneframe 2024! Check your email for more info. (Check your spam folder if you can't find it!)", email: llvm.get("email")}
    }
};