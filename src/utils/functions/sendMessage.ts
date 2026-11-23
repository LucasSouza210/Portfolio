
import emailjs from "@emailjs/browser"

type MessageData = {
    name: string
    email: string
    message: string
}

export default async function sendMessage(data: MessageData) {
    try {
        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: data.name,
                email: data.email,
                message: data.message
            },
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            }
        )

        console.log('EmailJS success:', response)
    } catch (error) {
        console.error('EmailJS error:', error)
        throw error
    }
}
