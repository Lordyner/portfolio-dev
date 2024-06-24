import { sendMail } from "@/service/mailService";

const handler = async (req, res) => {

    try {
        // Call the sendMail method from mailService.js
        const result = await sendMail(
            req.body.message
        );

        // If the mail was not sent, return an error
        if (!result.success) {
            console.log("Error", result.error)
            res.status(500).send("Error");
        }
        // If the mail was sent, return a success message
        res.status(200).send("Success");

    } catch (error) {
        console.log("Error", error)
        res.status(500).send("Error");
    }

}
export default handler;